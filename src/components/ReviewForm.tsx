"use client";

import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

export default function ReviewForm({ schoolId }: { schoolId: string }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (rating === 0)  { setError("Please select a star rating."); return; }
    if (!body.trim())  { setError("Please write your review."); return; }
    // Phase 1: no backend — just flip to success state
    void schoolId; // suppress unused var warning until Phase 2
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-8 flex flex-col items-center gap-3 text-center">
        <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
        <p className="font-semibold text-green-800 dark:text-green-300 text-lg">
          Thanks for your review!
        </p>
        <p className="text-green-700 dark:text-green-400 text-sm">
          It will appear on this page after a quick approval by our team.
        </p>
      </div>
    );
  }

  const displayRating = hovered || rating;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="reviewer-name"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Your name
        </label>
        <input
          id="reviewer-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. John D."
          className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Star picker */}
      <div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Rating
        </p>
        <div
          className="flex items-center gap-1"
          onMouseLeave={() => setHovered(0)}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              className="focus:outline-none"
            >
              <Star
                size={28}
                className={
                  star <= displayRating
                    ? "text-amber-400"
                    : "text-slate-300 dark:text-slate-600"
                }
                fill={star <= displayRating ? "currentColor" : "none"}
                strokeWidth={star <= displayRating ? 0 : 1.5}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div>
        <label
          htmlFor="review-body"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Your review
        </label>
        <textarea
          id="review-body"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your experience with this flight school…"
          className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2.5 bg-rose-800 hover:bg-rose-700 text-white font-semibold rounded-lg text-sm transition"
      >
        Submit Review
      </button>
    </form>
  );
}
