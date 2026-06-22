import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "HMX Accountants | About",
  description:
    "HMX Accountants is a UK-based AAT licensed practice providing affordable tax and accounting support for self-employed individuals and small businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "HMX Accountants | About",
    description: "Learn about HMX Accountants — our mission, values, and the team behind your tax returns.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
