import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Globe, Star, Plane } from "lucide-react";
import {
  flightSchools,
  getSchoolBySlug,
  getCityBySlug,
  getStateBySlug,
  getAirportByCode,
  getRelatedSchools,
  getReviewsBySchool,
} from "@/lib/mock-data";
import ReviewsSection from "@/components/ReviewsSection";
import ReviewForm from "@/components/ReviewForm";

type Props = {
  params: Promise<{
    stateSlug: string;
    citySlug: string;
    airportCode: string;
    schoolSlug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);
  if (!school) return { title: "School Not Found" };
  const city = getCityBySlug(school.citySlug);
  const state = getStateBySlug(school.stateSlug);
  return {
    title: `${school.name} – Flight School in ${city?.name ?? ""}, ${state?.abbreviation ?? ""}`,
    description: school.description.slice(0, 160),
  };
}

export function generateStaticParams() {
  return flightSchools.map((s) => ({
    stateSlug: s.stateSlug,
    citySlug: s.citySlug,
    airportCode: s.primaryAirportCode.toLowerCase(),
    schoolSlug: s.slug,
  }));
}

export default async function SchoolDetailPage({ params }: Props) {
  const { schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);
  if (!school) notFound();

  const city = getCityBySlug(school.citySlug);
  const state = getStateBySlug(school.stateSlug);
  const primaryAirport = getAirportByCode(school.primaryAirportCode);

  const schoolReviews = getReviewsBySchool(school.id);

  // Resolve sibling listings for the same brand
  const relatedSchools = getRelatedSchools(school).map((s) => ({
    ...s,
    airport: getAirportByCode(s.primaryAirportCode),
    city: getCityBySlug(s.citySlug),
    state: getStateBySlug(s.stateSlug),
  }));

  // JSON-LD LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: school.name,
    description: school.description,
    telephone: school.phone,
    url: school.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: city?.name ?? school.citySlug,
      addressRegion: state?.abbreviation ?? school.stateSlug,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: school.rating.toFixed(1),
      reviewCount: school.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 to-slate-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href={city ? `/cities/${city.slug}` : "/states"}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm transition mb-4"
            >
              <ChevronLeft size={16} />
              {city
                ? `Flight Schools in ${city.name}`
                : "Back"}
            </Link>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              {school.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} />
                {city?.name ?? school.citySlug},{" "}
                {state?.abbreviation ?? school.stateSlug}
              </span>
              {primaryAirport && (
                <Link
                  href={`/airports/${primaryAirport.icao.toLowerCase()}`}
                  className="flex items-center gap-1.5 font-mono font-semibold text-blue-300 hover:text-white transition"
                >
                  <Plane size={16} />
                  {primaryAirport.icao}
                </Link>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-5">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i <= Math.round(school.rating) ? "currentColor" : "none"}
                    strokeWidth={i <= Math.round(school.rating) ? 0 : 1.5}
                  />
                ))}
              </div>
              <span className="font-bold text-lg">{school.rating.toFixed(1)}</span>
              <span className="text-slate-300 text-sm">
                ({school.reviewCount} reviews)
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Programs */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Programs Offered
            </h2>
            <div className="flex flex-wrap gap-2">
              {school.programs.map((program) => (
                <span
                  key={program}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full text-sm font-medium"
                >
                  {program}
                </span>
              ))}
            </div>
          </section>

          {/* About */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              About {school.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {school.description}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Contact &amp; Location
            </h2>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
              {/* Primary airport */}
              {primaryAirport && (
                <div className="flex items-start gap-3">
                  <Plane size={18} className="text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Primary Airport
                    </p>
                    <Link
                      href={`/airports/${primaryAirport.icao.toLowerCase()}`}
                      className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      {primaryAirport.icao} – {primaryAirport.name}
                    </Link>
                  </div>
                </div>
              )}

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    City
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {city?.name ?? school.citySlug},{" "}
                    {state?.name ?? school.stateSlug}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-slate-400 shrink-0" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${school.phone.replace(/\D/g, "")}`}
                    className="font-semibold text-slate-800 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-400 transition"
                  >
                    {school.phone}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-slate-400 shrink-0" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Website
                  </p>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    {school.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Student Reviews */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Student Reviews
            </h2>
            <ReviewsSection reviews={schoolReviews} />
          </section>

          {/* Write a Review */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Write a Review
            </h2>
            <ReviewForm schoolId={school.id} />
          </section>

          {/* Other locations — sibling listings for the same brand */}
          {relatedSchools.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Other Locations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedSchools.map((sibling) => (
                  <Link
                    key={sibling.id}
                    href={`/${sibling.stateSlug}/${sibling.citySlug}/${sibling.primaryAirportCode.toLowerCase()}/${sibling.slug}`}
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition"
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition mb-1">
                      {sibling.name}
                    </p>
                    {sibling.airport && (
                      <p className="font-mono text-sm text-blue-700 dark:text-blue-400">
                        {sibling.primaryAirportCode} – {sibling.airport.name}
                      </p>
                    )}
                    {sibling.city && sibling.state && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <MapPin size={12} />
                        {sibling.city.name}, {sibling.state.abbreviation}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
