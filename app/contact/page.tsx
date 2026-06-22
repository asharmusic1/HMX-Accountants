import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "HMX Accountants | Contact",
  description:
    "Get in touch with HMX Accountants. Send us a message and we'll get back to you quickly. Email: info@hmxaccountants.co.uk",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "HMX Accountants | Contact",
    description: "Contact HMX Accountants for self-assessment, UTR registration and bookkeeping enquiries.",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span className="text-on-surface-variant">Loading...</span></div>}>
      <ContactContent />
    </Suspense>
  );
}
