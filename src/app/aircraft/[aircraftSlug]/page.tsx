import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Plane, MapPin, Star } from "lucide-react";
import {
  trainerAircraft,
  getAircraftBySlug,
  getSchoolsByAircraftSlug,
  getProgramBySlug,
  getCityBySlug,
  getStateBySlug,
  getAirportByCode,
} from "@/lib/mock-data";
import type { AircraftCategory } from "@/lib/types";

type Props = { params: Promise<{ aircraftSlug: string }> };

const categoryLabels: Record<AircraftCategory, string> = {
  "single-engine": "Single-Engine",
  "multi-engine": "Multi-Engine",
  helicopter: "Helicopter",
  glider: "Glider",
  sport: "Sport / LSA",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { aircraftSlug } = await params;
  const aircraft = getAircraftBySlug(aircraftSlug);
  if (!aircraft) return { title: "Aircraft Not Found" };

  const title = `${aircraft.displayName} – Flight Training Aircraft`;
  const description = aircraft.description.slice(0, 160);
  const canonical = `/aircraft/${aircraftSlug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
  };
}

export function generateStaticParams() {
  return trainerAircraft.map((a) => ({ aircraftSlug: a.slug }));
}

export default async function AircraftDetailPage({ params }: Props) {
  const { aircraftSlug } = await params;
  const aircraft = getAircraftBySlug(aircraftSlug);
  if (!aircraft) notFound();

  const schools = getSchoolsByAircraftSlug(aircraft.slug);
  const commonUsePrograms = aircraft.commonUse
    .map((slug) => getProgramBySlug(slug))
    .filter(Boolean);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/aircraft"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm transition mb-4"
          >
            <ChevronLeft size={16} />
            All Aircraft
          </Link>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm mb-4">
            <Plane size={14} />
            {categoryLabels[aircraft.category]}
          </div>

          <p className="text-slate-400 text-sm font-medium mb-1">{aircraft.make}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {aircraft.displayName}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Plane size={15} className="text-blue-300" />
              {aircraft.engineCount === 1 ? "Single engine" : `${aircraft.engineCount} engines`}
            </span>
            {aircraft.typicalCruise && (
              <span className="flex items-center gap-1.5">
                <Plane size={15} className="text-blue-300" />
                Cruise: {aircraft.typicalCruise}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* About */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            About the {aircraft.displayName}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {aircraft.description}
          </p>
        </section>

        {/* Specs */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Specifications
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl divide-y divide-slate-100 dark:divide-slate-800">
            <div className="px-5 py-4 flex items-start gap-3">
              <Plane size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Category</p>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {categoryLabels[aircraft.category]}
                </p>
              </div>
            </div>
            <div className="px-5 py-4 flex items-start gap-3">
              <Plane size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Engines</p>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {aircraft.engineCount === 1 ? "Single engine" : `${aircraft.engineCount} engines`}
                </p>
              </div>
            </div>
            {aircraft.typicalCruise && (
              <div className="px-5 py-4 flex items-start gap-3">
                <Plane size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Typical Cruise Speed</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{aircraft.typicalCruise}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Commonly used for */}
        {commonUsePrograms.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Commonly Used For
            </h2>
            <div className="flex flex-wrap gap-2">
              {commonUsePrograms.map((program) => program && (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-400 transition"
                >
                  {program.shortName}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Schools with this aircraft */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Schools Flying the {aircraft.displayName}
          </h2>
          {schools.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">No schools listed yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {schools.map((school) => {
                const city = getCityBySlug(school.citySlug);
                const state = getStateBySlug(school.stateSlug);
                const airport = getAirportByCode(school.primaryAirportCode);
                return (
                  <Link
                    key={school.id}
                    href={`/${school.stateSlug}/${school.citySlug}/${school.primaryAirportCode.toLowerCase()}/${school.slug}`}
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition"
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition mb-1">
                      {school.name}
                    </p>
                    {airport && (
                      <p className="font-mono text-sm text-blue-700 dark:text-blue-400">
                        {school.primaryAirportCode} – {airport.name}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      {city && state && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin size={12} />
                          {city.name}, {state.abbreviation}
                        </p>
                      )}
                      <div className="flex items-center gap-1 text-amber-500 text-sm">
                        <Star size={13} fill="currentColor" />
                        <span className="font-semibold">{school.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
