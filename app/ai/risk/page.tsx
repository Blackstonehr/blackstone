"use client";

import { GlassPanel } from "../../../components/GlassPanel";

export default function RiskAIPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Risk scan (AI)
      </h1>
      <p className="mb-4 text-sm text-slate-300">
        This is your AI risk radar. Surface schedule, safety or cost risks with explainability and suggested mitigations.
      </p>
      <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-400">
        Drop in your risk engine: ingest incidents and telemetry, then output prioritized risk cards.
      </div>
    </GlassPanel>
  );
}
