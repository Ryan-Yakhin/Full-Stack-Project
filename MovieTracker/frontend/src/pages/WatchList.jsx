import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";
import MovieCard from "../components/MovieCard";
import SearchModal from "../components/SearchModal";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

export default function Watchlist() {
  const [statusFilter, setStatusFilter] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { logout, user } = useAuth();
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const { data: movies, isLoading, isError } = useQuery({
    queryKey: ["movies", statusFilter],
    queryFn: async () => {
      const params = statusFilter && statusFilter !== "all" ? { status: statusFilter } : {};
      const { data } = await api.get("/movies", { params });
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }) => api.patch(`/movies/${id}`, updates),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["movies"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/movies/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["movies"] }),
  });

  const statusLabels = {
    "all": t("watchlist.all"),
    "watchlist": t("watchlist.watchlist"),
    "watching": t("watchlist.watching"),
    "completed": t("watchlist.completed"),
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 px-6 py-6 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-2xl bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">My Watchlist</h1>
              <p className="text-white/60 text-sm mt-1">Hello {user?.name}!</p>
            </div>
            <button onClick={() => setShowSearch(true)} className="bg--to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm px-4 py-2.5 rounded-lg font-semibold transition transform hover:scale-105">
              ➕ {t("watchlist.add")}
            </button>
          </div>
        </div>
      </header>

      <div className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 flex-wrap mb-8">
            {["all", "watchlist", "watching", "completed"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`text-sm px-4 py-2 rounded-full font-medium transition transform hover:scale-105 ${
                  statusFilter === s 
                    ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg" 
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                }`}
              >
                {statusLabels[s]}
              </button>
            ))}
          </div>

          <main className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {isLoading && <p className="text-white/60 text-sm col-span-full py-8">Loading...</p>}
            {isError && <p className="text-red-400 text-sm col-span-full py-8">Error loading movies.</p>}
            {movies?.length === 0 && <div className="col-span-full text-center py-16">
              <div className="text-5xl mb-3">🎬</div>
              <p className="text-white/60">{t("watchlist.empty")}</p>
            </div>}
            {movies?.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                onUpdate={(updates) => updateMutation.mutate({ id: movie._id, updates })}
                onDelete={() => deleteMutation.mutate(movie._id)}
              />
            ))}
          </main>
        </div>
      </div>

      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
    </div>
  );
}