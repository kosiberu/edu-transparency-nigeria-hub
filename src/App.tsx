
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminData from "./pages/admin/AdminData";
import AdminReports from "./pages/admin/AdminReports";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

// Import the report pages
import BudgetReport from "./pages/reports/BudgetReport";
import ResearchGrants from "./pages/reports/ResearchGrants";
import TetFund from "./pages/reports/TetFund";
import EndowmentFund from "./pages/reports/EndowmentFund";
import StudentPopulation from "./pages/reports/StudentPopulation";
import AboutData from "./pages/reports/AboutData";

// Import auth pages
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            
            {/* Report Routes */}
            <Route path="/budget" element={<BudgetReport />} />
            <Route path="/research-grants" element={<ResearchGrants />} />
            <Route path="/tetfund" element={<TetFund />} />
            <Route path="/endowment" element={<EndowmentFund />} />
            <Route path="/student-population" element={<StudentPopulation />} />
            <Route path="/about" element={<AboutData />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/data" element={<AdminData />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
