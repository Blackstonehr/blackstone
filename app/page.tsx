"use client";

import { GlassPanel } from "../components/GlassPanel";
import { KpiCard } from "../components/KpiCard";
import { StatusCard } from "../components/StatusCard";
import { CriticalPathCard } from "../components/CriticalPathCard";
import { CashBurnCard } from "../components/CashBurnCard";
import { PourRiskCard } from "../components/PourRiskCard";
import {
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Users,
  AlertTriangle,
  HardHat,
} from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function DashboardPage() {
  const { data: mock } = useSWR("/api/mock-procore", fetcher, { refreshInterval: 30000 });
  const { data: weather } = useSWR("/api/weather", fetcher, { refreshInterval: 600000 });

  const projects = mock?.projects || 12;
  const crews = mock?.crewsOnsite || 31;
  const qcOpen = mock?.openPunchItems || 7;
  const ar = mock?.arThisMonth || 284000;

  return (
    <>
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Overview
        </p>
        <h1 className="bg-gradient-to-r from-slate-50 via-neon-blue to-neon-green bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
          Morning snapshot of the field.
        </h1>
      </section>

      {/* HERO ROW — the new "am I screwed today" cards */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CriticalPathCard />
        <CashBurnCard />
        <PourRiskCard weather={weather} />
        <KpiCard title="Safety near-miss trend" value="↑ 3" icon={HardHat} tone="yellow" />
      </section>

      {/* Classic KPIs */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Active projects" value={projects.toString()} icon={TrendingUp} tone="blue" />
        <KpiCard title="Crews onsite" value={crews.toString()} icon={Users} tone="green" />
        <KpiCard title="Open QC issues" value={qcOpen.toString()} icon={ShieldCheck} tone="red" />
        <KpiCard title="AR this month" value={`$${ (ar / 1000).toFixed(0) }k`} icon={DollarSign} tone="yellow" />
      </section>

      {/* Rest of your beautiful field health section unchanged */}
      <section className="grid gap-5 lg:grid-cols-3">
        <GlassPanel className="lg:col-span-2 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-slate-50">Today&apos;s field health</h2>
              <p className="text-xs text-slate-300/80">Live from all active sites</p>
            </div>
            <span className="neon-pulse rounded-full bg-neon-blue/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-blue">
              Live sync
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <StatusCard title="Safety score" description="All green – zero lost-time this week" severity="green" daysLeft={7} />
            <StatusCard title="Schedule risk" description="L28 pour has 1.4 days float" severity="yellow" daysLeft={1} />
            <StatusCard title="QC pass rate" description="97 % last 7 days" severity="green" daysLeft={14} />
          </div>
        </GlassPanel>

        {/* Dispatch feed – unchanged but still sexy */}
        <GlassPanel className="flex flex-col gap-3 p-5">
          {/* … your original dispatch feed … */}
        </GlassPanel>
      </section>
    </>
  );
}
