"use client";

import { GlassPanel } from "@/components/GlassPanel";

export default function CommunicationPage() {
  return (
    <GlassPanel className="p-5">
      <h1 className="mb-2 text-xl font-semibold text-slate-50">
        Foreman Communication
      </h1>
      <p className="text-sm text-slate-300">
        This is the Communication view. Add messaging, broadcast and escalation tools here.
      </p>
    </GlassPanel>
  );
}
