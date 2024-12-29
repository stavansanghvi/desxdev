"use client";

import { useEffect, useState } from "react";

const HeroBg: React.FC = () => {
  const [stripes, setStripes] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    function generateStripes() {
      const windowWidth = window.innerWidth;
      const numDivs = Math.ceil(windowWidth / 54);

      const divs = [];
      for (let i = 0; i < numDivs; i++) {
        divs.push(
          <div
            key={i}
            className="stripe border-t-0 border-b-0 border-[0.25px] border-[rgba(0,0,0,0.8)]"
          />
        );
      }
      setStripes(divs);
    }

    generateStripes();
    window.addEventListener("resize", generateStripes);

    return () => {
      window.removeEventListener("resize", generateStripes);
    };
  }, []);

  if (!stripes.length) return null;

  return (
    <div className="hero-background absolute top-0 left-0 w-full overflow-hidden h-screen flex gap-0">
      {stripes}
      <div className="hero-moving-div absolute bottom-6 lg:-bottom-16 left-0 w-full h-[358px]">
        <div className="h-full z-[3]" />
      </div>
    </div>
  );
};

export default HeroBg;
