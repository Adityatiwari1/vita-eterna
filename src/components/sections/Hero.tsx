import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-beige text-dark-blue pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Top bar with Branding & Logo */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="font-script text-4xl sm:text-6xl md:text-7xl leading-none text-dark-blue font-normal tracking-wide">
              Vita Eterna
            </h1>
            <p className="font-script text-xl sm:text-3xl md:text-4xl text-pink mt-1 md:mt-2">
              by Dr Rishi
            </p>
          </div>
          <div className="flex-shrink-0 pt-0.5 sm:pt-1">
            <Image
              src="/logo.png"
              alt="Vita Eterna Infinite Beauty"
              width={160}
              height={100}
              className="h-14 sm:h-20 md:h-28 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Main Hero Content & Artwork Grid */}
        <div className="mt-6 sm:mt-8 grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Copy & Actions: Order 2 on mobile (below image), Order 1 on desktop (left column) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-base sm:text-lg font-semibold tracking-tight text-dark-blue">
              Doctor Led Elegant Timeless Aesthetics
            </h2>

            <div className="mt-3 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm leading-relaxed text-dark-blue/80 font-normal">
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

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-dark-blue px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-beige shadow-md transition-all hover:bg-dark-blue/90 hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="#location"
                className="inline-flex items-center justify-center rounded-full bg-pink px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-pink/90 hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Get Directions
              </Link>
            </div>
          </div>

          {/* Visual Artwork: Order 1 on mobile (above Doctor Led text), Order 2 on desktop (right column) */}
          <div className="order-1 lg:order-2 relative lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl rounded-3xl border-2 border-dashed border-dark-blue/20 bg-white/40 p-6 sm:p-12 text-center backdrop-blur-sm transition-all hover:border-dark-blue/40 aspect-[4/3] flex flex-col items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-beige text-dark-blue/40 mb-4">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-dark-blue/60">
                Hero Image / Artwork Placeholder
              </span>
              <p className="mt-2 max-w-xs text-xs text-dark-blue/45">
                Place your custom visual collage or treatment photography here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

