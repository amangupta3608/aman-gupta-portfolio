"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { pipelineStages } from "@/data/portfolio";

export function Pipeline() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [activeStage, setActiveStage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((current) => (current + 1) % pipelineStages.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pipeline" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Workflow</p>
        <h2 className="section-heading">DevOps pipeline view</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:items-center">
        <div className="hidden gap-2 lg:grid lg:grid-cols-8">
          {pipelineStages.map((stage, index) => (
            <button
              key={stage.name}
              type="button"
              onMouseEnter={() => setActiveStage(index)}
              onClick={() => setActiveStage(index)}
              className={`relative flex min-h-[108px] flex-col items-center justify-center rounded-2xl border px-2 py-3 text-center transition-all duration-300 ${
                index <= activeStage
                  ? "border-cyan-400/50 bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-emerald-500/10 text-white shadow-lg shadow-cyan-500/10"
                  : "border-white/10 bg-slate-950/40 text-slate-400"
              }`}
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-current text-[10px] font-semibold">
                {index + 1}
              </span>
              <span className="text-xs font-medium">{stage.name}</span>
            </button>
          ))}
        </div>

        <div className="space-y-3 lg:hidden">
          {pipelineStages.map((stage, index) => (
            <button
              key={stage.name}
              type="button"
              onClick={() => setActiveStage(index)}
              className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                index === activeStage ? "border-cyan-400/50 bg-cyan-400/10" : "border-white/10 bg-slate-950/40"
              }`}
            >
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{stage.name}</span>
                <span className="mt-1 block text-xs text-slate-300">{stage.description}</span>
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={pipelineStages[activeStage].name}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-5 sm:p-6"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Stage</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{pipelineStages[activeStage].name}</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">{pipelineStages[activeStage].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
