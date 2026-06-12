"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MOBILE_HERO_BG = "/hero-bg.jpg";

export default function HomeMobile() {
  const [swipeKey, setSwipeKey] = useState(0);
  return (
    <>
      {/* Hero */}
      <section
        className="relative px-margin-mobile pt-24 pb-8 overflow-hidden"
        style={{
          backgroundImage: `url("${MOBILE_HERO_BG}")`,
          backgroundSize: "cover",
          backgroundPosition: "35% center",
        }}
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-4 pt-0">
          {/* HMRC Approved Badge */}
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0F9EB] rounded-full border border-brand-green/20">
              <span className="material-symbols-outlined text-[13px] text-brand-green font-bold">verified</span>
              <span className="font-mono text-[10px] text-brand-green uppercase tracking-wider font-bold">HMRC Approved</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[26px] font-black leading-tight tracking-tight text-on-surface">
            You Run The Business,<br />
            <span className="text-brand-green block">We&apos;ll Handle HMRC</span>
          </h1>

          {/* Subtext */}
          <p className="text-[13px] text-on-surface-variant font-semibold leading-relaxed">
            Simple, affordable, professional accounting support for<br />
            <span className="font-extrabold text-on-surface">self-employed</span> people in the UK.
          </p>

          {/* Bullet Points */}
          <div className="space-y-2 pt-1">
            {[
              "HMRC registered & compliant",
              "Fixed fees, no hidden costs",
              "Dedicated UK-based support"
            ].map((bullet, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EAF4E6] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-brand-green text-[10px] font-bold">check</span>
                </div>
                <span className="text-[12px] font-bold text-on-surface-variant">{bullet}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-[#559C17] text-white px-6 py-3 rounded-full font-bold text-[14px] shadow-md hover:bg-[#488513] transition-all w-max gap-3 active:scale-95"
            >
              Get Started Today
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#559C17] text-[11px] font-extrabold">arrow_forward</span>
              </div>
            </Link>
          </div>

          {/* Under-button text */}
          <p className="text-[10.5px] text-on-surface-variant/80 italic font-semibold">
            Trusted by self-employed professionals across the UK.
          </p>

          {/* Moveable/Animated Accounting Props */}
          <div className="relative w-full h-[180px] mt-6 overflow-visible">
            {/* Floating Chart Icon */}
            <motion.div
              drag
              dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-2 left-[10%] w-6 h-6 bg-white/95 rounded-lg shadow-md border border-white/40 flex items-center justify-center cursor-grab active:cursor-grabbing z-20 select-none"
            >
              <span className="material-symbols-outlined text-brand-green text-xs">bar_chart</span>
            </motion.div>

            {/* Floating Pound Icon */}
            <motion.div
              drag
              dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-0 right-[15%] w-7 h-7 bg-[#eaf4e6]/95 rounded-full shadow-md border border-white/40 flex items-center justify-center cursor-grab active:cursor-grabbing z-20 select-none"
            >
              <span className="text-brand-green font-bold text-[10px]">£</span>
            </motion.div>

            {/* Your Accounts Summary Card */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1.5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-[22%] bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/40 w-[185px] cursor-grab active:cursor-grabbing z-10 select-none"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-5 h-5 bg-[#559C17] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-[10px] font-bold">trending_up</span>
                </div>
                <span className="text-[10px] font-extrabold text-[#0d233a] tracking-tight">Your Accounts Summary</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-semibold">Income</span>
                  <span className="font-extrabold text-on-surface">£26,800.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-semibold">Expenses</span>
                  <span className="font-extrabold text-on-surface">£8,450.20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-semibold">Tax Due</span>
                  <span className="font-extrabold text-on-surface">£2,341.12</span>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/20 my-2"></div>
              <div className="flex justify-between items-center text-[10px] font-black">
                <span className="text-[#0d233a]">Net Pay</span>
                <span className="text-brand-green text-[11px] font-black">£16,008.68</span>
              </div>
            </motion.div>
          </div>
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
            <p className="text-on-surface-variant text-sm italic opacity-80 mb-2">Share the love and save right away</p>

            {/* Swipe Right Bar */}
            <div className="w-full max-w-[280px] h-12 bg-[#F0F9EB]/60 border border-brand-green/20 rounded-full relative overflow-hidden flex items-center justify-start px-1.5 select-none">
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-brand-green/75 tracking-wider uppercase pointer-events-none animate-pulse">
                Swipe right to share on WhatsApp »
              </span>
              <motion.div
                key={swipeKey}
                drag="x"
                dragConstraints={{ left: 0, right: 220 }}
                dragElastic={{ left: 0, right: 0.1 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x > 100) {
                    const shareText = encodeURIComponent("Check out HMX Accounting! Simple, affordable, professional accounting support for the self-employed: https://hmxaccountants.co.uk");
                    window.location.href = `https://api.whatsapp.com/send?text=${shareText}`;
                  }
                  setSwipeKey((prev) => prev + 1);
                }}
                className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing z-10"
              >
                <span className="material-symbols-outlined text-white text-lg font-bold">chevron_right</span>
              </motion.div>
            </div>
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
