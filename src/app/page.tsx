import { SchoolCard } from "@/components/SchoolCard";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Find Pilot Training Schools Across the USA
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            Search by flight school name, city, airport, state
          </p>

          {/* Fake search bar – we'll make it functional later */}
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden shadow-xl bg-slate-500">
              <input
                type="text"
                placeholder="e.g. Mesa AZ, KCPS, Pembroke Pines flight school..."
                className="flex-1 px-6 py-5 text-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
              <button className="bg-slate-800 px-10 py-5 text-white font-semibold hover:bg-rose-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured schools placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800 dark:text-rose-700">
          Featured Flight Schools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SchoolCard name="Arizona Pilot Academy" location="Mesa, AZ" />
          <SchoolCard name="Midwest Flight Training" location="Belleville, IL" rating={4.6} reviewCount={89} />
          <SchoolCard name="Suncoast Aviation" location="Pembroke Pines, FL" />
          <SchoolCard name="St. Louis Flight Academy" location="St. Louis, MO" rating={4.9} />
          <SchoolCard name="Heartland Flyers" location="Kansas City, MO" />
          <SchoolCard name="Pacific Coast Flight School" location="San Diego, CA" rating={4.7} reviewCount={210} />
        </div>
      </section>
    </div>
  );
}