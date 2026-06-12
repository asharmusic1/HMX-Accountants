import Link from "next/link";

const MOBILE_HERO_BG = "/hero-bg.jpg";

export default function HomeMobile() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative px-margin-mobile pt-28 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url("${MOBILE_HERO_BG}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-lg p-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
            <span className="font-mono text-[12px] text-primary uppercase tracking-wider">HMRC Recognized</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-on-surface">
            You Run The Business,{" "}
            <span className="text-brand-green">We&apos;ll Handle HMRC</span>
          </h1>
          <p className="text-base text-on-surface leading-relaxed">
            Simple, affordable, professional accounting support<br />
            for <span className="font-bold text-on-surface">self-employed people in the UK.</span>
          </p>
        </div>
      </section>

      {/* Why Trust HMX */}
      <section className="px-margin-mobile space-y-4 mt-12 py-12">
        <h2 className="text-[12px] text-on-surface-variant uppercase tracking-widest text-center mb-6 font-mono font-medium">Why trust HMX</h2>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-4 p-4 bg-white border border-outline-variant/30 rounded-2xl shadow-sm transition-colors hover:bg-surface-container-low">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <div>
              <h4 className="font-semibold text-on-surface">Affordable Service</h4>
              <p className="text-xs text-on-surface-variant">Fixed pricing, no hidden costs ever.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border border-outline-variant/30 rounded-2xl shadow-sm transition-colors hover:bg-surface-container-low">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <h4 className="font-semibold text-on-surface">HMRC Compliant</h4>
              <p className="text-xs text-on-surface-variant">Guaranteed accuracy for your filings.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border border-outline-variant/30 rounded-2xl shadow-sm transition-colors hover:bg-surface-container-low">
            <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary shrink-0">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <h4 className="font-semibold text-on-surface">Trusted Support</h4>
              <p className="text-xs text-on-surface-variant">Experts available when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <section className="bg-white px-margin-mobile border-y border-primary/20 relative overflow-hidden py-12">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-primary text-2xl">redeem</span>
            </div>
            <h3 className="text-xl uppercase tracking-[0.1em] font-bold text-on-surface">Refer a Friend. Get £30 Off.</h3>
            <p className="text-on-surface-variant text-sm italic opacity-80">Share the love and save right away</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile py-12 bg-white border-t border-outline-variant/20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl font-bold text-on-surface leading-tight">
            Simplify Your Finances Today
          </h2>
          <p className="text-on-surface-variant text-base max-w-[90%] leading-relaxed">
            Join hundreds of self-employed professionals who trust HMX for stress-free accounting.
          </p>
          <Link
            href="/contact"
            className="w-full py-4 text-white font-semibold text-base rounded-xl shadow-lg transition-all hover:opacity-90 active:scale-95 text-center"
            style={{ backgroundColor: "rgb(85, 156, 23)" }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
