"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Certificate = {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  affiliation: string;
  credential: string;
  imageSrc: string;
  imageAlt: string;
  delay: number;
};

const certificates: Certificate[] = [
  {
    id: "cert-ifaam",
    title: "International Fellowship",
    subtitle: "Aesthetic & Anti-Aging Medicine (IFAAM)",
    issuer: "ILAMED & Indo-German Board (IGBAMS)",
    affiliation: "University Medicine Greifswald & ISAM",
    credential: "Postgraduate clinical fellowship in advanced aesthetic procedures and anti-aging medicine.",
    imageSrc: "/certificates/3.png",
    imageAlt: "International Fellowship in Aesthetic and Anti-Aging Medicine (IFAAM) - Dr. Rishi Mangat",
    delay: 100,
  },
  {
    id: "cert-ilamed",
    title: "Life Membership",
    subtitle: "Institute of Laser & Aesthetic Medicine",
    issuer: "ILAMED International",
    affiliation: "Endorsed by University Medicine Greifswald (Germany) & SUNY Buffalo (USA)",
    credential: "Certified Life Member recognized for excellence and proficiency in laser & aesthetic clinical practice.",
    imageSrc: "/certificates/2.png",
    imageAlt: "Institute of Laser & Aesthetic Medicine Life Membership - Dr. Rishi Mangat",
    delay: 200,
  },
  {
    id: "cert-isam",
    title: "Life Membership",
    subtitle: "Indian Society of Aesthetic Medicine",
    issuer: "ISAM & UIME",
    affiliation: "Union Internationale De Médecine Esthétique",
    credential: "Certified Life Member of the Indian Society of Aesthetic Medicine and international UIME body.",
    imageSrc: "/certificates/1.png",
    imageAlt: "Indian Society of Aesthetic Medicine Life Membership - Dr. Rishi Mangat",
    delay: 300,
  },
  {
    id: "cert-ism",
    title: "Life Membership",
    subtitle: "Indian Society of Mesotherapy",
    issuer: "Indian Society of Mesotherapy (ISM)",
    affiliation: "Certified Clinical Member",
    credential: "Certified Life Member with clinical mastery in advanced mesotherapy and regenerative intradermal protocols.",
    imageSrc: "/certificates/4.png",
    imageAlt: "Indian Society of Mesotherapy Life Membership - Dr. Rishi Mangat",
    delay: 400,
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="credentials"
      className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal from="top" delay={50}>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel>Accreditations & Excellence</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Certified Clinical Credentials
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-dark-blue/70">
              Rigorous medical training, international fellowships, and premier clinical
              accreditations backing every procedure by Dr. Rishi Mangat.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Certificates Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <ScrollReveal key={cert.id} from="bottom" delay={cert.delay}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="group relative h-full flex flex-col justify-between rounded-2xl border border-dark-blue/15 bg-white/80 backdrop-blur-md p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-pink/60 hover:-translate-y-1 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
              >
                {/* Certificate Scan Preview */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-brown/20 bg-beige/30 shadow-inner group-hover:shadow-md transition-all">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.imageAlt}
                    fill
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 280px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay with view prompt */}
                  <div className="absolute inset-0 bg-dark-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-blue/90 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-beige shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path
                          fillRule="evenodd"
                          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="mt-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className="inline-block rounded-md bg-pink/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brown">
                      {cert.title}
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-semibold text-dark-blue tracking-tight leading-snug">
                      {cert.subtitle}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-brown">
                      {cert.issuer}
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-dark-blue/70 leading-relaxed border-t border-dark-blue/10 pt-2.5">
                    {cert.credential}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Certificate Inspection */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-beige rounded-2xl overflow-hidden shadow-2xl border border-dark-blue/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-dark-blue/15 bg-white/90">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pink">
                  {selectedCert.title}
                </span>
                <h4 className="text-sm sm:text-base font-semibold text-dark-blue leading-tight">
                  {selectedCert.subtitle}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-blue/10 text-dark-blue hover:bg-dark-blue hover:text-beige transition-colors"
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-beige/50">
              <div className="relative w-full max-w-lg aspect-[3/4] shadow-xl rounded-lg overflow-hidden border border-brown/30 bg-white">
                <Image
                  src={selectedCert.imageSrc}
                  alt={selectedCert.imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 512px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer info */}
            <div className="px-5 py-3 bg-white/90 border-t border-dark-blue/15 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-xs text-dark-blue/70">
                Issued to: <span className="font-semibold text-dark-blue">Dr. Rishi Mangat</span>
              </p>
              <p className="text-[11px] text-brown font-medium">
                {selectedCert.affiliation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
