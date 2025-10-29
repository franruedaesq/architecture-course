import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import { conceptRouteSpecs, modules } from "@shared/courseContent";

export type PreloadableComponent<T = any> = LazyExoticComponent<ComponentType<T>> & {
  preload?: () => Promise<{ default: ComponentType<T> }>;
};

export interface RouteConfig {
  path: string;
  component: PreloadableComponent;
}

const routePreloaders = new Map<string, () => Promise<unknown>>();

const lazyWithPreload = <T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>
): PreloadableComponent<T> => {
  const Component = lazy(importer) as PreloadableComponent<T>;
  Component.preload = importer;
  return Component;
};

const homeImporter = () => import("./pages/Home");
export const HomeRoute = lazyWithPreload(homeImporter);
routePreloaders.set("/", homeImporter);

const notFoundImporter = () => import("./pages/NotFound");
export const NotFoundRoute = lazyWithPreload(notFoundImporter);
routePreloaders.set("/404", notFoundImporter);
routePreloaders.set("*", notFoundImporter);

const moduleImports = import.meta.glob<{ default: ComponentType<any> }>(
  "./pages/Module*.tsx"
);

export const moduleRoutes: RouteConfig[] = modules.map(module => {
  const filePath = `./pages/Module${module.id}.tsx`;
  const importer = moduleImports[filePath];
  if (!importer) {
    throw new Error(`Missing module page for ${filePath}`);
  }
  const lazyComponent = lazyWithPreload(importer);
  routePreloaders.set(module.path, importer);
  return { path: module.path, component: lazyComponent };
});

const conceptImports = import.meta.glob<{ default: ComponentType<any> }>(
  "./pages/concepts/*.tsx"
);

const slugFromFilePath = (filePath: string) => {
  const fileName = filePath.split("/").pop();
  if (!fileName) return null;

  const withoutExtension = fileName.replace(/\.tsx$/i, "");
  const segments = withoutExtension.match(/[A-Z]+(?![a-z])|[A-Z][a-z]+|[0-9]+/g);

  if (!segments || segments.length === 0) {
    return null;
  }

  return segments.join("-").toLowerCase();
};

const conceptImporterBySlug = new Map<
  string,
  () => Promise<{ default: ComponentType<any> }>
>();

for (const [filePath, importer] of Object.entries(conceptImports)) {
  const slug = slugFromFilePath(filePath);
  if (slug) {
    conceptImporterBySlug.set(slug, importer);
  }
}

export const conceptRoutes: RouteConfig[] = conceptRouteSpecs.map(({ slug, path }) => {
  const importer = conceptImporterBySlug.get(slug);
  if (!importer) {
    throw new Error(`Missing concept page for slug "${slug}"`);
  }
  const lazyComponent = lazyWithPreload(importer);
  routePreloaders.set(path, importer);
  return { path, component: lazyComponent };
});

export function prefetchRoute(path: string) {
  const loader = routePreloaders.get(path) ?? routePreloaders.get("*");
  loader?.();
}
