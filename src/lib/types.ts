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
  /** Short paragraph describing the airport for the detail page */
  description?: string;
};

export type ContactPerson = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

export type FleetRange =
  | "1-3" | "3-6" | "6-9" | "10-20" | "20-30" | "30-40" | "40-50" | "50+";

export type AircraftCategory =
  | "single-engine"
  | "multi-engine"
  | "helicopter"
  | "glider"
  | "sport";

/** A training program / certificate / rating offered by flight schools */
export type Program = {
  id: string;
  slug: string;
  /** Full official name, e.g. "Private Pilot Certificate" */
  name: string;
  /** Short display name used in tags/chips, e.g. "Private Pilot" */
  shortName: string;
  description: string;
  faaPart?: "61" | "141" | "both";
  /** Minimum flight hours required (Part 61 value) */
  minimumHours?: number;
  /** FAA certificate or endorsement issued upon completion */
  certificate?: string;
  /** Slugs of programs that must be completed first */
  prerequisites?: string[];
  /** Typical completion time, e.g. "6–12 months" */
  typicalDuration?: string;
  /** Controls display order everywhere — maps to sort_order column in DB */
  sortOrder: number;
};

/** A make/model of aircraft commonly used for flight training */
export type TrainerAircraft = {
  id: string;
  slug: string;
  make: string;
  model: string;
  /** Canonical display name, e.g. "Cessna 172 Skyhawk" */
  displayName: string;
  category: AircraftCategory;
  description: string;
  /** Program slugs this aircraft is typically used for */
  commonUse: string[];
  engineCount: number;
  /** Approximate cruise speed, e.g. "~122 knots" */
  typicalCruise?: string;
  /** Controls display order everywhere — maps to sort_order column in DB */
  sortOrder: number;
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
  /** Slugs referencing the programs[] catalog in mock-data / DB */
  programSlugs: string[];
  rating: number;
  reviewCount: number;
  website: string;
  phone: string;
  /** When true, the school appears in the Featured section on the home page */
  featured?: boolean;
  /** Whether the school operates under FAR Part 61, Part 141, or both */
  faaPart?: "61" | "141" | "both";
  contacts?: ContactPerson[];
  /** Slugs referencing the trainerAircraft[] catalog in mock-data / DB */
  aircraftSlugs?: string[];
  estimatedPlanes?: FleetRange;
  estimatedInstructors?: FleetRange;
};

export type Review = {
  id: string;
  schoolId: string;
  rating: number;
  body: string;
  authorName: string;
  createdAt: string; // ISO date string
};
