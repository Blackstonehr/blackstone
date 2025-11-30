"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { AlertTriangle } from "lucide-react";

export default function QcAIPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);
    // Mock analysis for now—real Groq in v4
    setTimeout(() => {
      setResult(
        "Deficiency: Missing mid-rail on L3 guardrail\nSeverity: High – fall hazard\nFix: Install 42\" rails + toe boards\nCode: WorkSafeBC 13.12\nRisk: $180k rework"
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <GlassPanel className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-neon-green">AI QC Inspector</h1>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="rounded-2xl border-2 border-dashed border-neon-blue/50 bg-slate-900/50 p-16 text-center hover:border-neon-blue"
      >
        {loading ? (
          <p className="text-xl text-neon-blue">Roasting your photo...</p>
        ) : result ? (
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <p className="text-lg font-bold text-red-400">Deficiencies</p>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-slate-300">{result}</pre>
          </div>
        ) : (
          <p className="text-lg text-slate-400">Drag jobsite photo here – I'll find the fuckups</p>
        )}
      </div>
    </GlassPanel>
  );
}
