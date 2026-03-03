import type { State, City, Airport, FlightSchool } from "./types";

// ── States (all 50) ────────────────────────────────────────────────────────────
// schoolCount / airportCount are denormalized display values.
// In Phase 2 these will be computed from live DB rows.
export const states: State[] = [
  { id: "al", name: "Alabama",        slug: "alabama",        abbreviation: "AL", schoolCount: 14, airportCount:  9 },
  { id: "ak", name: "Alaska",         slug: "alaska",         abbreviation: "AK", schoolCount: 22, airportCount: 45 },
  { id: "az", name: "Arizona",        slug: "arizona",        abbreviation: "AZ", schoolCount: 18, airportCount: 13 },
  { id: "ar", name: "Arkansas",       slug: "arkansas",       abbreviation: "AR", schoolCount:  8, airportCount:  6 },
  { id: "ca", name: "California",     slug: "california",     abbreviation: "CA", schoolCount: 48, airportCount: 28 },
  { id: "co", name: "Colorado",       slug: "colorado",       abbreviation: "CO", schoolCount: 19, airportCount: 16 },
  { id: "ct", name: "Connecticut",    slug: "connecticut",    abbreviation: "CT", schoolCount:  7, airportCount:  5 },
  { id: "de", name: "Delaware",       slug: "delaware",       abbreviation: "DE", schoolCount:  4, airportCount:  3 },
  { id: "fl", name: "Florida",        slug: "florida",        abbreviation: "FL", schoolCount: 42, airportCount: 24 },
  { id: "ga", name: "Georgia",        slug: "georgia",        abbreviation: "GA", schoolCount: 17, airportCount: 11 },
  { id: "hi", name: "Hawaii",         slug: "hawaii",         abbreviation: "HI", schoolCount:  9, airportCount:  7 },
  { id: "id", name: "Idaho",          slug: "idaho",          abbreviation: "ID", schoolCount: 10, airportCount:  9 },
  { id: "il", name: "Illinois",       slug: "illinois",       abbreviation: "IL", schoolCount: 16, airportCount: 12 },
  { id: "in", name: "Indiana",        slug: "indiana",        abbreviation: "IN", schoolCount: 11, airportCount:  8 },
  { id: "ia", name: "Iowa",           slug: "iowa",           abbreviation: "IA", schoolCount:  9, airportCount:  7 },
  { id: "ks", name: "Kansas",         slug: "kansas",         abbreviation: "KS", schoolCount: 12, airportCount: 10 },
  { id: "ky", name: "Kentucky",       slug: "kentucky",       abbreviation: "KY", schoolCount: 10, airportCount:  7 },
  { id: "la", name: "Louisiana",      slug: "louisiana",      abbreviation: "LA", schoolCount: 11, airportCount:  8 },
  { id: "me", name: "Maine",          slug: "maine",          abbreviation: "ME", schoolCount:  7, airportCount:  6 },
  { id: "md", name: "Maryland",       slug: "maryland",       abbreviation: "MD", schoolCount:  9, airportCount:  7 },
  { id: "ma", name: "Massachusetts",  slug: "massachusetts",  abbreviation: "MA", schoolCount: 12, airportCount:  8 },
  { id: "mi", name: "Michigan",       slug: "michigan",       abbreviation: "MI", schoolCount: 18, airportCount: 13 },
  { id: "mn", name: "Minnesota",      slug: "minnesota",      abbreviation: "MN", schoolCount: 16, airportCount: 14 },
  { id: "ms", name: "Mississippi",    slug: "mississippi",    abbreviation: "MS", schoolCount:  8, airportCount:  6 },
  { id: "mo", name: "Missouri",       slug: "missouri",       abbreviation: "MO", schoolCount: 14, airportCount: 10 },
  { id: "mt", name: "Montana",        slug: "montana",        abbreviation: "MT", schoolCount: 11, airportCount: 12 },
  { id: "ne", name: "Nebraska",       slug: "nebraska",       abbreviation: "NE", schoolCount:  8, airportCount:  7 },
  { id: "nv", name: "Nevada",         slug: "nevada",         abbreviation: "NV", schoolCount: 11, airportCount:  8 },
  { id: "nh", name: "New Hampshire",  slug: "new-hampshire",  abbreviation: "NH", schoolCount:  6, airportCount:  5 },
  { id: "nj", name: "New Jersey",     slug: "new-jersey",     abbreviation: "NJ", schoolCount: 11, airportCount:  7 },
  { id: "nm", name: "New Mexico",     slug: "new-mexico",     abbreviation: "NM", schoolCount:  9, airportCount:  8 },
  { id: "ny", name: "New York",       slug: "new-york",       abbreviation: "NY", schoolCount: 28, airportCount: 18 },
  { id: "nc", name: "North Carolina", slug: "north-carolina", abbreviation: "NC", schoolCount: 18, airportCount: 13 },
  { id: "nd", name: "North Dakota",   slug: "north-dakota",   abbreviation: "ND", schoolCount:  7, airportCount:  8 },
  { id: "oh", name: "Ohio",           slug: "ohio",           abbreviation: "OH", schoolCount: 19, airportCount: 13 },
  { id: "ok", name: "Oklahoma",       slug: "oklahoma",       abbreviation: "OK", schoolCount: 13, airportCount: 11 },
  { id: "or", name: "Oregon",         slug: "oregon",         abbreviation: "OR", schoolCount: 14, airportCount: 11 },
  { id: "pa", name: "Pennsylvania",   slug: "pennsylvania",   abbreviation: "PA", schoolCount: 21, airportCount: 14 },
  { id: "ri", name: "Rhode Island",   slug: "rhode-island",   abbreviation: "RI", schoolCount:  4, airportCount:  2 },
  { id: "sc", name: "South Carolina", slug: "south-carolina", abbreviation: "SC", schoolCount: 11, airportCount:  8 },
  { id: "sd", name: "South Dakota",   slug: "south-dakota",   abbreviation: "SD", schoolCount:  7, airportCount:  6 },
  { id: "tn", name: "Tennessee",      slug: "tennessee",      abbreviation: "TN", schoolCount: 15, airportCount: 10 },
  { id: "tx", name: "Texas",          slug: "texas",          abbreviation: "TX", schoolCount: 52, airportCount: 38 },
  { id: "ut", name: "Utah",           slug: "utah",           abbreviation: "UT", schoolCount: 13, airportCount:  9 },
  { id: "vt", name: "Vermont",        slug: "vermont",        abbreviation: "VT", schoolCount:  5, airportCount:  4 },
  { id: "va", name: "Virginia",       slug: "virginia",       abbreviation: "VA", schoolCount: 16, airportCount: 10 },
  { id: "wa", name: "Washington",     slug: "washington",     abbreviation: "WA", schoolCount: 20, airportCount: 14 },
  { id: "wv", name: "West Virginia",  slug: "west-virginia",  abbreviation: "WV", schoolCount:  7, airportCount:  5 },
  { id: "wi", name: "Wisconsin",      slug: "wisconsin",      abbreviation: "WI", schoolCount: 14, airportCount: 11 },
  { id: "wy", name: "Wyoming",        slug: "wyoming",        abbreviation: "WY", schoolCount:  8, airportCount:  8 },
];

