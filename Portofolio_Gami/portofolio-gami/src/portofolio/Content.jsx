import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function Content() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-white/10 bg-slate-950 px-4 py-6 text-slate-50 lg:sticky lg:top-0 lg:min-h-screen lg:w-72 lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:px-6 lg:py-10">
          <div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-semibold">Stella</p>
              <p className="mt-1 text-lg font-light text-blue-400">Design</p>
            </div>

            <nav className="mt-8 flex flex-wrap justify-center gap-2 lg:flex-col lg:justify-start lg:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition ${
                    active === item.id
                      ? "bg-white text-slate-950"
                      : "bg-white/10 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          {active === "home" && <Home />}
          {active === "about" && <About />}
          {active === "project" && <Project />}
          {active === "contact" && <Contact />}
        </main>
      </div>
    </div>
  );
}