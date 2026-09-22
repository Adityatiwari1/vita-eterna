"use client";

import { useState, useRef, useEffect } from "react";

interface ThemedDropdownProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  label?: string;
}

export default function ThemedDropdown({
  options,
  value,
  onChange,
  label,
}: ThemedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-w-0">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown mb-2 truncate">
          {label}
        </label>
      )}

      {/* Dropdown Button with strict single-line non-wrapping placeholder */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-0 max-w-full items-center justify-between rounded-xl border border-dark-blue/15 bg-white/90 px-3.5 sm:px-4 py-3 text-left text-xs sm:text-sm text-dark-blue shadow-sm transition-all hover:border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-1 focus:ring-dark-blue"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis min-w-0 flex-1 font-medium">
          {value}
        </span>
        <svg
          className={`h-4 w-4 text-brown flex-shrink-0 ml-2 transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180 text-dark-blue" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Themed Dropdown Item List with wrapping text so all options are fully visible */}
      <div
        className={`absolute left-0 right-0 z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-dark-blue/15 bg-white p-1.5 shadow-2xl backdrop-blur-md origin-top transition-all duration-200 ease-out w-full max-w-full ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        <ul role="listbox" className="space-y-1">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`flex cursor-pointer items-start justify-between rounded-xl px-3 sm:px-3.5 py-2.5 text-xs sm:text-sm transition-colors ${
                  isSelected
                    ? "bg-dark-blue text-beige font-semibold"
                    : "text-dark-blue hover:bg-pink/20 hover:text-dark-blue"
                }`}
              >
                <span className="pr-2 leading-snug break-words whitespace-normal text-left flex-1">
                  {opt}
                </span>
                {isSelected && (
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-pink mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
