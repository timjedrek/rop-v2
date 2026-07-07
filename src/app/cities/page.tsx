import type { Metadata } from "next";
import { getCitiesWithCounts } from "@/lib/data";
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

export default async function CitiesPage() {
  const cities = await getCitiesWithCounts();
  const rows: CityRow[] = cities.map((city) => ({
    id: city.id,
    name: city.name,
    slug: city.slug,
    stateSlug: city.stateSlug,
    stateAbbreviation: city.stateAbbreviation,
    schoolCount: city.schoolCount,
    airportCount: city.airportCount,
  }));

  return <CitiesExplorer cities={rows} />;
}
