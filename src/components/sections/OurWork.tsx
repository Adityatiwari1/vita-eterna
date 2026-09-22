import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  { title: "Quiet Radiance", category: "Full Facial Harmonisation & Thread Lifting" },
  { title: "Timeless Restoration", category: "Skin Booster & Micro-Injectable Treatment" },
];

export default function OurWork() {
  return (
    <section id="our-work" className="bg-white/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Our Work</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
          Clinical Transformations
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title}>
              <ImagePlaceholder label={project.title} ratio="aspect-[4/3]" />
              <h3 className="mt-4 text-lg font-semibold text-dark-blue">
                {project.title}
              </h3>
              <p className="text-sm text-dark-blue/70">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

