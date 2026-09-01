import ReviewForm from "./ReviewForm";
import { useLanguage } from "../context/LanguageContext";

export default function ReviewModal({ movieEntryId, tmdbId, movieTitle, onClose, onSuccess }) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="border-b border-white/10 p-6 flex justify-between items-center bg-linear-to-r from-purple-600/20 to-blue-600/20">
          <div>
            <h2 className="text-2xl font-bold text-white">{t("review.addReview")}</h2>
            <p className="text-sm text-white/60 mt-2">{movieTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-3xl font-light transition"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <ReviewForm
            movieEntryId={movieEntryId}
            tmdbId={tmdbId}
            onSuccess={() => {
              onSuccess?.();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
