"use client";

import AnimatedBorder from "@/ui/animated-border";
import FadeInMotion from "@/ui/fade-in-motion";
import Statistics from "./statistics";

const AboutUs: React.FC = () => {
  return (
    <>
      <FadeInMotion>
        <div className="container my-[120px] flex align-start justify-between text-white">
          <div className="text-6xl max-w-[500px]">सृजनशीलता अनन्ता भवति ।</div>
          <div className="text-lg max-w-[500px]">
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
