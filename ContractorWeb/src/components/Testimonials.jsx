import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="bg-[#1C1B19] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-[Space_Grotesk] text-2xl md:text-3xl font-semibold text-[#E4E0D8] mb-12">
          Apa kata klien kami
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[#E4E0D8]/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <p className="text-sm font-medium text-[#E2A03F]">{t.name}</p>
              <p className="text-xs text-[#E4E0D8]/50">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}