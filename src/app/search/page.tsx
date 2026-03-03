import type { Metadata } from "next";
import { Suspense } from "react";
import { flightSchools, programs, trainerAircraft, states, cities } from "@/lib/mock-data";
import { schoolHref, slugToTitle } from "@/lib/utils";
import { AdvancedSearchExplorer } from "@/components/AdvancedSearchExplorer";

export const metadata: Metadata = {
  title: "Search Flight Schools | Flight School Finder",
  description:
    "Filter USA flight schools by state, airport code, aircraft fleet, programs offered, and FAA Part 61 or Part 141 certification to find the perfect fit for your training goals.",
  openGraph: {
    title: "Search Flight Schools",
    description:
      "Filter by state, airport, aircraft, programs, and training type to find your ideal flight school.",
  },
};

export default function SearchPage() {
  const stateAbbrevMap = Object.fromEntries(
    states.map((s) => [s.slug, s.abbreviation])
  );

  const schoolData = flightSchools.map((school) => ({
    id: school.id,
    name: school.name,
    href: schoolHref(school),
    stateSlug: school.stateSlug,
    citySlug: school.citySlug,
    airportCode: school.primaryAirportCode,
    programSlugs: school.programSlugs,
    aircraftSlugs: school.aircraftSlugs ?? [],
    faaPart: school.faaPart,
    rating: school.rating,
    reviewCount: school.reviewCount,
    location: `${slugToTitle(school.citySlug)}, ${stateAbbrevMap[school.stateSlug] ?? school.stateSlug.toUpperCase()}`,
  }));

  const programOptions = [...programs]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((p) => ({ slug: p.slug, shortName: p.shortName }));

  const aircraftOptions = [...trainerAircraft]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((a) => ({ slug: a.slug, displayName: a.displayName }));

  const stateOptions = states.map((s) => ({
    slug: s.slug,
    name: s.name,
    abbreviation: s.abbreviation,
  }));

  const cityOptions = [...cities]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      stateSlug: c.stateSlug,
      stateAbbreviation: c.stateAbbreviation,
    }));

  return (
    <Suspense>
      <AdvancedSearchExplorer
        schools={schoolData}
        programs={programOptions}
        aircraft={aircraftOptions}
        states={stateOptions}
        cities={cityOptions}
      />
    </Suspense>
  );
}
