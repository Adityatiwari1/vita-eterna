import SectionLabel from "@/components/ui/SectionLabel";

const categories = [
  {
    title: "Facial Balancing & Harmonisation",
    items: [
      "Facial Threads",
      "Botox & Dysport",
      "Dermal Fillers",
      "Biostimulators (Sculptra / Radiesse)",
      "Liquid Rhinoplasty",
    ],
  },
  {
    title: "Skin Rejuvenation",
    items: [
      "Medical Microneedling",
      "Mesotherapy",
      "PRP & GFC Skin Therapy",
      "Skin Boosters (Profhilo, Exosomes, Hyaluronic Acid)",
      "Clinical Chemical Peels",
      "IPL Photo Facial",
    ],
  },
  {
    title: "IV Therapy & Wellness",
    items: [
      "Customised IV Wellness Infusions",
      "Antioxidant & Glutathione Radiance Drips",
      "Energy, Hydration & Immune Boost Formulations",
    ],
  },
  {
    title: "Hair Management",
    items: [
      "Laser Hair Removal (Medical IPL)",
      "Hair Loss Management, Hair PRP, GFC & Exosomes",
      "Hair Transplant Consultation & Care",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-dark-blue text-beige py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/20">
      <div className="mx-auto max-w-6xl">
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
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="border-t border-beige/15 pt-6 transition-all hover:border-pink/50"
            >
              <h3 className="text-lg font-semibold text-pink">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm leading-relaxed text-beige/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink/60"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

