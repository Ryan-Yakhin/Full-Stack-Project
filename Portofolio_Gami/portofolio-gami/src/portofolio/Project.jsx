import { useState } from "react";
import Poto1 from "../assets/poto1.avif";
import Poto2 from "../assets/poto2.avif";
import Poto3 from "../assets/poto3.avif";
import Poto4 from "../assets/poto4.avif";
import Poto5 from "../assets/poto5.avif";
import Poto6 from "../assets/poto6.avif";
import Poto7 from "../assets/poto7.avif";
import Poto8 from "../assets/poto8.avif";
import Poto9 from "../assets/poto9.avif";
import Poto10 from "../assets/poto10.avif";
import Poto11 from "../assets/poto11.avif";
import Poto12 from "../assets/poto12.avif";

export default function Project() {
  const projectAella = [Poto1, Poto2, Poto3, Poto4, Poto5, Poto6];
  const personalProject = [Poto7, Poto8, Poto9, Poto10, Poto11, Poto12];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-900 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Project yang telah saya buat</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Koleksi visual dari pekerjaan branding, editing, dan konten digital yang menonjolkan estetika serta tujuan komunikasi.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Project With Aella Cosmetic</h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectAella.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 shadow-xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item} alt="Project Aella" className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Personal Project</h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {personalProject.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 shadow-xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item} alt="Personal project" className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview project" className="max-h-[90%] max-w-[90%] rounded-[1.5rem] shadow-2xl" />
        </div>
      )}
    </section>
  );
}