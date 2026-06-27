"use client";

const MONEY_BAG_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUQGXzJ7j1h1IMBOIvLRcKX_ZPcNx1UVWbdkllNYpSeYAhcAuzT4yI4P3d4KSQJqNRaB3ibon_PmvbdJ82DofaA8yIgldiSCoZ_xR8YNqC4jZGAz3XaUxVDrK6dEysfMJ91VjMmPIKLV5IQQywzLXbMWck6cpqjTwjY2vY1qD2dqTVorJ-9_gNHDWti2gYPpEg-XH8HkNTxMKWcmGWf4Vgoax0BfOLLZ3mCLQcD8H7w1CnEvTJoSLP64Q1QrqvBjiXJvTedATmlI";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden min-h-screen"
      style={{ backgroundColor: "#213145" }}
    >
      {/* Video Background (Plays inline, autoPlay, muted, loop forever) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ objectPosition: "center center" }}
      >
        <source src="/woman-working-smartphone.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.55) 100%)",
          zIndex: 1,
        }}
      />

      {/* ─── Desktop Content ─── */}
      <div className="hidden md:flex relative z-10 w-full px-6 md:px-12 lg:px-[8%] xl:px-[10%] justify-start pt-32 pb-24">
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

          {/* Trust Signals */}
          <div className="flex items-center gap-6 md:gap-10 relative z-20">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:scale-105 transition-transform">
                <img alt="Money Bag" className="w-9 h-9 object-contain" src={MONEY_BAG_SRC} />
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Affordable Service</span>
            </div>
            <div className="w-px h-14 bg-white/20"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-brand-green text-3xl">description</span>
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">HMRC Compliant</span>
            </div>
            <div className="w-px h-14 bg-white/20"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-3 border border-white/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-brand-green text-3xl">lock</span>
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Trusted Support</span>
            </div>
          </div>
        </div>

        {/* Referral Tag */}
        <div className="absolute right-margin-mobile md:right-container-padding z-30 mb-8 transform origin-bottom-right bottom-[-52px]">
          <div className="inline-flex items-center gap-2 border border-brand-green/20 rounded-full px-4 py-2 backdrop-blur-sm bg-white">
            <span className="material-symbols-outlined text-brand-green text-lg">card_giftcard</span>
            <span className="text-xs font-bold text-brand-green tracking-wide uppercase">Refer a friend. Get £30 off.</span>
          </div>
        </div>
      </div>

      {/* ─── Mobile Content ─── */}
      <div className="flex md:hidden relative z-10 w-full px-margin-mobile pt-24 pb-8 flex-col">
        <div className="relative z-10 space-y-2 pt-0 items-center text-center flex flex-col">
          {/* HMX Logo (Extra Large on mobile) */}
          <div className="mb-0 flex justify-center relative w-full">
            <div className="relative h-80 w-[360px] max-w-full flex items-center justify-center z-10">
              <img
                src="/hmx-hero-logo.png"
                alt="HMX Accountants Logo"
                className="h-full w-auto object-contain select-none drop-shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-[22px] font-black leading-tight tracking-tight text-white drop-shadow-md text-center -mt-4">
            You Run The Business,{" "}
            <span className="text-brand-green block mt-1">We&apos;ll Handle HMRC</span>
          </h1>
          <p className="text-[12.5px] text-white/90 font-bold leading-relaxed drop-shadow-sm text-center max-w-xs">
            Simple, affordable, professional accounting support<br />
            for <span className="font-extrabold text-white">self-employed people in the UK.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
