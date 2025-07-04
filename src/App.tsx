import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Impor Halaman Utama
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';

// --- REVISI: TAMBAHKAN IMPOR HALAMAN ADMIN DI SINI ---
import AdminDashboard from './pages/admin/Dashboard';
import Broadcast from './pages/admin/Broadcast';
import SuccessfulPilgrims from './pages/admin/SuccessfulPilgrims';
import IncompletePilgrims from './pages/admin/IncompletePilgrims';
// ----------------------------------------------------

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Rute Utama */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* Rute Admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/broadcast" element={<Broadcast />} />
          <Route path="/admin/successful-pilgrims" element={<SuccessfulPilgrims />} />
          <Route path="/admin/incomplete-pilgrims" element={<IncompletePilgrims />} />
          
          {/* Rute Halaman Tidak Ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
