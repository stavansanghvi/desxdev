"use client";

import AnimatedBorder from "@/ui/animated-border";
import FadeInMotion from "@/ui/fade-in-motion";
import Statistics from "./statistics";

const AboutUs: React.FC = () => {
  return (
    <>
      <FadeInMotion>
        <div
          id="about-us"
          className="container my-20 md:my-[120px] flex flex-col md:flex-row align-start justify-between text-white px-8 2xl:px-0"
        >
          <div className="text-4xl md:text-6xl max-w-[500px] leading-normal md:leading-snug">
            सृजनशीलता अनन्ता भवति।
          </div>
          <div className="text-sm md:text-lg text-justify max-w-[500px] mt-8 md:mt-0">
            <p>
              At DesXDev, we embody the belief that “सृजनशीलता अनन्ता भवति।”
              (Creativity is infinite). With over six years of experience, our
              team specializes in developing innovative mobile and web
              applications, crafting eye-catching designs, and implementing
              effective SEO marketing strategies.
            </p>
            <p className="my-4">
              Guided by the wisdom of “उद्यमेन हि सिद्ध्यन्ति कार्याणि न
              मनोरथैः” (Success comes through effort, not mere dreams), we focus
              on transforming ideas into reality with precision and dedication.
              Every project reflects our commitment to “नवीनं वयं निर्मिमहे” (We
              create anew), ensuring a perfect balance of creativity,
              technology, and tradition.
            </p>
            <p>
              Whether you are a startup or an established business, we
              collaborate closely with you to meet your digital goals, inspired
              by the principle of “संगच्छध्वं सं वदध्वं” (Together, we move
              forward). Join us to explore limitless possibilities and shape a
              future where creativity truly is infinite.
            </p>
          </div>
        </div>
      </FadeInMotion>
      <AnimatedBorder />
      <FadeInMotion>
        <Statistics />
      </FadeInMotion>
    </>
  );
};

export default AboutUs;
