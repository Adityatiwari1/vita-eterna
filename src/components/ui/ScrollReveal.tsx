"use client";

import { useEffect, useRef, ReactNode } from "react";

export type RevealDirection = "left" | "right" | "bottom" | "top" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  from?: RevealDirection;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  from = "bottom",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      el.classList.add("revealed");
      return;
    }

    // If already revealed once, keep revealed and do not hide
    if (el.classList.contains("revealed")) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              el.classList.add("revealed");
            }, delay);
          } else {
            el.classList.add("revealed");
          }
          observer.unobserve(el);
        }
      },
      {
        root: null,
        rootMargin: "40px 0px 40px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const fromClass =
    from === "left"
      ? "reveal-from-left"
      : from === "right"
      ? "reveal-from-right"
      : from === "top"
      ? "reveal-from-top"
      : from === "zoom"
      ? "reveal-from-zoom"
      : "reveal-from-bottom";

  return (
    <div
      ref={ref}
      className={`reveal-item ${fromClass} ${className}`}
    >
      {children}
    </div>
  );
}
