import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "HMX Accounting | HMRC Disclosure",
  description: "HMX Accounting's HMRC agent authorisation and disclosure information.",
};

export default function HMRCDisclosure() {
  return (
    <LegalPageLayout
      title="HMRC Disclosure"
      subtitle="Our agent authorisation and regulatory status with HM Revenue & Customs."
      lastUpdated="June 2026"
    >
      <LegalSection title="1. Agent Authorisation">
        <p>
          HMX Accounting Services UK Ltd is an authorised tax agent registered with HM Revenue &amp; Customs
          (HMRC). By engaging our services, you authorise us to act as your appointed agent in all dealings
          with HMRC relating to your tax affairs.
        </p>
      </LegalSection>

      <LegalSection title="2. Scope of Authority">
        <p>Our agent authorisation covers, but is not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Submission of Self Assessment tax returns (SA100 and supplementary pages)</li>
          <li>UTR (Unique Taxpayer Reference) registration applications</li>
          <li>Communication with HMRC on your behalf regarding outstanding correspondence</li>
          <li>Viewing and managing your HMRC online account information where authorised</li>
          <li>Representing you in relation to Self Assessment enquiries</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Your Responsibilities">
        <p>As the taxpayer, you remain legally responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ensuring all information provided to HMX Accounting is accurate and complete</li>
          <li>Disclosing all sources of income and any relevant changes in your circumstances</li>
          <li>Payment of any tax liabilities due to HMRC by the required deadlines</li>
          <li>Notifying us promptly of any correspondence received directly from HMRC</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Regulatory Status">
        <p>
          HMX Accounting Services UK Ltd is a licensed practice supervised by the Association of Accounting
          Technicians (AAT). Our AAT membership number is available on request.
        </p>
        <p>
          We are supervised for Anti-Money Laundering (AML) purposes by AAT in accordance with the Money
          Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Sharing with HMRC">
        <p>
          In the course of providing our services, we will share relevant financial and personal information
          with HMRC as required by law and as necessary to perform your tax obligations. This is conducted
          in accordance with our Privacy Policy.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
