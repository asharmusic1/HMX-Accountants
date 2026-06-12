import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "HMX Accounting | Contact",
  description:
    "Get in touch with HMX Accounting. Send us a message and we'll get back to you quickly. Email: info@hmxaccounting.co.uk",
  openGraph: {
    title: "HMX Accounting | Contact",
    description: "Contact HMX Accounting for self-assessment, UTR registration and bookkeeping enquiries.",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span className="text-on-surface-variant">Loading...</span></div>}>
      <ContactContent />
    </Suspense>
  );
}
