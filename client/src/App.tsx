import { Suspense, lazy, type ComponentType } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Module1 = lazy(() => import("./pages/Module1"));
const Module2 = lazy(() => import("./pages/Module2"));
const Module3 = lazy(() => import("./pages/Module3"));
const Module4 = lazy(() => import("./pages/Module4"));
const Module5 = lazy(() => import("./pages/Module5"));

const MicroservicesConcept = lazy(() => import("./pages/concepts/Microservices"));
const ServiceBoundariesConcept = lazy(() => import("./pages/concepts/ServiceBoundaries"));
const DomainDrivenDesignConcept = lazy(() => import("./pages/concepts/DomainDrivenDesign"));
const CAPTheoremConcept = lazy(() => import("./pages/concepts/CAPTheorem"));
const ServiceCommunicationConcept = lazy(() => import("./pages/concepts/ServiceCommunication"));
const AdvancedCommunicationConcept = lazy(() => import("./pages/concepts/AdvancedCommunication"));
const BackendForFrontendConcept = lazy(() => import("./pages/concepts/BackendForFrontend"));
const ServiceDiscoveryConcept = lazy(() => import("./pages/concepts/ServiceDiscovery"));
const CircuitBreakerConcept = lazy(() => import("./pages/concepts/CircuitBreaker"));
const MicroFrontendsConcept = lazy(() => import("./pages/concepts/MicroFrontends"));
const ServerSideRenderingConcept = lazy(() => import("./pages/concepts/ServerSideRendering"));
const ReactFiberConcept = lazy(() => import("./pages/concepts/ReactFiber"));
const HydrationConcept = lazy(() => import("./pages/concepts/Hydration"));
const IslandsArchitectureConcept = lazy(() => import("./pages/concepts/IslandsArchitecture"));
const VirtualDOMConcept = lazy(() => import("./pages/concepts/VirtualDOM"));
const StreamingRenderingConcept = lazy(() => import("./pages/concepts/StreamingRendering"));
const ComponentCompositionConcept = lazy(() => import("./pages/concepts/ComponentComposition"));
const PerformanceOptimizationConcept = lazy(() => import("./pages/concepts/PerformanceOptimization"));
const NotFound = lazy(() => import("@/pages/NotFound"));

interface RouteConfig {
  path: string;
  component: ComponentType<any>;
}

const moduleRoutes: RouteConfig[] = [
  { path: "/module/1", component: Module1 },
  { path: "/module/2", component: Module2 },
  { path: "/module/3", component: Module3 },
  { path: "/module/4", component: Module4 },
  { path: "/module/5", component: Module5 },
];

const conceptRoutes: RouteConfig[] = [
  { path: "/concepts/microservices", component: MicroservicesConcept },
  { path: "/concepts/service-boundaries", component: ServiceBoundariesConcept },
  { path: "/concepts/domain-driven-design", component: DomainDrivenDesignConcept },
  { path: "/concepts/cap-theorem", component: CAPTheoremConcept },
  { path: "/concepts/service-communication", component: ServiceCommunicationConcept },
  { path: "/concepts/advanced-communication", component: AdvancedCommunicationConcept },
  { path: "/concepts/backend-for-frontend", component: BackendForFrontendConcept },
  { path: "/concepts/service-discovery", component: ServiceDiscoveryConcept },
  { path: "/concepts/circuit-breaker", component: CircuitBreakerConcept },
  { path: "/concepts/micro-frontends", component: MicroFrontendsConcept },
  { path: "/concepts/server-side-rendering", component: ServerSideRenderingConcept },
  { path: "/concepts/react-fiber", component: ReactFiberConcept },
  { path: "/concepts/hydration", component: HydrationConcept },
  { path: "/concepts/islands-architecture", component: IslandsArchitectureConcept },
  { path: "/concepts/virtual-dom", component: VirtualDOMConcept },
  { path: "/concepts/streaming-rendering", component: StreamingRenderingConcept },
  { path: "/concepts/component-composition", component: ComponentCompositionConcept },
  { path: "/concepts/performance-optimization", component: PerformanceOptimizationConcept },
];

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-300">
          Loading content...
        </div>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        {moduleRoutes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        {conceptRoutes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
