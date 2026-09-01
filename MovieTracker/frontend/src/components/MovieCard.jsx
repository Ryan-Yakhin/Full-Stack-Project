import { useLanguage } from "../context/LanguageContext";

export default function MovieCard({ movie, onUpdate, onDelete }) {
  const { t } = useLanguage();
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition duration-300 border border-white/10">
      <img src={movie.posterUrl || "https://placehold.co/300x450?text=No+Poster"} alt={movie.title} className="w-full aspect-2/3 object-cover" />
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-white line-clamp-1">{movie.title}</h3>
        <select
          value={movie.status}
          onChange={(e) => onUpdate({ status: e.target.value })}
          className="w-full text-xs bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
        >
          <option value="watchlist" className="bg-slate-900">{t("watchlist.watchlist")}</option>
          <option value="watching" className="bg-slate-900">{t("watchlist.watching")}</option>
          <option value="completed" className="bg-slate-900">{t("watchlist.completed")}</option>
        </select>
        <button onClick={onDelete} className="w-full text-xs bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/50 rounded-lg py-2 transition font-medium">{t("watchlist.delete")}</button>
      </div>
    </div>
  );
}