import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Better shared defaults (will be overridden by pages when needed)
export const metadata: Metadata = {
  title: {
    default: "Flight School Directory – USA",
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
    <html lang="en">
      <body className={inter.className}>
        {/* Temporary simple navbar – we'll style/improve it next */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-rose-800">
                Flight Schools
              </div>
              <nav className="space-x-6 text-sm font-medium">
                <a href="#" className="text-slate-700 hover:text-rose-900">Featured</a>
                <a href="#" className="text-slate-700 hover:text-rose-900">Top Rated</a>
                <a href="#" className="text-slate-700 hover:text-rose-900">Browse</a>
                <a href="#" className="text-slate-700 hover:text-rose-900">Login</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Where the actual page content goes */}
        <main className="min-h-screen bg-slate-100">
          {children}
        </main>

        {/* Minimal footer */}
        <footer className="bg-slate-800 text-slate-300 py-6 text-center text-sm">
          <p>Flight School Directory — Learning project with Next.js & Supabase</p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}