import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

type KpiTone = "green" | "red" | "yellow" | "blue";

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  tone?: KpiTone;
}

const toneClasses: Record<KpiTone, string> = {
  green: "text-neon-green shadow-neon-green border-neon-green/40",
  red: "text-neon-red shadow-neon-red border-neon-red/40",
  yellow: "text-neon-yellow shadow-neon-yellow border-neon-yellow/40",
  blue: "text-neon-blue shadow-neon-blue border-neon-blue/40"
};

export function KpiCard({
  title,
  value,
  icon: Icon,
  tone = "green"
}: KpiCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-xl backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon-blue">
      <div className="space-y-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          {title}
        </span>
        <span className="block text-2xl font-semibold text-slate-50">
          {value}
        </span>
      </div>
      <div
        className={clsx(
          "inline-flex items-center justify-center rounded-2xl border px-3 py-3 text-sm font-semibold",
          toneClasses[tone]
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}
