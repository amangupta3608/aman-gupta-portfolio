"use client";

import { Command } from "cmdk";
import { BriefcaseBusiness, MoonStar, Sparkles, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { navItems, socialLinks } from "@/data/portfolio";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runAction = (href: string) => {
    setOpen(false);
    const anchor = document.querySelector(href) as HTMLElement | null;
    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = [
    ...navItems.map((item) => ({
      id: item.href,
      label: item.label,
      icon: <BriefcaseBusiness className="h-4 w-4" />,
      action: () => runAction(item.href),
    })),
    {
      id: "github",
      label: "Open GitHub",
      icon: <FaGithub className="h-4 w-4" />,
      action: () => {
        setOpen(false);
        window.open(socialLinks.github, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      icon: <FaLinkedinIn className="h-4 w-4" />,
      action: () => {
        setOpen(false);
        window.open(socialLinks.linkedin, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "theme",
      label: resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      icon: resolvedTheme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />,
      action: () => {
        setOpen(false);
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      },
    },
    {
      id: "contact",
      label: "Contact me",
      icon: <Sparkles className="h-4 w-4" />,
      action: () => runAction("#contact"),
    },
  ];

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/70 p-4 pt-20 backdrop-blur-md"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-indigo-950/40">
        <Command.Input
          placeholder="Search sections or actions..."
          className="w-full border-b border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
        />
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-5 text-sm text-slate-400">No results found.</Command.Empty>
          {items.map((item) => (
            <Command.Item
              key={item.id}
              value={item.label}
              onSelect={item.action}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-200 aria-selected:bg-white/5 aria-selected:text-white"
            >
              <span className="text-cyan-300">{item.icon}</span>
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
