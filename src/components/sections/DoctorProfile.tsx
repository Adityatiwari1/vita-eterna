import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <ScrollReveal from="left" delay={50} className="w-full">
          <ImagePlaceholder label="Dr Rishi Photography Placeholder" ratio="aspect-[4/5]" />
        </ScrollReveal>
        <ScrollReveal from="right" delay={150}>
          <div>
            <SectionLabel>Doctor Led</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Dr Rishi
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-dark-blue/80 font-normal">
              With over 25 years of clinical experience as a GP and Diabetologist, Dr
              Rishi brings a depth of medical knowledge that is rare in the
              world of aesthetics and entirely unmatched in her care. Dr Rishi
              made a considered and passionate move into cosmetology, driven by
              a belief that feeling beautiful and feeling well are deeply
              connected.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dark-blue/80 font-normal">
              She has since earned the very best accreditations the industry
              has to offer, and continues to sharpen her expertise through
              advanced training in London and the United States. What sets her
              apart is not just her clinical precision, but her eye, an innate
              ability to find the beauty in every face she sees and the skill
              to bring it elegantly, naturally forward.
            </p>
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

