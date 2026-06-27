"use client";

import { X } from "lucide-react";
import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

const menuItems = [
  { label: "Home", id: "home", icon: "home" },
  { label: "Overview", id: "overview", icon: "overview" },
  { label: "Services", id: "services", icon: "business_center" },
  { label: "About", id: "about", icon: "info" },
  { label: "Contact", id: "contact", icon: "mail" },
];

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
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

  const handleItemClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      onClose();
      // Small delay to let menu close animation start, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    },
    [onClose]
  );

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
            id="mobile-menu-dialog"
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
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleItemClick(e, item.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                    activeSection === item.id
                      ? "text-brand-green bg-brand-green/10 font-bold"
                      : "text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${
                    activeSection === item.id ? "text-brand-green" : "text-brand-green"
                  }`}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="p-6 border-t border-outline-variant/20">
              <a
                href="mailto:info@hmxaccountants.co.uk"
                className="flex items-center justify-center w-full bg-brand-green text-white px-5 py-3.5 rounded-full text-base font-medium hover:bg-primary transition-colors"
              >
                info@hmxaccountants.co.uk
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
