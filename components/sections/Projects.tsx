"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function Projects() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Projects</p>
        <h2 className="section-heading">Selected systems and delivery-focused work</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <TiltCard key={project.title} project={project} prefersReducedMotion={prefersReducedMotion} index={index} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({
  project,
  prefersReducedMotion,
  index,
}: {
  project: (typeof projects)[number];
  prefersReducedMotion: boolean;
  index: number;
}) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <Card
        className="group h-full overflow-hidden border border-white/10 bg-slate-900/60 p-5 transition-transform duration-200 hover:border-cyan-400/30"
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{project.subtitle}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
            Built
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3 text-sm leading-7 text-slate-300">
          {project.description.map((point) => (
            <p key={point}>• {point}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
          </Button>
          {project.demoUrl ? (
            <Button asChild size="sm">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          ) : null}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="ghost" size="sm" type="button">Details</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl shadow-indigo-950/30 sm:w-[min(92vw,720px)] sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{project.subtitle}</p>
                    <Dialog.Title className="mt-2 text-xl font-semibold text-white sm:text-2xl">{project.title}</Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button type="button" aria-label="Close dialog" className="rounded-full border border-white/10 p-2 text-slate-300">
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm leading-7 text-slate-300">
                  {project.description.map((point) => (
                    <p key={point}>• {point}</p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="sm">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.demoUrl ? (
                    <Button asChild size="sm">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Card>
    </motion.div>
  );
}