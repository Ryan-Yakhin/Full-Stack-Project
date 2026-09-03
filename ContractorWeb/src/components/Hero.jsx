export default function Hero() {
  return (
    <section className="relative bg-[#1C1B19] text-[#E4E0D8] overflow-hidden">
      {/* garis blueprint dekoratif */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(#E4E0D8 1px, transparent 1px), linear-gradient(90deg, #E4E0D8 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-medium text-[#E2A03F] border border-[#E2A03F]/40 rounded-full px-3 py-1 mb-5">
            Konsultasi gratis, tanpa biaya survei
          </span>
          <h1 className="font-[Space_Grotesk] text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Bangun dan renovasi properti Anda dengan kontraktor yang bisa dipertanggungjawabkan
          </h1>
          <p className="text-[#E4E0D8]/70 leading-relaxed mb-8 max-w-md">
            Kami menangani rumah tinggal, ruko, kantor, hingga bangunan komersial — dari perencanaan RAB sampai serah terima kunci.
          </p>
          <div className="flex gap-4">
            <a href="#kontak" className="bg-[#E2A03F] text-[#1C1B19] font-medium px-6 py-3 rounded-lg hover:bg-[#c98a2e] transition-colors">
              Konsultasi Sekarang
            </a>
            <a href="#portofolio" className="border border-white/20 px-6 py-3 rounded-lg text-sm hover:border-white/40 transition-colors">
              Lihat Portofolio
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="font-[Space_Grotesk] text-3xl font-semibold text-[#E2A03F]">12+</p>
              <p className="text-xs text-[#E4E0D8]/60 mt-1">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="font-[Space_Grotesk] text-3xl font-semibold text-[#E2A03F]">300+</p>
              <p className="text-xs text-[#E4E0D8]/60 mt-1">Proyek Selesai</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
            alt="Proyek bangunan"
            className="rounded-xl w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#E2A03F]" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#E2A03F]" />
        </div>
      </div>
    </section>
  );
}