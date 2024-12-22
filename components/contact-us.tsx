"use client";

import AnimatedBorder from "@/ui/animated-border";
import FadeInMotion from "@/ui/fade-in-motion";
import Typography from "@/ui/typography";
import ContactUsForm from "./contact-us-form";

const ContactUs: React.FC = () => {
  return (
    <FadeInMotion>
      <div className="container pt-[134px] pb-[160px]">
        <div className="max-w-[635px] mb-20">
          <Typography variant="h1">Contact Us</Typography>
          <Typography variant="h4">
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