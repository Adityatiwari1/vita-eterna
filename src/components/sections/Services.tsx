import ScrollReveal from "@/components/ui/ScrollReveal";

type TreatmentCategory = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  items: string[];
  imageSrc?: string;
  imageAlt?: string;
};

const categories: TreatmentCategory[] = [
  {
    id: "facial-balancing",
    number: "01",
    title: "Facial Balancing & Harmonisation",
    tagline: "Architectural symmetry & gentle volume restoration",
    items: [
      "Facial Threads",
      "Botox & Dysport",
      "Dermal Fillers",
      "Biostimulators (Sculptra / Radiesse)",
      "Liquid Rhinoplasty",
    ],
    imageSrc: "/services/facial-balancing.png",
    imageAlt: "Facial Balancing & Harmonisation Treatments",
  },
  {
    id: "skin-rejuvenation",
    number: "02",
    title: "Skin Rejuvenation",
    tagline: "Cellular renewal, skin tightening & luminous complexion",
    items: [
      "Medical Microneedling",
      "Mesotherapy",
      "PRP & GFC Skin Therapy",
      "Skin Boosters (Profhilo, Exosomes, Hyaluronic Acid)",
      "Clinical Chemical Peels",
      "IPL Photo Facial",
    ],
    imageSrc: "/services/skin-rejuvenation.png",
    imageAlt: "Skin Rejuvenation & Clinical Peels",
  },
  {
    id: "iv-therapy",
    number: "03",
    title: "IV Therapy & Wellness",
    tagline: "Intravenous biological nourishment & systemic vitality",
    items: [
      "Customised IV Wellness Infusions",
      "Antioxidant & Glutathione Radiance Drips",
      "Energy, Hydration & Immune Boost Formulations",
    ],
    imageSrc: "/services/iv-therapy.jpg",
    imageAlt: "IV Therapy & Wellness Lounge",
  },
  {
    id: "hair-management",
    number: "04",
    title: "Hair Management",
    tagline: "Follicular regeneration & precision laser therapy",
    items: [
      "Laser Hair Removal (Medical IPL)",
      "Hair Loss Management, Hair PRP, GFC & Exosomes",
    ],
    imageSrc: "/services/hair-management.png",
    imageAlt: "Hair Management & PRP Therapy",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-dark-blue text-beige py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/20 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal from="left" delay={50}>
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-pink">
              Our Treatments
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-beige sm:text-4xl">
              Every Treatment, Under One Roof
            </h2>
            <p className="mt-4 text-sm text-beige/70">
              Advanced medical-grade treatments carried out under physician supervision.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical line with treatments on the left and images on the right */}
        <div className="relative mt-14 sm:mt-20 space-y-12 sm:space-y-16 before:absolute before:left-4 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-pink/60 before:via-pink/30 before:to-pink/10">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              from="bottom"
              delay={100 + index * 80}
            >
              <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pl-12 sm:pl-16">
                {/* Numbered node on vertical line */}
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-pink/40 bg-dark-blue flex items-center justify-center text-xs sm:text-sm font-semibold text-pink shadow-[0_0_12px_rgba(202,163,182,0.25)] ring-4 ring-dark-blue">
                  {category.number}
                </div>

                {/* Left: Category info & Treatment items */}
                <div className="w-full lg:w-7/12">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-pink">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-beige/60 font-light">
                    {category.tagline}
                  </p>

                  <ul className="mt-5 space-y-2.5 sm:space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="group flex items-start gap-3 text-sm sm:text-base leading-relaxed text-beige/85 hover:text-beige transition-colors"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink/70 group-hover:bg-pink group-hover:scale-125 transition-all shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image or Image Placeholder */}
                <div className="w-full lg:w-5/12">
                  {category.imageSrc ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-beige/15 shadow-xl group">
                      <img
                        src={category.imageSrc}
                        alt={category.imageAlt || category.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-60" />
                      <span className="absolute bottom-3 left-4 text-xs font-medium text-beige/90 tracking-wide">
                        {category.title}
                      </span>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] w-full rounded-2xl border-2 border-dashed border-pink/30 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center transition-all hover:border-pink/50 hover:bg-white/[0.05] group">
                      <div className="h-12 w-12 rounded-full bg-pink/10 flex items-center justify-center text-pink mb-3 group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-beige/90 tracking-wide">
                        {category.title}
                      </span>
                      <span className="mt-1 text-xs text-beige/50 uppercase tracking-[0.18em]">
                        Image Placeholder
                      </span>
                      <span className="mt-2 text-[11px] text-pink/80 font-medium">
                        Add treatment image
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
