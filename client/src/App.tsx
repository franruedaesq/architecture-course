import { Suspense, type ComponentType } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HomeRoute, NotFoundRoute, conceptRoutes, moduleRoutes } from "./routes";

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
        <Route path="/" component={HomeRoute as ComponentType<any>} />
        {moduleRoutes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        {conceptRoutes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        <Route path="/404" component={NotFoundRoute as ComponentType<any>} />
        <Route component={NotFoundRoute as ComponentType<any>} />
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
