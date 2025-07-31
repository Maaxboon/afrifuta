import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Join from "./pages/Join";
import PlayerDashboard from "./pages/PlayerDashboard";
import ScoutDashboard from "./pages/ScoutDashboard";
import FindPlayers from "./pages/FindPlayers";
import Opportunities from "./pages/Opportunities";
import ForScouts from "./pages/ForScouts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/player-dashboard" element={<PlayerDashboard />} />
          <Route path="/scout-dashboard" element={<ScoutDashboard />} />
          <Route path="/find-players" element={<FindPlayers />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/for-scouts" element={<ForScouts />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
