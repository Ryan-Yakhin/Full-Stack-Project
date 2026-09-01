import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const { user, logout } = useAuth();
  const { t, toggleLanguage, language } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 text-white sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition">
            🎬 {t("nav.title")}
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-white/80 hover:text-purple-300 transition font-medium"
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/watchlist"
              className="text-white/80 hover:text-purple-300 transition font-medium"
            >
              {t("nav.watchlist")}
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-sm text-white/70">{user?.name}</span>
          
          <button
            onClick={toggleLanguage}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-3 py-2 rounded-lg transition text-sm font-semibold backdrop-blur-sm"
          >
            {language === "en" ? "ID" : "EN"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600/80 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium"
          >
            {t("nav.logout")}
          </button>
        </div>
      </div>
    </nav>
  );
}
