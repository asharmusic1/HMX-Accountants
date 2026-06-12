import Link from "next/link";

export default function ServicesPricing() {
  return (
    <>
      <section className="bg-inverse-surface text-on-tertiary pt-20 pb-section-margin" id="pricing">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-container-padding">
          <div className="text-center mb-16">
            <p className="text-brand-green font-mono text-xs uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">No surprises. Just results.</h2>
            <p className="text-surface-dim max-w-2xl mx-auto">No hidden fees. Flat rates designed for independent professionals.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 max-w-6xl">
            {/* Plan 1 */}
            <div className="dark-glass-panel rounded-2xl p-8 flex flex-col h-full border border-surface-variant/20">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-surface-dim mb-2">Self Assessment Only</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">£149.99</span>
                  <span className="text-surface-dim text-sm">/filing</span>
                </div>
                <p className="mt-4 text-sm text-surface-dim">Ideal for those already registered with a UTR who just need their annual return filed.</p>
              </div>
              <Link
                href="/contact?plan=self-assessment"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg border border-white/20 transition-colors font-semibold mb-8 block"
              >
                Get Started
              </Link>
              <div className="flex-grow">
                <div className="text-xs tracking-widest text-surface-dim uppercase mb-4 text-center flex items-center justify-center gap-4">
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                  <span>Includes</span>
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                </div>
                <ul className="space-y-4">
                  {["Income & Expense Review", "Tax Liability Calculation", "HMRC Submission"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plan 2 — Recommended */}
            <div className="bg-[#1a2636] rounded-2xl p-8 flex flex-col h-full border border-primary/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-lg" style={{ backgroundColor: "rgb(85, 156, 23)" }}>
                Recommended
              </div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-medium text-white mb-2">UTR + Self Assessment</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">£249.99</span>
                  <span className="text-surface-dim text-sm">/first year</span>
                </div>
                <p className="mt-4 text-sm text-surface-dim">The complete package for newly self-employed individuals. We set you up and handle year one.</p>
              </div>
              <Link
                href="/contact?plan=utr-plus-assessment"
                className="w-full py-3 px-4 text-white text-center rounded-lg transition-all font-semibold mb-8 relative z-10 shadow-lg hover:opacity-90 block"
                style={{ backgroundColor: "rgb(85, 156, 23)" }}
              >
                Get Started Now
              </Link>
              <div className="flex-grow relative z-10">
                <div className="text-xs tracking-widest text-surface-dim uppercase mb-4 text-center flex items-center justify-center gap-4">
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                  <span>Includes All Services</span>
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Income & Expense Review",
                    "Tax Liability Calculation",
                    "HMRC Submission",
                    "UTR Registration Processing",
                    "Government Gateway Setup",
                    "Priority Email Support",
                    "Initial Tax Strategy Call",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="dark-glass-panel rounded-2xl p-8 flex flex-col h-full border border-surface-variant/20">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-surface-dim mb-2">Bookkeeping</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">£34.99</span>
                  <span className="text-surface-dim text-sm">/month</span>
                </div>
                <p className="mt-4 text-sm text-surface-dim">Professional daily or weekly bookkeeping to keep your records audit-ready and up to date.</p>
              </div>
              <Link
                href="/contact?plan=bookkeeping"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg border border-white/20 transition-colors font-semibold mb-8 block"
              >
                Get Started
              </Link>
              <div className="flex-grow">
                <div className="text-xs tracking-widest text-surface-dim uppercase mb-4 text-center flex items-center justify-center gap-4">
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                  <span>Includes</span>
                  <div className="h-px bg-surface-variant/20 flex-grow"></div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Dedicated Bookkeeper",
                    "Monthly Reconciliation",
                    "Real-time Expense Tracking",
                    "Digital Receipt Management",
                    "VAT Return Preparation",
                    "Flexible Meeting Hours",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="material-symbols-outlined text-brand-green text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA below pricing */}
          <div className="text-center mt-16">
            <p className="text-surface-dim mb-6 text-sm">Not sure which plan suits you?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "rgb(85, 156, 23)" }}
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Talk to Us — We'll Help You Choose
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
