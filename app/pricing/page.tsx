import type { Metadata } from "next";
import ServicesOverview from "@/components/ServicesOverview";
import ServicesPricing from "@/components/ServicesPricing";

export const metadata: Metadata = {
  title: "HMX Accounting | Pricing",
  description:
    "Transparent, flat-rate pricing for self-assessment, UTR registration and bookkeeping. No hidden fees.",
  openGraph: {
    title: "HMX Accounting | Pricing",
    description: "No hidden fees. Flat rates designed for independent professionals.",
  },
};

export default function PricingPage() {
  return (
    <>
      <ServicesOverview />
      <ServicesPricing />
    </>
  );
}
