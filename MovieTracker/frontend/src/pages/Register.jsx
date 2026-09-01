import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(name, email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Pendaftaran gagal");
    }
  };

  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg text-sm font-semibold transition backdrop-blur-sm border border-white/30"
      >
        {language === "en" ? "ID" : "EN"}
      </button>

      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-4 border border-white/20 relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">{t("auth.register")}</h1>
          <p className="text-white/60 text-sm">Join our movie community</p>
        </div>
        {error && <p className="text-sm text-red-400 bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/50">{error}</p>}
        <input
          type="text" placeholder={t("auth.name")} value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition backdrop-blur-sm"
          required
        />
        <input
          type="email" placeholder={t("auth.email")} value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition backdrop-blur-sm"
          required
        />
        <input
          type="password" placeholder={t("auth.password")} value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition backdrop-blur-sm"
          required
        />
        <button className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg py-3 text-sm font-semibold transition transform hover:scale-105 mt-6">
          {t("auth.registerBtn")}
        </button>
        <p className="text-sm text-white/60 text-center pt-2">
          {t("auth.haveAccount")} <Link to="/login" className="text-purple-300 hover:text-purple-200 underline font-semibold">{t("auth.loginLink")}</Link>
        </p>
      </form>
    </div>
  );
}