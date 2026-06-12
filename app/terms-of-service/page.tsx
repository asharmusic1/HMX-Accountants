import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "HMX Accounting | Terms of Service",
  description: "The terms and conditions governing the use of HMX Accounting's website and professional services.",
};

export default function TermsOfService() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of our services."
      lastUpdated="June 2026"
    >
      <LegalSection title="1. Agreement to Terms">
        <p>
          By engaging HMX Accounting Services UK Ltd (&quot;HMX Accounting&quot;) for any service, you agree to be
          bound by these Terms of Service. If you do not agree, you should not use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Services Provided">
        <p>
          HMX Accounting provides professional accounting, tax preparation, and advisory services as detailed
          in your letter of engagement. All services are subject to the scope agreed at the time of instruction.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Self Assessment tax return preparation and filing</li>
          <li>UTR registration and Government Gateway setup</li>
          <li>Bookkeeping and financial record management</li>
          <li>General tax advisory and HMRC correspondence</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Fees and Payment">
        <p>
          Fees are as quoted at the time of instruction and set out in your letter of engagement. All fees
          are due prior to or upon completion of the service unless otherwise agreed in writing.
        </p>
        <p>
          HMX Accounting reserves the right to withhold filing or delivery of work until full payment
          has been received.
        </p>
      </LegalSection>

      <LegalSection title="4. Client Obligations">
        <p>You agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate, complete, and timely information required to perform our services</li>
          <li>Notify us immediately of any changes to your circumstances that may affect your tax position</li>
          <li>Review and approve any tax returns before submission</li>
          <li>Pay all tax liabilities directly to HMRC by the required deadlines</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Limitation of Liability">
        <p>
          HMX Accounting&apos;s liability to you is limited to the fees paid for the service in question. We are
          not liable for any indirect, consequential or special loss, including penalties arising from
          inaccurate information provided by you.
        </p>
      </LegalSection>

      <LegalSection title="6. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of England and Wales.
          Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          Questions about these Terms should be directed to{" "}
          <a href="mailto:info@hmxaccounting.co.uk" className="text-primary underline">
            info@hmxaccounting.co.uk
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
