"use client";

import { GlassPanel } from "../../components/GlassPanel";

export default function CashflowPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Cash Flow
      </h1>
      <p className="text-sm text-slate-300">
        This is the Cash Flow view. Plug in invoicing cadence, draw schedules and burn-downs here.
      </p>
    </GlassPanel>
  );
}
