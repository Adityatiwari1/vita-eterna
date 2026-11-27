import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vita Eterna Aesthetics collects and uses the details you share when you book a consultation.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      intro="This page explains what we do with the information you send us through this website."
    >
      <h2>What we collect</h2>
      <p>When you use the booking form we collect:</p>
      <ul>
        <li>Your first name and last name</li>
        <li>Your phone number and email address</li>
        <li>The treatment, date and time you prefer</li>
        <li>Any goals or concerns you choose to write</li>
      </ul>
      <p>
        Please do not include detailed medical records in the form. Dr Rishi will
        ask for medical history at your consultation.
      </p>

      <h2>How we use it</h2>
      <p>
        We use your details only to arrange and confirm your consultation and to
        answer your questions. The form sends your details by email to the
        clinic team and sends a confirmation to you.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell your information. We share it only with the staff who
        need it to run your appointment, and with email providers that deliver
        our messages.
      </p>

      <h2>Keeping and deleting your data</h2>
      <p>
        We keep enquiry emails for as long as needed to provide care and meet
        legal duties. To ask for access, correction or deletion, email{" "}
        <a href="mailto:support@heallthmaxx.com">support@heallthmaxx.com</a>.
      </p>
    </PageShell>
  );
}
