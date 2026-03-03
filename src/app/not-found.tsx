import Link from "next/link";
import { Plane } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center py-20">
      <div className="mb-6 text-blue-700 dark:text-blue-400 opacity-60">
        <Plane size={64} strokeWidth={1} />
      </div>
      <h1 className="text-7xl font-black text-blue-800 dark:text-blue-300 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        Page Not Found
      </h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-10">
        We couldn&apos;t find that page. Try browsing flight schools by state,
        city, or airport below.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
        >
          Home
        </Link>
        <Link
          href="/states"
          className="px-5 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition"
        >
          Browse by State
        </Link>
        <Link
          href="/cities"
          className="px-5 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition"
        >
          Browse by City
        </Link>
        <Link
          href="/airports"
          className="px-5 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition"
        >
          Browse by Airport
        </Link>
      </div>
    </div>
  );
}
