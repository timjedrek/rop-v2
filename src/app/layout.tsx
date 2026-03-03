import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

// Better shared defaults (will be overridden by pages when needed)
export const metadata: Metadata = {
  title: {
    default: "Flight School Finder - Find Pilot Training Centers Across the USA",
    template: "%s | Flight School Directory", // pages can set just "Mesa Flight Schools" → becomes that + suffix
  },
  description: "Find FAA-certified flight schools by city, state, airport or name.",
  metadataBase: new URL("http://localhost:3000"), // change to your real domain later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Temporary simple navbar – we'll style/improve it next */}
          <header className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-rose-800 dark:text-rose-700">
                  Flight School Finder
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-rose-900 dark:hover:text-rose-400">Featured</a>
                  <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-rose-900 dark:hover:text-rose-400">Top Rated</a>
                  <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-rose-900 dark:hover:text-rose-400">Browse</a>
                  <button className="bg-rose-800 text-white px-4 py-2 rounded hover:bg-rose-700">Login</button>
                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>

          {/* Where the actual page content goes */}
          <main className="min-h-screen bg-slate-100 dark:bg-slate-800">
            {children}
          </main>

          {/* Minimal footer */}
          <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 py-6 text-center text-sm">
            <p>
              Flight School Finder © {new Date().getFullYear()} - A coding project by{" "}
              <a
              href="https://timjedrek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:underline"
              >
              Tim Jedrek
              </a>
              {" "}and{" "}
              <a
              href="https://rightruddermarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:underline"
              >
              Right Rudder Marketing
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}