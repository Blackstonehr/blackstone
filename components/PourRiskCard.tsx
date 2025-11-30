import { CloudRain } from "lucide-react";

interface PourRiskCardProps {
  weather: {
    temp: number;
    desc: string;
  };
  tone: "red" | "yellow" | "green";
  risk: number;
  className?: string;
}

const toneClass: Record<PourRiskCardProps["tone"], string> = {
  red: "text-red-400",
  yellow: "text-yellow-400",
  green: "text-green-400"
};

export function PourRiskCard({ weather, tone, risk, className }: PourRiskCardProps) {
  const colorClass = toneClass[tone];
  const baseClass =
    "flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-xl backdrop-blur-xl";

  return (
    <div className={[baseClass, className].filter(Boolean).join(" ")}>
      <div className="space-y-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pour Risk Today
        </span>
        <span className={`block text-2xl font-semibold ${colorClass}`}>{risk}%</span>
        <span className="text-xs text-slate-300">
          {weather.desc} • {weather.temp}°C
        </span>
      </div>
      <CloudRain className={`h-6 w-6 ${colorClass}`} />
    </div>
  );
}
