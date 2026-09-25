import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-beige text-dark-blue pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Top bar with Branding & Logo */}
        <div className="flex items-start justify-between gap-4">
          <div className="hero-animate-brand">
            <h1 className="font-script text-4xl sm:text-6xl md:text-7xl leading-none text-dark-blue font-normal tracking-wide">
              Vita Eterna
            </h1>
            <p className="font-script text-xl sm:text-3xl md:text-4xl text-pink mt-1 md:mt-2">
              by Dr Rishi
            </p>
          </div>
          <div className="flex-shrink-0 pt-1 sm:pt-2 hero-animate-logo">
            <Image
              src="/logo.png"
              alt="Vita Eterna Infinite Beauty"
              width={160}
              height={100}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Main Hero Content & Artwork Grid */}
        <div className="mt-4 sm:mt-6 grid items-start gap-6 lg:grid-cols-12 lg:gap-0">
          {/* Copy & Actions: Order 2 on mobile (below image), Order 1 on desktop (left column) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-start pt-2 lg:pt-8 z-10 hero-animate-copy">
            <h2 className="text-sm sm:text-base font-semibold tracking-tight text-dark-blue">
              Doctor Led Elegant Timeless Aesthetics
            </h2>

            <div className="mt-4 sm:mt-5 space-y-3 text-xs sm:text-sm leading-relaxed text-dark-blue/80 font-normal max-w-md">
              <p>
                Rooted in clinical excellence, we don’t just treat concerns; we
                listen, assess, and design a plan that honours your unique
                anatomy and aesthetic vision.
              </p>
              <p>
                Every procedure at Vita Eterna meets the highest medical
                standards, so you can relax knowing you’re in the very best
                hands.
              </p>
            </div>

            {/* CTA Buttons - Vertically stacked single-line pills matching reference */}
            <div className="mt-6 sm:mt-8 flex flex-col items-start gap-3.5">
              <Link
                href="#appointment"
                className="hero-animate-btn-1 inline-flex items-center justify-center rounded-full bg-dark-blue px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-dark-blue/90 hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap min-w-[210px] text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="#location"
                className="hero-animate-btn-2 inline-flex items-center justify-center rounded-full bg-pink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-pink/90 hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap min-w-[210px] text-center"
              >
                Get Directions
              </Link>
            </div>
          </div>

          {/* Visual Artwork: Order 1 on mobile (above Doctor Led text), Order 2 on desktop (right column) */}
          <div className="order-1 lg:order-2 relative lg:col-span-7 flex justify-center lg:justify-end lg:-mt-10 xl:-mt-14 lg:-ml-12 xl:-ml-16 z-0 hero-animate-image">
            <div className="relative w-full max-w-2xl lg:max-w-none">
              <Image
                src="/hero-image.png"
                alt="Vita Eterna Aesthetic Treatments"
                width={3250}
                height={2453}
                priority
                className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.005]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

