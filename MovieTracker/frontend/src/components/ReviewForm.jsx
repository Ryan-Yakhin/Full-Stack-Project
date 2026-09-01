import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export default function ReviewForm({ movieEntryId, tmdbId, onSuccess }) {
  const { user } = useAuth();
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await API.post(
        "/reviews",
        {
          movieEntryId,
          tmdbId,
          rating: parseInt(rating),
          reviewText,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timeline"] });
      setReviewText("");
      setRating(5);
      if (onSuccess) onSuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      alert("Tuliskan review terlebih dahulu!");
      return;
    }
    mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-white mb-3">{t("review.rating")}</label>
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-3xl transition transform hover:scale-110 ${
                rating >= star ? "text-yellow-400" : "text-white/20"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-white mb-3">{t("review.review")}</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full bg-white/10 text-white p-4 rounded-lg border border-white/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition backdrop-blur-sm placeholder-white/40"
          placeholder={t("review.placeholder")}
          rows="4"
        />
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
      >
        {mutation.isPending ? t("review.submitting") : t("review.submit")}
      </button>

      {mutation.error && (
        <p className="text-red-400 text-sm mt-3 bg-red-500/20 p-2 rounded border border-red-500/50">{mutation.error.response?.data?.message}</p>
      )}
    </form>
  );
}
