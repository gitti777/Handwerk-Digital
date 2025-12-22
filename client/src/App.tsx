import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Impressum from "@/pages/Impressum";
import HeatingDemo from "@/pages/HeatingDemo";
import PainterDemo from "@/pages/PainterDemo";
import RooferDemo from "@/pages/RooferDemo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/portfolio/heating-demo" component={HeatingDemo} />
      <Route path="/portfolio/painter-demo" component={PainterDemo} />
      <Route path="/portfolio/roofer-demo" component={RooferDemo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
