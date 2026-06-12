import type { Metadata } from "next";
import Link from "next/link";
import ServicesPricing from "@/components/ServicesPricing";

export const metadata: Metadata = {
  title: "HMX Accounting | Services",
  description:
    "Explore our professional accounting services including our tiered self-assessment pricing plans and HMRC Tax Calculator.",
  openGraph: {
    title: "HMX Accounting | Services",
    description: "Pricing plans and HMRC Tax Calculator for self-employed professionals.",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-background">
      {/* Services pricing section */}
      <ServicesPricing />

      {/* Direct Link to HMRC Tax Calculator */}
      <section className="py-12 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-container-padding">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-surface border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-green text-3xl">calculate</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-on-surface mb-2">HMRC Tax Calculator</h3>
                <p className="text-on-surface-variant text-sm">
                  Estimate your self-employed income tax and National Insurance instantly.
                </p>
              </div>
            </div>
            <Link
              href="/hmrc-tax-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 shrink-0"
              style={{ backgroundColor: "rgb(85, 156, 23)" }}
            >
              Try the Calculator
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
