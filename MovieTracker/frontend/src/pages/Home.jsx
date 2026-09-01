import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import TimelineCard from "../components/TimelineCard";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export default function Home() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [expandedMovie, setExpandedMovie] = useState(null);

  const { data: timeline = [], isLoading, error } = useQuery({
    queryKey: ["timeline"],
    queryFn: async () => {
      const { data } = await API.get("/reviews/timeline");
      return data;
    },
  });

  if (isLoading) return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/60 text-lg">Loading timeline...</p>
      </div>
    </div>
  );
  if (error) return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center bg-red-500/20 border border-red-500/50 rounded-lg p-6">
        <p className="text-red-400 text-lg">Error loading timeline</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"> {t("home.title")}</h1>
          <p className="text-white/60">{t("home.subtitle")}</p>
        </div>

        {timeline.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍿</div>
            <p className="text-white/60 text-lg">{t("home.noMovies")}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {timeline.map((item) => (
              <TimelineCard
                key={item.movieEntry._id}
                movieEntry={item.movieEntry}
                reviews={item.reviews}
                totalReviews={item.totalReviews}
                averageRating={item.averageRating}
                isExpanded={expandedMovie === item.movieEntry._id}
                onToggle={() =>
                  setExpandedMovie(
                    expandedMovie === item.movieEntry._id
                      ? null
                      : item.movieEntry._id
                  )
                }
                currentUserId={user?._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
