export type State = {
  id: string;
  name: string;
  slug: string;
  abbreviation: string;
  schoolCount: number;
  airportCount: number;
};

export type City = {
  id: string;
  name: string;
  slug: string;
  stateSlug: string;
  stateAbbreviation: string;
  /** Slugs of related cities in the same metro area (can cross state lines) */
  nearbyCitySlugs: string[];
};

export type Airport = {
  id: string;
  name: string;
  citySlug: string;
  stateSlug: string;
  /** 4-letter ICAO code — used as URL slug (lowercase), e.g. "KFFZ" */
  icao: string;
  /** 3-letter IATA airline code, e.g. "MSC" */
  iata: string | null;
  /** FAA local identifier, e.g. "FFZ" */
  faaLid: string | null;
};

export type OtherLocation = {
  airportCode: string; // ICAO
  citySlug: string;
  stateSlug: string;
};

export type FlightSchool = {
  id: string;
  name: string;
  slug: string;
  description: string;
  primaryAirportCode: string; // ICAO
  citySlug: string;
  stateSlug: string;
  /** Additional locations for multi-campus schools (e.g. ATP, Tennessee Flight Training) */
  otherLocations: OtherLocation[];
  programs: string[];
  rating: number;
  reviewCount: number;
  website: string;
  phone: string;
};

export type Review = {
  id: string;
  schoolId: string;
  rating: number;
  body: string;
  authorName: string;
  createdAt: string; // ISO date string
};
