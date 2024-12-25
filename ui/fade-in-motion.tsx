import { useAnimation, useInView } from "motion/react";
import { useEffect, useId, useRef } from "react";

interface FadeInMotionProps {
  children: React.ReactNode;
}

const FadeInMotion: React.FC<FadeInMotionProps> = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(elRef, { once: true, amount: 0.02 });
  const id = useId();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div key={id} ref={elRef}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeInMotion;
