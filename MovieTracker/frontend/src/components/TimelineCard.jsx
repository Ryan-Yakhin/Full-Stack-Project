import { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewModal from "./ReviewModal";
import { useLanguage } from "../context/LanguageContext";

export default function TimelineCard({
  movieEntry,
  reviews,
  totalReviews,
  averageRating,
  isExpanded,
  onToggle,
  currentUserId,
}) {
  const { t } = useLanguage();
  const [localReviews, setLocalReviews] = useState(reviews);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const userHasReviewed = localReviews.some((r) => r.userId._id === currentUserId);

  return (
    <div className="bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition duration-300 border border-white/10">
      <div className="flex gap-4 p-6">
        {/* Poster */}
        {movieEntry.posterUrl && (
          <img
            src={movieEntry.posterUrl}
            alt={movieEntry.title}
            className="w-28 h-40 rounded-lg object-cover shadow-lg"
          />
        )}

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">{movieEntry.title}</h3>
              <p className="text-sm text-white/60 mt-1">
                {t("home.watchedBy")}: <span className="text-purple-300 font-semibold">{movieEntry.userId.name}</span>
              </p>
            </div>
            <div className="text-right bg-white/5 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="text-yellow-400 font-bold text-xl">
                {averageRating > 0 && `⭐ ${averageRating}`}
              </p>
              <p className="text-sm text-white/60">{totalReviews} {t("timeline.reviews")}</p>
            </div>
          </div>

          {movieEntry.genres && (
            <p className="text-sm text-white/50 mt-3">{movieEntry.genres.join(", ")}</p>
          )}

          <div className="flex gap-3 mt-5">
            <button
              onClick={onToggle}
              className="text-purple-300 hover:text-purple-200 text-sm font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition border border-white/20"
            >
              {isExpanded ? t("timeline.hideReviews") : t("timeline.showReviews")}
            </button>
            
            {!userHasReviewed && movieEntry.status === "completed" && (
              <button
                onClick={() => setShowReviewModal(true)}
                className="text-green-300 hover:text-green-200 text-sm font-semibold bg-green-500/20 hover:bg-green-500/30 px-4 py-2 rounded-lg transition border border-green-500/50"
              >
                ➕ {t("review.addReview")}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {isExpanded && (
        <div className="border-t border-white/10 p-6 bg-black/30 backdrop-blur-sm">
          <ReviewList
            reviews={localReviews}
          />
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <ReviewModal
          movieEntryId={movieEntry._id}
          tmdbId={movieEntry.tmdbId}
          movieTitle={movieEntry.title}
          onClose={() => setShowReviewModal(false)}
          onSuccess={() => {
            setShowReviewModal(false);
            setLocalReviews([...localReviews]);
          }}
        />
      )}
    </div>
  );
}
