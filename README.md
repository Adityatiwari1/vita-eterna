# Vita Eterna — Luxury Aesthetic Clinic

<div align="center">
  <img src="public/logo.png" alt="Vita Eterna Logo" width="180" />
  <p><strong>Doctor-Led Timeless Aesthetics • Founded by Dr. Rishi</strong></p>
  <p><em>Rooted in clinical excellence, bespoke facial harmonisation, and medical-grade skin rejuvenation.</em></p>
</div>

---

## Overview

**Vita Eterna** is a modern, high-performance web experience for an elite aesthetic dermatology and anti-ageing clinic. Built with Next.js 16 (App Router, Turbopack) and Tailwind CSS v4, the application reflects a serene luxury aesthetic inspired by timeless medical artistry and holistic wellness.

### Key Highlights

- **Bespoke Luxury Visual Identity**: Custom palette featuring Soft Beige (`#eae2d3`), Warm Brown (`#70583a`), Blush Pink (`#caa3b6`), Sky Blue (`#afc7d3`), and Regal Dark Blue (`#2e445b`).
- **Curated Typography**: Fluid pairing of `Parisienne` (artistic script titles) and `Poppins` (editorial clinical body copy) via `@next/font/google`.
- **Intelligent Appointment Booking**:
  - Popover-based interactive date and 1-hour time slot selectors.
  - Automatic suppression of past dates and current/past hours for same-day bookings.
  - Custom themed treatment selector with full mobile text wrapping.
  - Real-time confirmation and notification emails dispatched via Nodemailer with rich branded HTML templates.
- **Mobile-First Experience**:
  - Mobile-responsive hero layout prioritizing visual artwork directly under the clinic insignia.
  - Zero horizontal blowout on small viewports with strict overflow containment.
- **Enterprise SEO & Structured Data**:
  - Canonical metadata, OpenGraph, and Twitter Card definitions.
  - Schema.org JSON-LD structured data for `MedicalBusiness` and `Physician`.
  - Dynamic `sitemap.xml` and `robots.txt` generation for rapid search indexation.

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router with Turbopack)](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: `Parisienne` & `Poppins` via `next/font/google`
- **Email Delivery**: [Nodemailer](https://nodemailer.com/) (Gmail SMTP / Google Workspace integration)
- **Icons & UI Assets**: Custom SVG icon system and Infinity Lotus clinic emblem

---

## Project Structure

```
vita-eterna/
├── public/
│   ├── logo.png                # Official Infinity Lotus emblem
│   ├── favicon.ico             # Custom clinic browser favicon
│   └── icon.png                # High-res app icon
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── booking.ts      # Server Action handling consultation bookings & email dispatch
│   │   ├── globals.css         # Tailwind v4 theme variables, custom scrollbars, animations
│   │   ├── layout.tsx          # Root layout with fonts, metadata, and JSON-LD schema
│   │   ├── page.tsx            # Main single-page clinic experience
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Dynamic sitemap.xml
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx      # Responsive header with logo and navigation
│       │   └── Footer.tsx      # Clinic footer with legal, address, and hours
│       ├── sections/
│       │   ├── Hero.tsx        # Responsive hero section with script branding & artwork
│       │   ├── InfoStrip.tsx   # Clinic highlights and trust indicators
│       │   ├── Philosophy.tsx  # Clinical ethos and patient approach
│       │   ├── Services.tsx    # Treatment offerings & procedures
│       │   ├── DoctorProfile.tsx # Dr. Rishi's background and credentials
│       │   ├── OurWork.tsx     # Before & after clinical transformations
│       │   ├── AppointmentForm.tsx # Consultation booking form
│       │   ├── FAQ.tsx         # Butter-smooth accordion FAQ
│       │   └── Location.tsx    # Clinic contact information and map reference
│       └── ui/
│           ├── ThemedCalendar.tsx    # Popover calendar with past-date guards
│           ├── TimerSlotPicker.tsx   # 1-hour slot picker with current-hour guards
│           └── ThemedDropdown.tsx    # Responsive treatment selection dropdown
├── .env.example                # Environment variables template
├── .env.local                  # Local secrets (git-ignored)
└── package.json
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Adityatiwari1/vita-eterna.git
cd vita-eterna
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Add your Gmail SMTP or Google Workspace app password:
```env
EMAIL_USER=support@heallthmaxx.com
EMAIL_PASS=your_gmail_app_password
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production build
```bash
npm run build
npm run start
```

---

## Environment Variables

| Variable | Description | Default / Example |
|---|---|---|
| `EMAIL_USER` | Gmail address for sending booking emails | `support@heallthmaxx.com` |
| `EMAIL_PASS` | Gmail 16-character App Password | `xxxx xxxx xxxx xxxx` |

---

## Clinic Information

- **Brand**: Vita Eterna by Dr. Rishi
- **Speciality**: Aesthetic Dermatology, Facial Harmonisation & Wellness
- **Contact**: `+91 95177 36935` • `support@heallthmaxx.com`
- **Location**: Punjab, India

---

## License

Private and proprietary. All rights reserved by **Vita Eterna**.
