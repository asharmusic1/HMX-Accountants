const HERO_BG = "/hero-bg.jpg";
const LOGO_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCerZH2jez_AcWqORlCA7kR9d96HzboxgPiUdMmiJggK3lQ6GitoDxRHiT-Tx8RUHw32aOqcf0uU785wSVmPRACZkekFEEspBKxAOTIboJnmFRSxVYM6aoYkdeqoIp-Ede88_9mWwErVGSzCbHMO-W634-ElzyTvKM6-1PPOWWkZbEOfnY8H_Ez-njUi8YpmC387DpZfItzyvoGl2Y6t_gdu3BQxZrShuktaHH1bPljEwZvJeiddjqt0rf9btC2sJGNkZTVZaYeaY8";
const MONEY_BAG_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUQGXzJ7j1h1IMBOIvLRcKX_ZPcNx1UVWbdkllNYpSeYAhcAuzT4yI4P3d4KSQJqNRaB3ibon_PmvbdJ82DofaA8yIgldiSCoZ_xR8YNqC4jZGAz3XaUxVDrK6dEysfMJ91VjMmPIKLV5IQQywzLXbMWck6cpqjTwjY2vY1qD2dqTVorJ-9_gNHDWti2gYPpEg-XH8HkNTxMKWcmGWf4Vgoax0BfOLLZ3mCLQcD8H7w1CnEvTJoSLP64Q1QrqvBjiXJvTedATmlI";

export default function HomeHeroDesktop() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen pt-32 pb-24"
      style={{ backgroundImage: `url("${HERO_BG}")` }}
    >
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-[8%] xl:px-[10%] flex justify-start">
        {/* Left Content */}
        <div className="flex flex-col text-left items-start max-w-xl lg:max-w-2xl">
          {/* Logo */}
          <div className="relative -ml-2 z-20 mt-4 mb-2">
            <img
              alt="HMX Accounting"
              className="w-auto object-contain h-64 md:h-[340px]"
              src={LOGO_SRC}
            />
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl md:text-[64px] font-black leading-[1.05] tracking-tight text-on-surface mb-6 relative z-20"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            You Run The Business,<br />
            <span className="text-brand-green">We&apos;ll Handle HMRC.</span>
          </h1>

          {/* Divider */}
          <div className="w-12 h-1 bg-brand-green mb-6 rounded-full relative z-20"></div>

          {/* Subtext */}
          <p className="text-xl md:text-[22px] text-on-surface-variant max-w-xl mb-10 leading-relaxed relative z-20">
            Simple, affordable, professional accounting support<br />
            for <span className="font-bold text-on-surface">self-employed people in the UK.</span>
          </p>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 md:gap-10 relative z-20">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F9EB] flex items-center justify-center mb-3 border border-brand-green/20 group-hover:scale-105 transition-transform">
                <img alt="Money Bag" className="w-9 h-9 object-contain" src={MONEY_BAG_SRC} />
              </div>
              <span className="text-sm font-semibold text-on-surface">Affordable Service</span>
            </div>
            <div className="w-px h-14 bg-outline-variant/30"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F9EB] flex items-center justify-center mb-3 border border-brand-green/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-brand-green text-3xl">description</span>
              </div>
              <span className="text-sm font-semibold text-on-surface">HMRC Compliant</span>
            </div>
            <div className="w-px h-14 bg-outline-variant/30"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F9EB] flex items-center justify-center mb-3 border border-brand-green/20 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-brand-green text-3xl">lock</span>
              </div>
              <span className="text-sm font-semibold text-on-surface">Trusted Support</span>
            </div>
          </div>
        </div>

        {/* Right Floating UI Elements */}
        <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[450px] h-[500px] pointer-events-none z-20">
          {/* Floating Chart Icon */}
          <div className="absolute top-12 left-12 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white flex items-center justify-center animate-[bounce_4s_infinite]">
            <span className="material-symbols-outlined text-brand-green text-3xl">bar_chart</span>
          </div>
          {/* Floating Pound Icon */}
          <div className="absolute -top-6 right-20 w-16 h-16 bg-[#eaf4e6]/90 backdrop-blur-md rounded-full shadow-xl border border-white flex items-center justify-center animate-[bounce_5s_infinite_0.5s]">
            <span className="text-brand-green font-bold text-2xl">£</span>
          </div>
          {/* Tax Year Card */}
          <div className="absolute top-24 left-0 bg-white/95 backdrop-blur-xl rounded-[20px] p-6 shadow-2xl border border-white w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="text-xs text-on-surface-variant mb-5 font-semibold">Tax Year 2024</div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[13px] text-on-surface-variant">Income</span>
              <span className="text-sm font-bold text-on-surface">£26,800.00</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[13px] text-on-surface-variant">Expenses</span>
              <span className="text-sm font-bold text-on-surface">£8,450.20</span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <span className="text-[13px] text-on-surface-variant">Tax Due</span>
              <span className="text-sm font-bold text-on-surface">£2,341.12</span>
            </div>
            <div className="w-full h-px bg-outline-variant/30 mb-4"></div>
            <div className="flex justify-between items-center">
              <span className="text-[15px] font-bold text-on-surface">Net Pay</span>
              <span className="text-[15px] font-bold text-brand-green">£16,008.68</span>
            </div>
          </div>
          {/* Your Accounts Card */}
          <div className="absolute bottom-16 right-[-40px] bg-white/95 backdrop-blur-xl rounded-[20px] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white w-[340px]">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[15px] font-bold text-on-surface">Your Accounts</span>
              <span className="material-symbols-outlined text-brand-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
            </div>
            <div className="space-y-4">
              {[["£26,800.00", false], ["£8,450.20", false], ["£2,341.12", false], ["£16,008.68", true]].map(([val, isGreen], i) => (
                <div key={i} className={`flex items-center justify-between${i === 3 ? " mt-3 pt-4 border-t border-outline-variant/30" : ""}`}>
                  <div className="flex gap-3 w-40">
                    <div className="h-2.5 w-12 bg-surface-variant rounded-full"></div>
                    <div className="h-2.5 w-full bg-surface-variant rounded-full"></div>
                  </div>
                  <span className={`text-[13px] font-${isGreen ? "bold text-brand-green text-[14px]" : "semibold text-on-surface"} text-right`}>{val}</span>
                </div>
              ))}
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
    </section>
  );
}
