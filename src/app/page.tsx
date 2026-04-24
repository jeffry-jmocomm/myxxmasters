import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPillars from "@/components/BrandPillars";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandPillars />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
