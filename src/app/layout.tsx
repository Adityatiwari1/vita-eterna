import type { Metadata, Viewport } from "next";
import { Parisienne, Poppins } from "next/font/google";
import "./globals.css";

const parisienne = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fdfcfb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vitaeterna.com"),
  title: {
    default: "Vita Eterna | Doctor Led Elegant Timeless Aesthetics",
    template: "%s | Vita Eterna Aesthetics",
  },
  description:
    "Doctor led luxury medical aesthetics by Dr Rishi at Vita Eterna, located within Healthmaxx Hospital, Kharar. Expert facial balancing, Botox, dermal fillers, medical microneedling, skin boosters, thread lifts, and IV therapy.",
  keywords: [
    "Vita Eterna",
    "Dr Rishi",
    "Aesthetics Clinic Kharar",
    "Medical Aesthetics Mohali",
    "Botox Kharar",
    "Dermal Fillers Chandigarh",
    "Facial Balancing",
    "Thread Lift Punjab",
    "Skin Boosters",
    "Profhilo",
    "Healthmaxx Hospital",
    "Doctor Led Aesthetics",
    "Anti Aging Clinic",
    "GFC Hair Rejuvenation",
    "IV Drip Therapy",
  ],
  authors: [{ name: "Dr Rishi", url: "https://vitaeterna.com" }],
  creator: "Vita Eterna Aesthetics",
  publisher: "Vita Eterna Aesthetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vitaeterna.com",
  },
  openGraph: {
    title: "Vita Eterna | Doctor Led Elegant Timeless Aesthetics",
    description:
      "Rooted in clinical excellence, we don't just treat concerns; we listen, assess, and design a plan that honours your unique anatomy and aesthetic vision.",
    url: "https://vitaeterna.com",
    siteName: "Vita Eterna Aesthetics",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 500,
        alt: "Vita Eterna Doctor Led Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vita Eterna | Doctor Led Elegant Timeless Aesthetics",
    description:
      "Doctor led medical aesthetics by Dr Rishi. Facial harmonisation, skin rejuvenation, and luxury clinical care.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  name: "Vita Eterna Aesthetics",
  alternateName: "Vita Eterna by Dr Rishi",
  image: "https://vitaeterna.com/logo.png",
  url: "https://vitaeterna.com",
  telephone: "+91 95177 36935",
  email: "support@heallthmaxx.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SCO- 23 and 24, Sunny Commercial Complex, Sector 125, Sunny Enclave",
    addressLocality: "Kharar",
    addressRegion: "Punjab",
    postalCode: "140301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7499",
    longitude: "76.6411",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      description: "Prior Appointment Only",
    },
  ],
  medicalSpecialty: [
    "Dermatology",
    "Aesthetic Medicine",
    "Cosmetic Medicine",
  ],
  founder: {
    "@type": "Person",
    name: "Dr Rishi",
    jobTitle: "Medical Director & Aesthetic Physician",
    description:
      "Over 25 years experience as GP and Diabetologist with advanced cosmetology accreditation from London and the US.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${parisienne.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-beige text-dark-blue font-body antialiased selection:bg-pink/30 selection:text-dark-blue">
        {children}
      </body>
    </html>
  );
}


