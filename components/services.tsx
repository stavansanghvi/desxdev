"use client";

import ServiceCard from "@/ui/service-card";
import appDevelopmentIcon from "@/assets/icons/app-development.svg";
import webDevelopmentIcon from "@/assets/icons/web-development.svg";
import brandingIcon from "@/assets/icons/logo-branding.svg";
import seoIcon from "@/assets/icons/seo-icon.svg";
import smmIcon from "@/assets/icons/smm-icon.svg";
import uiUxIcon from "@/assets/icons/ui-ux.svg";
import FadeInMotion from "@/ui/fade-in-motion";

const Services: React.FC = () => {
  return (
    <FadeInMotion>
      <div
        id="services"
        className="container py-20 md:py-[136px] flex flex-col items-center justify-center text-center px-8 2xl:px-0"
      >
        <h2>Our Services</h2>
        <h4 className="max-w-[800px] mt-6">
          Delivering mobile apps, web solutions, branding, UI/UX, and digital
          marketing to enhance user experiences, boost visibility, and drive
          measurable growth for your business.
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12 gap-8 lg:gap-0">
          <ServiceCard
            color="#0099DD"
            icon={appDevelopmentIcon}
            title="Mobile App Development"
            description="Development of intuitive, feature-rich mobile applications optimized for performance and seamless user experience across platforms."
          />
          <ServiceCard
            color="#00B53C"
            icon={webDevelopmentIcon}
            title="Web Development"
            description="Expertise in designing responsive websites, engaging landing pages, and scalable web applications tailored for optimal performance and user experience."
          />
          <ServiceCard
            color="#FFA6CA"
            icon={brandingIcon}
            title="Logo & Branding"
            description="Designing impactful logos and comprehensive branding strategies to establish a strong and memorable identity for businesses."
          />
          <ServiceCard
            color="#FFEFDC"
            icon={seoIcon}
            title="SEO"
            description="Optimizing websites with targeted SEO strategies to improve visibility, drive organic traffic, and boost search engine rankings."
          />
          <ServiceCard
            color="#FF8E90"
            icon={smmIcon}
            title="SMM"
            description="Leveraging social media platforms to build brand presence, engage with audiences, and drive business growth through targeted marketing strategies."
          />
          <ServiceCard
            color="#A6FCFF"
            icon={uiUxIcon}
            title="UI/UX Design"
            description="Crafting intuitive UI/UX designs that enhance user engagement and deliver seamless digital experiences across applications."
          />
        </div>
      </div>
    </FadeInMotion>
  );
};

export default Services;
