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
    [0, width < 768 ? 0.03 : 0.07],
    ["65%", "0%"]
  );

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <motion.div className="absolute bottom-0" style={{ y: translateY }}>
      <Image src={text} alt="DESXDEV" />
    </motion.div>
  );
};

export default HeroText;
