import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    title: "Surgical Standard Hygiene",
    text: "Set within a multispeciality hospital and held to surgical standards of hygiene and clinical excellence.",
  },
  {
    title: "Consultation First",
    text: "Every client journey begins with Dr Rishi herself, a thorough consultation where she listens, analyses, and educates you on your treatment plan.",
  },
  {
    title: "Built to Age Gracefully",
    text: "Every treatment we design is made to look beautiful now, age gracefully over time, and endure well.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-beige/40 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
            Designed to feel like quiet luxury
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-dark-blue/80 font-normal">
            Vita Eterna was built on a simple but powerful idea: that world-class
            medical care and genuine comfort should exist in the same room. Step
            inside and you won’t feel clinical. We don’t believe in treatment for
            the sake of it; every detail is tailored for you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-dark-blue/10 bg-white/70 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-dark-blue">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-blue/70">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

