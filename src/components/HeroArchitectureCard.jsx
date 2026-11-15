import { useState } from "react";
import { motion } from "motion/react";

const HeroArchitectureCard = () => {
  const [activeTab, setActiveTab] = useState("telemetry");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl border border-white/10 bg-midnight/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-neutral-400">
            tamayoz-erp-engine.ts
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE JSON-RPC
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-white/[0.02] text-xs font-mono">
        <button
          onClick={() => setActiveTab("telemetry")}
          className={`px-4 py-2.5 transition-colors border-b-2 ${
            activeTab === "telemetry"
              ? "border-blue-400 text-blue-400 font-semibold bg-white/[0.04]"
              : "border-transparent text-neutral-400 hover:text-white"
          }`}
        >
          System Telemetry
        </button>
        <button
          onClick={() => setActiveTab("architecture")}
          className={`px-4 py-2.5 transition-colors border-b-2 ${
            activeTab === "architecture"
              ? "border-blue-400 text-blue-400 font-semibold bg-white/[0.04]"
              : "border-transparent text-neutral-400 hover:text-white"
          }`}
        >
          Stack &amp; Protocols
        </button>
        <button
          onClick={() => setActiveTab("domain")}
          className={`px-4 py-2.5 transition-colors border-b-2 ${
            activeTab === "domain"
              ? "border-blue-400 text-blue-400 font-semibold bg-white/[0.04]"
              : "border-transparent text-neutral-400 hover:text-white"
          }`}
        >
          Domain Edge
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-5 font-mono text-xs leading-relaxed text-neutral-300">
        {activeTab === "telemetry" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Target System:</span>
              <span className="text-white font-semibold">Odoo ERP Web Platform (TAMAYOZ)</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Data Grid Virtualization:</span>
              <span className="text-emerald-400 font-semibold">10,000+ Records @ 60 FPS</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Core Web Vitals:</span>
              <span className="text-blue-400 font-semibold">LCP &lt; 1.2s • CLS 0.00 (Zero Shift)</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">CORS &amp; Auth Pipeline:</span>
              <span className="text-purple-400 font-semibold">Vercel &amp; Nginx Reverse Proxy</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-neutral-400">Accessibility:</span>
              <span className="text-emerald-400 font-semibold">100% WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Frontend Core:</span>
              <span className="text-white font-semibold">React 19 • TypeScript (Strict) • Vite</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">State Management:</span>
              <span className="text-blue-400 font-semibold">Zustand Slices + TanStack Query</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Backend Communication:</span>
              <span className="text-yellow-400 font-semibold">Odoo JSON-RPC &amp; Salla Webhooks</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Dynamic Views:</span>
              <span className="text-emerald-400 font-semibold">Dynamic Form, Kanban &amp; Gantt</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-neutral-400">Design System:</span>
              <span className="text-purple-400 font-semibold">Tailwind CSS • shadcn/ui • Radix UI</span>
            </div>
          </div>
        )}

        {activeTab === "domain" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Academic Background:</span>
              <span className="text-white font-semibold">B.Com in Accounting &amp; Finance (2023)</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Operational Experience:</span>
              <span className="text-emerald-400 font-semibold">4 Yrs Managing 600K+ EGP Monthly Cash Flow</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Commercial Edge:</span>
              <span className="text-blue-400 font-semibold">Inventory Turnover &amp; Billing Pipelines</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-neutral-400">Engineering Translation:</span>
              <span className="text-yellow-400 font-semibold">Audit Trails, Ledgers &amp; Reconciliation</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Pill Tags */}
      <div className="flex flex-wrap gap-2 px-5 py-3 border-t border-white/5 bg-black/20">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
          React 19
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          TypeScript
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
          Odoo JSON-RPC
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Next.js
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
          TanStack Query
        </span>
      </div>
    </motion.div>
  );
};

export default HeroArchitectureCard;
