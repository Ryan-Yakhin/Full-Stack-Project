import { serviceAreas } from "../data/content";

export default function ServiceArea() {
  return (
    <section className="bg-[#E4E0D8] py-16">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="font-[Space_Grotesk] text-xl font-semibold text-[#1C1B19] mb-6">Area layanan kami</h2>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {serviceAreas.map((area) => (
            <span key={area} className="text-xs text-[#1C1B19]/70 bg-white border border-black/5 rounded-full px-3 py-1.5">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}