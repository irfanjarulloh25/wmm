import { Outlet } from 'react-router-dom';
import Navbar from './home/Navbar';
import Footer from './home/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navbar akan selalu tampil di atas untuk semua halaman publik */}
      <Navbar />

      {/* Outlet adalah tempat halaman anak (Home, Layanan, Kontak, dll.) akan muncul secara dinamis */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer akan selalu tampil di bawah untuk semua halaman publik */}
      <Footer />
    </div>
  );
};

export default MainLayout;