import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact and Location",
  description:
    "Call, email or visit Vita Eterna Aesthetics in Kharar. Open Monday to Saturday, 10 AM to 6 PM.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Vita Eterna"
      intro="Reach the clinic by phone or email, or book a consultation online."
    >
      <h2>Clinic details</h2>
      <ul>
        <li>
          Phone: <a href="tel:+919517736935">+91 95177 36935</a>
        </li>
        <li>
          Email: <a href="mailto:support@heallthmaxx.com">support@heallthmaxx.com</a>
        </li>
        <li>
          Address: SCO 23 and 24, Sunny Commercial Complex, Sector 125, Sunny
          Enclave, Kharar, Punjab 140301
        </li>
        <li>Hours: Monday to Saturday, 10 AM to 6 PM</li>
        <li>Sunday: prior appointment only</li>
      </ul>

      <h2>Book a consultation</h2>
      <p>
        Use the <Link href="/#appointment">online booking form</Link> to choose a
        date and time. We will confirm by email.
      </p>
      <p>
        If you have a medical emergency, do not use this page. Go to the nearest
        hospital.
      </p>
    </PageShell>
  );
}