// ── Cities ─────────────────────────────────────────────────────────────────────
// Only cities that have airports/schools in mock data.
// nearbyCitySlugs creates the metro-area web (can cross state lines).
export const cities: City[] = [
  // Arizona — Phoenix metro
  { id: "az-mesa",        name: "Mesa",           slug: "mesa",           stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: ["phoenix", "scottsdale", "chandler", "tempe"] },
  { id: "az-phoenix",     name: "Phoenix",        slug: "phoenix",        stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: ["mesa", "scottsdale", "chandler", "tempe"] },
  { id: "az-scottsdale",  name: "Scottsdale",     slug: "scottsdale",     stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: ["mesa", "phoenix", "tempe"] },
  { id: "az-chandler",    name: "Chandler",       slug: "chandler",       stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: ["mesa", "phoenix", "tempe"] },
  { id: "az-tempe",       name: "Tempe",          slug: "tempe",          stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: ["mesa", "phoenix", "scottsdale", "chandler"] },
  { id: "az-tucson",      name: "Tucson",         slug: "tucson",         stateSlug: "arizona",    stateAbbreviation: "AZ", nearbyCitySlugs: [] },

  // Illinois — St. Louis metro (cross-state: Belleville IL ↔ St. Louis MO)
  { id: "il-belleville",  name: "Belleville",     slug: "belleville",     stateSlug: "illinois",   stateAbbreviation: "IL", nearbyCitySlugs: ["st-louis"] },

  // Missouri
  { id: "mo-st-louis",    name: "St. Louis",      slug: "st-louis",       stateSlug: "missouri",   stateAbbreviation: "MO", nearbyCitySlugs: ["belleville"] },
  { id: "mo-kc",          name: "Kansas City",    slug: "kansas-city",    stateSlug: "missouri",   stateAbbreviation: "MO", nearbyCitySlugs: ["overland-park"] },

  // Kansas — Kansas City metro (cross-state: Kansas City MO ↔ Overland Park KS)
  { id: "ks-overland",    name: "Overland Park",  slug: "overland-park",  stateSlug: "kansas",     stateAbbreviation: "KS", nearbyCitySlugs: ["kansas-city"] },

  // Florida — Miami metro
  { id: "fl-miami",       name: "Miami",          slug: "miami",          stateSlug: "florida",    stateAbbreviation: "FL", nearbyCitySlugs: ["pembroke-pines", "fort-lauderdale"] },
  { id: "fl-pp",          name: "Pembroke Pines", slug: "pembroke-pines", stateSlug: "florida",    stateAbbreviation: "FL", nearbyCitySlugs: ["miami", "fort-lauderdale"] },
  { id: "fl-ftl",         name: "Fort Lauderdale",slug: "fort-lauderdale",stateSlug: "florida",    stateAbbreviation: "FL", nearbyCitySlugs: ["miami", "pembroke-pines"] },

  // California
  { id: "ca-san-diego",   name: "San Diego",      slug: "san-diego",      stateSlug: "california", stateAbbreviation: "CA", nearbyCitySlugs: [] },
  { id: "ca-los-angeles", name: "Los Angeles",    slug: "los-angeles",    stateSlug: "california", stateAbbreviation: "CA", nearbyCitySlugs: [] },

  // Tennessee
  { id: "tn-nashville",   name: "Nashville",      slug: "nashville",      stateSlug: "tennessee",  stateAbbreviation: "TN", nearbyCitySlugs: [] },
  { id: "tn-chattanooga", name: "Chattanooga",    slug: "chattanooga",    stateSlug: "tennessee",  stateAbbreviation: "TN", nearbyCitySlugs: [] },
];

