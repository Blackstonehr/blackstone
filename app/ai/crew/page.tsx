"use client";

import { GlassPanel } from "../../../components/GlassPanel";

export default function CrewAIPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Crew suggestions (AI)
      </h1>
      <p className="mb-4 text-sm text-slate-300">
        Use this AI workspace to recommend crew makeups, apprenticeships and redeployments based on skills and risk.
      </p>
      <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-400">
        Replace with your crew optimizer: crew needs in, suggested assignments out.
      </div>
    </GlassPanel>
  );
}
