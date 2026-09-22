"use client";

import { useState, useRef, useEffect } from "react";

interface ThemedCalendarProps {
  selectedDate: string; // YYYY-MM-DD
  onChange: (dateStr: string) => void;
  label?: string;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatYMD(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export default function ThemedCalendar({
  selectedDate,
  onChange,
  label = "Consultation Date *",
}: ThemedCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialDate = selectedDate ? new Date(selectedDate + "T00:00:00") : today;
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());

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

  const isCurrentMonthOrPast =
    currentYear < today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth <= today.getMonth());

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentMonthOrPast) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleSelectDay = (day: number) => {
    const targetDate = new Date(currentYear, currentMonth, day);
    targetDate.setHours(0, 0, 0, 0);
    if (targetDate < today) return;
    onChange(formatYMD(currentYear, currentMonth, day));
    setIsOpen(false);
  };

  const selectedDateObj = selectedDate
    ? new Date(selectedDate + "T00:00:00")
    : null;

  const displayDateString = selectedDateObj
    ? selectedDateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Choose consultation date";

  return (
    <div ref={containerRef} className="relative w-full min-w-0">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown mb-2 truncate">
          {label}
        </label>
      )}

      {/* Date Field Click Trigger */}
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
            <rect x="3" y="4" width="18" height="18" rx="2.5" ry="2.5" />
            <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
            <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="font-medium truncate min-w-0">{displayDateString}</span>
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

      {/* Calendar Popover with GPU-accelerated smooth open/close */}
      <div
        className={`absolute left-0 right-0 z-50 mt-2 rounded-2xl border border-dark-blue/15 bg-white p-3 sm:p-4 shadow-2xl backdrop-blur-md origin-top transition-all duration-200 ease-out w-full max-w-full ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-dark-blue/10">
          <span className="text-xs sm:text-sm font-semibold text-dark-blue">
            {MONTHS[currentMonth]} {currentYear}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={isCurrentMonthOrPast}
              className="flex h-7 w-7 items-center justify-center rounded-full text-dark-blue/70 transition-colors hover:bg-beige disabled:opacity-25 disabled:cursor-not-allowed text-base font-semibold"
              aria-label="Previous month"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="flex h-7 w-7 items-center justify-center rounded-full text-dark-blue/70 transition-colors hover:bg-beige text-base font-semibold"
              aria-label="Next month"
            >
              ›
            </button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 pt-2 sm:pt-3 text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-brown">
          {DAYS.map((d) => (
            <div key={d} className="py-0.5 sm:py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Day Grid */}
        <div className="grid grid-cols-7 gap-1 pt-1 text-center text-xs">
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="h-7 sm:h-8" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateObj = new Date(currentYear, currentMonth, day);
            dateObj.setHours(0, 0, 0, 0);

            const isPast = dateObj < today;
            const isToday = dateObj.getTime() === today.getTime();
            const isSelected =
              selectedDateObj &&
              selectedDateObj.getTime() === dateObj.getTime();

            return (
              <button
                key={`day-${day}`}
                type="button"
                disabled={isPast}
                onClick={() => handleSelectDay(day)}
                className={`flex h-7 sm:h-8 w-full items-center justify-center rounded-lg text-[11px] sm:text-xs font-medium transition-colors p-0 ${
                  isPast
                    ? "text-dark-blue/25 cursor-not-allowed"
                    : isSelected
                    ? "bg-dark-blue text-beige font-semibold shadow-sm"
                    : isToday
                    ? "border border-pink text-dark-blue font-semibold hover:bg-pink/20"
                    : "text-dark-blue hover:bg-beige/70"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
