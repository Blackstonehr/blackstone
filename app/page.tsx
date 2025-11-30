'use client'

import KpiCard from '../components/KpiCard'
import { TrendingUp, FileText, DollarSign } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {/* KPI cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <KpiCard
          title="Active Projects"
          value="12"
          icon={TrendingUp}
          color="neon.green"
        />
        <KpiCard
          title="Pending Invoices"
          value="$145k"
          icon={DollarSign}
          color="neon.yellow"
        />
        <KpiCard
          title="Open Tasks"
          value="34"
          icon={FileText}
          color="neon.red"
        />
      </div>
      {/* Placeholder for charts */}
      <section className="mt-8 p-6 bg-neutral-800 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
        <div className="text-sm text-neutral-400">Charts will go here (e.g., cost vs budget, safety score trends)</div>
      </section>
    </main>
  )
}