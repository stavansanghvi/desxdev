"use client";

import HeroText from "./hero-text";

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div
      style={{
        height: "calc(100vh - 140px)",
      }}
      className="relative bg-cover bg-bottom bg-[url(/hero-bg.png)] flex items-center justify-center overflow-hidden"
    >
      <HeroText />
    </div>
  );
};

export default Hero;
