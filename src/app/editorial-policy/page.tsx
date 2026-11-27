import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How Vita Eterna Aesthetics writes, checks and updates the health information on its website.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <PageShell
      title="Editorial Policy"
      intro="We want the information on this site to be clear, honest and useful."
    >
      <h2>Who writes the content</h2>
      <p>
        The clinic team writes the content on this site and Dr Rishi Mangat is
        the physician responsible for it.
      </p>

      <h2>Our standards</h2>
      <ul>
        <li>We describe treatments plainly and do not promise results.</li>
        <li>We do not publish fake reviews or invented testimonials.</li>
        <li>We state when information is general and not personal advice.</li>
      </ul>

      <h2>Sources</h2>
      <p>
        For regulatory and safety questions we point readers to official bodies,
        such as the{" "}
        <a href="https://www.nmc.org.in/" target="_blank" rel="noopener noreferrer">
          National Medical Commission
        </a>{" "}
        and the{" "}
        <a href="https://cdsco.gov.in/" target="_blank" rel="noopener noreferrer">
          Central Drugs Standard Control Organisation
        </a>
        .
      </p>

      <h2>Updates and corrections</h2>
      <p>
        We review pages when treatments or services change and show the date
        each page was last updated. To report an error, email{" "}
        <a href="mailto:support@heallthmaxx.com">support@heallthmaxx.com</a>.
      </p>
    </PageShell>
  );
}
