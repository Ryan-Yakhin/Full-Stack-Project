import { articles } from "../data/content";

export default function Blog() {
  return (
    <section id="artikel" className="bg-[#1C1B19] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-[Space_Grotesk] text-2xl md:text-3xl font-semibold text-[#E4E0D8] mb-12">
          Artikel terbaru
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <a key={a.title} href="#" className="group flex gap-4 items-center bg-white/5 rounded-xl overflow-hidden">
              <img src={a.image} alt={a.title} className="w-32 h-32 object-cover" />
              <div className="py-4 pr-5">
                <p className="text-xs text-[#E2A03F] mb-1">{a.date}</p>
                <h3 className="text-[#E4E0D8] font-medium leading-snug group-hover:text-[#E2A03F] transition-colors">
                  {a.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}