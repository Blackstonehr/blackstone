"use client";

import type { ReactNode } from "react";

export function Topbar({ children }: { children?: ReactNode }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-black/60 px-4 backdrop-blur-2xl md:px-6">
      <div className="flex flex-1 items-center gap-2 text-xs md:text-sm">
        <span className="hidden text-slate-300/80 md:inline">
          Morning snapshot of crews, cost, and quality across all active jobs.
        </span>
      </div>
      <div className="flex items-center gap-3 text-xs md:text-sm">
        {children}
        <span className="hidden text-slate-300/80 md:inline">
          Foreman console:
          <span className="font-semibold text-slate-100"> Live</span>
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[11px] font-semibold text-slate-200">
          HR
        </div>
      </div>
    </header>
  );
}
