"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { AircraftCategory } from "@/lib/types";

const FILTERS: { value: AircraftCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "single-engine", label: "Single-Engine" },
  { value: "multi-engine", label: "Multi-Engine" },
  { value: "helicopter", label: "Helicopter" },
  { value: "sport", label: "Sport / LSA" },
  { value: "glider", label: "Glider" },
];

export default function AircraftFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map(({ value, label }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            onClick={() => select(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              isActive
                ? "bg-blue-700 border-blue-700 text-white"
                : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-400"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
