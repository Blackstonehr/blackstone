"use client";

import { CloudRain } from "lucide-react";

export function PourRiskCard({ weather }: any) {
  const risk = weather?.rainChance > 60 || weather?.temp < 5 ? 78 : 32;
  const tone = risk > 70 ? "red" : risk > 50 ? "yellow" : "green";

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-xl backdrop-blur-xl">
      <div className="space-y-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pour Risk Today
        </span>
        <span className={`block text-2xl font-semibold ${tone === "red" ? "text-red-400" : tone === "yellow" ? "text-yellow-400" : "text-green-400"}`}>
          {risk}%
        </span>
        <span className="text-xs text-slate-300">
          {weather?.desc || "Clear"} • {weather?.temp ? `${weather.temp}°C` : "--°C"}
        </span>
      </div>
      <CloudRain className={`h-6 w-6 ${tone === "red" ? "text-red-400" : tone === "yellow" ? "text-yellow-400" : "text-green-400"}`} />
    </div>
  );
}
