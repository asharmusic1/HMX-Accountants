"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Overview", href: "/overview", icon: "overview" },
    { label: "Services", href: "/services", icon: "business_center" },
    { label: "Pricing", href: "/pricing", icon: "payments" },
    { label: "HMRC Tax Calculator", href: "/hmrc-tax-calculator", icon: "calculate" },
    { label: "About", href: "/about", icon: "info" },
    { label: "Contact", href: "/contact", icon: "mail" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-[110] md:hidden"
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-surface shadow-2xl z-[120] md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
              <span className="font-bold text-lg text-on-surface">Menu</span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-surface-variant transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-on-surface" />
              </button>
            </div>
            
            <nav className="flex-1 py-6 px-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-on-surface hover:bg-surface-variant rounded-xl transition-colors"
                >
                  <span className="material-symbols-outlined text-brand-green text-[20px]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-outline-variant/20">
              <a
                href="mailto:info@hmxaccounting.co.uk"
                className="flex items-center justify-center w-full bg-brand-green text-white px-5 py-3.5 rounded-full text-base font-medium hover:bg-primary transition-colors"
              >
                info@hmxaccounting.co.uk
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
