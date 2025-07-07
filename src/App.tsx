import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import Profile from "./pages/Profile";

// Impor Halaman Utama
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";

// --- 1. HANYA IMPOR LAYOUT DAN DASHBOARD ADMIN ---
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
// Impor halaman lain seperti SuccessfulPilgrims, Broadcast, dll. sudah tidak diperlukan lagi.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Rute Publik */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* --- 2. RUTE ADMIN MENJADI LEBIH SEDERHANA --- */}
          <Route element={<PrivateRoute />}>
            {/* Admin-only routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
            </Route>

            {/* User-only routes */}
            <Route path="/user" element={<Profile />} />
            {/* <Route path="/dashboard" element={<UserDashboard />} /> */}
          </Route>

          {/* Rute Halaman Tidak Ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
