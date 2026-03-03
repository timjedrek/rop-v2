import type { Metadata } from "next";
import { cities, airports, flightSchools } from "@/lib/mock-data";
import { CitiesExplorer, type CityRow } from "@/components/CitiesExplorer";

export const metadata: Metadata = {
  title: "Browse Flight Schools by City",
  description:
    "Find flight schools in cities across the USA. Browse by city to discover pilot training programs near you.",
  alternates: { canonical: "/cities" },
  openGraph: {
    title: "Browse Flight Schools by City",
    description:
      "Find flight schools in cities across the USA. Browse by city to discover pilot training programs near you.",
    url: "/cities",
    type: "website",
  },
  twitter: {
    title: "Browse Flight Schools by City",
    description:
      "Find flight schools in cities across the USA. Browse by city to discover pilot training programs near you.",
  },
};

export default function CitiesPage() {
  const rows: CityRow[] = cities.map((city) => ({
    id: city.id,
    name: city.name,
    slug: city.slug,
    stateSlug: city.stateSlug,
    stateAbbreviation: city.stateAbbreviation,
    schoolCount: flightSchools.filter((s) => s.citySlug === city.slug).length,
    airportCount: airports.filter((a) => a.citySlug === city.slug).length,
  }));

  return <CitiesExplorer cities={rows} />;
}
