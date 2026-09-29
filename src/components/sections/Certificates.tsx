import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  credential: string;
  imageSrc?: string;
  imageAlt?: string;
  delay: number;
};

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Fellowship in Aesthetic Medicine",
    issuer: "International Aesthetic Academy & Board",
    credential: "Advanced Facial Artistry & Medical Aesthetics",
    imageSrc: undefined, // e.g. "/certificates/fellowship.jpg"
    imageAlt: "Fellowship in Aesthetic Medicine Certificate",
    delay: 100,
  },
  {
    id: "cert-2",
    title: "Advanced Facial Harmonisation",
    issuer: "London & US Clinical Masterclass",
    credential: "Micro-Cannula Dermal Fillers & Thread Lifting",
    imageSrc: undefined, // e.g. "/certificates/harmonisation.jpg"
    imageAlt: "Advanced Facial Harmonisation Certificate",
    delay: 250,
  },
  {
    id: "cert-3",
    title: "Clinical Cosmetology & Laser Sciences",
    issuer: "Global Institute of Dermatology",
    credential: "Medical Lasers, PRP & Regenerative Protocols",
    imageSrc: undefined, // e.g. "/certificates/cosmetology.jpg"
    imageAlt: "Clinical Cosmetology & Laser Sciences Certificate",
    delay: 400,
  },
];

export default function Certificates() {
  return (
    <section
      id="credentials"
      className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal from="top" delay={50}>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Accreditations & Excellence</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Certified Clinical Credentials
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-dark-blue/70">
              Rigorous medical training, international fellowships, and premier clinical
              accreditations backing every procedure by Dr. Rishi.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Certificate Placeholders Wall */}
        <ScrollReveal from="bottom" delay={80}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative h-full flex flex-col justify-between rounded-2xl border border-dark-blue/15 bg-white/70 backdrop-blur-md p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-pink/50 hover:-translate-y-1"
              >
                {/* Certificate Display or Framed Placeholder */}
                {cert.imageSrc ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brown/20 bg-beige/20 shadow-inner group">
                    <img
                      src={cert.imageSrc}
                      alt={cert.imageAlt || cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full rounded-xl border-2 border-dashed border-brown/30 bg-beige/25 p-5 flex flex-col items-center justify-center text-center transition-all group-hover:border-pink/60 group-hover:bg-beige/40">
                    {/* Inner luxury hairline border */}
                    <div className="absolute inset-2 rounded-lg border border-brown/15 pointer-events-none" />

                    {/* Ornate Award / Laurel Icon */}
                    <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pink/15 text-brown transition-transform duration-300 group-hover:scale-110 group-hover:bg-pink/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-6 w-6 text-brown"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004 0V9.75a3.75 3.75 0 0 0-7.5 0v4.5m7.5 0h-7.5"
                        />
                        <circle cx="12" cy="7" r="3" />
                      </svg>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brown/80">
                      Certificate Placeholder
                    </span>
                    <span className="mt-1 text-[11px] text-dark-blue/60 font-medium">
                      Add credential scan
                    </span>
                  </div>
                )}

                {/* Certificate Meta Details */}
                <div className="mt-5 text-center flex-1 flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-dark-blue tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-brown">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-xs text-dark-blue/65 leading-relaxed">
                    {cert.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
