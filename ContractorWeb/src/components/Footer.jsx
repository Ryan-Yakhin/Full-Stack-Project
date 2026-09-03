export default function Footer() {
  return (
    <footer className="bg-[#141312] text-[#E4E0D8]/60 py-12">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-[Space_Grotesk] text-[#E4E0D8] font-semibold mb-3">
            BangYusuf<span className="text-[#E2A03F]">Kontraktor</span>
          </p>
          <p className="leading-relaxed">Kontraktor bangun baru dan renovasi, melayani berbagai wilayah dengan standar kerja profesional.</p>
        </div>
        <div>
          <p className="text-[#E4E0D8] font-medium mb-3">Kontak</p>
          <p>Telepon: +62xxxxxxxx</p>
          <p>Email: BangYusuf@gmail.com</p>
        </div>
        <div>
          <p className="text-[#E4E0D8] font-medium mb-3">Alamat</p>
          <p className="leading-relaxed">Jl. Contoh No. 1, Pasar Minggu, Jaakarta Selatan</p>
        </div>
      </div>
      <p className="text-center text-xs mt-10 pt-6 border-t border-white/5">
        © 2026 BangYusufContarctor. Seluruh hak cipta dilindungi.
      </p>
    </footer>
  );
}