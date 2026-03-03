import type { MetadataRoute } from "next";
import { states, cities, airports, flightSchools } from "@/lib/mock-data";
import { schoolHref } from "@/lib/utils";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
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
