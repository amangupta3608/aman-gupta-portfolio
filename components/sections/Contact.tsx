"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile, socialLinks } from "@/data/portfolio";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

export function Contact() {
  const [toast, setToast] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send message.");
      }

      setToast("Thanks for reaching out. Your message has been sent.");
      reset();
    } catch (error) {
      setToast(error instanceof Error ? error.message : "Unable to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Contact</p>
        <h2 className="section-heading">Let&apos;s build robust delivery systems together</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Card className="rounded-3xl p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-white">Reach out</h3>
          <div className="mt-6 space-y-4 text-slate-300">
            <a href={socialLinks.email} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-cyan-400/30 hover:text-cyan-300">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-cyan-400/30 hover:text-cyan-300">
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-cyan-400/30 hover:text-cyan-300">
              <FaLinkedinIn className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Card>

        <Card className="rounded-3xl p-5 sm:p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Name</label>
              <input
                id="name"
                {...register("name")}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
                placeholder="name@example.com"
              />
              {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60"
                placeholder="Tell me about the deployment, automation, or infrastructure challenge you need help with."
              />
              {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>

      {toast && (
        <div aria-live="polite" className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {toast}
        </div>
      )}
    </section>
  );
}
