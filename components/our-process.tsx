"use client";

import Typography from "@/ui/typography";
import Image from "next/image";
import logoLarge from "@/assets/logo-big.svg";
import Accordion from "@/ui/accordion";
import { useState } from "react";
import FadeInMotion from "@/ui/fade-in-motion";

const accordionContent = [
  {
    title: "Gathering Requirements and Analysis",
    content:
      "We begin by understanding the client’s needs, goals, and expectations. This phase involves collecting detailed information and analyzing it to define the project scope and objectives.",
  },
  {
    title: "Planning and LO-FI Wireframing",
    content:
      "After gathering the requirements, we create low-fidelity wireframes to plan the layout and user flow, ensuring clarity before moving forward with the design.",
  },
  {
    title: "UI/UX Design",
    content:
      "Our team designs visually appealing and user-friendly interfaces, focusing on creating an intuitive experience that aligns with the client's brand.",
  },
  {
    title: "Development and Testing",
    content:
      "The design is then brought to life through development. We ensure high-quality coding standards while rigorously testing the product for functionality, usability, and performance.",
  },
  {
    title: "Launch and Deploy",
    content:
      "The design is then brought to life through development. We ensure high-quality coding standards while rigorously testing the product for functionality, usability, and performance.",
  },
];

const OurProcess: React.FC = () => {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleAccordion = (index: number) => {
    setActive(index === active ? -1 : index);
    if (index !== active) {
      setRotation(rotation + 90);
    }
  };

  return (
    <FadeInMotion>
      <div
        id="our-process"
        className="bg-lightWhite relative h-auto xl:h-[1130px] overflow-hidden text-justify"
      >
        <div className="container py-20 xl:py-[166px] px-8 2xl:px-0">
          <div className="max-w-full xl:max-w-[650px]">
            <div>
              <Typography variant="h2">Our Process</Typography>
              <Typography variant="h4" className="mt-4">
                We follow a structured approach to ensure successful project
                delivery. From gathering detailed requirements and thorough
                analysis to planning, designing, developing, testing, and
                finally launching your product, we ensure each phase is handled
                with precision. Our team focuses on creating high-quality
                solutions that align with your goals, ensuring seamless user
                experiences and optimal performance at every stage.
              </Typography>
            </div>
            <div className="accordions mt-[55px]">
              {accordionContent.map((content, index) => (
                <Accordion
                  key={index}
                  active={active === index}
                  number={index + 1}
                  onClick={handleAccordion.bind(null, index)}
                  {...content}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-[166px] -right-[13%] hidden xl:block">
            <div
              className="logo-wrapper transition-transform ease-in-out duration-1000"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <Image
                src={logoLarge}
                alt="DesXDev Logo"
                width={780}
                height={780}
              />
            </div>
          </div>
        </div>
      </div>
    </FadeInMotion>
  );
};

export default OurProcess;
