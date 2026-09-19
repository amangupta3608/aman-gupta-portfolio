"use client";

import { CloudCog, Rocket, ShieldCheck, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { highlightCards, summary } from "@/data/portfolio";

const icons = [CloudCog, Rocket, ShieldCheck, Wrench];

export function About() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">About</p>
        <h2 className="section-heading">Building reliable systems for modern delivery</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="glass-card rounded-3xl p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-300">{summary}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {highlightCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="h-full rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{card.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
