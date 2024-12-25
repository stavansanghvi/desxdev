"use client";

import text from "@/assets/desxdev-text.svg";
import { animate, motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

const HeroText: React.FC = () => {
  const textY = useMotionValue(120);
  const isAtBottom = useRef(false);
  const isAtTop = useRef(true);

  // Shared function to calculate and animate position
  const updatePosition = useCallback(
    async (targetY: number) => {
      const nextY = Math.max(-240, Math.min(120, targetY));

      await animate(textY, nextY, {
        type: "tween",
        duration: 0.1,
      });

      // Update state based on position
      if (nextY <= -240) {
        isAtBottom.current = true;
        isAtTop.current = false;
      } else if (nextY >= 120) {
        isAtTop.current = true;
        isAtBottom.current = false;
      }

      return nextY;
    },
    [textY]
  );

  useEffect(() => {
    if (window) {
      // Set initial position based on scroll
      const scrollRatio = window.scrollY / window.innerHeight;
      const initialY = 120 - scrollRatio * 360; // Map scroll to 120 -> -240 range
      updatePosition(initialY);
    }

    const preventScroll = (e: WheelEvent) => {
      if (
        !isAtBottom.current ||
        (e.deltaY < 0 && window.scrollY === 0 && !isAtTop.current)
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = async (e: WheelEvent) => {
      const currentY = textY.get();

      if (e.deltaY > 0 && !isAtBottom.current) {
        await updatePosition(currentY - 60);
      } else if (e.deltaY < 0 && window.scrollY === 0 && !isAtTop.current) {
        await updatePosition(currentY + 60);
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [textY, updatePosition]);

  return (
    <motion.div className="absolute bottom-0 z-[6]" style={{ y: textY }}>
      <Image src={text} alt="DESXDEV" />
    </motion.div>
  );
};

export default HeroText;
