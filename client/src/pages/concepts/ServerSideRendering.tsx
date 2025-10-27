import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ServerSideRenderingConcept() {
  return (
    <ConceptPage
      title="Server-Side Rendering (SSR)"
      subtitle="Rendering React components on the server and sending HTML to the browser"
      previousConcept={{ path: "/concepts/micro-frontends", label: "Micro-Frontends" }}
      nextConcept={{ path: "/concepts/react-fiber", label: "React Fiber" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Server-Side Rendering?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Server-Side Rendering (SSR) is the process of rendering React components on the server and sending the resulting HTML to the browser. Instead of the browser downloading JavaScript and rendering the UI, the server does the rendering work and sends a fully-rendered HTML page.
        </p>

        <BigWordAlert
          term="Server-Side Rendering (SSR)"
          definition="A technique where React components are executed on the server, converted to HTML, and sent to the browser. The browser receives a complete, ready-to-display HTML page instead of an empty HTML file and JavaScript."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is a return to how the web worked before Single Page Applications (SPAs). But with a twist: the server renders React, not just static HTML.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">CSR vs SSR: The Fundamental Difference</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Client-Side Rendering (CSR)</h3>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-slate-400">// CSR Flow</div>
              <div className="mt-2 text-green-400">1. Browser downloads HTML</div>
              <div className="text-slate-400">{`<html>`}</div>
              <div className="ml-4">{`<body>`}</div>
              <div className="ml-8">{`<div id="root"></div>`}</div>
              <div className="ml-8">{`<script src="app.js"></script>`}</div>
              <div className="ml-4">{`</body>`}</div>
              <div>{`</html>`}</div>
              <div className="mt-2 text-green-400">2. Browser downloads JavaScript (app.js)</div>
              <div className="mt-2 text-green-400">3. JavaScript runs and renders React</div>
              <div className="mt-2 text-green-400">4. UI appears on screen</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>Smooth client-side navigation, no server load, easy to build</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>Slow initial load (blank page), bad for SEO, poor performance on slow devices</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Server-Side Rendering (SSR)</h3>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-slate-400">// SSR Flow</div>
              <div className="mt-2 text-green-400">1. Browser requests page</div>
              <div className="mt-2 text-green-400">2. Server renders React to HTML</div>
              <div className="text-slate-400">const html = ReactDOMServer.renderToString({`<App />`});</div>
              <div className="mt-2 text-green-400">3. Server sends complete HTML</div>
              <div className="text-slate-400">{`<html>`}</div>
              <div className="ml-4">{`<body>`}</div>
              <div className="ml-8">{`<div id="root">`}</div>
              <div className="ml-12">{`<!-- Full React content here -->`}</div>
              <div className="ml-8">{`</div>`}</div>
              <div className="ml-8">{`<script src="app.js"></script>`}</div>
              <div className="ml-4">{`</body>`}</div>
              <div>{`</html>`}</div>
              <div className="mt-2 text-green-400">4. Browser displays HTML immediately</div>
              <div className="mt-2 text-green-400">5. JavaScript loads and hydrates</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>Fast initial load, great for SEO, works on slow devices, better perceived performance</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>Server load, complex setup, hydration mismatch issues, slower navigation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-300 mb-4">Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-orange-300">Metric</th>
                  <th className="text-left p-3 text-blue-300">CSR</th>
                  <th className="text-left p-3 text-purple-300">SSR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-semibold">Time to First Byte (TTFB)</td>
                  <td className="p-3">Fast (empty HTML)</td>
                  <td className="p-3">Slower (rendering on server)</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-semibold">First Contentful Paint (FCP)</td>
                  <td className="p-3">Slow (wait for JS)</td>
                  <td className="p-3">Fast (HTML has content)</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-semibold">Time to Interactive (TTI)</td>
                  <td className="p-3">Slow (render + hydrate)</td>
                  <td className="p-3">Slower (render + hydrate)</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 font-semibold">SEO</td>
                  <td className="p-3">Poor (crawlers see empty HTML)</td>
                  <td className="p-3">Good (crawlers see full HTML)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Server Load</td>
                  <td className="p-3">Low</td>
                  <td className="p-3">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">SSR Implementation with React</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Basic SSR Setup</h3>
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">1. Server Code (Node.js + Express)</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// server.js</div>
                <div className="mt-2">import express from 'express';</div>
                <div>import ReactDOMServer from 'react-dom/server';</div>
                <div>import App from './App';</div>
                <div className="mt-2">const app = express();</div>
                <div className="mt-2">app.get('/', (req, res) {`=>`} {`{`}</div>
                <div className="ml-4">// Render React to HTML string</div>
                <div className="ml-4">const html = ReactDOMServer.renderToString({`<App />`});</div>
                <div className="mt-2 text-slate-400">// Wrap in HTML</div>
                <div className="ml-4">const page = `</div>
                <div className="ml-8">{`<!DOCTYPE html>`}</div>
                <div className="ml-8">{`<html>`}</div>
                <div className="ml-12">{`<head>`}</div>
                <div className="ml-16">{`<title>My App</title>`}</div>
                <div className="ml-12">{`</head>`}</div>
                <div className="ml-12">{`<body>`}</div>
                <div className="ml-16">{`<div id="root">\${html}</div>`}</div>
                <div className="ml-16">{`<script src="/app.js"></script>`}</div>
                <div className="ml-12">{`</body>`}</div>
                <div className="ml-8">{`</html>`}</div>
                <div className="ml-4">`;</div>
                <div className="mt-2 text-slate-400">// Send to browser</div>
                <div className="ml-4">res.send(page);</div>
                <div>{`}`});</div>
                <div className="mt-2">app.listen(3000);</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">2. Client Code (Hydration)</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// client.js</div>
                <div className="mt-2">import React from 'react';</div>
                <div>import ReactDOM from 'react-dom';</div>
                <div>import App from './App';</div>
                <div className="mt-2 text-slate-400">// Hydrate (attach event listeners to existing HTML)</div>
                <div>ReactDOM.hydrateRoot(</div>
                <div className="ml-4">document.getElementById('root'),</div>
                <div className="ml-4">{`<App />`}</div>
                <div>);</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">SSR Challenges & Solutions</h2>
        
        <div className="space-y-4">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">1. Hydration Mismatch</h4>
            <p className="text-slate-300 text-sm mb-3">
              If the server renders different HTML than the client, React will show a warning and may not work correctly.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-red-400">// ❌ Mismatch Example</div>
              <div className="mt-2">// Server renders</div>
              <div>{`<div>{new Date().toISOString()}</div>`}</div>
              <div className="mt-2">// Client renders (different time)</div>
              <div>{`<div>{new Date().toISOString()}</div>`}</div>
              <div className="mt-2 text-red-400">// Error: Hydration mismatch!</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-green-300 mb-1">Solution</h4>
              <p className="text-slate-300">Use suppressHydrationWarning or ensure server and client render identically</p>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">2. Server Load</h4>
            <p className="text-slate-300 text-sm mb-3">
              Rendering React on the server is CPU-intensive. With many concurrent requests, the server can become a bottleneck.
            </p>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-green-300 mb-1">Solutions</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Caching: Cache rendered pages for static content</li>
                <li>Streaming: Send HTML progressively instead of waiting for full render</li>
                <li>Scaling: Use multiple servers and load balancing</li>
                <li>CDN: Cache rendered pages at edge locations</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">3. Browser APIs Not Available</h4>
            <p className="text-slate-300 text-sm mb-3">
              Code running on the server can't access window, document, localStorage, etc.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-red-400">// ❌ Error on server</div>
              <div className="mt-2">const theme = localStorage.getItem('theme');</div>
              <div className="text-red-400">// ReferenceError: localStorage is not defined</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-green-300 mb-1">Solution</h4>
              <p className="text-slate-300">Check if code is running on server: if (typeof window !== 'undefined')</p>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">4. Data Fetching</h4>
            <p className="text-slate-300 text-sm mb-3">
              Need to fetch data on the server before rendering, not on the client.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Solution: Fetch on server</div>
              <div className="mt-2">app.get('/products', async (req, res) {`=>`} {`{`}</div>
              <div className="ml-4">const products = await fetch('/api/products');</div>
              <div className="ml-4">const html = ReactDOMServer.renderToString(</div>
              <div className="ml-8">{`<App products={products} />`}</div>
              <div className="ml-4">);</div>
              <div className="ml-4">res.send(html);</div>
              <div>{`}`});</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">SSR Frameworks</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">Next.js</h4>
            <p>The most popular React SSR framework. Built-in SSR, static generation, API routes, and more.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">Remix</h4>
            <p>Modern SSR framework focused on web fundamentals. Great DX and performance.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">Astro</h4>
            <p>Multi-framework SSR with Islands Architecture. Minimal JavaScript by default.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">Nuxt</h4>
            <p>Vue's SSR framework. Similar to Next.js but for Vue.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>SSR renders React on the server and sends HTML to the browser.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Improves initial load time, SEO, and perceived performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Adds complexity: server load, hydration mismatches, data fetching.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Hydration: attaching event listeners to server-rendered HTML.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Use frameworks like Next.js, Remix, or Astro for easier SSR setup.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

