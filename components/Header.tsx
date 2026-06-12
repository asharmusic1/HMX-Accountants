"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MOBILE HEADER: Straight white line header at the very top (Mobile view only) */}
      <header className="block md:hidden fixed top-0 left-0 right-0 z-[100] w-full bg-white border-b border-outline-variant/20 h-16 flex items-center px-4 shadow-sm">
        {/* Far Left: Three-line menu button */}
        <div className="flex items-center justify-start w-1/3">
          <button
            className="p-2 rounded-full hover:bg-surface-variant transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 text-on-surface" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="flex items-center justify-center" aria-label="HMX Accounting Logo">
            <img
              alt="HMX Accounting Logo"
              className="h-12 w-auto object-contain"
              src="/hmx-header-logo.png"
            />
          </Link>
        </div>

        {/* Far Right: Empty space to balance layout */}
        <div className="w-1/3"></div>
      </header>

      {/* DESKTOP HEADER: Floating pill navbar (Desktop view only, code matches original exactly) */}
      <nav
        className={`hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-max ${
          isScrolled ? "scale-95" : ""
        }`}
        id="navbar"
      >
        <div className="bg-white rounded-full p-1.5 flex items-center gap-2 sm:gap-8 shadow-2xl border border-outline-variant/20">
          <Link
            href="/"
            className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shrink-0 ml-1 border border-outline-variant/30"
            aria-label="HMX Accounting Logo"
          >
            <Image
              alt="Logo"
              className="w-6 h-6 object-contain"
              width={24}
              height={24}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_8KnOX9oaRis0ZpCdRKGTsEyX-qQpQOGs_xW5SFYoLBECm1MSsqJabCZpiRe_6otUeGBDLGmxboDbimTAcLtOaGlSNTxBiBdneWqTwJJOFmgGmVfxJAlfdEWnjqLSqcUUjwXlkhXrA1GqdV-w2h6r6QSlF0tH82H4BaP0hsnBYJSfeoXM1Rd_O85IV2GvtOKO-oj9DPnxMrsaZv4WKjCWquOBMqP_pbQpOthTh1-PuizzOSL1bF1OFCXy2lfI4rS-EPBWFoeFCc"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6 px-2">
            <Link href="/overview" className="text-on-surface hover:text-brand-green transition-colors text-sm font-medium">Overview</Link>
            <Link href="/services" className="text-on-surface hover:text-brand-green transition-colors text-sm font-medium">Services</Link>
            <Link href="/about" className="text-on-surface hover:text-brand-green transition-colors text-sm font-medium">About</Link>
            <Link href="/contact" className="text-on-surface hover:text-brand-green transition-colors text-sm font-medium">Contact</Link>
          </div>

          <a
            href="mailto:info@hmxaccounting.co.uk"
            className="hidden sm:inline-block bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            info@hmxaccounting.co.uk
          </a>
          
          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-variant transition-colors mr-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5 text-on-surface" />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
