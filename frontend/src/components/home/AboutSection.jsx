import Navbar from "./Navbar";
const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Tentang Wahyu Motor Mandiri</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Mitra terpercaya untuk perawatan dan perbaikan kendaraan Anda dengan standar profesional dan transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bagian Teks Cerita / Visi */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Solusi Modern untuk Servis Kendaraan Anda
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Wahyu Motor Mandiri hadir untuk memberikan kemudahan bagi pemilik kendaraan dalam merawat motor mereka. Didukung oleh mekanik berpengalaman serta sistem informasi digital dan diagnosa modern, kami berkomitmen untuk memberikan pelayanan yang cepat, akurat, dan transparan.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Melalui aplikasi mobile kami, pelanggan dapat dengan mudah melakukan *booking* jadwal servis, memantau riwayat perbaikan, hingga melihat dokumentasi suku cadang secara *real-time*.
            </p>
          </div>

          {/* Bagian Kotak Info / Statistik Keunggulan */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="block text-3xl font-bold text-blue-600 mb-1">100%</span>
              <span className="text-sm text-slate-600">Transparansi Sparepart</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="block text-3xl font-bold text-blue-600 mb-1">Pro</span>
              <span className="text-sm text-slate-600">Mekanik Berpengalaman</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="block text-3xl font-bold text-blue-600 mb-1">Digital</span>
              <span className="text-sm text-slate-600">Booking & Diagnosa</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="block text-3xl font-bold text-blue-600 mb-1">Aman</span>
              <span className="text-sm text-slate-600">Garansi Servis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;