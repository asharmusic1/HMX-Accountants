import Link from "next/link";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen pt-32 pb-section-margin bg-background">
      <div className="max-w-[800px] mx-auto px-margin-mobile md:px-container-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface">{title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-primary text-xs font-mono uppercase tracking-wider">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">{title}</h1>
          {subtitle && <p className="text-on-surface-variant text-lg">{subtitle}</p>}
          <p className="text-sm text-on-surface-variant mt-4 border-t border-outline-variant/20 pt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 md:p-12 shadow-sm space-y-8 text-on-surface-variant leading-relaxed">
          {children}
        </div>

        {/* Contact Footer */}
        <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
          <p className="text-on-surface text-sm font-medium mb-3">
            Questions about this document?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "rgb(85, 156, 23)" }}
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            Contact HMX Accounting
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2">
        <span className="w-1 h-5 bg-primary rounded-full"></span>
        {title}
      </h2>
      <div className="pl-3 space-y-3">{children}</div>
    </section>
  );
}
