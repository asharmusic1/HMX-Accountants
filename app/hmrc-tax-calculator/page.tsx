import type { Metadata } from "next";
import Link from "next/link";
import TaxCalculator from "@/components/TaxCalculator";
import { TAX_CONFIG } from "@/lib/tax-config";

export const metadata: Metadata = {
  title: "HMX Accounting | HMRC Tax Calculator",
  description:
    "Estimate your UK self-employed income tax and National Insurance for 2025/2026. Free instant calculator from HMX Accounting.",
  openGraph: {
    title: "HMX Accounting | HMRC Tax Calculator",
    description: "Free UK self-employment tax estimator — income tax, Class 4 NI and take-home pay.",
  },
};

export default function HmrcTaxCalculatorPage() {
  return (
    <main className="bg-inverse-surface min-h-screen pb-0">
      {/* Background blobs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-secondary-container/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob pointer-events-none" />
      <div className="fixed top-40 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-container-padding py-32 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-brand-green font-mono text-xs uppercase tracking-widest mb-4">
            Self-Employed Tool
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">HMRC Tax Estimator</h1>
          <p className="max-w-2xl mx-auto text-surface-dim">
            Slide or enter your figures below to instantly calculate an estimate of your{" "}
            <strong className="text-white">{TAX_CONFIG.taxYear}</strong> UK self-employed Income Tax
            and Class 4 National Insurance contributions.
          </p>
        </div>

        {/* Calculator */}
        <TaxCalculator />

        {/* Trust Markers */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
          <TrustMarker icon="security" title="HMRC Compliant">
            Our logic is updated in line with the latest UK tax legislation and thresholds.
          </TrustMarker>
          <TrustMarker icon="support_agent" title="Expert Support">
            Dedicated UK-based accountants ready to review your figures before final submission.
          </TrustMarker>
          <TrustMarker icon="bolt" title="Fast Filing">
            We handle your self-assessment submission directly with HMRC on your behalf.
          </TrustMarker>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <span className="material-symbols-outlined text-yellow-400 text-4xl mb-4 block">gavel</span>
          <h3 className="text-lg font-semibold text-white mb-3">Important Disclaimer</h3>
          <p className="text-surface-dim text-sm leading-relaxed mb-6">
            This calculator provides an <strong className="text-white">estimate only</strong> and should not
            be treated as tax advice. Actual figures will vary based on your personal circumstances, employment
            status, allowances and HMRC assessments. For accurate advice tailored to your situation, please
            contact HMX Accounting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(180deg, #559B16 0%, #438400 100%)" }}
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            Speak to an Accountant
          </Link>
        </div>
      </div>
    </main>
  );
}

function TrustMarker({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto text-brand-green">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <h5 className="text-lg font-semibold text-white">{title}</h5>
      <p className="text-surface-dim text-sm max-w-xs mx-auto">{children}</p>
    </div>
  );
}
