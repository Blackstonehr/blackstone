"use client";

import { AlertTriangle } from "lucide-react";

export function CriticalPathCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-orange-500/40 bg-slate-950/80 px-5 py-4 shadow-xl backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon-orange">
      <div className="space-y-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Critical Path Risk
        </span>
        <span className="block text-2xl font-semibold text-orange-400">
          L28 Slab Pour
        </span>
        <span className="text-xs text-slate-300">1.4 days float left</span>
      </div>
      <AlertTriangle className="h-6 w-6 text-orange-400" />
    </div>
  );
}
