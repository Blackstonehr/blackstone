'use client'

import { useState } from 'react'
import clsx from 'clsx'

const tabs = [
  'Overview',
  'Progress Payments',
  'Expenses',
  'Payment History',
]

export default function CostPage() {
  const [activeTab, setActiveTab] = useState<string>('Overview')

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Cost Tracking</h1>
      {/* Tab navigation */}
      <div className="flex space-x-2 border-b border-neutral-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={clsx(
              'px-4 py-2 font-medium text-sm',
              activeTab === tab
                ? 'border-b-2 border-neon-blue text-neon-blue'
                : 'text-neutral-400 hover:text-neutral-200'
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content area */}
      <section className="mt-4">
        {activeTab === 'Overview' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Budget vs Actual</h2>
            <p className="text-neutral-400">Graphs and summaries will display here.</p>
          </div>
        )}
        {activeTab === 'Progress Payments' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Progress Payments</h2>
            <p className="text-neutral-400">Table of payment milestones goes here.</p>
          </div>
        )}
        {activeTab === 'Expenses' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Expenses</h2>
            <p className="text-neutral-400">Filterable list of expenses will be implemented.</p>
          </div>
        )}
        {activeTab === 'Payment History' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Payment History</h2>
            <p className="text-neutral-400">Historical payment records will appear here.</p>
          </div>
        )}
      </section>
    </main>
  )
}