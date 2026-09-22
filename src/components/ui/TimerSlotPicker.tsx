"use client";

import { useState, useRef, useEffect } from "react";

interface TimerSlotPickerProps {
  selectedSlot: string;
  onChange: (slot: string) => void;
  label?: string;
  selectedDate?: string;
}

export const ONE_HOUR_SLOTS = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
];

// Parse start hour in 24-hour format from slot label (e.g. "12:00 PM - 01:00 PM" -> 12, "01:00 PM - 02:00 PM" -> 13)
export function getSlotStartHour(slot: string): number {
  const match = slot.match(/^(\d{1,2}):\d{2}\s*(AM|PM)/i);
  if (!match) return 0;
  let hour = parseInt(match[1], 10);
  const meridiem = match[2].toUpperCase();
  if (meridiem === "PM" && hour < 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return hour;
}

// Determines if a slot has passed or is the current ongoing hour today
export function isSlotDisabledForDate(slot: string, selectedDate?: string): boolean {
  if (!selectedDate) return false;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const todayStr = `${year}-${month}-${day}`;

  // Past dates
  if (selectedDate < todayStr) return true;

  // For today: user can't pick past hours OR the current hour's slot
  if (selectedDate === todayStr) {
    const currentHour = now.getHours();
    const slotHour = getSlotStartHour(slot);
    return slotHour <= currentHour;
  }

  // Future dates have all slots available
  return false;
}

export default function TimerSlotPicker({
  selectedSlot,
  onChange,
  label = "Time Slot *",
  selectedDate,
}: TimerSlotPickerProps) {
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
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isCurrentSlotDisabled = isSlotDisabledForDate(selectedSlot, selectedDate);
  const availableSlots = ONE_HOUR_SLOTS.filter(
    (s) => !isSlotDisabledForDate(s, selectedDate)
  );

  return (
    <div ref={containerRef} className="relative w-full min-w-0">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown mb-2 truncate">
          {label}
        </label>
      )}

      {/* Time Slot Click Trigger - Strict single line placeholder */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-0 max-w-full items-center justify-between rounded-xl border border-dark-blue/15 bg-white/90 px-3.5 sm:px-4 py-3 text-left text-xs sm:text-sm text-dark-blue shadow-sm transition-all hover:border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-1 focus:ring-dark-blue"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 truncate flex-1">
          <svg
            className="h-4 w-4 text-brown flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15.5 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-medium truncate whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
            {selectedSlot || "Select Time Slot"}
          </span>
          {isCurrentSlotDisabled && (
            <span className="ml-1.5 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700 flex-shrink-0">
              Unavailable
            </span>
          )}
        </div>
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

      {/* Time Slots Popover with GPU-accelerated smooth open/close */}
      <div
        className={`absolute left-0 right-0 z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-dark-blue/15 bg-white p-2 sm:p-3 shadow-2xl backdrop-blur-md origin-top transition-all duration-200 ease-out w-full max-w-full ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        {availableSlots.length === 0 ? (
          <div className="py-4 px-2 text-center text-xs text-dark-blue/70">
            <p className="font-medium text-dark-blue">No slots remaining today</p>
            <p className="mt-1 text-[11px] text-brown">
              Please choose a future date on the calendar above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-1">
            {ONE_HOUR_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot;
              const isDisabled = isSlotDisabledForDate(slot, selectedDate);

              return (
                <button
                  key={slot}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => {
                    if (isDisabled) return;
                    onChange(slot);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-3 sm:px-3.5 py-2.5 text-xs transition-colors ${
                    isDisabled
                      ? "bg-dark-blue/5 text-dark-blue/30 cursor-not-allowed opacity-60"
                      : isSelected
                      ? "bg-dark-blue text-beige font-semibold shadow-sm"
                      : "text-dark-blue hover:bg-pink/20 hover:text-dark-blue"
                  }`}
                  title={
                    isDisabled
                      ? "This time slot is either in the past or is the current ongoing hour."
                      : undefined
                  }
                >
                  <span className={isDisabled ? "line-through" : ""}>{slot}</span>
                  {isDisabled ? (
                    <span className="text-[10px] font-medium text-dark-blue/40 uppercase tracking-wider ml-1 flex-shrink-0">
                      Unavailable
                    </span>
                  ) : (
                    isSelected && (
                      <svg
                        className="h-3.5 w-3.5 text-pink flex-shrink-0 ml-2"
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
                    )
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
