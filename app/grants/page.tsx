"use client";

import { GlassPanel } from "@/components/GlassPanel";

export default function GrantsPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Grants &amp; Funding
      </h1>
      <p className="text-sm text-slate-300">
        This is the Grants view. Wire your grant-matching logic, filters and AI
        helper into this layout.
      </p>
    </GlassPanel>
  );
}
