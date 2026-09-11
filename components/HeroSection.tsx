"use client";

const MONEY_BAG_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUQGXzJ7j1h1IMBOIvLRcKX_ZPcNx1UVWbdkllNYpSeYAhcAuzT4yI4P3d4KSQJqNRaB3ibon_PmvbdJ82DofaA8yIgldiSCoZ_xR8YNqC4jZGAz3XaUxVDrK6dEysfMJ91VjMmPIKLV5IQQywzLXbMWck6cpqjTwjY2vY1qD2dqTVorJ-9_gNHDWti2gYPpEg-XH8HkNTxMKWcmGWf4Vgoax0BfOLLZ3mCLQcD8H7w1CnEvTJoSLP64Q1QrqvBjiXJvTedATmlI";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: "#213145" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none object-[74%_center] md:object-center"
      >
        <source src="/woman-working-smartphone.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.72) 100%)",
          zIndex: 1,
        }}
      />

      {/* ─── Desktop Content ─── */}
      <div className="hidden md:flex relative z-10 w-full px-6 md:px-12 lg:px-[8%] xl:px-[10%] justify-start pt-32 pb-24 min-h-screen items-center">
        <div className="flex flex-col text-left items-start max-w-2xl lg:max-w-3xl">
          {/* Logo (Extra Large) */}
          <div className="relative -ml-6 z-20 -mb-4 -mt-6">
            <img
              alt="HMX Accountants Logo"
              className="w-auto object-contain h-72 lg:h-[380px] xl:h-[440px] select-none drop-shadow-2xl"
              src="/hmx-hero-logo.png"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-[64px] font-black leading-[1.05] tracking-tight text-white mb-6 relative z-20 drop-shadow-lg">
            You Run The Business,<br />
            <span className="text-brand-green">We&apos;ll Handle HMRC.</span>
          </h1>

          {/* Divider */}
          <div className="w-12 h-1 bg-brand-green mb-6 rounded-full relative z-20"></div>

          {/* Subtext */}
          <p className="text-xl md:text-[22px] text-white/90 max-w-xl mb-10 leading-relaxed relative z-20 drop-shadow-md">
            Simple, affordable, professional accounting support<br />
            for <span className="font-bold text-white">self-employed people in the UK.</span>
          </p>

          {/* Trust Signal Badges */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 relative z-20">
            <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
                <img alt="Money Bag" className="w-7 h-7 object-contain" src={MONEY_BAG_SRC} />
              </div>
              <span className="text-sm font-bold text-on-surface tracking-tight">Affordable Service</span>
            </div>

            <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
                <span className="material-symbols-outlined text-brand-green text-2xl font-bold">description</span>
              </div>
              <span className="text-sm font-bold text-on-surface tracking-tight">HMRC Compliant</span>
            </div>

            <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
                <span className="material-symbols-outlined text-brand-green text-2xl font-bold">lock</span>
              </div>
              <span className="text-sm font-bold text-on-surface tracking-tight">Trusted Support</span>
            </div>
          </div>

          {/* Referral Tag — desktop */}
          <div className="mt-8 relative z-20">
            <div className="inline-flex items-center gap-2 border border-brand-green/40 rounded-full px-4 py-2 backdrop-blur-sm bg-white/95 shadow-md">
              <span className="material-symbols-outlined text-brand-green text-lg">card_giftcard</span>
              <span className="text-xs font-bold text-brand-green tracking-wide uppercase">Refer a friend. Get £25 off.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile Content ─── */}
      <div className="flex md:hidden relative z-10 w-full px-5 pt-28 pb-12 flex-col">
        {/* HMX Logo */}
        <div className="mb-2 relative -ml-3">
          <img
            src="/hmx-hero-logo.png"
            alt="HMX Accountants Logo"
            className="h-40 w-auto object-contain select-none drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] mb-3">
          You Run The Business,{" "}
          <span className="text-brand-green block">We&apos;ll Handle HMRC</span>
        </h1>

        {/* Divider */}
        <div className="w-10 h-1 bg-brand-green mb-4 rounded-full"></div>

        {/* Subtext */}
        <p className="text-[14px] text-white/90 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-6 max-w-xs">
          Simple, affordable, professional accounting support<br />
          for <span className="font-extrabold text-white">self-employed people in the UK.</span>
        </p>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
              <img alt="Money Bag" className="w-5 h-5 object-contain" src={MONEY_BAG_SRC} />
            </div>
            <span className="text-xs font-bold text-on-surface">Affordable Service</span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
              <span className="material-symbols-outlined text-brand-green text-lg font-bold">description</span>
            </div>
            <span className="text-xs font-bold text-on-surface">HMRC Compliant</span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-[#F0F9EB] flex items-center justify-center shrink-0 border border-brand-green/20">
              <span className="material-symbols-outlined text-brand-green text-lg font-bold">lock</span>
            </div>
            <span className="text-xs font-bold text-on-surface">Trusted Support</span>
          </div>
        </div>

        {/* Referral Tag — mobile */}
        <div>
          <div className="inline-flex items-center gap-2 border border-brand-green/40 rounded-full px-4 py-2 backdrop-blur-sm bg-white/95 shadow-md">
            <span className="material-symbols-outlined text-brand-green text-lg">card_giftcard</span>
            <span className="text-xs font-bold text-brand-green tracking-wide uppercase">Refer a friend. Get £25 off.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
