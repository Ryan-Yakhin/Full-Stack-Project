import { useLanguage } from "../context/LanguageContext";

export default function ReviewList({ reviews }) {
  const { t } = useLanguage();

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/60">{t("timeline.beFirst")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review._id} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-white/20 transition">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-semibold text-white">{review.userId.name}</p>
              <p className="text-xs text-white/50 mt-0.5">
                {new Date(review.createdAt).toLocaleDateString("id-ID")}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {Array(review.rating)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
}
