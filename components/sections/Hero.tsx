"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { TerminalCard } from "@/components/shared/TerminalCard";
import { TypewriterText } from "@/components/shared/TypewriterText";
import { heroWords, profile, socialLinks } from "@/data/portfolio";

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="top" className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
            DevOps & Cloud Engineer
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            <span className="block">Hi, I&apos;m {profile.name}</span>
            <span className="mt-3 block text-gradient"> <TypewriterText words={heroWords} className="inline-block" /> </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Building reliable infrastructure, automation pipelines, and secure cloud delivery systems that keep software moving with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg" className="group">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-300">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-3 transition-transform hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <FaGithub className="h-4 w-4" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 transition-transform hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href={socialLinks.email} aria-label="Email" className="rounded-full border border-white/10 bg-white/5 p-3 transition-transform hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-emerald-500/10 blur-3xl" />
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
