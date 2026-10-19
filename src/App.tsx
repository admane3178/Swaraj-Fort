import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import FortsListing from "./pages/FortsListing";
import FortDetail from "./pages/FortDetail";
import ShivajiMaharaj from "./pages/ShivajiMaharaj";
import SambhajiMaharaj from "./pages/SambhajiMaharaj";
import MapPage from "./pages/MapPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forts" element={<FortsListing />} />
          <Route path="/fort/:slug" element={<FortDetail />} />
          <Route path="/shivaji-maharaj" element={<ShivajiMaharaj />} />
          <Route path="/sambhaji-maharaj" element={<SambhajiMaharaj />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
