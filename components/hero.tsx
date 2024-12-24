"use client";

import HeroText from "./hero-text";

const Hero: React.FC = () => {
  return (
    <div className="hero relative bg-cover bg-bottom bg-[url(/hero-bg.png)] flex items-center justify-center overflow-hidden">
      <HeroText />
    </div>
  );
};

export default Hero;
