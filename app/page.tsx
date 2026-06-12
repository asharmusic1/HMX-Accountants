import type { Metadata } from "next";
import HomeHeroDesktop from "@/components/HomeHeroDesktop";
import HomeMobile from "@/components/HomeMobile";

export const metadata: Metadata = {
  title: "HMX Accounting | Home",
  description:
    "Simple, affordable, professional accounting support for self-employed people in the UK. HMRC recognised. AAT licensed.",
  openGraph: {
    title: "HMX Accounting | Home",
    description: "Professional UK tax accounting for the self-employed.",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <HomeHeroDesktop />
      </div>
      <div className="block md:hidden">
        <HomeMobile />
      </div>
    </>
  );
}
