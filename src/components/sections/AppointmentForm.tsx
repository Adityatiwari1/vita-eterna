"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ThemedCalendar from "@/components/ui/ThemedCalendar";
import TimerSlotPicker, { ONE_HOUR_SLOTS, isSlotDisabledForDate } from "@/components/ui/TimerSlotPicker";
import ThemedDropdown from "@/components/ui/ThemedDropdown";
import { submitConsultationBooking } from "@/app/actions/booking";
import ScrollReveal from "@/components/ui/ScrollReveal";

const treatmentOptions = [
  "Facial Balancing & Harmonisation (Botox, Fillers, Threads)",
  "Skin Rejuvenation (Microneedling, Peels, Skin Boosters)",
  "GFC / PRP Skin & Hair Rejuvenation",
  "Customised IV Wellness Drip Therapy",
  "Laser Hair Removal (IPL)",
  "Hair Loss Management & Transplant Consultation",
  "General Aesthetic Consultation with Dr Rishi",
];

// Get today's date formatted as YYYY-MM-DD
function getTodayYMD(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Find initial date and available slot
function getInitialBooking(): { date: string; slot: string } {
  const todayStr = getTodayYMD();
  const availableToday = ONE_HOUR_SLOTS.find((s) => !isSlotDisabledForDate(s, todayStr));
  if (availableToday) {
    return { date: todayStr, slot: availableToday };
  }

  // If no slots available today (e.g. evening hours), default to tomorrow morning
  const tmrw = new Date();
  tmrw.setDate(tmrw.getDate() + 1);
  const tmrwYear = tmrw.getFullYear();
  const tmrwMonth = String(tmrw.getMonth() + 1).padStart(2, "0");
  const tmrwDay = String(tmrw.getDate()).padStart(2, "0");
  return { date: `${tmrwYear}-${tmrwMonth}-${tmrwDay}`, slot: ONE_HOUR_SLOTS[0] };
}

export default function AppointmentForm() {
  const todayStr = getTodayYMD();
  const initialBooking = getInitialBooking();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    treatment: treatmentOptions[0],
    preferredDate: initialBooking.date,
    preferredTime: initialBooking.slot,
    concern: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (newDate: string) => {
    setFormData((prev) => {
      let nextSlot = prev.preferredTime;
      // If the current slot is not available on the new date, pick first available slot
      if (!nextSlot || isSlotDisabledForDate(nextSlot, newDate)) {
        const available = ONE_HOUR_SLOTS.find((s) => !isSlotDisabledForDate(s, newDate));
        nextSlot = available || "";
      }
      return { ...prev, preferredDate: newDate, preferredTime: nextSlot };
    });
  };

  const handleTimeChange = (newTime: string) => {
    setFormData((prev) => ({ ...prev, preferredTime: newTime }));
  };

  const handleTreatmentChange = (newTreatment: string) => {
    setFormData((prev) => ({ ...prev, treatment: newTreatment }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard against past dates
    if (formData.preferredDate < todayStr) {
      setStatus("error");
      setFeedbackMessage("Please select today or a future date for your consultation.");
      return;
    }

    // Guard against picking past or current hour slot on the current date
    if (!formData.preferredTime || isSlotDisabledForDate(formData.preferredTime, formData.preferredDate)) {
      setStatus("error");
      setFeedbackMessage("The selected time slot is unavailable. Please select an upcoming hour.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await submitConsultationBooking(formData);
      if (res.success) {
        setStatus("success");
        setFeedbackMessage(
          res.message || "Thank you! Your consultation request has been received."
        );
        const resetBooking = getInitialBooking();
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          treatment: treatmentOptions[0],
          preferredDate: resetBooking.date,
          preferredTime: resetBooking.slot,
          concern: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(res.message || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(
        err?.message || "An unexpected error occurred. Please call +91 95177 36935."
      );
    }
  };

  return (
    <section id="appointment" className="relative bg-beige py-16 sm:py-24 px-4 sm:px-6 border-t border-dark-blue/10 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal from="top" delay={50}>
          <div className="text-center">
            <SectionLabel>Book an Appointment</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
              Request an Appointment with Us
            </h2>
            <p className="mt-3 text-sm text-dark-blue/70">
              Rooted in clinical excellence. We look forward to welcoming you to Vita Eterna.
            </p>
          </div>
        </ScrollReveal>

        {status === "success" && (
          <ScrollReveal from="zoom" delay={100}>
            <div className="mt-8 rounded-3xl bg-dark-blue p-8 sm:p-12 text-center text-beige shadow-xl transition-all animate-in fade-in zoom-in-95">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink/20 text-pink text-3xl font-bold">
                ✓
              </div>
              <h3 className="font-script text-4xl text-pink">Thank You</h3>
              <p className="mt-3 text-sm text-beige/90 leading-relaxed max-w-lg mx-auto">
                {feedbackMessage}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex rounded-full bg-pink px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-pink/90 transition-all shadow-md"
              >
                Book Another Appointment
              </button>
            </div>
          </ScrollReveal>
        )}

        {status !== "success" && (
          <ScrollReveal from="bottom" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 sm:mt-12 rounded-3xl border border-dark-blue/10 bg-white/75 backdrop-blur-md p-4 sm:p-8 md:p-12 shadow-xl shadow-dark-blue/5 w-full max-w-full"
            >
            {status === "error" && (
              <div className="mb-6 sm:mb-8 rounded-2xl bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-700">
                {feedbackMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full min-w-0">
              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown truncate">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Eleanor"
                  className="mt-2 w-full min-w-0 max-w-full rounded-xl border border-dark-blue/15 bg-beige/30 px-3.5 sm:px-4 py-3 text-xs sm:text-sm text-dark-blue placeholder:text-dark-blue/40 outline-none transition-all focus:border-dark-blue focus:bg-white focus:ring-1 focus:ring-dark-blue"
                />
              </div>

              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown truncate">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Vance"
                  className="mt-2 w-full min-w-0 max-w-full rounded-xl border border-dark-blue/15 bg-beige/30 px-3.5 sm:px-4 py-3 text-xs sm:text-sm text-dark-blue placeholder:text-dark-blue/40 outline-none transition-all focus:border-dark-blue focus:bg-white focus:ring-1 focus:ring-dark-blue"
                />
              </div>

              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown truncate">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full min-w-0 max-w-full rounded-xl border border-dark-blue/15 bg-beige/30 px-3.5 sm:px-4 py-3 text-xs sm:text-sm text-dark-blue placeholder:text-dark-blue/40 outline-none transition-all focus:border-dark-blue focus:bg-white focus:ring-1 focus:ring-dark-blue"
                />
              </div>

              <div className="min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown truncate">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full min-w-0 max-w-full rounded-xl border border-dark-blue/15 bg-beige/30 px-3.5 sm:px-4 py-3 text-xs sm:text-sm text-dark-blue placeholder:text-dark-blue/40 outline-none transition-all focus:border-dark-blue focus:bg-white focus:ring-1 focus:ring-dark-blue"
                />
              </div>

              {/* Custom Themed Dropdown for Treatment Options */}
              <div className="sm:col-span-2 min-w-0 w-full">
                <ThemedDropdown
                  label="Treatment / Area of Interest"
                  options={treatmentOptions}
                  value={formData.treatment}
                  onChange={handleTreatmentChange}
                />
              </div>

              {/* Consultation Date Popover */}
              <div className="sm:col-span-1 min-w-0 w-full">
                <ThemedCalendar
                  label="Consultation Date *"
                  selectedDate={formData.preferredDate}
                  onChange={handleDateChange}
                />
              </div>

              {/* Time Slot Popover */}
              <div className="sm:col-span-1 min-w-0 w-full">
                <TimerSlotPicker
                  label="Time Slot *"
                  selectedSlot={formData.preferredTime}
                  selectedDate={formData.preferredDate}
                  onChange={handleTimeChange}
                />
              </div>

              {/* Patient Goal / Concern */}
              <div className="sm:col-span-2 min-w-0 w-full">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brown truncate">
                  Describe Your Goals or Concerns
                </label>
                <textarea
                  rows={3}
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to achieve or any questions you have for Dr Rishi..."
                  className="mt-2 w-full min-w-0 max-w-full rounded-xl border border-dark-blue/15 bg-beige/30 px-3.5 sm:px-4 py-3 text-xs sm:text-sm text-dark-blue placeholder:text-dark-blue/40 outline-none transition-all focus:border-dark-blue focus:bg-white focus:ring-1 focus:ring-dark-blue"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row border-t border-dark-blue/10 pt-6">
              <p className="text-xs text-dark-blue/60 text-center sm:text-left">
                Confirmation details will be sent directly to your email.
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-dark-blue px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-beige shadow-md transition-all hover:bg-dark-blue/90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin text-beige"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Confirming Consultation...
                  </span>
                ) : (
                  "Request an Appointment"
                )}
              </button>
            </div>
          </form>
        </ScrollReveal>
        )}
      </div>
    </section>
  );
}


