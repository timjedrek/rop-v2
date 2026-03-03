import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

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
          <Navbar />

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
              className="text-blue-500 hover:underline"
              >
              Tim Jedrek
              </a>
              {" "}and{" "}
              <a
              href="https://rightruddermarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
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