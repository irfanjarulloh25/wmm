const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Layanan & Fitur Unggulan Bengkel</h2>
          <p className="text-slate-600">Kami menghadirkan layanan servis profesional didukung teknologi digital untuk transparansi penuh kendaraan Anda.</p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tune-up & Servis Berkala</h3>
            <p className="text-slate-600">Perawatan mesin rutin untuk menjaga performa motor tetap optimal dan bertenaga di jalan.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Servis CVT & Transmisi</h3>
            <p className="text-slate-600">Pembersihan dan pengecekan komponen CVT matic agar bebas dari getar dan tarikan lebih responsif.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl mb-4">🛢️</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Ganti Oli & Sparepart Resmi</h3>
            <p className="text-slate-600">Pilihan oli berkualitas tinggi dan suku cadang asli yang terjamin keasliannya untuk ketahanan mesin.</p>
          </div>
        </div>

        {/* Highlight Fitur Digital */}
        <div id="diagnosa" className="bg-blue-600 rounded-3xl text-white p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Fitur Eksklusif Aplikasi</span>
            <h3 className="text-2xl lg:text-3xl font-bold mt-4 mb-4">Sistem Pakar Diagnosa & Transparansi Foto Sparepart</h3>
            <p className="text-blue-100 mb-6">
              Pelanggan dapat mendiagnosa gejala kerusakan motor mandiri menggunakan metode Certainty Factor, serta melihat dokumentasi foto fisik komponen yang rusak langsung dari aplikasi Android.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
            <ul className="space-y-4 text-blue-50">
              <li className="flex items-center gap-3">✅ Diagnosa Kerusakan Otomatis (Certainty Factor)</li>
              <li className="flex items-center gap-3">✅ Dokumentasi Foto Komponen Rusak & Diganti</li>
              <li className="flex items-center gap-3">✅ Riwayat Servis Digital & Pengingat Ganti Oli</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;