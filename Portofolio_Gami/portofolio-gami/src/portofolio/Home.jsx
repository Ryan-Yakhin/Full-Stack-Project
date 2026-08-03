import { useEffect, useState } from "react";

export default function Home() {
  const phrases = ["Hi, I'm Stella", "I'm an Editor", "Welcome to My Website"];

  const [tempIndex, setTempIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (charIndex < phrases[tempIndex].length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 120);
    } else {
      timeout = setTimeout(() => {
        setTempIndex((prevIndex) => (prevIndex === phrases.length - 1 ? 0 : prevIndex + 1));
        setCharIndex(0);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, tempIndex, phrases]);

  const text = phrases[tempIndex].slice(0, charIndex);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_45%)]" />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
            Portfolio • Social Media Editor
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Membuat konten yang menarik, elegan, dan berkesan.
          </h1>
          <div className="mt-6 h-12 text-2xl font-semibold text-slate-100 sm:text-3xl">
            <span className="border-r-2 border-white/80 pr-2">{text}</span>
          </div>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Halo! Saya Stella, seorang Social Media Editor yang fokus pada konten yang relevan, menarik, dan berdampak untuk memperkuat branding serta meningkatkan engagement.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-blue-300/70 bg-slate-950/80 text-center shadow-inner sm:h-56 sm:w-56">
            <span className="text-2xl font-semibold text-slate-50">Stella</span>
            <span className="mt-2 text-lg font-light text-blue-400">Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}