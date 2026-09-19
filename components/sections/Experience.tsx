"use client";

import { motion, useReducedMotion } from "framer-motion";

import { experience } from "@/data/portfolio";

export function Experience() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Experience</p>
        <h2 className="section-heading">Recent engineering work in automation and delivery</h2>
      </div>

      <div className="relative ml-2 before:absolute before:left-[1px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-400 before:to-emerald-400 sm:ml-3">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative mb-8 pl-6 sm:mb-10 sm:pl-8"
          >
            <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 ring-4 ring-slate-950" />
            <div className="glass-card rounded-3xl p-5 sm:p-8">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">{item.company}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">{item.role}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{item.period}</span>
              </div>

              <p className="mb-4 text-sm text-slate-300">
                {item.client} • {item.location}
              </p>

              <ul className="space-y-3 text-sm leading-6 text-slate-300 sm:leading-7">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
