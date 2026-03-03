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

export type FlightSchool = {
  id: string;
  name: string;
  slug: string;
  description: string;
  primaryAirportCode: string; // ICAO
  citySlug: string;
  stateSlug: string;
  /**
   * Links this listing to other listings of the same school brand.
   * All locations of the same organization share the same organizationId.
   * Single-location schools omit this field.
   */
  organizationId?: string;
  programs: string[];
  rating: number;
  reviewCount: number;
  website: string;
  phone: string;
  /** When true, the school appears in the Featured section on the home page */
  featured?: boolean;
};

export type Review = {
  id: string;
  schoolId: string;
  rating: number;
  body: string;
  authorName: string;
  createdAt: string; // ISO date string
};
