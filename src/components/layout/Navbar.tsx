"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Treatments", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#appointment" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-blue/10 bg-beige/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex items-center transition-opacity hover:opacity-90 py-1"
        >
          <Image
            src="/logo.png"
            alt="Vita Eterna Logo"
            width={120}
            height={70}
            className="h-11 sm:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-dark-blue/70 transition-colors hover:text-dark-blue font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#appointment"
            className="inline-flex items-center justify-center rounded-full bg-dark-blue px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-beige transition-all hover:bg-dark-blue/90 shadow-sm"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#appointment"
            className="inline-flex items-center justify-center rounded-full bg-dark-blue px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-beige shadow-sm"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-dark-blue hover:bg-black/5 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-dark-blue/10 bg-beige/98 backdrop-blur-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-xs font-semibold uppercase tracking-[0.2em] text-dark-blue/80 hover:text-dark-blue"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Link
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-dark-blue py-3 text-xs font-semibold uppercase tracking-[0.18em] text-beige shadow-md"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


