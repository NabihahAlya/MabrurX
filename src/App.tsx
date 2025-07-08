import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Impor Halaman Publik
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';

// Impor Layout dan Halaman untuk Admin Travel
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';

// Impor Layout dan Halaman untuk Admin PPIH
import PpihLayout from './pages/ppih/PpihLayout';
import PpihDashboard from './pages/ppih/PpihDashboard';


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
          
          {/* Rute untuk Admin Travel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>

          {/* Rute untuk Admin PPIH */}
          <Route path="/ppih" element={<PpihLayout />}>
            <Route path="dashboard" element={<PpihDashboard />} />
          </Route>
          
          {/* Rute Halaman Tidak Ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
