import { Card } from "@/components/ui/card";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Education</p>
        <h2 className="section-heading">Academic foundation</h2>
      </div>

      <Card className="rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">{education.school}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{education.degree}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">{education.period}</span>
        </div>
        <p className="mt-5 text-base text-slate-300">{education.cgpa}</p>
      </Card>
    </section>
  );
}
