import Link from "next/link";

const info = [
  {
    label: "Address",
    value: "Inside Healthmaxx Hospital, Sunny Commercial Complex, Kharar 140901",
  },
  {
    label: "Reservations",
    value: "+91 95177 36935",
    sub: "Walk-ins subject to physician schedule",
  },
  {
    label: "Hours",
    value: "Mon - Sat: 10AM - 6PM",
    sub: "Sunday: Prior Appointment Only",
  },
];

export default function InfoStrip() {
  return (
    <section id="location" className="border-b border-dark-blue/10 bg-beige py-16 px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {info.map((item) => (
          <div key={item.label}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brown">
              {item.label}
            </span>
            <p className="mt-3 text-lg font-semibold text-dark-blue">
              {item.value}
            </p>
            {item.sub && (
              <p className="mt-1 text-xs text-dark-blue/70">{item.sub}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


