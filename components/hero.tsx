"use client";

import HeroBg from "./hero-bg";
import HeroText from "./hero-text";

const Hero: React.FC = () => {
  return (
    <div className="hero relative flex items-center justify-center overflow-hidden">
      <HeroBg />
      <HeroText />
    </div>
  );
};

export default Hero;
