import { motion } from "motion/react";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-10 flex flex-col justify-center text-center lg:text-left">
      {/* Availability Badge */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-medium tracking-wide text-emerald-400 border rounded-full border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md self-center lg:self-start"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for Full-Time Remote Roles (Gulf • Europe • US)
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.15]"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Frontend Engineer <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
          Enterprise ERP &amp; FinTech
        </span>
      </motion.h1>

      {/* Value Proposition */}
      <motion.p
        className="max-w-xl mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mx-auto lg:mx-0"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        Engineering high-scale, accessible web clients with{" "}
        <strong className="text-white font-semibold">React 19, TypeScript, and Next.js</strong>.
        Specialized in complex <strong className="text-white font-semibold">Odoo JSON-RPC</strong> and{" "}
        <strong className="text-white font-semibold">Salla e-commerce</strong> integrations, backed by a
        degree in <strong className="text-white font-semibold">Accounting &amp; Finance</strong> and 4 years of operational cash flow management.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <a
          href="#work"
          className="px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 bg-white rounded-xl hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10 active:scale-95"
        >
          View Enterprise Projects
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoud-ghazy-48a19924a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 border rounded-xl border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 backdrop-blur-sm"
        >
          <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/ghazy2001"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 border rounded-xl border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
