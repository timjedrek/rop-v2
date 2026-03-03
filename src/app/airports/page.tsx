import type { Metadata } from "next";
import { airports, cities, states, flightSchools } from "@/lib/mock-data";
import { AirportsExplorer, type AirportRow } from "@/components/AirportsExplorer";

export const metadata: Metadata = {
  title: "Browse Flight Schools by Airport",
  description:
    "Find FAA-certified flight schools at airports across the USA. Search by ICAO, IATA, or FAA identifier to discover pilot training near you.",
};

export default function AirportsPage() {
  const rows: AirportRow[] = airports.map((airport) => {
    const city = cities.find((c) => c.slug === airport.citySlug);
    const state = states.find((s) => s.slug === airport.stateSlug);
    return {
      id: airport.id,
      name: airport.name,
      icao: airport.icao,
      iata: airport.iata,
      faaLid: airport.faaLid,
      citySlug: airport.citySlug,
      cityName: city?.name ?? airport.citySlug,
      stateSlug: airport.stateSlug,
      stateAbbreviation: state?.abbreviation ?? airport.stateSlug.toUpperCase().slice(0, 2),
      schoolCount: flightSchools.filter(
        (s) => s.primaryAirportCode === airport.icao,
      ).length,
    };
  });

  return <AirportsExplorer airports={rows} />;
}
