import type { FlightSchool } from "./types";

/** Build the deep-nested URL for a school detail page */
export function schoolHref(school: FlightSchool): string {
  return `/${school.stateSlug}/${school.citySlug}/${school.primaryAirportCode.toLowerCase()}/${school.slug}`;
}

/** Convert a display string to a URL slug: "Arizona Pilot Academy" → "arizona-pilot-academy" */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Convert a slug back to a title-cased display string: "st-louis" → "St Louis" */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
