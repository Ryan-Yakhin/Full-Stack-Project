import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/client";

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const queryClient = useQueryClient();

  const search = async (e) => {
    e.preventDefault();
    const { data } = await api.get("/movies/search/tmdb", { params: { q: query } });
    setResults(data);
  };

  const addMutation = useMutation({
    mutationFn: (movie) =>
      api.post("/movies", {
        tmdbId: movie.id,
        title: movie.title,
        posterUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
        status: "watchlist",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      onClose();
    },
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl w-full max-w-lg p-6 max-h-[80vh] overflow-y-auto border border-white/10 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl text-white">Search Movies</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-2xl font-light transition">✕</button>
        </div>
        <form onSubmit={search} className="flex gap-2 mb-6">
          <input
            value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter movie title..."
            className="flex-1 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
          <button className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 rounded-lg text-sm font-semibold transition transform hover:scale-105">Search</button>
        </form>
        <div className="space-y-3">
          {results.map((m) => (
            <div key={m.id} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/10 hover:border-white/20 transition">
              <img
                src={m.poster_path ? `https://image.tmdb.org/t/p/w92${m.poster_path}` : "https://placehold.co/46x69"}
                className="w-12 h-16 rounded object-cover shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{m.title}</p>
                <p className="text-xs text-white/60">{m.release_date?.split('-')[0]}</p>
              </div>
              <button onClick={() => addMutation.mutate(m)} className="text-xs bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition transform hover:scale-105 shrink-0">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}