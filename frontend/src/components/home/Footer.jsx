const Footer = () => {
  return (
    <footer id="tentang" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">🔧 BengkelPro</h3>
            <p className="text-sm">Platform manajemen bengkel modern dan sistem pakar diagnosa kendaraan terpercaya di Kota Bekasi.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#beranda" className="hover:text-white transition">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-white transition">Layanan</a></li>
              <li><a href="#diagnosa" className="hover:text-white transition">Diagnosa (Info)</a></li>
              <li><a href="#kontak" className="hover:text-white transition">Kontak & Lokasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sosial Media</h4>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">TikTok</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BengkelPro. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;