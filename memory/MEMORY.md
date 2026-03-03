# Project Memory — rop-v2

## Stack
- Next.js 16+ App Router, TypeScript, Tailwind v4 (PostCSS), pnpm
- No shadcn/ui — all components hand-built
- Phase 1: mock data in src/lib/mock-data.ts
- Phase 2+: Supabase (not yet wired up)

## Key data types (src/lib/types.ts)
- State, City, Airport, FlightSchool, Review
- Program — certificates/ratings/endorsements; has sortOrder field
- TrainerAircraft — training aircraft catalog; has sortOrder field
- FlightSchool uses `programSlugs: string[]` and `aircraftSlugs?: string[]` (slugs, not display strings)

## sortOrder convention
Both Program and TrainerAircraft have `sortOrder: number`.
All ordering uses `.sort((a, b) => a.sortOrder - b.sortOrder)`.
Maps to a `sort_order` DB column in Phase 2. Never hardcode order arrays in pages.

## URL structure
- /programs                        — list all programs
- /programs/[programSlug]          — program detail (requirements, prereqs, schools)
- /aircraft                        — list all aircraft grouped by category
- /aircraft/[aircraftSlug]         — aircraft detail (specs, common use, schools)
- /[stateSlug]/[citySlug]/[airportCode]/[schoolSlug] — school detail
- /states, /cities, /airports — browse pages

## School detail page
Program tags and aircraft chips are <Link> components pointing to /programs/[slug] and /aircraft/[slug].
Lookup helpers used: getProgramsBySchool(), getAircraftBySchool()

## Lookup helpers in mock-data.ts
- getProgramBySlug, getProgramsBySchool, getSchoolsByProgram
- getAircraftBySlug, getAircraftBySchool, getSchoolsByAircraftSlug

## Design system
- Hero: from-blue-950 to-slate-700 (standard), from-rose-900 to-slate-700 (top-rated only)
- CTAs: blue-700 / rose-800
- Never use amber/orange/yellow/green/purple for brand colors
