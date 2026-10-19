import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import FortsListing from "./pages/FortsListing";
import FortDetail from "./pages/FortDetail";
import ShivajiMaharaj from "./pages/ShivajiMaharaj";
import SambhajiMaharaj from "./pages/SambhajiMaharaj";
import MapPage from "./pages/MapPage";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Suspense } from "react";
import Spinner from "@/components/ui/spinner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong. Please refresh.</div>}>
        <Suspense fallback={<Spinner />}> 
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
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
