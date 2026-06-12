const WORKSPACE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDxfd4VblIV8McbN0iBWSXZfAS-tSZPq9S67RQMyGs-QrsROY-7lE05YoCbgjh0F5er2PaN0fLp2osIDp6Tb91X_3xBX1fErWj9tSQxgNYYQc5oGXTwzYyFJ-YEeIKzIhChtMlL2CRGeRnDdGvI31T2wlB-ySYXlLgBuQYtjc2wzk1jobjvF7ZErdi6spFNQtPzHlQ0F-w7W7oborqYjZ5HMf8y2274R-PmjDN6-YhObjR3AsO1ylZVPZQvr-h9E30taLNE6dUP5HE";

export default function AboutContent() {
  return (
    <main className="flex-grow pb-section-margin px-margin-mobile md:px-container-padding max-w-[1440px] mx-auto w-full pt-32"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}>
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-section-margin">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-sm font-medium text-on-surface-variant mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          UK-Based Professional Accounting
        </div>
        <h1 className="text-4xl md:text-[48px] font-bold leading-tight tracking-tight text-on-background mb-6">
          Redefining the <span className="text-[#559B16]">Accounting</span> Experience
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          HMX Accounting is a UK-based AAT licensed accountancy practice providing clear, affordable, and reliable tax and accounting support for self-employed individuals, sole traders, and small business owners.
        </p>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap max-w-[1280px] mx-auto">
        {/* Large Image Card */}
        <div className="lg:col-span-8 rounded-xl overflow-hidden glass-panel relative h-[400px] group">
          <img
            alt="Professional accounting workspace with laptop and financial documents"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={WORKSPACE_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-2xl font-semibold text-white leading-tight max-w-xl">
              &ldquo;HMX Accounting — making tax simple, clear, and stress-free.&rdquo;
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="lg:col-span-4 rounded-xl glass-panel p-8 flex flex-col justify-center bg-white/80">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">track_changes</span>
          </div>
          <h3 className="text-2xl font-semibold text-on-background mb-4">Our Mission</h3>
          <p className="text-on-surface-variant leading-relaxed">
            To empower business owners with crystal-clear financial insights, ensuring compliance while maximizing growth potential through strategic advisory.
          </p>
        </div>

        {/* Goal Card */}
        <div className="lg:col-span-5 rounded-xl glass-panel p-8 bg-[#F0F9EB]/60 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 opacity-10">
            <span className="material-symbols-outlined text-[128px] text-primary">lightbulb</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
            <span className="material-symbols-outlined text-primary text-2xl">flag</span>
          </div>
          <h3 className="text-2xl font-semibold text-on-background mb-4">Our Goal</h3>
          <p className="text-on-surface-variant leading-relaxed relative z-10">
            To redefine the traditional accounting experience by blending heritage expertise with cutting-edge digital efficiency for every client we serve.
          </p>
        </div>

        {/* Core Expertise Card */}
        <div className="lg:col-span-7 rounded-xl glass-panel p-8 bg-white/80">
          <h3 className="text-2xl font-semibold text-on-background mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">cases</span>
            Core Expertise
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Self-Assessment Tax Returns",
              "UTR Registration Support",
              "Income and Expense Reviews",
              "HMRC Guidance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-lg bg-surface hover:bg-surface-container-high transition-colors border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="text-on-surface-variant font-medium">{item}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 p-4 rounded-lg bg-surface hover:bg-surface-container-high transition-colors border border-outline-variant/20 md:col-span-2">
              <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
              <span className="text-on-surface-variant font-medium">Accounting Support for Sole Traders and Small Businesses</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
