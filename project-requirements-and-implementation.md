# project-requirements-and-implementation.md
Last updated: March 2026

## Project Goal

Create a SEO-first business directory for USA-based flight schools.

Primary objectives:
- Rank highly in organic search for queries such as  
  “Mesa, Arizona flight schools”  
  “flight schools near KCPS”  
  “St Louis flight schools”  
  “Pembroke Pines flight training”  
- Serve as a high-quality lead-generation / sales tool for research for a Flight School Marketing Agency
- Learn how to program using a new tech stack (NextJS and SupaBase)

The core product is a clean directory listing focused on flight schools.

## Core Public Features (must be built first – SEO critical)

### Homepage (/)

**Navbar**
- Featured Schools
- Top Rated Schools
- Browse Schools
  - By State
  - By City
  - By Airport
- Login

**Hero section**
- Large headline + subheadline
- Dynamic search field with good UX  
  → should allow searching by:
  - school name
  - city (including nearby/associated cities)
  - state
  - airport identifiers (IATA, ICAO, FAA LID)
  - airport name

**Below hero**
- Featured schools (cards)
- Top rated schools (cards)

**Footer**
- Keep minimal for now

### School detail page

URL structure (SEO-optimized deep linking):
/[state-slug]/[city-slug]/[airport-slug]/[school-slug]


Examples:
/arizona/mesa/kffz/arizona-pilot-academy  
/illinois/belleville/kcps/midwest-flight-training

Displayed information:
- School name
- Description
- Website
- Phone
- Address (primary location)
- Rating + review count (Google-style)
- Aircraft list
- Approximate number of instructors
- Training programs offered
- Social media links (when available from GMB)
- Primary location details
- “Other locations” section (for schools with multiple bases)

### Browse / aggregation pages

- /states/[state-slug]  
  → all schools in the state + list or links to cities

- /cities/[city-slug]  
  → all schools serving this city  
  → “Nearby cities” / “Also serving” section  
    (e.g. Pembroke Pines page shows Miami link, KCPS page shows St. Louis link)

- /airports/[airport-code]  
  → all schools located at this airport  
  → canonical code should be chosen consistently (usually FAA LID or ICAO)

- /search?q=…  
  → full-text search across name, city (incl. nearby), state, airport code/name, programs

## Important Domain Rules

- Schools might operate from **multiple locations** → must show “other locations” view
- Many airports serve a **nearby major metro area** in a different state  
  Examples:
  - KCPS (Belleville, IL) primarily serves St. Louis, MO
  - Pembroke Pines, FL airports serve Miami market
- Cities therefore need **nearby/associated cities** logic on city pages
- Airports use multiple identifiers (IATA / ICAO / FAA LID) → normalize for clean URLs

## Data Sources & Enrichment

Primary source (seeding & updates):
- Google Business Profiles / Google Places API  
  → name, formatted address, phone, website, rating, review count, social links, photos (if available)

Additional fields (manual / admin-maintained):
- aircraft (array)
- training programs (array)
- approximate number of instructors
- rich description (if GMB is sparse)

## User & Moderation Features (Phase 2–3)

**Guests**
- Browse all published listings without login
- Can submit reviews → held in pending state until email verified

**Registered users**
- Leave published reviews
- Add new school listing → pending admin approval
- Claim and manage schools they added/own
- Has profile where you can see schools managed and reviews left

**Admins**
- Full CRUD on schools, users, reviews
- Approve / reject new school submissions
- Manually edit / remove listings
- No data gets actually deleted, but rather just goes inactive where it is no longer public

## Seeding & Addition Flow

- When adding a school:
  - First → search Google Places / GMB by name + city/airport
  - If match found → import core fields automatically
  - If no match → manual entry form
- Admins / early users can bulk seed via GMB lookup

## Tech Stack (2026 modern defaults)

- Next.js 15+ (App Router only)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- Supabase full stack
  - Postgres + RLS
  - Auth (email + password / magic link)
  - @supabase/ssr for Next.js App Router integration
- Vercel for deployment

**UI constraint**
- No shadcn/ui or any pre-built component library  
- Build components by hand with Tailwind classes

## Folder Structure Suggestion
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # home
│   │   ├── search/page.tsx
│   │   ├── states/[stateSlug]/page.tsx
│   │   ├── cities/[citySlug]/page.tsx
│   │   ├── airports/[airportCode]/page.tsx
│   │   └── [stateSlug]/[citySlug]/[airportCode]/[schoolSlug]/page.tsx
│   ├── globals.css
│   └── layout.tsx                    # root layout
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SchoolCard.tsx
│   └── (other small components as needed)
├── lib/
│   ├── supabase.ts                   # server + browser clients
│   ├── types.ts
│   ├── mock-data.ts                  # Phase 1
│   └── utils.ts                      # slugify, etc.
└── .env.local


## High-level Implementation Phases

**Phase 1 – Public SEO foundation (mock data)**
1. Project setup + Tailwind + lucide
2. Root layout, Navbar, Footer
3. Home page (Hero + search + featured/top-rated grids)
4. SchoolCard component
5. Mock data structure (multi-location support)
6. School detail page (first flat /schools/[slug], then deep route)
7. State / city / airport list & detail pages
8. Search page
9. Dynamic generateMetadata everywhere + basic JSON-LD

**Phase 2 – Real data & seeding**
1. Supabase project + tables (schools, locations, airports, cities/states, etc.)
2. Server/client Supabase helpers
3. Replace mock → Supabase queries in Server Components
4. Google Places API lookup + import flow (server action)

**Phase 3 – Auth & user features**
1. Supabase Auth setup (SSR pattern)
2. Login / signup / email verification
3. Protected routes + roles (user / admin)
4. Review submission + moderation queue
5. School add / claim / manage flow
6. Admin dashboard basics

**Phase 4 – Polish & production**
- ISR / revalidate on directory pages
- Sitemap, robots.txt, structured data
- Performance (images, fonts, etc.)
- Analytics, Vercel deploy, Search Console submission

Start with Phase 1 public pages using mock data so you can see SEO structure working quickly.