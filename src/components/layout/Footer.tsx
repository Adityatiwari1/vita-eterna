import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const info = [
  { label: "Phone", value: "+91 95177 36935", href: "tel:+919517736935", from: "bottom" as const, delay: 150 },
  { label: "Email", value: "support@heallthmaxx.com", href: "mailto:support@heallthmaxx.com", from: "right" as const, delay: 250 },
  {
    label: "Address",
    value: "SCO- 23 and 24, Sunny Commercial Complex, Sector 125, Sunny Enclave, Kharar, Punjab 140301",
    from: "right" as const,
    delay: 350,
  },
];

export const LAST_UPDATED = { iso: "2026-11-27", label: "27 November 2026" };

const SITE_URL = "https://vitaeterna.com";
const shareLinks = [
  { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}` },
  { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent("Vita Eterna Aesthetics")}` },
  { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}` },
  { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`Vita Eterna Aesthetics ${SITE_URL}`)}` },
];

const legalLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-beige border-t border-dark-blue/20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <ScrollReveal from="left" delay={50}>
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/vita-eterna-logo.png"
                  alt="Vita Eterna Logo"
                  width={80}
                  height={50}
                  sizes="64px"
                  className="h-10 w-auto object-contain brightness-110"
                />
                <div className="flex flex-col">
                  <span className="font-script text-3xl text-beige">
                    Vita Eterna
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-pink">
                    by Dr Rishi
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-beige/70">
                Doctor led, elegant, timeless aesthetics rooted in clinical excellence and personalized patient care.
              </p>
            </div>
          </ScrollReveal>

          {info.map((item) => (
            <ScrollReveal key={item.label} from={item.from} delay={item.delay}>
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-pink font-semibold">
                  {item.label}
                </span>
                {item.href ? (
                  <p className="mt-2 text-sm text-beige/85 hover:text-beige">
                    <a href={item.href}>{item.value}</a>
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-beige/85">{item.value}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-beige/70">
          <span className="uppercase tracking-[0.22em] text-pink font-semibold">Share</span>
          {shareLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share Vita Eterna on ${s.label}`}
              className="hover:text-beige"
            >
              {s.label}
            </a>
          ))}
        </div>

        <nav aria-label="Legal and information" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-beige/70">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-beige">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-beige/60">
          Medical disclaimer: the information on this website is general and is not medical advice.
          Results vary from person to person. Treatment is offered only after a consultation with a
          physician. Regulatory information is available from the{" "}
          <a href="https://www.nmc.org.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-beige">
            National Medical Commission
          </a>{" "}
          and the{" "}
          <a href="https://cdsco.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-beige">
            CDSCO
          </a>
          .
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-beige/10 pt-8 text-xs text-beige/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Vita Eterna Aesthetics. All rights reserved. Last updated{" "}
            <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time>.
          </p>
          <div className="flex gap-6">
            <Link href="/#appointment" className="hover:text-beige">
              Consultations
            </Link>
            <Link href="/#services" className="hover:text-beige">
              Treatments
            </Link>
            <Link href="/#faq" className="hover:text-beige">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

