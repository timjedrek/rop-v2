import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Clock, CheckCircle, BookOpen, MapPin, Star } from "lucide-react";
import {
  programs,
  getProgramBySlug,
  getProgramBySlug as getPrereqBySlug,
  getSchoolsByProgram,
  getCityBySlug,
  getStateBySlug,
  getAirportByCode,
} from "@/lib/mock-data";

type Props = { params: Promise<{ programSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programSlug } = await params;
  const program = getProgramBySlug(programSlug);
  if (!program) return { title: "Program Not Found" };

  const title = `${program.name} – Flight Training Requirements & Schools`;
  const description = program.description.slice(0, 160);
  const canonical = `/programs/${programSlug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
  };
}

export function generateStaticParams() {
  return programs.map((p) => ({ programSlug: p.slug }));
}

export default async function ProgramDetailPage({ params }: Props) {
  const { programSlug } = await params;
  const program = getProgramBySlug(programSlug);
  if (!program) notFound();

  const schools = getSchoolsByProgram(program.slug);
  const prereqs = (program.prerequisites ?? [])
    .map((slug) => getPrereqBySlug(slug))
    .filter(Boolean);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm transition mb-4"
          >
            <ChevronLeft size={16} />
            All Programs
          </Link>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm mb-4">
            <BookOpen size={14} />
            {program.faaPart
              ? `FAR Part ${program.faaPart === "both" ? "61 / 141" : program.faaPart}`
              : "Endorsement / Add-on"}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {program.name}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {program.minimumHours && (
              <span className="flex items-center gap-1.5">
                <CheckCircle size={15} className="text-blue-300" />
                {program.minimumHours}+ flight hours (Part 61 minimum)
              </span>
            )}
            {program.typicalDuration && (
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-blue-300" />
                Typically {program.typicalDuration}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            What is the {program.shortName}?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {program.description}
          </p>
        </section>

        {/* Key facts */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Key Requirements
          </h2>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl divide-y divide-slate-100 dark:divide-slate-800">
            {program.certificate && (
              <div className="px-5 py-4 flex items-start gap-3">
                <CheckCircle size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Certificate / Endorsement Issued</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{program.certificate}</p>
                </div>
              </div>
            )}
            {program.minimumHours && (
              <div className="px-5 py-4 flex items-start gap-3">
                <CheckCircle size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Minimum Flight Hours (Part 61)</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{program.minimumHours} hours</p>
                </div>
              </div>
            )}
            {program.typicalDuration && (
              <div className="px-5 py-4 flex items-start gap-3">
                <Clock size={17} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Typical Duration</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{program.typicalDuration}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Prerequisites */}
        {prereqs.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Prerequisites
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
              You must hold the following before beginning this program:
            </p>
            <div className="flex flex-wrap gap-2">
              {prereqs.map((prereq) => prereq && (
                <Link
                  key={prereq.slug}
                  href={`/programs/${prereq.slug}`}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-400 transition"
                >
                  {prereq.shortName}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Schools offering this program */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Schools Offering {program.shortName}
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
