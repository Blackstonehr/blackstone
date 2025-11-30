import clsx from "clsx";

type Severity = "green" | "yellow" | "orange" | "red" | "blue";

interface StatusCardProps {
  title: string;
  description: string;
  severity: Severity;
  daysLeft: number;
}

const sevColorClass: Record<Severity, string> = {
  green: "text-neon-green border-neon-green shadow-neon-green",
  yellow: "text-neon-yellow border-neon-yellow shadow-neon-yellow",
  orange:
    "text-orange-400 border-orange-400 shadow-[0_0_16px_rgba(251,146,60,0.45)]",
  red: "text-neon-red border-neon-red shadow-neon-red",
  blue: "text-neon-blue border-neon-blue shadow-neon-blue"
};

export function StatusCard({
  title,
  description,
  severity,
  daysLeft
}: StatusCardProps) {
  const speed =
    daysLeft > 5 ? "6s" : daysLeft > 2 ? "4s" : daysLeft >= 0 ? "2s" : "1.2s";

  return (
    <div
      className={clsx(
        "relative rounded-2xl border-2 bg-slate-950/80 px-4 py-4 backdrop-blur-xl transition-colors",
        sevColorClass[severity]
      )}
    >
      {/* orbiting urgency orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
        style={{
          animation: `orbit ${speed} linear infinite`
        }}
      />

      {/* sliding gradient ribbon */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, currentColor, transparent)",
          backgroundSize: "200% 100%",
          animation: "slide 3s linear infinite"
        }}
      />

      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-1 text-xs text-slate-300/90">{description}</p>

      <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-400">
        {daysLeft < 0
          ? "Overdue"
          : daysLeft === 0
          ? "Due today"
          : `Due in ~${daysLeft} day${daysLeft === 1 ? "" : "s"}`}
      </p>
    </div>
  );
}
