import { SchoolCard } from "@/components/SchoolCard";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-950 to-slate-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Find Pilot Training Schools Across the USA 🇺🇸
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            Search by flight school name, city, airport, state
          </p>

          {/* Fake search bar – we'll make it functional later */}
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden shadow-xl bg-slate-500">
              <input
                type="text"
                placeholder="e.g. Mesa AZ, KCPS, West County Flying Club..."
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
      {/* Why Create an Account */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800 dark:text-rose-700">
            Why Create an Account?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Respond to Comments",
                description: "Engage directly with potential students and classmates. Address feedback and questions other students may have.",
                icon: "💬",
              },
              {
                title: "Add/Update Flight School Listings",
                description: "Manage your flight school's information and keep your listing up-to-date for potential students.",
                icon: "✏️",
              },
              {
                title: "Get Notified on Comments",
                description: "Receive notifications when someone comments on reviews of your flight school or your reviews.",
                icon: "🔔",
              },
              // {
              //   title: "Earn Butter Points",
              //   description: "Accumulate points for your participation that can be redeemed for special benefits.",
              //   icon: "⭐",
              // },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Flight Training Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800 dark:text-rose-700">
          How Flight Training Works
        </h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 space-y-6 text-slate-700 dark:text-slate-300 ">
          <p className="text-lg">
        Flight training begins with the <strong>Private Pilot License</strong>, which allows you to fly small aircraft in good weather conditions. This foundational certification is perfect for recreational flying and is the first step for anyone interested in aviation.
          </p>
          <p className="text-lg">
        If you're looking to make a career out of flying, you'll need additional ratings and certificates, such as your Instrument Rating, Commercial Pilot License, and potentially Flight Instructor Certifications. Most airlines and good paying pilot jobs require <strong>1500 hours of flight time</strong>, and many pilots choose to become an instructor to gain the flight time needed to meet minimum requirements.
          </p>
          <p className="text-lg">
        Flight schools across the country offer programs to help you achieve these certifications and ratings, each with different approaches, aircraft fleets, and teaching methodologies.
          </p>
          <p className="text-lg">
        We created <strong>Flight School Finder</strong> to help you navigate these options and find the best flight training program for your specific goals, budget, and location. Whether you're looking to fly for fun or pursuing a professional career, finding the right school is the first step toward your aviation journey.
          </p>
        </div>
      </section>

      {/* Update or Add Flight School */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800 dark:text-rose-700">
        Looking to Update or Add Your Flight School?
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 space-y-6 text-slate-700 dark:text-slate-300 ">
        <p className="text-lg">
          Adding your flight school to our directory is simple. Start by creating a user account through our sign-up process. Once registered, you'll have access to our submission form where you can provide details about your flight school, including location, aircraft fleet, certifications offered, and instructors.
        </p>
        <p className="text-lg">
          After submission, our team will review your listing to ensure all information is accurate and complete. Once approved, your flight school will be published on our platform, making it visible to potential students searching for flight training in your area.
        </p>
        <div className="text-center pt-4">
          <button className="px-6 py-3 bg-rose-700 text-white font-semibold rounded-md hover:bg-rose-800 transition">
            Create Account
          </button>
        </div>
          </div>
        </div>
      </section>

      {/* Looking for Something Different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-800 dark:text-rose-700">
          Looking for Something Different?
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 space-y-6 text-slate-700 dark:text-slate-300">
          <p className="text-lg">
        While flight schools offer structured programs for pilot certification, they might not be the right fit for everyone. If you're looking for a more personalized approach to flight training, connecting with private Certified Flight Instructors (CFIs) could be a better option for you.
          </p>
          <p className="text-lg">
        Private instruction offers more flexibility in scheduling, one-on-one attention, and potentially a more tailored learning experience that fits your specific needs and learning style.
          </p>
          <div className="text-center pt-4">
        <button className="px-6 py-3 border-2 border-rose-700 text-rose-700 font-semibold rounded-md hover:bg-rose-50 transition">
          Connect with Private CFIs
        </button>
          </div>
        </div>
      </section>
    </div>
  );
}