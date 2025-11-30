"use client";

import { GlassPanel } from "../../components/GlassPanel";

export default function CostPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Cost Tracking
      </h1>
      <p className="text-sm text-slate-300">
        This is the Cost view. Layer in cost curves, budget vs. actuals, and vendor performance.
      </p>
    </GlassPanel>
  );
}
