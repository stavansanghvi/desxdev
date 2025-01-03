"use client";

import text from "@/assets/desxdev-text.svg";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroText: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(0);
  const translateY = useTransform(
    scrollYProgress,
    [0, width < 768 ? 0.05 : 0.07],
    ["100%", "50%"]
  );

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mt-[140px] xl:mt-[203px] whitespace-break-spaces text-center text-white font-extralight uppercase leading-[64px] text-[42px] xl:text-[95px] xl:leading-[116px] z-[6]"
      >
        ENRICHED WITH THE <br /> VALUES OF{" "}
        <strong className="font-semibold">
          INNOVATION
          <br /> AND CREATIVITY
        </strong>
      </motion.div>

      <motion.div className="absolute bottom-0 z-[6]" style={{ y: translateY }}>
        <Image src={text} alt="DESXDEV" />
      </motion.div>
    </>
  );
};

export default HeroText;
