"use client";

import HeroBg from "./hero-bg";
import HeroText from "./hero-text";

const Hero: React.FC = () => {
  return (
    <div className="hero relative flex justify-center overflow-hidden">
      <HeroText />
      <HeroBg />
    </div>
  );
};

export default Hero;
