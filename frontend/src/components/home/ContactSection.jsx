const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Lokasi & Jam Operasional</h2>
          <p className="text-slate-600">Kunjungi bengkel kami atau hubungi layanan pelanggan via WhatsApp untuk konsultasi cepat.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Jam & Kontak */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">📍 Alamat Bengkel</h3>
              <p className="text-slate-600">Jl. Raya Bengkel No. 45, Kota Bekasi, Jawa Barat</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">🕒 Jam Buka Bengkel</h3>
              <p className="text-slate-600">Senin – Sabtu: 08.00 - 17.00 WIB<br />Minggu: Tutup / Servis Panggilan Darurat</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">📞 WhatsApp Customer Service</h3>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition shadow"
              >
                Chat WhatsApp Admin
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              title="Google Maps Bengkel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.9!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNTQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;