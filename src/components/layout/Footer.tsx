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

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-beige border-t border-dark-blue/20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <ScrollReveal from="left" delay={50}>
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Vita Eterna Logo"
                  width={80}
                  height={50}
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-beige/10 pt-8 text-xs text-beige/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Vita Eterna Aesthetics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#appointment" className="hover:text-beige">
              Consultations
            </Link>
            <Link href="#services" className="hover:text-beige">
              Treatments
            </Link>
            <Link href="#faq" className="hover:text-beige">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

