import { services } from "../data/content";

export default function Services() {
  return (
    <section id="layanan" className="bg-[#1C1B19] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-[Space_Grotesk] text-2xl md:text-3xl font-semibold text-[#E4E0D8]">
            Layanan kami
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19] via-[#1C1B19]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-[Space_Grotesk] text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}