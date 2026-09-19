"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} Aman Gupta. All rights reserved.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
