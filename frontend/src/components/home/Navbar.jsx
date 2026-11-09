import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo Bengkel */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="bg-blue-600 text-white p-2 rounded-lg shadow">🔧</span>
              <span>Wahyu <span className="text-blue-600">Motor</span></span>
            </Link>
          </div>

          {/* 2. Link Navigasi Publik (Berpindah Halaman) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/layanan" className="text-slate-600 hover:text-blue-600 font-medium transition">Layanan</Link>
            <Link to="/tentang" className="text-slate-600 hover:text-blue-600 font-medium transition">Tentang Kami</Link>
            <Link to="/kontak" className="text-slate-600 hover:text-blue-600 font-medium transition">Kontak</Link>
          </nav>

          {/* 3 & 4. Tombol Utama (CTA & Login Admin) */}
          <div className="flex items-center gap-4">
            {/* Tombol Unduh APK / Booking */}
            <Link
              to="/download"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Unduh Aplikasi
            </Link>

            {/* Tombol Login Admin */}
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition shadow-sm"
            >
              Login Admin
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;