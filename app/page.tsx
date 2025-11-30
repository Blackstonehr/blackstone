"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { KpiCard } from "@/components/KpiCard";
import { StatusCard } from "@/components/StatusCard";
import { CriticalPathCard } from "@/components/CriticalPathCard";
import { CashBurnCard } from "@/components/CashBurnCard";
import { PourRiskCard } from "@/components/PourRiskCard";
import { TrendingUp, ShieldCheck, DollarSign, Users, HardHat } from "lucide-react";

const mockData = {
  projects: 11,
  crewsOnsite: 31,
  openPunchItems: 7,
  arThisMonth: 284000
};

type WeatherState = {
  temp: number;
  desc: string;
  rainChance: number;
};

export default function DashboardPage() {
  const [weather] = useState<WeatherState>({
    temp: 8,
    desc: "Light rain",
    rainChance: 68
  });

  const risk = weather.rainChance > 60 || weather.temp < 5 ? 78 : 32;
  const tone = risk > 70 ? "red" : risk > 50 ? "yellow" : "green";

  return (
    <>
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Overview</p>
        <h1 className="bg-gradient-to-r from-slate-50 via-neon-blue to-neon-green bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
          Morning snapshot of the field.
        </h1>
      </section>

      {/* HERO ROW */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CriticalPathCard className="border-red-500/60 bg-red-950/40 ring-2 ring-red-500/40 shadow-lg shadow-red-500/20" />
        <CashBurnCard className="border-orange-500/60 bg-orange-950/30 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/20" />
        <PourRiskCard
          weather={weather}
          tone={tone}
          risk={risk}
          className="border-yellow-500/50 bg-yellow-950/20 ring-1 ring-yellow-500/30 shadow-md shadow-yellow-500/10"
        />
        <KpiCard title="Safety near-miss trend" value="↑ 3" icon={HardHat} tone="yellow" />
      </section>

      {/* KPIs */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Active projects" value={mockData.projects.toString()} icon={TrendingUp} tone="blue" />
        <KpiCard title="Crews onsite" value={mockData.crewsOnsite.toString()} icon={Users} tone="green" />
        <KpiCard title="Open QC issues" value={mockData.openPunchItems.toString()} icon={ShieldCheck} tone="red" />
        <KpiCard title="AR this month" value={`$${(mockData.arThisMonth / 1000).toFixed(0)}k`} icon={DollarSign} tone="yellow" />
      </section>

      {/* Field Health */}
      <section className="grid gap-5 lg:grid-cols-3">
        <GlassPanel className="lg:col-span-2 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-slate-50">Today's field health</h2>
              <p className="text-xs text-slate-300/80">Live from all active sites</p>
            </div>
            <span className="neon-pulse rounded-full bg-neon-blue/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-blue">
              Live sync
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <StatusCard title="Safety score" description="All green – zero lost-time this week" severity="green" daysLeft={7} />
            <StatusCard title="Schedule risk" description="L28 pour has 1.4 days float" severity="yellow" daysLeft={1} />
            <StatusCard title="QC pass rate" description="97% last 7 days" severity="green" daysLeft={14} />
          </div>
        </GlassPanel>

        <GlassPanel className="flex flex-col gap-3 p-5">
          <h2 className="text-sm font-semibold tracking-wide text-slate-50">Dispatch feed</h2>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/70 px-3 py-2">
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-neon-green to-transparent bg-[length:200%_100%] animate-[slide_3s_linear_infinite]" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-100">Crew 4 → Site 12</p>
                  <p className="text-[11px] text-slate-400">Concrete crew reassigned to downtown parkade.</p>
                </div>
                <span className="mt-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  On-time
                </span>
              </div>
            </li>
          </ul>
        </GlassPanel>
      </section>
    </>
  );
}