// ── Airports ───────────────────────────────────────────────────────────────────
// All three identifiers (ICAO, IATA, FAA LID) must be searchable.
// URL slug uses lowercase ICAO (e.g. /airports/kffz).
// Falcon Field example: KFFZ (ICAO), MSC (IATA), FFZ (FAA LID)
export const airports: Airport[] = [
  // Arizona
  { id: "kffz", name: "Falcon Field Airport",               citySlug: "mesa",           stateSlug: "arizona",    icao: "KFFZ", iata: "MSC",  faaLid: "FFZ" },
  { id: "kdvt", name: "Phoenix Deer Valley Airport",         citySlug: "phoenix",        stateSlug: "arizona",    icao: "KDVT", iata: null,   faaLid: "DVT" },
  { id: "kphx", name: "Phoenix Sky Harbor International",    citySlug: "phoenix",        stateSlug: "arizona",    icao: "KPHX", iata: "PHX",  faaLid: "PHX" },
  { id: "kchd", name: "Chandler Municipal Airport",          citySlug: "chandler",       stateSlug: "arizona",    icao: "KCHD", iata: null,   faaLid: "CHD" },
  { id: "ktus", name: "Tucson International Airport",        citySlug: "tucson",         stateSlug: "arizona",    icao: "KTUS", iata: "TUS",  faaLid: "TUS" },

  // Illinois (St. Louis metro — airport is in Belleville, IL but serves St. Louis, MO)
  { id: "kcps", name: "St. Louis Downtown Airport",          citySlug: "belleville",     stateSlug: "illinois",   icao: "KCPS", iata: "CPS",  faaLid: "CPS" },

  // Missouri
  { id: "kstl", name: "St. Louis Lambert International",     citySlug: "st-louis",       stateSlug: "missouri",   icao: "KSTL", iata: "STL",  faaLid: "STL" },
  { id: "kmkc", name: "Charles B. Wheeler Downtown Airport", citySlug: "kansas-city",    stateSlug: "missouri",   icao: "KMKC", iata: "MKC",  faaLid: "MKC" },

  // Kansas
  { id: "kojc", name: "Johnson County Executive Airport",    citySlug: "overland-park",  stateSlug: "kansas",     icao: "KOJC", iata: "OJC",  faaLid: "OJC" },
  { id: "kixd", name: "New Century Aircenter",               citySlug: "overland-park",  stateSlug: "kansas",     icao: "KIXD", iata: null,   faaLid: "IXD" },

  // Florida
  { id: "kfxe", name: "Fort Lauderdale Executive Airport",   citySlug: "fort-lauderdale",stateSlug: "florida",    icao: "KFXE", iata: "FXE",  faaLid: "FXE" },
  { id: "kopf", name: "Miami-Opa Locka Executive Airport",   citySlug: "miami",          stateSlug: "florida",    icao: "KOPF", iata: "OPF",  faaLid: "OPF" },
  { id: "kpmp", name: "Pompano Beach Airpark",               citySlug: "pembroke-pines", stateSlug: "florida",    icao: "KPMP", iata: "PMP",  faaLid: "PMP" },

  // California
  { id: "kmyf", name: "Montgomery-Gibbs Executive Airport",  citySlug: "san-diego",      stateSlug: "california", icao: "KMYF", iata: "MYF",  faaLid: "MYF" },
  { id: "kcrq", name: "McClellan-Palomar Airport",           citySlug: "san-diego",      stateSlug: "california", icao: "KCRQ", iata: "CLD",  faaLid: "CLD" },
  { id: "klax", name: "Los Angeles International Airport",   citySlug: "los-angeles",    stateSlug: "california", icao: "KLAX", iata: "LAX",  faaLid: "LAX" },

  // Tennessee
  { id: "kbna", name: "Nashville International Airport",     citySlug: "nashville",      stateSlug: "tennessee",  icao: "KBNA", iata: "BNA",  faaLid: "BNA" },
  { id: "kcha", name: "Chattanooga Metropolitan Airport",    citySlug: "chattanooga",    stateSlug: "tennessee",  icao: "KCHA", iata: "CHA",  faaLid: "CHA" },
];

