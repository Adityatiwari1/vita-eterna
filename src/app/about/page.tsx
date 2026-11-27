import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Dr Rishi and Vita Eterna",
  description:
    "Meet Dr Rishi Mangat, a physician with over 25 years of experience who leads Vita Eterna Aesthetics in Kharar.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Vita Eterna"
      intro="Vita Eterna is a doctor led aesthetics clinic inside Healthmaxx Hospital in Kharar, Punjab."
    >
      <h2>Dr Rishi Mangat</h2>
      <p>
        Dr Rishi has more than 25 years of clinical experience as a general
        practitioner and diabetologist. She moved into aesthetic medicine
        because she believes that feeling well and looking well are connected.
      </p>
      <p>She continues to train in London and the United States.</p>

      <h2>Credentials</h2>
      <ul>
        <li>International Fellowship in Aesthetic and Anti-Aging Medicine (IFAAM)</li>
        <li>Life Member, Institute of Laser and Aesthetic Medicine (ILAMED)</li>
        <li>Life Member, Indian Society of Aesthetic Medicine (ISAM)</li>
        <li>Life Member, Indian Society of Mesotherapy (ISM)</li>
      </ul>
      <p>
        You can view the certificates in the{" "}
        <Link href="/#credentials">credentials section</Link> of the home page.
      </p>

      <h2>How we work</h2>
      <p>
        Every plan starts with a consultation. Dr Rishi listens to your goals,
        reviews your medical history and assesses your face and skin. She then
        suggests a plan made for you. Treatments are carried out by a physician
        inside a hospital setting.
      </p>
      <p>
        Read our <Link href="/editorial-policy">editorial policy</Link> to see how
        we write and review the information on this website.
      </p>
    </PageShell>
  );
}
