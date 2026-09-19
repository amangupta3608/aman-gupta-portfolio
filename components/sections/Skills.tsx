"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion, useReducedMotion } from "framer-motion";
import { CloudCog, Database, GitBranch, LockKeyhole, Rocket, Zap } from "lucide-react";

import { skillCategories } from "@/data/portfolio";

const iconMap = {
  "DevOps & IaC": CloudCog,
  "Cloud & Security": LockKeyhole,
  "Languages & Scripting": Zap,
  Backend: Rocket,
  Databases: Database,
  "Operations & Tools": GitBranch,
};

export function Skills() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Skills</p>
        <h2 className="section-heading">Tools, platforms, and workflows I deliver with</h2>
      </div>

      <Tabs.Root defaultValue={skillCategories[0].title} className="space-y-6">
        <Tabs.List className="flex max-w-full flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-950/40 p-2">
          {skillCategories.map((category) => (
            <Tabs.Trigger
              key={category.title}
              value={category.title}
              className="rounded-xl px-3 py-2 text-left text-xs font-medium text-slate-300 transition-all sm:px-4 sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white"
            >
              {category.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {skillCategories.map((category) => {
          const Icon = iconMap[category.title as keyof typeof iconMap] ?? CloudCog;
          return (
            <Tabs.Content key={category.title} value={category.title} className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-300">
                <Icon className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.26em]">{category.title}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <span className="skill-chip">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </section>
  );
}
