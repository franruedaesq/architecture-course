import { createServer } from "http";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { brotliCompress, constants, gzip } from "node:zlib";
import { promisify } from "node:util";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const gzipAsync = promisify(gzip);
  const brotliAsync = promisify(brotliCompress);

  app.set("etag", "strong");

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  const ONE_HOUR_SECONDS = 60 * 60;
  const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

  const applyCacheHeaders = (res: express.Response, filePath: string) => {
    const ext = path.extname(filePath);
    if (ext === ".html") {
      res.setHeader("Cache-Control", "no-cache");
      return;
    }

    if (/\.(?:js|css|mjs|json|woff2?|png|jpg|jpeg|gif|svg|webp)$/i.test(ext)) {
      res.setHeader("Cache-Control", `public, max-age=${ONE_YEAR_SECONDS}, immutable`);
      return;
    }

    res.setHeader("Cache-Control", `public, max-age=${ONE_HOUR_SECONDS}`);
  };

  const appendVary = (value: number | string | string[] | undefined, field: string) => {
    if (!value) {
      return field;
    }
    const normalized = Array.isArray(value) ? value.join(", ") : String(value);
    return normalized.includes(field) ? normalized : `${normalized}, ${field}`;
  };

  const compressiblePattern = /\.(?:css|js|mjs|html|svg|json|txt)$/i;

  app.get(compressiblePattern, async (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }

    const acceptEncoding = req.headers["accept-encoding"] ?? "";
    const encoding = typeof acceptEncoding === "string" && acceptEncoding.includes("br")
      ? "br"
      : typeof acceptEncoding === "string" && acceptEncoding.includes("gzip")
      ? "gzip"
      : null;

    if (!encoding) {
      return next();
    }

    try {
      const relativePath = decodeURIComponent(req.path.replace(/^\/+/, ""));
      const candidatePath = path.join(staticPath, relativePath);
      if (!candidatePath.startsWith(staticPath)) {
        return next();
      }

      const fileBuffer = await fs.readFile(candidatePath);

      applyCacheHeaders(res, candidatePath);
      res.setHeader("Vary", appendVary(res.getHeader("Vary"), "Accept-Encoding"));
      res.type(candidatePath);

      if (req.method === "HEAD") {
        return res.status(200).end();
      }

      if (encoding === "br") {
        const compressed = await brotliAsync(fileBuffer, {
          params: {
            [constants.BROTLI_PARAM_QUALITY]: 4,
          },
        });
        res.setHeader("Content-Encoding", "br");
        res.setHeader("Content-Length", compressed.length);
        return res.send(compressed);
      }

      const compressed = await gzipAsync(fileBuffer);
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Content-Length", compressed.length);
      return res.send(compressed);
    } catch (error) {
      return next();
    }
  });

  app.use(
    express.static(staticPath, {
      etag: true,
      lastModified: true,
      setHeaders(res, filePath) {
        applyCacheHeaders(res, filePath);
      },
    })
  );

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
