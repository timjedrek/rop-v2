import Link from "next/link";
import { Star } from "lucide-react";
import type { Review } from "@/lib/types";
import { getUserById, getProgramBySlug } from "@/lib/mock-data";

function StarRow({ filled }: { filled: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className="text-amber-400"
          fill={i <= filled ? "currentColor" : "none"}
          strokeWidth={i <= filled ? 0 : 1.5}
        />
      ))}
    </span>
  );
}

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          No reviews yet. Be the first to share your experience!
        </p>
      </div>
    );
  }

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  // Build distribution: count of reviews per star value 1–5
  const dist = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <div className="space-y-6">
      {/* Summary card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
        {/* Big number */}
        <div className="flex flex-col items-center justify-center sm:border-r border-slate-200 dark:border-slate-700 sm:pr-6 shrink-0">
          <span className="text-5xl font-extrabold text-slate-800 dark:text-slate-100">
            {avg.toFixed(1)}
          </span>
          <StarRow filled={Math.round(avg)} />
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
        </div>

        {/* Bar chart */}
        <div className="flex-1 space-y-2">
          {dist.map(({ star, count }) => {
            const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2 text-sm">
                <span className="w-4 text-right text-slate-600 dark:text-slate-400 shrink-0">
                  {star}
                </span>
                <Star size={12} className="text-amber-400 shrink-0" fill="currentColor" strokeWidth={0} />
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-4 text-slate-500 dark:text-slate-400 shrink-0">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review list */}
      <div className="space-y-4">
        {reviews.map((review) => {
          const date = new Date(review.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  {(() => {
                    const user = getUserById(review.userId);
                    const fullName = user ? `${user.firstName} ${user.lastName}` : "Anonymous";
                    return (
                      <>
                        <Link
                          href={`/profile/${review.userId}`}
                          className="font-semibold text-slate-800 dark:text-slate-100 text-sm hover:text-blue-700 dark:hover:text-blue-400 transition"
                        >
                          {fullName}
                        </Link>
                        {user?.pilotCertificates && user.pilotCertificates.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {user.pilotCertificates.map((slug) => {
                              const program = getProgramBySlug(slug);
                              return (
                                <span
                                  key={slug}
                                  className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded"
                                >
                                  {program?.shortName ?? slug}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })()}
                  <StarRow filled={review.rating} />
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0 mt-0.5">
                  {date}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {review.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
