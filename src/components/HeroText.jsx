import TextRotator from "./TextRotator";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Enterprise ERP & FinTech",
    "Scalable B2B SaaS",
    "Core OSS Contributor",
    "React 19 & Full-Stack",
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-10 flex flex-col justify-center items-center text-center max-w-6xl w-full mx-auto px-4">
      {/* Main Headline */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.2] w-full"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <span className="block sm:inline-block sm:whitespace-nowrap">
          Senior Frontend <span className="inline-block sm:inline">/ Full&#8209;Stack</span>
        </span>
        <span className="block mt-2 sm:mt-3">
          <TextRotator words={words} duration={3200} />
        </span>
      </motion.h1>

      {/* Value Proposition */}
      <motion.p
        className="max-w-2xl mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal px-2 sm:px-0"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        Engineering high-scale, accessible web clients with{" "}
        <strong className="text-white font-semibold">React 19, TypeScript, Next.js, and Node.js</strong>.
        Specialized in complex <strong className="text-white font-semibold">Odoo ERP</strong> architectures
        and <strong className="text-white font-semibold">25+ merged open-source PRs</strong>, backed by a
        degree in <strong className="text-white font-semibold">Accounting &amp; Finance</strong> and 4 years of operational cash flow management.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full max-w-xs sm:max-w-none mx-auto"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
      >
        <a
          href="#work"
          className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-black transition-all duration-200 bg-white rounded-xl hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10 active:scale-95 text-center"
        >
          View Enterprise Projects
        </a>
        <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="https://www.linkedin.com/in/mahmoud-ghazy-48a19924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 border rounded-xl border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 backdrop-blur-sm"
          >
            <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ghazy2001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 border rounded-xl border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 backdrop-blur-sm"
          >
            <img src="/assets/socials/github.svg" alt="GitHub" className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
