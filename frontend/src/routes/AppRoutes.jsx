import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout'; 
import Home from '../pages/Home';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import AdminDashboard from '../pages/admin/Dashboard';
import NotFound from '../pages/NotFound'; 

const AppRoutes = () => {
  return (
    <Routes>
      {/* 2. Rute Publik yang Dibungkus MainLayout (Navbar & Footer Otomatis Muncul) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<ServicesSection />} />
        <Route path="/tentang" element={<AboutSection />} />
        <Route path="/kontak" element={<ContactSection />} />
      </Route>

      {/* 3. Rute Admin (Tidak Memakai Navbar & Footer Publik Bengkel) */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* 4. Rute 404 Not Found (Otomatis Aktif Jika URL Salah) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;