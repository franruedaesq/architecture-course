import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Module5 from "./pages/Module5";
// Concept pages
import MicroservicesConcept from "./pages/concepts/Microservices";
import ServiceBoundariesConcept from "./pages/concepts/ServiceBoundaries";
import DomainDrivenDesignConcept from "./pages/concepts/DomainDrivenDesign";
import CAPTheoremConcept from "./pages/concepts/CAPTheorem";
import ServiceCommunicationConcept from "./pages/concepts/ServiceCommunication";
import AdvancedCommunicationConcept from "./pages/concepts/AdvancedCommunication";
import BackendForFrontendConcept from "./pages/concepts/BackendForFrontend";
import ServiceDiscoveryConcept from "./pages/concepts/ServiceDiscovery";
import CircuitBreakerConcept from "./pages/concepts/CircuitBreaker";
// Module 2 Concept pages
import MicroFrontendsConcept from "./pages/concepts/MicroFrontends";
import ServerSideRenderingConcept from "./pages/concepts/ServerSideRendering";
import ReactFiberConcept from "./pages/concepts/ReactFiber";
import HydrationConcept from "./pages/concepts/Hydration";
import IslandsArchitectureConcept from "./pages/concepts/IslandsArchitecture";
import VirtualDOMConcept from "./pages/concepts/VirtualDOM";
import StreamingRenderingConcept from "./pages/concepts/StreamingRendering";
import ComponentCompositionConcept from "./pages/concepts/ComponentComposition";
import PerformanceOptimizationConcept from "./pages/concepts/PerformanceOptimization";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/module/1"} component={Module1} />
      <Route path={"/module/2"} component={Module2} />
      <Route path={"/module/3"} component={Module3} />
      <Route path={"/module/4"} component={Module4} />
      <Route path={"/module/5"} component={Module5} />
      {/* Concept pages */}
      <Route path={"/concepts/microservices"} component={MicroservicesConcept} />
      <Route path={"/concepts/service-boundaries"} component={ServiceBoundariesConcept} />
      <Route path={"/concepts/domain-driven-design"} component={DomainDrivenDesignConcept} />
      <Route path={"/concepts/cap-theorem"} component={CAPTheoremConcept} />
      <Route path={"/concepts/service-communication"} component={ServiceCommunicationConcept} />
      <Route path={"/concepts/advanced-communication"} component={AdvancedCommunicationConcept} />
      <Route path={"/concepts/backend-for-frontend"} component={BackendForFrontendConcept} />
      <Route path={"/concepts/service-discovery"} component={ServiceDiscoveryConcept} />
      <Route path={"/concepts/circuit-breaker"} component={CircuitBreakerConcept} />
      {/* Module 2 Concept pages */}
      <Route path={"/concepts/micro-frontends"} component={MicroFrontendsConcept} />
      <Route path={"/concepts/server-side-rendering"} component={ServerSideRenderingConcept} />
      <Route path={"/concepts/react-fiber"} component={ReactFiberConcept} />
      <Route path={"/concepts/hydration"} component={HydrationConcept} />
      <Route path={"/concepts/islands-architecture"} component={IslandsArchitectureConcept} />
      <Route path={"/concepts/virtual-dom"} component={VirtualDOMConcept} />
      <Route path={"/concepts/streaming-rendering"} component={StreamingRenderingConcept} />
      <Route path={"/concepts/component-composition"} component={ComponentCompositionConcept} />
      <Route path={"/concepts/performance-optimization"} component={PerformanceOptimizationConcept} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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

