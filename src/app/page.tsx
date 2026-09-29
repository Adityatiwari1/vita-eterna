import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoStrip from "@/components/sections/InfoStrip";
import DoctorProfile from "@/components/sections/DoctorProfile";
import Philosophy from "@/components/sections/Philosophy";
import Certificates from "@/components/sections/Certificates";
import Services from "@/components/sections/Services";
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
        <Certificates />
        <Services />
        <OurWork />
        <AppointmentForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

