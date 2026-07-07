import type { MetadataRoute } from "next";
import {
  getStates,
  getCities,
  getAirports,
  getFlightSchools,
} from "@/lib/data";
import { schoolHref } from "@/lib/utils";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

// Rendered per request — the sitemap reads live rows from Supabase
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [states, cities, airports, flightSchools] = await Promise.all([
    getStates(),
    getCities(),
    getAirports(),
    getFlightSchools(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/states`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cities`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/airports`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/top-rated`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/featured`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const stateRoutes: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${BASE_URL}/states/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const airportRoutes: MetadataRoute.Sitemap = airports.map((a) => ({
    url: `${BASE_URL}/airports/${a.icao.toLowerCase()}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const schoolRoutes: MetadataRoute.Sitemap = flightSchools.map((s) => ({
    url: `${BASE_URL}${schoolHref(s)}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...airportRoutes,
    ...schoolRoutes,
  ];
}
