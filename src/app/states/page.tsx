import type { Metadata } from "next";
import { states } from "@/lib/mock-data";
import { StatesExplorer } from "@/components/StatesExplorer";

export const metadata: Metadata = {
  title: "Browse Flight Schools by State",
  description:
    "Find FAA-certified flight schools in all 50 US states. Browse by state to discover pilot training programs near you.",
};

export default function StatesPage() {
  return <StatesExplorer states={states} />;
}
