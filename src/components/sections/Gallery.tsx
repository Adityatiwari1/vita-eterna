import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionLabel from "@/components/ui/SectionLabel";

const stills = [
  "Certificate Wall & Accreditations",
  "Clinical Chemical Peel Suite",
  "Medical Microneedling Station",
  "Laser Suite & IPL Technology",
];

export default function Gallery() {
  return (
    <section className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel>Inside the Clinic</SectionLabel>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-dark-blue">
              Hospital-Grade Hygiene & Treatment Suites
            </h2>
          </div>
          {/* Subtle swipe hint for mobile */}
          <span className="sm:hidden text-[11px] uppercase tracking-wider text-brown font-semibold flex items-center gap-1">
            Swipe <span>→</span>
          </span>
        </div>

        {/* Horizontal scroll on mobile, grid on sm/lg */}
        <div className="mt-8 sm:mt-12 flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          {stills.map((label) => (
            <div
              key={label}
              className="w-[75vw] max-w-[280px] sm:max-w-none sm:w-auto flex-shrink-0 snap-center"
            >
              <ImagePlaceholder label={label} ratio="aspect-[4/5]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

