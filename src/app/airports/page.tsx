import type { Metadata } from "next";
import { getAirportsWithSchoolCounts, getLocationMaps } from "@/lib/data";
import { AirportsExplorer, type AirportRow } from "@/components/AirportsExplorer";

export const metadata: Metadata = {
  title: "Browse Flight Schools by Airport",
  description:
    "Find flight schools at airports across the USA. Search by ICAO, IATA, or FAA identifier to discover pilot training near you.",
  alternates: { canonical: "/airports" },
  openGraph: {
    title: "Browse Flight Schools by Airport",
    description:
      "Find flight schools at airports across the USA. Search by ICAO, IATA, or FAA identifier to discover pilot training near you.",
    url: "/airports",
    type: "website",
  },
  twitter: {
    title: "Browse Flight Schools by Airport",
    description:
      "Find flight schools at airports across the USA. Search by ICAO, IATA, or FAA identifier to discover pilot training near you.",
  },
};

export default async function AirportsPage() {
  const [airports, { cityNameBySlug, stateBySlug }] = await Promise.all([
    getAirportsWithSchoolCounts(),
    getLocationMaps(),
  ]);

  const rows: AirportRow[] = airports.map((airport) => ({
    id: airport.id,
    name: airport.name,
    icao: airport.icao,
    iata: airport.iata,
    faaLid: airport.faaLid,
    citySlug: airport.citySlug,
    cityName: cityNameBySlug[airport.citySlug] ?? airport.citySlug,
    stateSlug: airport.stateSlug,
    stateAbbreviation:
      stateBySlug[airport.stateSlug]?.abbreviation ??
      airport.stateSlug.toUpperCase().slice(0, 2),
    schoolCount: airport.schoolCount,
  }));

  return <AirportsExplorer airports={rows} />;
}
