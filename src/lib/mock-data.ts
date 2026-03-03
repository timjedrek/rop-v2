import type { State, City, Airport, FlightSchool, Review } from "./types";

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
  { id: "kffz", name: "Falcon Field Airport",               citySlug: "mesa",           stateSlug: "arizona",    icao: "KFFZ", iata: "MSC",  faaLid: "FFZ",
    description: "Falcon Field Airport (KFFZ) in Mesa, Arizona is one of the busiest general aviation airports in the United States. Originally built as a World War II training base for British RAF pilots, the airport today serves a thriving community of flight schools, charter operators, and private pilots. Its uncongested airspace, 300+ days of sunshine per year, and proximity to the Phoenix metro make it an ideal location for year-round flight training from first solo through advanced ratings." },
  { id: "kdvt", name: "Phoenix Deer Valley Airport",         citySlug: "phoenix",        stateSlug: "arizona",    icao: "KDVT", iata: null,   faaLid: "DVT",
    description: "Phoenix Deer Valley Airport (KDVT) is one of the nation's busiest single-runway general aviation airports, handling hundreds of operations daily in the northwest Phoenix metro. The airport's Class D airspace and pattern-intensive environment give student pilots exceptional radio communication and traffic-awareness experience early in their training. Excellent VFR weather, a modern terminal, and multiple flight school tenants make KDVT a top choice for Private Pilot through CFI training." },
  { id: "kphx", name: "Phoenix Sky Harbor International",    citySlug: "phoenix",        stateSlug: "arizona",    icao: "KPHX", iata: "PHX",  faaLid: "PHX",
    description: "Phoenix Sky Harbor International Airport (KPHX) is the primary commercial service airport for the greater Phoenix metropolitan area and one of the busiest airports in the American Southwest. As a Class B airport, it serves as an important navigational reference and airspace boundary for student pilots training at nearby GA fields. Some advanced and instrument-rated training programs conduct Class B transition flights out of KPHX to give students real-world experience in complex, high-traffic airspace." },
  { id: "kchd", name: "Chandler Municipal Airport",          citySlug: "chandler",       stateSlug: "arizona",    icao: "KCHD", iata: null,   faaLid: "CHD",
    description: "Chandler Municipal Airport (KCHD) is a general aviation reliever airport in the southeast Phoenix metro. With minimal commercial traffic and a relaxed pattern environment, KCHD is well-suited for primary flight training. The airport sits within easy flying distance of several practice areas in the Sonoran Desert and benefits from the same 300+ days of VFR weather that makes the entire Phoenix metro a pilot-training hub." },
  { id: "ktus", name: "Tucson International Airport",        citySlug: "tucson",         stateSlug: "arizona",    icao: "KTUS", iata: "TUS",  faaLid: "TUS",
    description: "Tucson International Airport (KTUS) serves both commercial airline traffic and a robust general aviation community in southern Arizona. Situated at roughly 2,600 feet MSL with consistent desert VFR conditions, KTUS is home to several flight training programs that leverage the region's clear skies and diverse terrain — from desert flatlands to mountain ridges — for well-rounded pilot development. Instrument students benefit from the full suite of ILS, RNAV, and VOR approaches serving the airport." },

  // Illinois (St. Louis metro — airport is in Belleville, IL but serves St. Louis, MO)
  { id: "kcps", name: "St. Louis Downtown Airport",          citySlug: "belleville",     stateSlug: "illinois",   icao: "KCPS", iata: "CPS",  faaLid: "CPS",
    description: "St. Louis Downtown Airport (KCPS), located in Belleville, Illinois, is a general aviation reliever airport serving the greater St. Louis metro area. Despite its Illinois address, KCPS functions as a practical training hub for pilots from both sides of the Mississippi River. Its relatively quiet pattern and proximity to St. Louis Lambert's Class B airspace give student pilots valuable exposure to complex airspace transitions while keeping training costs manageable at a non-commercial field." },

  // Missouri
  { id: "kstl", name: "St. Louis Lambert International",     citySlug: "st-louis",       stateSlug: "missouri",   icao: "KSTL", iata: "STL",  faaLid: "STL",
    description: "St. Louis Lambert International Airport (KSTL) is Missouri's largest and busiest airport, anchoring the St. Louis metro's aviation infrastructure. As a Class B facility with multiple parallel runways and a full ILS/RNAV approach suite, KSTL is the benchmark airspace environment for instrument-rated pilots training in the region. Flight schools operating here give students unparalleled exposure to real-world ATC communication and commercial traffic procedures in a major hub environment." },
  { id: "kmkc", name: "Charles B. Wheeler Downtown Airport", citySlug: "kansas-city",    stateSlug: "missouri",   icao: "KMKC", iata: "MKC",  faaLid: "MKC",
    description: "Charles B. Wheeler Downtown Airport (KMKC) sits along the Missouri River just north of downtown Kansas City, offering a uniquely urban backdrop for general aviation training. The airport features Class D airspace and sits comfortably clear of Kansas City International's Class B, making it an ideal base for primary training with convenient access to practice areas and cross-country routes across the Great Plains. Its downtown location means easy access for Kansas City-area students." },

  // Kansas
  { id: "kojc", name: "Johnson County Executive Airport",    citySlug: "overland-park",  stateSlug: "kansas",     icao: "KOJC", iata: "OJC",  faaLid: "OJC",
    description: "Johnson County Executive Airport (KOJC) in Overland Park, Kansas is a modern GA reliever airport serving the prosperous Kansas side of the Kansas City metro. With a well-maintained runway, instrument approaches, and a growing roster of flight school tenants, KOJC is the go-to training airport for students in Johnson County and the surrounding suburbs. Its Class D airspace and active pattern traffic give trainees solid radio discipline and situational awareness from their earliest lessons." },
  { id: "kixd", name: "New Century Aircenter",               citySlug: "overland-park",  stateSlug: "kansas",     icao: "KIXD", iata: null,   faaLid: "IXD",
    description: "New Century Aircenter (KIXD) is a general aviation airport located southwest of the Kansas City metro near Gardner, Kansas. Originally built as Olathe Naval Air Station, the airport retains wide runways and excellent facilities suited to both primary training and complex/high-performance operations. Its non-towered environment and multiple runways offer student pilots flexibility in pattern work, while the relatively light traffic density provides a confidence-building setting for solo and cross-country flights." },

  // Florida
  { id: "kfxe", name: "Fort Lauderdale Executive Airport",   citySlug: "fort-lauderdale",stateSlug: "florida",    icao: "KFXE", iata: "FXE",  faaLid: "FXE",
    description: "Fort Lauderdale Executive Airport (KFXE) is one of the premier general aviation airports in South Florida, handling a mix of private jets, charter turboprops, and flight school traffic in Broward County. The airport's Class D airspace, year-round VMC weather, and proximity to both Miami's Class B and the Atlantic coast make it an outstanding environment for building diverse pilot experience. Multiple FAA-certificated flight schools call KFXE home, offering training from PPL through ATP in one of the country's most active GA markets." },
  { id: "kopf", name: "Miami-Opa Locka Executive Airport",   citySlug: "miami",          stateSlug: "florida",    icao: "KOPF", iata: "OPF",  faaLid: "OPF",
    description: "Miami-Opa Locka Executive Airport (KOPF) is a busy general aviation reliever airport serving the northern Miami-Dade area. Situated just outside Miami's Class B airspace, KOPF gives student pilots immediate access to one of the nation's most complex airspace environments while training in a more manageable tower-controlled setting. Year-round tropical VFR conditions and a diverse surrounding landscape — coast, Everglades, and urban corridor — make for a rich and varied training experience." },
  { id: "kpmp", name: "Pompano Beach Airpark",               citySlug: "pembroke-pines", stateSlug: "florida",    icao: "KPMP", iata: "PMP",  faaLid: "PMP",
    description: "Pompano Beach Airpark (KPMP) is a general aviation airport in Broward County, Florida, ideally positioned between Fort Lauderdale and Boca Raton. With a non-towered environment, a single active runway, and consistent South Florida VFR weather, KPMP is a popular base for primary and multi-engine flight training. Student pilots here quickly become comfortable with self-announce procedures and uncontrolled pattern operations — skills that translate directly to real-world cross-country flying." },

  // California
  { id: "kmyf", name: "Montgomery-Gibbs Executive Airport",  citySlug: "san-diego",      stateSlug: "california", icao: "KMYF", iata: "MYF",  faaLid: "MYF",
    description: "Montgomery-Gibbs Executive Airport (KMYF) is San Diego's busiest general aviation airport, located in the Mission Hills area just eight miles northeast of downtown. Its Class D airspace, coastal proximity, and mild year-round weather create an exceptional training environment where students fly over Pacific beaches, mountains, and desert terrain within a single lesson. KMYF hosts numerous flight training programs and benefits from San Diego's remarkably consistent VFR conditions, averaging fewer IFR days per year than almost any major metro in the country." },
  { id: "kcrq", name: "McClellan-Palomar Airport",           citySlug: "san-diego",      stateSlug: "california", icao: "KCRQ", iata: "CLD",  faaLid: "CLD",
    description: "McClellan-Palomar Airport (KCRQ) in Carlsbad, California serves the north San Diego County coast and is one of Southern California's most active general aviation airports. The airport's tower-controlled environment, ILS approach, and proximity to both LAX and SAN Class B airspace give students valuable experience navigating complex SoCal airspace. Marine-layer mornings followed by clear afternoons mean IFR students get genuine IMC exposure while VFR students enjoy some of the best cross-country flying conditions in the western United States." },
  { id: "klax", name: "Los Angeles International Airport",   citySlug: "los-angeles",    stateSlug: "california", icao: "KLAX", iata: "LAX",  faaLid: "LAX",
    description: "Los Angeles International Airport (KLAX) is one of the world's busiest airports and the primary commercial aviation gateway to Southern California. As a Class B airport with multiple parallel runways and extraordinarily dense ATC traffic, KLAX itself is not a typical flight training base — but it forms the centerpiece of the LA Basin's complex airspace that every SoCal instrument student must learn to navigate. Advanced and instrument-rated training programs regularly conduct Class B operations and approaches into KLAX to give students authentic high-workload flight experience." },

  // Tennessee
  { id: "kbna", name: "Nashville International Airport",     citySlug: "nashville",      stateSlug: "tennessee",  icao: "KBNA", iata: "BNA",  faaLid: "BNA",
    description: "Nashville International Airport (KBNA) is Tennessee's busiest airport, serving both commercial airline traffic and a growing general aviation community in the heart of Middle Tennessee. The airport's Class C airspace, multiple instrument approaches, and diverse surrounding terrain — rolling hills, river valleys, and open farmland — make it an excellent environment for instrument and commercial training. Flight schools operating at KBNA give students real-world exposure to ATC procedures at a major regional hub without the complexity of a full Class B facility." },
  { id: "kcha", name: "Chattanooga Metropolitan Airport",    citySlug: "chattanooga",    stateSlug: "tennessee",  icao: "KCHA", iata: "CHA",  faaLid: "CHA",
    description: "Chattanooga Metropolitan Airport (KCHA) serves the greater Chattanooga area in the scenic Tennessee River valley, flanked by Lookout Mountain and the ridges of the southern Appalachians. The airport's Class C airspace and mix of commercial and GA traffic give student pilots meaningful ATC interaction in a less overwhelming environment than a major hub. The surrounding mountain terrain provides outstanding cross-country and instrument training routes, and the relatively mild four-season climate allows for solid year-round training schedules." },
];

