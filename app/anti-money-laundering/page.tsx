import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "HMX Accounting | Anti-Money Laundering",
  description: "HMX Accounting's Anti-Money Laundering policy and client due diligence procedures.",
};

export default function AntiMoneyLaundering() {
  return (
    <LegalPageLayout
      title="Anti-Money Laundering Policy"
      subtitle="Our legal obligations and client due diligence procedures under UK AML regulations."
      lastUpdated="June 2026"
    >
      <LegalSection title="1. Regulatory Framework">
        <p>
          HMX Accounting Services UK Ltd is strictly bound by the{" "}
          <strong>Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer)
          Regulations 2017</strong> (as amended) and the <strong>Proceeds of Crime Act 2002</strong>.
        </p>
        <p>
          We are supervised for AML compliance by the Association of Accounting Technicians (AAT).
        </p>
      </LegalSection>

      <LegalSection title="2. Client Due Diligence (CDD)">
        <p>
          Before commencing any service, we are legally required to verify the identity of all clients.
          This process is known as Client Due Diligence (CDD).
        </p>
        <p>We will ask you to provide:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Government-issued photographic ID (passport or driving licence)</li>
          <li>Proof of current address (utility bill or bank statement dated within 3 months)</li>
          <li>For business clients — details of beneficial ownership and company registration</li>
        </ul>
        <p>
          We may also apply Enhanced Due Diligence (EDD) in higher-risk situations, which may require
          additional documentation and source of funds verification.
        </p>
      </LegalSection>

      <LegalSection title="3. Suspicious Activity Reporting">
        <p>
          We have a legal duty to report any knowledge or suspicion of money laundering or terrorist
          financing to the National Crime Agency (NCA) via a Suspicious Activity Report (SAR).
        </p>
        <p>
          We are prohibited by law from informing you if a SAR has been filed. This is known as
          &quot;tipping off&quot; and is a criminal offence under the Proceeds of Crime Act 2002.
        </p>
      </LegalSection>

      <LegalSection title="4. Record Keeping">
        <p>
          We are required to retain copies of all client identification documents and related records for
          a minimum of <strong>5 years</strong> after the end of our business relationship.
        </p>
      </LegalSection>

      <LegalSection title="5. Staff Training">
        <p>
          All HMX Accounting personnel are trained in AML obligations, the recognition of suspicious
          activity, and our internal reporting procedures. This training is updated regularly.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          If you have any questions about our AML procedures, please contact our Compliance Officer at{" "}
          <a href="mailto:info@hmxaccounting.co.uk" className="text-primary underline">
            info@hmxaccounting.co.uk
          </a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
