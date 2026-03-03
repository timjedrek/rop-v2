import Link from "next/link";
import { MapPin, Star } from "lucide-react";

type SchoolCardProps = {
  name: string;
  location: string;       // e.g. "Mesa, AZ"
  rating?: number;
  reviewCount?: number;
  imageGradient?: string;
  href?: string;          // when provided, the whole card becomes a link
};

export function SchoolCard({
  name,
  location,
  rating = 4.8,
  reviewCount = 142,
  imageGradient = "from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600",
  href,
}: SchoolCardProps) {
  const inner = (
    <>
      <div className={`h-48 bg-gradient-to-br ${imageGradient}`} />
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 mb-3">
          <MapPin size={16} />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-amber-500">
            <Star size={18} fill="currentColor" />
            <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            ({reviewCount} reviews)
          </span>
        </div>
      </div>
    </>
  );

  const cls =
    "bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 border border-slate-200 dark:border-slate-700 block";

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}
