import type { Metadata } from "next";
import ServicesOverview from "@/components/ServicesOverview";

export const metadata: Metadata = {
  title: "HMX Accountants | Overview",
  description:
    "An overview of HMX Accountants' stress-free approach to self-assessment and HMRC compliance for UK sole traders.",
  alternates: {
    canonical: "/overview",
  },
  openGraph: {
    title: "HMX Accountants | Overview",
    description: "Simple, affordable, professional accounting for self-employed people in the UK.",
  },
};

export default function OverviewPage() {
  return <ServicesOverview />;
}
