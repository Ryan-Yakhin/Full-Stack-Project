import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium hidden sm:inline">Konsultasi Gratis</span>
    </a>
  );
}