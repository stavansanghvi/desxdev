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
            className="border-t-0 border-b-0 border-[0.25px] border-[rgba(0,0,0,0.8)]"
            style={{
              width: 61,
              zIndex: 4,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.10) 100%)",
              backdropFilter: "blur(197px)",
            }}
          ></div>
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
    <div
      className="hero-background absolute top-0 left-0 w-full overflow-hidden"
      style={{ height: "100vh", display: "flex", gap: 0 }}
    >
      {stripes}
      <div className="hero-moving-div absolute bottom-1 lg:-bottom-6 left-0 w-full h-[358px]">
        <div
          className="h-full"
          style={{
            zIndex: 3,
            background: `url(/hero-logo-group.svg)`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default HeroBg;
