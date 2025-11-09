
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkinBenefits from "./pages/SkinBenefits";
import Blog from "./pages/Blog";
import MassageGuideUK from "./pages/blog/MassageGuideUK";
import SignsNeedMassage from "./pages/blog/SignsNeedMassage";
import MassageBackPain from "./pages/blog/MassageBackPain";
import SelfCareSundays from "./pages/blog/SelfCareSundays";
import PregnancyMassage from "./pages/blog/PregnancyMassage";
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
          <Route path="/skin-benefits" element={<SkinBenefits />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/massage-guide-uk" element={<MassageGuideUK />} />
          <Route path="/blog/signs-need-massage" element={<SignsNeedMassage />} />
          <Route path="/blog/massage-back-pain" element={<MassageBackPain />} />
          <Route path="/blog/self-care-sundays" element={<SelfCareSundays />} />
          <Route path="/blog/pregnancy-massage" element={<PregnancyMassage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
