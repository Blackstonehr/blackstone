"use client";

import { GlassPanel } from "@/components/GlassPanel";

export default function QualityPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Quality Control
      </h1>
      <p className="text-sm text-slate-300">
        This is the Quality view. Bring in QC dashboards, inspections and defect resolution workflows.
      </p>
    </GlassPanel>
  );
}
