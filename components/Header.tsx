"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const NAV_SECTIONS = [
  { label: "Overview", id: "overview" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver scroll-spy
  useEffect(() => {
    const sectionIds = ["home", ...NAV_SECTIONS.map((s) => s.id)];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          // Update URL hash without scroll jump
          if (id === "home") {
            history.replaceState(null, "", "/");
          } else {
            history.replaceState(null, "", `/#${id}`);
          }
        }
      });
    };

    // Use a threshold that ensures the section is significantly in view
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    },
    []
  );

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="block md:hidden fixed top-0 left-0 right-0 z-[100] w-full bg-white border-b border-outline-variant/20 h-16 flex items-center px-4 shadow-sm">
        <div className="flex items-center justify-start w-1/3">
          <button
            className="p-2 rounded-full hover:bg-surface-variant transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 text-on-surface" />
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center justify-center"
            aria-label="HMX Accountants Logo"
          >
            <img
              alt="HMX Accountants Logo"
              className="h-12 w-auto object-contain"
              src="/hmx-header-logo.png"
            />
          </a>
        </div>
        <div className="w-1/3"></div>
      </header>

      {/* DESKTOP HEADER */}
      <nav
        className={`hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-max ${
          isScrolled ? "scale-95" : ""
        }`}
        id="navbar"
      >
        <div className="bg-white rounded-full p-1.5 flex items-center gap-2 sm:gap-8 shadow-2xl border border-outline-variant/20">
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shrink-0 ml-1 border border-outline-variant/30"
            aria-label="HMX Accountants Logo"
          >
            <Image
              alt="Logo"
              className="w-6 h-6 object-contain"
              width={24}
              height={24}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_8KnOX9oaRis0ZpCdRKGTsEyX-qQpQOGs_xW5SFYoLBECm1MSsqJabCZpiRe_6otUeGBDLGmxboDbimTAcLtOaGlSNTxBiBdneWqTwJJOFmgGmVfxJAlfdEWnjqLSqcUUjwXlkhXrA1GqdV-w2h6r6QSlF0tH82H4BaP0hsnBYJSfeoXM1Rd_O85IV2GvtOKO-oj9DPnxMrsaZv4WKjCWquOBMqP_pbQpOthTh1-PuizzOSL1bF1OFCXy2lfI4rS-EPBWFoeFCc"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 px-2">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`transition-colors text-sm font-medium ${
                  activeSection === item.id
                    ? "text-brand-green font-bold"
                    : "text-on-surface hover:text-brand-green"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:info@hmxaccountants.co.uk"
            className="hidden sm:inline-block bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            info@hmxaccountants.co.uk
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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
