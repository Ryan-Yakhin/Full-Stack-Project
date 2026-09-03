import { useParams, Link, Navigate } from "react-router-dom";
import { serviceDetails } from "../data/content";

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  // kalau slug tidak dikenali (misal salah ketik URL), lempar ke halaman utama
  if (!service) return <Navigate to="/" replace />;

  return (
    <div>
      {/* Hero halaman layanan */}
      <section className="relative bg-[#1C1B19] text-[#E4E0D8]">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <Link to="/" className="text-xs text-[#E2A03F] hover:underline">← Kembali ke Beranda</Link>
          <h1 className="font-[Space_Grotesk] text-3xl md:text-4xl font-semibold mt-4 mb-3">
            {service.title}
          </h1>
          <p className="text-[#E4E0D8]/70 max-w-lg">{service.tagline}</p>
        </div>
      </section>

      {/* Gambar hero */}
      <img src={service.heroImage} alt={service.title} className="w-full h-72 md:h-96 object-cover" />

      {/* Deskripsi + cakupan layanan */}
      <section className="bg-[#E4E0D8] py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-[Space_Grotesk] text-xl font-semibold text-[#1C1B19] mb-4">Tentang Layanan Ini</h2>
            <p className="text-[#1C1B19]/70 leading-relaxed">{service.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#1C1B19] mb-3">Cakupan Pekerjaan</h3>
            <ul className="space-y-2">
              {service.scope.map((item) => (
                <li key={item} className="text-sm text-[#1C1B19]/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2A03F]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Alur pengerjaan — urutan asli, jadi penomoran memang tepat di sini */}
      <section className="bg-[#1C1B19] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-[Space_Grotesk] text-xl font-semibold text-[#E4E0D8] mb-10">Alur Pengerjaan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={p.step} className="border-l-2 border-[#E2A03F] pl-4">
                <span className="text-xs text-[#E2A03F] font-medium">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[#E4E0D8] font-medium mt-1 mb-1">{p.step}</h3>
                <p className="text-xs text-[#E4E0D8]/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E2A03F] py-14">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-[Space_Grotesk] text-2xl font-semibold text-[#1C1B19] mb-3">
            Tertarik dengan layanan {service.title}?
          </h2>
          <a
            href="*"
            className="inline-block bg-[#1C1B19] text-white px-6 py-3 rounded-lg font-medium mt-3"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}