// ── Flight Schools ─────────────────────────────────────────────────────────────
// Matches the 6 schools shown on the home page, plus extras.
// Schools with otherLocations demonstrate multi-campus support.
export const flightSchools: FlightSchool[] = [
  {
    id: "arizona-pilot-academy",
    name: "Arizona Pilot Academy",
    slug: "arizona-pilot-academy",
    description:
      "Arizona Pilot Academy offers comprehensive flight training at Falcon Field Airport in Mesa. With a modern fleet and experienced instructors, we guide students from first flight through ATP certifications.",
    primaryAirportCode: "KFFZ",
    citySlug: "mesa",
    stateSlug: "arizona",
    otherLocations: [
      { airportCode: "KDVT", citySlug: "phoenix", stateSlug: "arizona" },
    ],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Multi-Engine"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/arizona-pilot-academy",
    phone: "(480) 555-0101",
  },
  {
    id: "midwest-flight-training",
    name: "Midwest Flight Training",
    slug: "midwest-flight-training",
    description:
      "Serving the St. Louis metro from St. Louis Downtown Airport in Belleville, IL, Midwest Flight Training provides quality instruction at competitive rates for all skill levels.",
    primaryAirportCode: "KCPS",
    citySlug: "belleville",
    stateSlug: "illinois",
    otherLocations: [],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot"],
    rating: 4.6,
    reviewCount: 89,
    website: "https://example.com/midwest-flight-training",
    phone: "(618) 555-0202",
  },
  {
    id: "suncoast-aviation",
    name: "Suncoast Aviation",
    slug: "suncoast-aviation",
    description:
      "Premier flight school serving the Miami–Fort Lauderdale metro from Pompano Beach Airpark. Year-round VFR flying conditions and an ATP-focused training pipeline.",
    primaryAirportCode: "KPMP",
    citySlug: "pembroke-pines",
    stateSlug: "florida",
    otherLocations: [],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "ATP"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/suncoast-aviation",
    phone: "(954) 555-0303",
  },
  {
    id: "st-louis-flight-academy",
    name: "St. Louis Flight Academy",
    slug: "st-louis-flight-academy",
    description:
      "Located at St. Louis Lambert International, we offer professional-level training programs for aspiring pilots at every stage — from discovery flights to ATP prep.",
    primaryAirportCode: "KSTL",
    citySlug: "st-louis",
    stateSlug: "missouri",
    otherLocations: [],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "Multi-Engine", "ATP"],
    rating: 4.9,
    reviewCount: 67,
    website: "https://example.com/st-louis-flight-academy",
    phone: "(314) 555-0404",
  },
  {
    id: "heartland-flyers",
    name: "Heartland Flyers",
    slug: "heartland-flyers",
    description:
      "Training Kansas City area pilots for over 20 years from Charles B. Wheeler Downtown Airport with a satellite location at Johnson County Executive in Overland Park, KS.",
    primaryAirportCode: "KMKC",
    citySlug: "kansas-city",
    stateSlug: "missouri",
    otherLocations: [
      { airportCode: "KOJC", citySlug: "overland-park", stateSlug: "kansas" },
    ],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/heartland-flyers",
    phone: "(816) 555-0505",
  },
  {
    id: "pacific-coast-flight-school",
    name: "Pacific Coast Flight School",
    slug: "pacific-coast-flight-school",
    description:
      "Based at Montgomery-Gibbs Executive Airport in San Diego, Pacific Coast offers year-round training in some of the country's most favorable VFR flying conditions.",
    primaryAirportCode: "KMYF",
    citySlug: "san-diego",
    stateSlug: "california",
    otherLocations: [],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Seaplane Rating"],
    rating: 4.7,
    reviewCount: 210,
    website: "https://example.com/pacific-coast-flight-school",
    phone: "(619) 555-0606",
  },
  {
    id: "phoenix-flight-academy",
    name: "Phoenix Flight Academy",
    slug: "phoenix-flight-academy",
    description:
      "Accelerated pilot training programs at Deer Valley Airport — one of the nation's busiest single-runway GA airports — in the heart of the Phoenix metro.",
    primaryAirportCode: "KDVT",
    citySlug: "phoenix",
    stateSlug: "arizona",
    otherLocations: [],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Multi-Engine"],
    rating: 4.7,
    reviewCount: 98,
    website: "https://example.com/phoenix-flight-academy",
    phone: "(602) 555-0707",
  },
  {
    id: "tennessee-flight-training",
    name: "Tennessee Flight Training",
    slug: "tennessee-flight-training",
    description:
      "Tennessee Flight Training operates at Nashville and Chattanooga airports, offering flexible scheduling and a modern fleet to serve students across the state.",
    primaryAirportCode: "KBNA",
    citySlug: "nashville",
    stateSlug: "tennessee",
    otherLocations: [
      { airportCode: "KCHA", citySlug: "chattanooga", stateSlug: "tennessee" },
    ],
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.5,
    reviewCount: 73,
    website: "https://example.com/tennessee-flight-training",
    phone: "(615) 555-0808",
  },
];

