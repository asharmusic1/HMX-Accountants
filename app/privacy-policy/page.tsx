import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "HMX Accounting | Privacy Policy",
  description: "HMX Accounting's Privacy Policy — how we collect, use and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal data."
      lastUpdated="June 2026"
    >
      <LegalSection title="1. Who We Are">
        <p>
          HMX Accounting Services UK Ltd (&quot;HMX Accounting&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is an AAT licensed
          accounting practice registered in England and Wales. We are committed to protecting and respecting
          your privacy.
        </p>
        <p>
          For questions about this policy, contact us at{" "}
          <a href="mailto:info@hmxaccounting.co.uk" className="text-primary underline">
            info@hmxaccounting.co.uk
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Data We Collect">
        <p>We may collect and process the following personal data:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Identity Data</strong> — name, title, date of birth</li>
          <li><strong>Contact Data</strong> — email address, telephone number, postal address</li>
          <li><strong>Financial Data</strong> — income figures, tax records, bank account details (only where necessary for accounting services)</li>
          <li><strong>Technical Data</strong> — IP address, browser type, pages visited</li>
          <li><strong>Usage Data</strong> — how you interact with our website</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Data">
        <p>We use your personal data to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Perform the accounting and tax services you have engaged us for</li>
          <li>Communicate with you about your account or services</li>
          <li>Comply with legal and regulatory obligations (including HMRC)</li>
          <li>Improve our website and services</li>
          <li>Send service-related communications (not marketing, unless you consent)</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Legal Basis for Processing">
        <p>We process your data on the following grounds:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Contract performance</strong> — to fulfil our service agreement with you</li>
          <li><strong>Legal obligation</strong> — to comply with HMRC and AML regulations</li>
          <li><strong>Legitimate interests</strong> — to run and improve our business</li>
          <li><strong>Consent</strong> — where you have explicitly agreed</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain client data for a minimum of 7 years in accordance with HMRC requirements. After this
          period, data is securely deleted unless we are legally required to retain it longer.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>Under UK GDPR, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Request erasure of your data (subject to legal obligations)</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Lodge a complaint with the ICO (ico.org.uk)</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          To exercise any of your rights, or to ask a question about this policy, please email{" "}
          <a href="mailto:info@hmxaccounting.co.uk" className="text-primary underline">
            info@hmxaccounting.co.uk
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
