export function CashBurnCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-red-500/50 bg-slate-950/80 px-5 py-4 shadow-xl backdrop-blur-xl">
      <div className="space-y-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Cash Burn This Week
        </span>
        <span className="block text-2xl font-semibold text-red-400">-$412k</span>
        <span className="text-xs text-slate-300">We die in 9 days without draw</span>
      </div>
      <span className="text-4xl">💀</span>
    </div>
  );
}
