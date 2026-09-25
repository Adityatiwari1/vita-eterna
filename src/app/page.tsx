import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoStrip from "@/components/sections/InfoStrip";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import OurWork from "@/components/sections/OurWork";
import AppointmentForm from "@/components/sections/AppointmentForm";
import FAQ from "@/components/sections/FAQ";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <InfoStrip />
        <DoctorProfile />
        <Philosophy />
        <Services />
        <Gallery />
        <OurWork />
        <AppointmentForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

