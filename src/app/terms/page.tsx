import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using the Vita Eterna Aesthetics website and booking a consultation.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      intro="By using this website you agree to these terms."
    >
      <h2>Information on this website</h2>
      <p>
        The content here is general information. It is not medical advice and
        does not replace a consultation with a doctor. Results differ from person
        to person.
      </p>

      <h2>Consultation requests</h2>
      <p>
        Submitting the booking form is a request, not a confirmed appointment.
        We confirm by email. Treatment is offered only after a physician has
        assessed you and judged it suitable.
      </p>

      <h2>Changes and cancellations</h2>
      <p>
        If you need to change or cancel, contact the clinic through the{" "}
        <Link href="/contact">contact page</Link> as early as you can.
      </p>

      <h2>Your use of the site</h2>
      <p>
        Do not misuse the site or try to disrupt it. Text and images belong to
        Vita Eterna Aesthetics unless stated otherwise.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy">privacy policy</Link> explains how we handle
        your details.
      </p>
    </PageShell>
  );
}
