import { whyUs } from "../data/content";

export default function WhyUs() {
  return (
    <section className="bg-[#E4E0D8] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-[Space_Grotesk] text-2xl md:text-3xl font-semibold text-[#1C1B19] mb-12 max-w-lg">
          Kenapa memilih kami untuk proyek Anda
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-black/5">
              <span className="font-[Space_Grotesk] text-sm text-[#E2A03F] font-semibold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-medium text-[#1C1B19] mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-[#1C1B19]/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}