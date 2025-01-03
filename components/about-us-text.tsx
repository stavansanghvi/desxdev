import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

const words = ["सृजनशीलता अनन्ता भवति।", "Creativity is infinite."];

const AboutUsText: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // to have opacity transition on first hide
    const timeout = setTimeout(() => {
      controls.start({
        y: [0, "10%"],
        opacity: [1, 0],
        transition: { duration: 2, ease: "easeInOut" },
        mode: "popLayout",
      });
    }, 5000);

    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % words.length);

      controls.start({
        y: ["10%", 0],
        opacity: [0, 1],
        transition: { duration: 2, ease: "easeInOut" },
        mode: "popLayout",
      });

      setTimeout(() => {
        controls.start({
          y: [0, "10%"],
          opacity: [1, 0],
          transition: { duration: 2, ease: "easeInOut" },
          mode: "popLayout",
        });
      }, 5000);
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [controls]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        animate={controls}
        className="text-4xl md:text-6xl max-w-[500px] leading-normal md:leading-snug"
      >
        {words[idx]}
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUsText;
