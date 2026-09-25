"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "What can I expect during my first consultation?",
    answer:
      "Each consultation at Vita Eterna includes a detailed, unrushed discussion of your aesthetic goals, clinical history, and anatomical assessment. Dr Rishi takes the time to listen and co-create a personalised, medically sound treatment plan tailored specifically for you.",
  },
  {
    question: "Do you create customised treatment plans?",
    answer:
      "Absolutely. Every Vita Eterna treatment plan is completely bespoke. No two faces, skin profiles, or wellness journeys are the same, so we strictly avoid one-size-fits-all treatments.",
  },
  {
    question: "Can multiple treatments be combined in a single visit?",
    answer:
      "Yes, depending on medical suitability. Many of our patients achieve optimal results by pairing complementary therapies, such as skin rejuvenation with targeted injectables or restorative IV wellness infusions.",
  },
  {
    question: "Why choose Vita Eterna?",
    answer:
      "Vita Eterna is 100% physician-led and housed within a multi-speciality hospital facility, ensuring surgical-grade sterility, medical ethics, and advanced clinical protocols for every procedure. Dr Rishi blends medical precision with an intuitive eye for timeless, understated elegance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-beige/60 py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal from="top" delay={50}>
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-dark-blue/70">
              Clear, honest answers to help guide your aesthetic journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 divide-y divide-dark-blue/15 border-t border-b border-dark-blue/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={faq.question}
                from={index % 2 === 0 ? "left" : "right"}
                delay={80 + index * 70}
              >
                <div className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-brown focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-dark-blue pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dark-blue/5 text-brown text-lg font-light transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-pink/20 text-dark-blue" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Butter-smooth height transition container */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pt-1 text-sm leading-relaxed text-dark-blue/75">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

