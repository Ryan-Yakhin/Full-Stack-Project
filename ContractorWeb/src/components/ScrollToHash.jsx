import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // beri sedikit delay supaya konten halaman sempat render dulu
      const timeout = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}