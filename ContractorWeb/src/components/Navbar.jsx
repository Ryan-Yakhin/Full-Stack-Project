import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
  { label: "Beranda", to: "/" },
  {
    label: "Layanan", to: "/#layanan",
    children: [
      { label: "Bangun Baru", to: "/layanan/bangun-baru" },
      { label: "Renovasi", to: "/layanan/renovasi" },
      { label: "Interior", to: "/layanan/interior" },
      { label: "Desain", to: "/layanan/desain" },
    ],
  },
  { label: "Portofolio", to: "/#portofolio" },
  { label: "Artikel", to: "/#artikel" },
  { label: "Kontak", to: "/#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // label item yang submenu-nya terbuka

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1C1B19]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-[Space_Grotesk] text-lg font-semibold text-[#E4E0D8] tracking-tight">
          BangYusuf<span className="text-[#E2A03F]">Kontraktor</span>
        </span>

        {/* Desktop menu — tetap pakai hover seperti sebelumnya */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link to={item.to} className="text-sm text-[#E4E0D8]/80 hover:text-[#E2A03F] flex items-center gap-1 py-2">
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-[#1C1B19] border border-white/10 rounded-lg py-2 min-w-[160px]">
                  {item.children.map((c) => (
                    <Link key={c.label} to={c.to} className="block px-4 py-2 text-sm text-[#E4E0D8]/70 hover:text-[#E2A03F]">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[#E4E0D8]">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — submenu klik untuk buka/tutup */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-5 py-3 flex flex-col gap-1 bg-[#1C1B19]">
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex items-center justify-between py-2.5 text-sm text-[#E4E0D8]/80"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openSubmenu === item.label && (
                    <div className="pl-4 flex flex-col border-l border-white/10 ml-1 mb-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          className="py-2 text-sm text-[#E4E0D8]/60"
                          onClick={closeMenu}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  className="block py-2.5 text-sm text-[#E4E0D8]/80"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}