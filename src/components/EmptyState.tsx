import Link from "next/link";

/** Shared "nothing here yet" box for listing sections */
export function EmptyState({
  title,
  hint,
  actionLabel = "Submit a listing",
  actionHref = "/schools/add",
}: {
  title: string;
  hint: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-10 text-center text-slate-500 dark:text-slate-400">
      <p className="text-lg font-medium mb-1">{title}</p>
      <p className="text-sm">
        {hint}{" "}
        <Link
          href={actionHref}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {actionLabel}
        </Link>
      </p>
    </div>
  );
}
