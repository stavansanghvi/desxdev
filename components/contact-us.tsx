"use client";

import AnimatedBorder from "@/ui/animated-border";
import FadeInMotion from "@/ui/fade-in-motion";
import Typography from "@/ui/typography";
import ContactUsForm from "./contact-us-form";

const ContactUs: React.FC = () => {
  return (
    <FadeInMotion>
      <div
        id="contact-us"
        className="container px-8 2xl:px-0 py-20 md:pt-[134px] md:pb-[160px]"
      >
        <div className="max-w-[635px] mb-20">
          <Typography variant="h1">Contact Us</Typography>
          <Typography variant="h4" className="mt-6">
            Let&apos;s collaborate to bring your ideas to life. Reach out for
            inquiries, project discussions, or any assistance—we’re here to
            help!
          </Typography>
        </div>
        <ContactUsForm />
      </div>
      <AnimatedBorder />
    </FadeInMotion>
  );
};

export default ContactUs;
