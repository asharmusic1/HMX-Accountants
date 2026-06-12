import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "HMX Accounting | About",
  description:
    "HMX Accounting is a UK-based AAT licensed practice providing affordable tax and accounting support for self-employed individuals and small businesses.",
  openGraph: {
    title: "HMX Accounting | About",
    description: "Learn about HMX Accounting — our mission, values, and the team behind your tax returns.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