// ── Lookup helpers ─────────────────────────────────────────────────────────────

export function getStateBySlug(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}

export function getCitiesByState(stateSlug: string): City[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getAirportsByState(stateSlug: string): Airport[] {
  return airports.filter((a) => a.stateSlug === stateSlug);
}

/** Returns schools whose primary location OR any otherLocation is in this state */
export function getSchoolsByState(stateSlug: string): FlightSchool[] {
  return flightSchools.filter(
    (s) =>
      s.stateSlug === stateSlug ||
      s.otherLocations.some((l) => l.stateSlug === stateSlug),
  );
}

/** Look up airport by any of its three identifiers (case-insensitive) */
export function getAirportByCode(code: string): Airport | undefined {
  const upper = code.toUpperCase();
  return airports.find(
    (a) => a.icao === upper || a.iata === upper || a.faaLid === upper,
  );
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getSchoolBySlug(slug: string): FlightSchool | undefined {
  return flightSchools.find((s) => s.slug === slug);
}

export function getAirportsByCity(citySlug: string): Airport[] {
  return airports.filter((a) => a.citySlug === citySlug);
}

export function getSchoolsByCity(citySlug: string): FlightSchool[] {
  return flightSchools.filter(
    (s) =>
      s.citySlug === citySlug ||
      s.otherLocations.some((l) => l.citySlug === citySlug),
  );
}

export function getSchoolsByAirport(icao: string): FlightSchool[] {
  const upper = icao.toUpperCase();
  return flightSchools.filter(
    (s) =>
      s.primaryAirportCode === upper ||
      s.otherLocations.some((l) => l.airportCode === upper),
  );
}
