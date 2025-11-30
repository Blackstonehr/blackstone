"use client";

import { GlassPanel } from "@/components/GlassPanel";

export default function GrantsAIPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Grant matching (AI)
      </h1>
      <p className="mb-4 text-sm text-slate-300">
        This AI helper can suggest grants that fit your project scope, region and eligibility.
      </p>
      <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-400">
        Swap this placeholder for your grant copilot: intake form on the left, ranked matches on the right.
      </div>
    </GlassPanel>
  );
}
