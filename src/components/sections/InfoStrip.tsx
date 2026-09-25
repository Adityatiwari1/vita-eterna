import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const info = [
  {
    label: "Address",
    value: "Inside Healthmaxx Hospital, Sunny Commercial Complex, Kharar 140901",
    from: "left" as const,
    delay: 50,
  },
  {
    label: "Reservations",
    value: "+91 95177 36935",
    sub: "Walk-ins subject to physician schedule",
    from: "bottom" as const,
    delay: 180,
  },
  {
    label: "Hours",
    value: "Mon - Sat: 10AM - 6PM",
    sub: "Sunday: Prior Appointment Only",
    from: "right" as const,
    delay: 300,
  },
];

export default function InfoStrip() {
  return (
    <section id="location" className="border-y border-black/10 bg-brown py-14 sm:py-16 px-6 text-white shadow-inner">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {info.map((item) => (
          <ScrollReveal
            key={item.label}
            from={item.from}
            delay={item.delay}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                {item.label}
              </span>
              {item.label === "Reservations" ? (
                <a
                  href="tel:+919517736935"
                  className="mt-3 block text-lg font-semibold text-white transition-colors hover:text-pink"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </p>
              )}
              {item.sub && (
                <p className="mt-1 text-xs text-white/75">{item.sub}</p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}


