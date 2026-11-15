import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

export const TextRotator = ({
  words = [
    "Enterprise ERP & FinTech",
    "Scalable B2B SaaS Systems",
    "Core Open-Source Contributor",
    "React 19 & Full-Stack Web",
  ],
  duration = 3200,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className="relative flex items-center justify-center overflow-hidden h-[1.35em] w-full px-6 align-middle">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1], // Apple / Linear smooth cubic bezier
          }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-shimmer font-black tracking-tight drop-shadow-[0_0_35px_rgba(129,140,248,0.4)] whitespace-nowrap text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

TextRotator.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number,
};

export default TextRotator;
