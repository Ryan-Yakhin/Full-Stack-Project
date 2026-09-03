const projects = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500",
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-[#E4E0D8] py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-[Space_Grotesk] text-2xl md:text-3xl font-semibold text-[#1C1B19] mb-12">
          Proyek yang telah kami kerjakan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-square">
              <img src={src} alt={`Proyek ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}