import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=100088162999110",
    icon: <FaFacebook className="h-6 w-6" />,
    label: "Facebook",
    accent: "hover:bg-blue-600",
  },
  {
    href: "https://www.instagram.com/g.allets/",
    icon: <FaInstagram className="h-6 w-6" />,
    label: "Instagram",
    accent: "hover:bg-pink-600",
  },
  {
    href: "https://wa.me/6285822916469",
    icon: <FaWhatsapp className="h-6 w-6" />,
    label: "WhatsApp",
    accent: "hover:bg-green-600",
  },
  {
    href: "mailto:gamlielatahalele02@gmail.com",
    icon: <MdOutlineMail className="h-6 w-6" />,
    label: "Email",
    accent: "hover:bg-red-500",
  },
];

export default function Contact() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-16 text-white">
      <div className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Hubungi Saya</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Siap bekerja sama atau berdiskusi tentang konten?</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Saya terbuka untuk kolaborasi, proyek editing, dan kebutuhan konten visual yang profesional dan menarik.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 transition hover:-translate-y-1 hover:bg-white/10 ${item.accent}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-slate-400">Klik untuk terhubung</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}