// ── Flight Schools ─────────────────────────────────────────────────────────────
// Each physical location is its own listing.
// Multi-location brands share an organizationId so their detail pages can
// cross-link to sibling listings ("Other Locations" section).
export const flightSchools: FlightSchool[] = [
  // ── Arizona Pilot Academy (2 locations) ────────────────────────────────────
  {
    id: "arizona-pilot-academy-mesa",
    name: "Arizona Pilot Academy",
    slug: "arizona-pilot-academy",
    description:
      "Arizona Pilot Academy offers comprehensive flight training at Falcon Field Airport in Mesa. With a modern fleet and experienced instructors, we guide students from first flight through ATP certifications.",
    primaryAirportCode: "KFFZ",
    citySlug: "mesa",
    stateSlug: "arizona",
    organizationId: "arizona-pilot-academy",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Multi-Engine"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/arizona-pilot-academy",
    phone: "(480) 555-0101",
    featured: true,
    aircraft: ["Cessna 172 Skyhawk", "Piper Cherokee", "Beechcraft Baron 58", "Cessna 182 Skylane"],
    estimatedPlanes: "10-20",
    estimatedInstructors: "10-20",
    contacts: [
      { name: "Robert Hale", title: "Owner / Chief Pilot", phone: "(480) 555-0101", email: "rhale@example.com" },
      { name: "Maria Santos", title: "Director of Training", phone: "(480) 555-0103", email: "msantos@example.com" },
      { name: "Kevin Park", title: "Front Desk / Scheduling", phone: "(480) 555-0104", email: "kpark@example.com" },
    ],
  },
  {
    id: "arizona-pilot-academy-phoenix",
    name: "Arizona Pilot Academy – Deer Valley",
    slug: "arizona-pilot-academy-deer-valley",
    description:
      "Arizona Pilot Academy's Deer Valley location at Phoenix Deer Valley Airport brings the same experienced instructors and modern fleet to the northwest Phoenix metro.",
    primaryAirportCode: "KDVT",
    citySlug: "phoenix",
    stateSlug: "arizona",
    organizationId: "arizona-pilot-academy",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Multi-Engine"],
    rating: 4.7,
    reviewCount: 58,
    website: "https://example.com/arizona-pilot-academy",
    phone: "(602) 555-0102",
    aircraft: ["Cessna 172 Skyhawk", "Piper Cherokee", "Cessna 182 Skylane"],
    estimatedPlanes: "6-9",
    estimatedInstructors: "6-9",
    contacts: [
      { name: "Dana Cole", title: "Location Manager / CFI", phone: "(602) 555-0102", email: "dcole@example.com" },
      { name: "Tina Ruiz", title: "Front Desk / Scheduling", phone: "(602) 555-0105", email: "truiz@example.com" },
    ],
  },

  // ── Midwest Flight Training (single location) ──────────────────────────────
  {
    id: "midwest-flight-training",
    name: "Midwest Flight Training",
    slug: "midwest-flight-training",
    description:
      "Serving the St. Louis metro from St. Louis Downtown Airport in Belleville, IL, Midwest Flight Training provides quality instruction at competitive rates for all skill levels.",
    primaryAirportCode: "KCPS",
    citySlug: "belleville",
    stateSlug: "illinois",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot"],
    rating: 4.6,
    reviewCount: 89,
    website: "https://example.com/midwest-flight-training",
    phone: "(618) 555-0202",
    aircraft: ["Cessna 172 Skyhawk", "Piper Cherokee", "Cessna 152"],
    estimatedPlanes: "6-9",
    estimatedInstructors: "3-6",
    contacts: [
      { name: "Gary Novak", title: "Owner / Chief Pilot", phone: "(618) 555-0202", email: "gnovak@example.com" },
      { name: "Pam Weston", title: "Front Desk / Scheduling", phone: "(618) 555-0203", email: "pweston@example.com" },
    ],
  },

  // ── Suncoast Aviation (single location) ───────────────────────────────────
  {
    id: "suncoast-aviation",
    name: "Suncoast Aviation",
    slug: "suncoast-aviation",
    description:
      "Premier flight school serving the Miami–Fort Lauderdale metro from Pompano Beach Airpark. Year-round VFR flying conditions and an ATP-focused training pipeline.",
    primaryAirportCode: "KPMP",
    citySlug: "pembroke-pines",
    stateSlug: "florida",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "ATP"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/suncoast-aviation",
    phone: "(954) 555-0303",
    featured: true,
    aircraft: ["Cessna 172 Skyhawk", "Cessna 182 Skylane", "Piper Seminole", "Beechcraft Baron 58", "Diamond DA20"],
    estimatedPlanes: "20-30",
    estimatedInstructors: "20-30",
    contacts: [
      { name: "Carlos Vega", title: "Owner", phone: "(954) 555-0303", email: "cvega@example.com" },
      { name: "Angela Marsh", title: "Chief Pilot / Director of Training", phone: "(954) 555-0304", email: "amarsh@example.com" },
      { name: "Jordan Lee", title: "Front Desk / Scheduling", phone: "(954) 555-0305", email: "jlee@example.com" },
    ],
  },

  // ── St. Louis Flight Academy (single location) ────────────────────────────
  {
    id: "st-louis-flight-academy",
    name: "St. Louis Flight Academy",
    slug: "st-louis-flight-academy",
    description:
      "Located at St. Louis Lambert International, we offer professional-level training programs for aspiring pilots at every stage — from discovery flights to ATP prep.",
    primaryAirportCode: "KSTL",
    citySlug: "st-louis",
    stateSlug: "missouri",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "Multi-Engine", "ATP"],
    rating: 4.9,
    reviewCount: 67,
    website: "https://example.com/st-louis-flight-academy",
    phone: "(314) 555-0404",
    featured: true,
    aircraft: ["Cessna 172 Skyhawk", "Piper Cherokee", "Piper Seminole", "Beechcraft Duchess"],
    estimatedPlanes: "10-20",
    estimatedInstructors: "10-20",
    contacts: [
      { name: "Thomas Ellery", title: "Owner / Chief Pilot", phone: "(314) 555-0404", email: "tellery@example.com" },
      { name: "Rachel Burns", title: "Director of Training", phone: "(314) 555-0405", email: "rburns@example.com" },
      { name: "Neil Cho", title: "Front Desk / Scheduling", phone: "(314) 555-0406", email: "ncho@example.com" },
    ],
  },

  // ── Heartland Flyers (2 locations) ────────────────────────────────────────
  {
    id: "heartland-flyers-kc",
    name: "Heartland Flyers",
    slug: "heartland-flyers",
    description:
      "Training Kansas City area pilots for over 20 years from Charles B. Wheeler Downtown Airport. Heartland Flyers' downtown location is the gateway to our regional flight training network.",
    primaryAirportCode: "KMKC",
    citySlug: "kansas-city",
    stateSlug: "missouri",
    organizationId: "heartland-flyers",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.8,
    reviewCount: 142,
    website: "https://example.com/heartland-flyers",
    phone: "(816) 555-0505",
    featured: true,
    aircraft: ["Cessna 172 Skyhawk", "Cessna 152", "Piper Cherokee", "Van's RV-12"],
    estimatedPlanes: "10-20",
    estimatedInstructors: "10-20",
    contacts: [
      { name: "Frank Briggs", title: "Owner / Founder", phone: "(816) 555-0505", email: "fbriggs@example.com" },
      { name: "Donna Pierce", title: "Chief Pilot", phone: "(816) 555-0507", email: "dpierce@example.com" },
      { name: "Sam Okafor", title: "Front Desk / Scheduling", phone: "(816) 555-0508", email: "sokafor@example.com" },
    ],
  },
  {
    id: "heartland-flyers-overland-park",
    name: "Heartland Flyers – Overland Park",
    slug: "heartland-flyers-overland-park",
    description:
      "Heartland Flyers' Johnson County location at Overland Park Executive Airport serves the Kansas side of the KC metro with the same trusted instruction and fleet.",
    primaryAirportCode: "KOJC",
    citySlug: "overland-park",
    stateSlug: "kansas",
    organizationId: "heartland-flyers",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.7,
    reviewCount: 61,
    website: "https://example.com/heartland-flyers",
    phone: "(913) 555-0506",
    aircraft: ["Cessna 172 Skyhawk", "Piper Cherokee", "Van's RV-12"],
    estimatedPlanes: "6-9",
    estimatedInstructors: "6-9",
    contacts: [
      { name: "Casey Tran", title: "Location Manager / CFI", phone: "(913) 555-0506", email: "ctran@example.com" },
      { name: "Bria Owens", title: "Front Desk / Scheduling", phone: "(913) 555-0509", email: "bowens@example.com" },
    ],
  },

  // ── Pacific Coast Flight School (single location) ─────────────────────────
  {
    id: "pacific-coast-flight-school",
    name: "Pacific Coast Flight School",
    slug: "pacific-coast-flight-school",
    description:
      "Based at Montgomery-Gibbs Executive Airport in San Diego, Pacific Coast offers year-round training in some of the country's most favorable VFR flying conditions.",
    primaryAirportCode: "KMYF",
    citySlug: "san-diego",
    stateSlug: "california",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Seaplane Rating"],
    rating: 4.7,
    reviewCount: 210,
    website: "https://example.com/pacific-coast-flight-school",
    phone: "(619) 555-0606",
    featured: true,
    aircraft: ["Cessna 172 Skyhawk", "Cessna 182 Skylane", "Piper Cherokee", "Robinson R-44", "Diamond DA40"],
    estimatedPlanes: "20-30",
    estimatedInstructors: "20-30",
    contacts: [
      { name: "Linda Hayashi", title: "Owner / Chief Pilot", phone: "(619) 555-0606", email: "lhayashi@example.com" },
      { name: "Greg Fontaine", title: "Director of Training", phone: "(619) 555-0607", email: "gfontaine@example.com" },
      { name: "Maya Torres", title: "Front Desk / Scheduling", phone: "(619) 555-0608", email: "mtorres@example.com" },
    ],
  },

  // ── Phoenix Flight Academy (single location) ──────────────────────────────
  {
    id: "phoenix-flight-academy",
    name: "Phoenix Flight Academy",
    slug: "phoenix-flight-academy",
    description:
      "Accelerated pilot training programs at Deer Valley Airport — one of the nation's busiest single-runway GA airports — in the heart of the Phoenix metro.",
    primaryAirportCode: "KDVT",
    citySlug: "phoenix",
    stateSlug: "arizona",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI", "Multi-Engine"],
    rating: 4.7,
    reviewCount: 98,
    website: "https://example.com/phoenix-flight-academy",
    phone: "(602) 555-0707",
    featured: true,
  },

  // ── Tennessee Flight Training (2 locations) ───────────────────────────────
  {
    id: "tennessee-flight-training-nashville",
    name: "Tennessee Flight Training",
    slug: "tennessee-flight-training",
    description:
      "Tennessee Flight Training's Nashville location at BNA offers flexible scheduling and a modern fleet for students in Middle Tennessee.",
    primaryAirportCode: "KBNA",
    citySlug: "nashville",
    stateSlug: "tennessee",
    organizationId: "tennessee-flight-training",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.5,
    reviewCount: 73,
    website: "https://example.com/tennessee-flight-training",
    phone: "(615) 555-0808",
  },
  {
    id: "tennessee-flight-training-chattanooga",
    name: "Tennessee Flight Training – Chattanooga",
    slug: "tennessee-flight-training-chattanooga",
    description:
      "Tennessee Flight Training's Chattanooga location serves East Tennessee pilots with the same quality instruction and fleet as the Nashville campus.",
    primaryAirportCode: "KCHA",
    citySlug: "chattanooga",
    stateSlug: "tennessee",
    organizationId: "tennessee-flight-training",
    programs: ["Private Pilot", "Instrument Rating", "Commercial Pilot", "CFI"],
    rating: 4.4,
    reviewCount: 38,
    website: "https://example.com/tennessee-flight-training",
    phone: "(423) 555-0809",
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

export function getSchoolsByState(stateSlug: string): FlightSchool[] {
  return flightSchools.filter((s) => s.stateSlug === stateSlug);
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
  return flightSchools.filter((s) => s.citySlug === citySlug);
}

export function getSchoolsByAirport(icao: string): FlightSchool[] {
  const upper = icao.toUpperCase();
  return flightSchools.filter((s) => s.primaryAirportCode === upper);
}

export function getFeaturedSchools(): FlightSchool[] {
  return flightSchools.filter((s) => s.featured);
}

/**
 * Returns all schools sorted by a weighted score that factors in both
 * rating and review count: score = rating × log(reviewCount + 1)
 * This rewards schools that are both highly rated AND well-reviewed.
 */
export function getTopRatedSchools(): FlightSchool[] {
  const score = (s: FlightSchool) => s.rating * Math.log(s.reviewCount + 1);
  return [...flightSchools].sort((a, b) => score(b) - score(a));
}

/** Returns all sibling listings for the same brand (excludes the given school itself) */
export function getRelatedSchools(school: FlightSchool): FlightSchool[] {
  if (!school.organizationId) return [];
  return flightSchools.filter(
    (s) => s.organizationId === school.organizationId && s.id !== school.id,
  );
}

// ── Reviews ────────────────────────────────────────────────────────────────────
export const reviews: Review[] = [
  // arizona-pilot-academy-mesa
  { id: "r1",  schoolId: "arizona-pilot-academy-mesa",  rating: 5, authorName: "Jake M.",   createdAt: "2025-11-10", body: "Excellent instructors and a modern fleet. Got my PPL in 8 months — highly recommend." },
  { id: "r2",  schoolId: "arizona-pilot-academy-mesa",  rating: 5, authorName: "Sara T.",   createdAt: "2025-09-22", body: "Great environment for learning. Scheduling is easy and their DPE first-time pass rate speaks for itself." },
  { id: "r3",  schoolId: "arizona-pilot-academy-mesa",  rating: 4, authorName: "Carlos R.", createdAt: "2025-07-05", body: "Good school overall. Planes are well-maintained. Wish ground school was a bit more structured." },
  { id: "r4",  schoolId: "arizona-pilot-academy-mesa",  rating: 5, authorName: "Aisha K.",  createdAt: "2025-04-17", body: "Did my instrument rating here after training elsewhere — night and day difference in instruction quality." },
  // suncoast-aviation
  { id: "r5",  schoolId: "suncoast-aviation",           rating: 5, authorName: "Mike D.",   createdAt: "2025-12-01", body: "Year-round VFR makes training incredibly efficient. Finished my commercial in under 14 months." },
  { id: "r6",  schoolId: "suncoast-aviation",           rating: 5, authorName: "Priya N.",  createdAt: "2025-10-14", body: "The ATP pipeline here is top-notch. Several instructors are current airline pilots, which is invaluable." },
  { id: "r7",  schoolId: "suncoast-aviation",           rating: 4, authorName: "Tom W.",    createdAt: "2025-08-30", body: "Solid school. Busy ramp can delay flights during peak season but it's manageable." },
  // pacific-coast-flight-school
  { id: "r8",  schoolId: "pacific-coast-flight-school", rating: 5, authorName: "Lisa C.",   createdAt: "2026-01-08", body: "Training over the San Diego coast is breathtaking. The seaplane add-on is a bucket-list experience." },
  { id: "r9",  schoolId: "pacific-coast-flight-school", rating: 4, authorName: "Omar F.",   createdAt: "2025-11-30", body: "Great instructors and facilities. Worth every penny for the training environment alone." },
  // st-louis-flight-academy
  { id: "r10", schoolId: "st-louis-flight-academy",     rating: 5, authorName: "Beth H.",   createdAt: "2026-02-12", body: "Best flight school in the Midwest. Very professional operation from front desk all the way through checkrides." },
  { id: "r11", schoolId: "st-louis-flight-academy",     rating: 5, authorName: "Dave P.",   createdAt: "2025-12-19", body: "Knocked out my commercial multi-engine add-on in record time using their ATP prep track." },
  // heartland-flyers-kc
  { id: "r12", schoolId: "heartland-flyers-kc",         rating: 5, authorName: "Hannah L.", createdAt: "2025-10-03", body: "20 years of reputation for a reason. Instructors are patient and incredibly thorough." },
  { id: "r13", schoolId: "heartland-flyers-kc",         rating: 4, authorName: "Raj S.",    createdAt: "2025-09-11", body: "Good training and loved the downtown airport location. Easy commute from the city." },
];

export function getReviewsBySchool(schoolId: string): Review[] {
  return reviews.filter((r) => r.schoolId === schoolId);
}
