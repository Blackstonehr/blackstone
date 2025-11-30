"use client";

import { GlassPanel } from "@/components/GlassPanel";

export default function SchedulingPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Scheduling
      </h1>
      <p className="text-sm text-slate-300">
        This is the Scheduling view. Connect your lookahead boards, constraints and commitments here.
      </p>
    </GlassPanel>
  );
}
