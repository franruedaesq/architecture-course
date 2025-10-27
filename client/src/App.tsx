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

