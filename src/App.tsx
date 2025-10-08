import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./components/ProjectDetail";
import DesignCategory from "./components/DesignCategory";
import DesignAbout from "./components/DesignAbout";
import DesignContact from "./components/DesignContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PortfolioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/project/:projectId" element={<ProjectDetail />} />
                <Route path="/design/:category" element={<DesignCategory />} />
                <Route path="/design-about" element={<DesignAbout />} />
                <Route path="/design-contact" element={<DesignContact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
