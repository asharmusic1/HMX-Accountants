"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MOBILE_HERO_BG = "/hero-bg.jpg";

export default function HomeMobile() {
  const [swipeKey, setSwipeKey] = useState(0);
  return (
    <>
      <style>{`
        @keyframes spin-sideways {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-spin-sideways {
          animation: spin-sideways 12s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      {/* Hero */}
      <section
        className="relative px-margin-mobile pt-44 pb-8 overflow-hidden"
        style={{
          backgroundImage: `url("${MOBILE_HERO_BG}")`,
          backgroundSize: "cover",
          backgroundPosition: "35% center",
        }}
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-1.5 pt-0 -mt-10">
          <div className="mb-3 flex justify-center relative" style={{ perspective: "1000px" }}>
            {/* 3D Glowing Bleach-colored Light Plate (tilted flat underneath the logo) */}
            <div 
              className="absolute bottom-[14px] left-1/2 -translate-x-1/2 w-44 h-3 rounded-full border border-white/60 pointer-events-none z-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(245,247,246,0.6) 60%, transparent 100%)",
                boxShadow: "0 0 20px 4px rgba(255,255,255,0.95), 0 0 10px rgba(240,245,242,0.8)",
                transform: "rotateX(80deg)",
              }}
            ></div>

            {/* Rising Bleach Light Glow casting upward behind the logo */}
            <div 
              className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-48 h-36 rounded-t-full blur-2xl pointer-events-none z-0"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(240,248,245,0.4) 40%, transparent 100%)",
              }}
            ></div>

            <div 
              className="relative h-44 w-64 animate-spin-sideways flex items-center justify-center z-10" 
              style={{ transformStyle: "preserve-3d" }}
            >
              {[...Array(10)].map((_, i) => {
                // Stack 10 layers: front 5 layers face forward, back 5 layers face backward
                const isFront = i >= 5;
                const zOffset = (isFront ? (i - 4.5) : (4.5 - i)) * 0.85;
                const rotation = isFront ? "rotateY(0deg)" : "rotateY(180deg)";
                const isOuter = i === 0 || i === 9;
                
                // Shading effect: inner layers are darker to simulate metallic edges
                const brightness = isOuter ? "brightness(1) contrast(1)" : `brightness(${0.45 + (i % 5) * 0.08}) contrast(1.25)`;
                const dropShadow = isOuter ? "drop-shadow(0 6px 10px rgba(0,0,0,0.25))" : "";
                return (
                  <img
                    key={i}
                    src="/hmx-hero-logo.png"
                    alt="HMX Accounting Logo"
                    className="absolute h-full w-auto object-contain select-none"
                    style={{
                      transform: `${rotation} translateZ(${zOffset}px)`,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      filter: `${brightness} ${dropShadow}`.trim(),
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-start mb-1">
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[10px] text-primary">verified</span>
              <span className="font-mono text-[8px] text-primary uppercase tracking-wider font-semibold">HMRC Approved</span>
            </div>
          </div>
          <h1 
            className="text-[16px] font-black leading-tight tracking-tight text-on-surface"
          >
            You Run The Business,{" "}
            <span className="text-brand-green block">We&apos;ll Handle HMRC</span>
          </h1>
          <p 
            className="text-[10.5px] text-on-surface-variant font-bold leading-relaxed"
          >
            Simple, affordable, professional accounting support<br />
            for <span className="font-extrabold text-on-surface">self-employed people in the UK.</span>
          </p>

          {/* Moveable/Animated Accounting Props (Super Compact Mobile Sizes) */}
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
              className="absolute top-2 left-[20%] w-6 h-6 bg-white/95 rounded-lg shadow-md border border-white/40 flex items-center justify-center cursor-grab active:cursor-grabbing z-20 select-none"
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
              className="absolute top-0 right-[22%] w-7 h-7 bg-[#eaf4e6]/95 rounded-full shadow-md border border-white/40 flex items-center justify-center cursor-grab active:cursor-grabbing z-20 select-none"
            >
              <span className="text-brand-green font-bold text-[10px]">£</span>
            </motion.div>

            {/* Tax Year Card (Matches desktop content, scaled down) */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              animate={{
                y: [0, -6, 0],
                rotate: [-1, -2, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-[10%] bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-md border border-white/40 w-[112px] cursor-grab active:cursor-grabbing z-10 select-none"
            >
              <div className="text-[6px] text-on-surface-variant mb-1 font-bold">Tax Year 2024</div>
              <div className="space-y-0.5 text-[7px]">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Income</span>
                  <span className="font-semibold text-on-surface">£26,800.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Expenses</span>
                  <span className="font-semibold text-on-surface">£8,450.20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Tax Due</span>
                  <span className="font-semibold text-on-surface">£2,341.12</span>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/20 my-0.5"></div>
              <div className="flex justify-between items-center text-[7px] font-bold">
                <span className="text-on-surface">Net Pay</span>
                <span className="text-brand-green">£16,008.68</span>
              </div>
            </motion.div>

            {/* Your Accounts Card (Matches desktop content, scaled down) */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              animate={{
                y: [0, -5, 0],
                rotate: [1, 2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute top-16 right-[8%] bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-md border border-white/40 w-[122px] cursor-grab active:cursor-grabbing z-10 select-none"
            >
              <div className="flex items-center gap-1 mb-1.5 text-[7px] font-bold">
                <span className="text-on-surface">Your Accounts</span>
                <span className="material-symbols-outlined text-brand-green text-[8px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              </div>
              <div className="space-y-1">
                {[
                  ["£26,800.00", false],
                  ["£8,450.20", false],
                  ["£2,341.12", false],
                  ["£16,008.68", true]
                ].map(([val, isGreen], i) => (
                  <div key={i} className={`flex items-center justify-between${i === 3 ? " mt-1 pt-1 border-t border-outline-variant/20" : ""}`}>
                    <div className="flex gap-1 items-center w-14">
                      <div className="h-0.5 w-2 bg-surface-variant rounded-full"></div>
                      <div className="h-0.5 w-6 bg-surface-variant rounded-full"></div>
                    </div>
                    <span className={`text-[6px] font-${isGreen ? "bold text-brand-green text-[7px]" : "semibold text-on-surface"}`}>{val}</span>
                  </div>
                ))}
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
