"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const PLAN_LABELS: Record<string, string> = {
  "self-assessment": "Self Assessment Only",
  "utr-plus-assessment": "UTR + Self Assessment",
  "bookkeeping": "Bookkeeping",
};

const SERVICES = ["Self Assessment", "UTR Registration", "Bookkeeping", "Other Inquiry"];

export default function ContactContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") ?? "";
  const planLabel = PLAN_LABELS[planParam] ?? "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("Self Assessment");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (planLabel) {
      setSelectedService(planLabel);
    }
  }, [planLabel]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("first_name"),
      lastName: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service") || selectedService,
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully. We will get back to you soon!",
        });
        (e.target as HTMLFormElement).reset();
        setSelectedService("Self Assessment");
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "A network error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-section-margin bg-background relative overflow-hidden min-h-[90vh] pt-32 pb-24" id="contact">
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-container/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-tertiary-container/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-[1024px] mx-auto px-margin-mobile md:px-container-padding relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-2">Ready to make tax simple?</h2>
          <p className="text-on-surface-variant">Any question or remarks? Just write us a message!</p>
        </div>

        {/* Pre-filled plan banner */}
        {planLabel && (
          <div className="mb-8 p-4 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-xl text-center font-medium text-sm">
            <span className="material-symbols-outlined text-[16px] mr-1 align-middle">payments</span>
            You&apos;ve selected the <strong>{planLabel}</strong> plan. Let us know your details below.
          </div>
        )}

        <div className="dark-glass-panel rounded-[32px] overflow-hidden shadow-2xl relative max-w-3xl mx-auto border border-outline-variant/30">
          <div className="p-10 md:p-14 bg-surface/5 backdrop-blur-md relative z-10">
            <h3 className="text-3xl font-semibold text-white text-center mb-10">Contact Us</h3>

            {status.type === "success" && (
              <div className="mb-8 p-4 bg-brand-green/20 border border-brand-green text-brand-green rounded-lg text-center font-medium">
                <span className="material-symbols-outlined mr-1 align-middle text-[18px]">check_circle</span>
                {status.message}
              </div>
            )}
            {status.type === "error" && (
              <div className="mb-8 p-4 bg-error/20 border border-error text-error rounded-lg text-center font-medium">
                <span className="material-symbols-outlined mr-1 align-middle text-[18px]">error</span>
                {status.message}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput id="first_name" label="First Name" type="text" required />
                <FloatingInput id="last_name" label="Last Name" type="text" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput id="email" label="Email" type="email" required />
                <FloatingInput id="phone" label="Phone Number (optional)" type="tel" />
              </div>

              {/* Service Selection */}
              <div>
                <p className="text-xs text-surface-dim mb-4">Select Service</p>
                <div className="flex flex-wrap gap-4">
                  {SERVICES.map((svc) => (
                    <label key={svc} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={svc}
                        checked={selectedService === svc}
                        onChange={() => setSelectedService(svc)}
                        className="text-brand-green h-4 w-4"
                      />
                      <span className="text-sm text-white">{svc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  required
                  className="block w-full border-0 border-b border-surface/30 bg-transparent py-2 text-sm text-white focus:border-brand-green focus:ring-0 peer placeholder-transparent min-h-[100px] resize-y"
                  id="message"
                  name="message"
                  placeholder="Message"
                  minLength={10}
                ></textarea>
                <label
                  className="absolute left-0 -top-3.5 text-xs text-surface-dim transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-green"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  disabled={isSubmitting}
                  className="text-white px-10 py-3.5 rounded-lg text-sm font-semibold transition-all w-full sm:w-auto hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                  type="submit"
                  style={{ backgroundColor: "rgb(85, 156, 23)" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-surface/10 flex flex-col items-center">
                <p className="text-xs text-surface-dim mb-6 uppercase tracking-widest font-medium">Follow us</p>
                <div className="flex items-center justify-center gap-8">
                  <SocialLink href="#" label="LinkedIn" icon="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  <SocialLink href="#" label="Instagram" icon="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  <SocialLink href="#" label="Facebook" icon="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        required={required}
        className="block w-full border-0 border-b border-surface/30 bg-transparent py-2 text-sm text-white focus:border-brand-green focus:ring-0 peer placeholder-transparent"
        id={id}
        name={id}
        placeholder={label}
        type={type}
      />
      <label
        className="absolute left-0 -top-3.5 text-xs text-surface-dim transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-green"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-surface-dim hover:text-brand-green transition-all duration-300 transform hover:-translate-y-1"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    </a>
  );
}
