import Gami from "../assets/gami.jpeg";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 px-6 py-16 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Tentang Saya</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Gamliela Stella Tahalele</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Saya adalah seorang editor konten yang terbiasa mengubah ide menjadi visual yang menarik, konsisten, dan siap dipakai untuk membangun citra brand.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-lg border-2 border-blue-400/70 shadow-lg sm:h-56 sm:w-56 md:h-60 md:w-60">
                <img src={Gami} alt="Stella" className="h-full w-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">Editor dengan fokus storytelling</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Saya menggabungkan kreativitas visual, strategi konten, dan bahasa yang komunikatif untuk menghasilkan karya yang terasa personal dan profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">Pengalaman</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-slate-800">Freelance Social Media Editor — Aella Cosmetic</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Membuat perencanaan konten harian, desain feed Instagram, caption promosi, serta membantu memperkuat identitas visual brand.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Tim Vlog Kreatif — SMA N 6 Ambon</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Bertanggung jawab atas konsep dan editing video yang berhasil meraih juara 1 pada lomba vlog kreatif.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">Pendidikan</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>• Universitas Pattimura Ambon (2024 – Sekarang)</li>
                <li>• Jurusan Manajemen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}