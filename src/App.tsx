
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import NewCampaign from "./pages/NewCampaign";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import AppHeader from "./components/AppHeader";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader />
          <main className="flex-1 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          } />
          <Route path="/campaigns" element={
            <AppLayout>
              <Campaigns />
            </AppLayout>
          } />
          <Route path="/campaigns/new" element={
            <AppLayout>
              <NewCampaign />
            </AppLayout>
          } />
          <Route path="/analytics" element={
            <AppLayout>
              <Analytics />
            </AppLayout>
          } />
          <Route path="/settings" element={
            <AppLayout>
              <Settings />
            </AppLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
