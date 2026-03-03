"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Star, ArrowUp } from "lucide-react";

const PAGE_SIZE = 6;

export type SchoolListItem = {
  id: string;
  name: string;
  href: string;
  airportCode: string;
  airportName?: string;
  location?: string;
  rating: number;
};

type Props = {
  schools: SchoolListItem[];
  heading: string;
};

export function SchoolsExplorer({ schools, heading }: Props) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = schools.slice(0, visibleCount);
  const hasMore = visibleCount < schools.length;

  if (schools.length === 0) {
    return (
      <section>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">{heading}</h2>
        <p className="text-slate-500 dark:text-slate-400">No schools listed yet.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{heading}</h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Showing {visible.length} of {schools.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((school) => (
          <Link
            key={school.id}
            href={school.href}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition"
          >
            <p className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition mb-1">
              {school.name}
            </p>
            <p className="font-mono text-sm text-blue-700 dark:text-blue-400">
              {school.airportCode}{school.airportName ? ` – ${school.airportName}` : ""}
            </p>
            <div className="flex items-center justify-between mt-2">
              {school.location && (
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin size={12} />
                  {school.location}
                </p>
              )}
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                <Star size={13} fill="currentColor" />
                <span className="font-semibold">{school.rating.toFixed(1)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="mt-6 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition"
          >
            Load More Schools
          </button>
        </div>
      )}

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-rose-800 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
}
