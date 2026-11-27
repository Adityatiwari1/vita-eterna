import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <ScrollReveal from="left" delay={50} className="w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl border border-dark-blue/10 bg-beige">
            <Image
              src="/dr-rishi-aesthetic-physician.png"
              alt="Dr Rishi - Aesthetic Physician & Founder at Vita Eterna"
              width={1147}
              height={1372}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 540px"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal from="right" delay={150}>
          <div>
            <SectionLabel>Doctor Led</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Dr Rishi
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-dark-blue/80 font-normal">
              Dr Rishi has over 25 years of experience as a GP and Diabetologist. This
              gives her a depth of medical knowledge that is rare in aesthetics.
              She moved into cosmetology because she believes that feeling
              beautiful and feeling well are connected.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dark-blue/80 font-normal">
              She has earned top accreditations and keeps training in London and
              the United States. What sets her apart is her clinical precision
              and her eye for the beauty in every face. She brings it forward
              in a natural way.
            </p>
            <ul className="mt-6 grid gap-2 text-xs text-dark-blue/80 sm:grid-cols-2">
              {[
                "25+ years of clinical experience",
                "Fellowship in Aesthetic & Anti-Aging Medicine",
                "Life Member of ISAM, ILAMED and ISM",
                "Practises inside a multi-speciality hospital",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" />
                  {point}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-2 border-pink pl-5 font-script text-2xl text-dark-blue">
              &ldquo;Every client I meet deserves to leave feeling like the
              most confident version of themselves. That is the moment I
              cherish. That is what drives everything I do.&rdquo;
              <footer className="mt-2 font-body text-xs not-italic uppercase tracking-[0.25em] text-brown font-semibold">
                Dr Rishi
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

