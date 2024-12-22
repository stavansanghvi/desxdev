"use client";

import text from "@/assets/desxdev-text.svg";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

interface HeroTextProps {}

const HeroText: React.FC<HeroTextProps> = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.08], ["70%", "0%"]);

  return (
    <motion.div className="absolute bottom-0" style={{ y: translateY }}>
      <Image src={text} alt="DESXDEV" />
    </motion.div>
  );
};

export default HeroText;
