const HeroSection = () => {
  return (
    <section id="home" className="bg-slate-900 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Servis Kendaraan Lebih Mudah dengan <span className="text-blue-500">Diagnosa Cerdas & Transparansi Sparepart</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Solusi modern perawatan motor kesayangan Anda. Nikmati kemudahan booking servis, cek riwayat perbaikan, dan sistem pakar diagnosa kerusakan langsung dari genggaman.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#download"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition text-lg"
          >
            📱 Booking Servis via Aplikasi
          </a>
          <a
            href="#layanan"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition text-lg"
          >
            Pelajari Layanan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;