import type { Metadata } from "next";
import ServicesOverview from "@/components/ServicesOverview";

export const metadata: Metadata = {
  title: "HMX Accounting | Overview",
  description:
    "An overview of HMX Accounting's stress-free approach to self-assessment and HMRC compliance for UK sole traders.",
  openGraph: {
    title: "HMX Accounting | Overview",
    description: "Simple, affordable, professional accounting for self-employed people in the UK.",
  },
};

export default function OverviewPage() {
  return <ServicesOverview />;
}
