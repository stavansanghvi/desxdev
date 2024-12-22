import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import OurProcess from "@/components/our-process";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <OurProcess />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
