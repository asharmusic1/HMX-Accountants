"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ServicesPricing from "@/components/ServicesPricing";
import AboutContent from "@/components/AboutContent";
import ContactContent from "@/components/ContactContent";
import Link from "next/link";

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      {/* Hero / Home */}
      <HeroSection />

      {/* Overview */}
      <ServicesOverview />

      {/* Services & Pricing */}
      <ServicesPricing onSelectPlan={setSelectedPlan} />

      {/* Tax Calculator CTA */}
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

      {/* About */}
      <AboutContent />

      {/* Contact */}
      <ContactContent selectedPlan={selectedPlan} />
    </>
  );
}
