"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  {
    prompt: "$ terraform apply",
    output: ["Initializing provider plugins...", "Plan ready: 8 resources to change", "Apply complete"],
  },
  {
    prompt: "$ vault kv get secret/app",
    output: ["Key: secret/app", "status: active", "db.password: [hidden]"],
  },
  {
    prompt: "$ ansible-playbook deploy.yml",
    output: ["PLAY [deploy]", "TASK [configure services]", "ok=12  changed=2"],
  },
];

export function TerminalCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % commands.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const active = commands[activeIndex];

  return (
    <motion.div
      className="glass-card relative overflow-hidden p-4 sm:p-5"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>

      <div className="space-y-3 font-mono text-xs text-slate-200">
        <div className="text-cyan-300">$ whoami</div>
        <div className="ml-3 text-slate-300">aman.gupta | devops-cloud</div>

        <div className="mt-2 rounded-xl border border-white/10 bg-slate-950/70 p-3">
          <div className="mb-2 text-cyan-300">{active.prompt}</div>
          {active.output.map((line, index) => (
            <div key={line} className={index === 0 ? "text-emerald-300" : "text-slate-300"}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
