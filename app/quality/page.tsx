'use client'

import { useState } from 'react'
import clsx from 'clsx'

const tabs = [
  'Inspections',
  'Feedback',
  'Employees',
  'Vehicles',
  'Spick Days',
  'Leadership',
]

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState<string>('Inspections')

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Quality Control & Safety</h1>
      <div className="flex flex-wrap gap-2 border-b border-neutral-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={clsx(
              'px-3 py-2 text-sm font-medium',
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
      <section className="mt-4">
        {activeTab === 'Inspections' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Inspections</h2>
            <p className="text-neutral-400">Inspection checklist data will be rendered here.</p>
          </div>
        )}
        {activeTab === 'Feedback' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Feedback</h2>
            <p className="text-neutral-400">Employee feedback management goes here.</p>
          </div>
        )}
        {activeTab === 'Employees' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Employees</h2>
            <p className="text-neutral-400">Profiles and performance notes will appear here.</p>
          </div>
        )}
        {activeTab === 'Vehicles' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Vehicles</h2>
            <p className="text-neutral-400">Fleet status cards will be displayed here.</p>
          </div>
        )}
        {activeTab === 'Spick Days' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Spick Days</h2>
            <p className="text-neutral-400">Safety audit results and scores will appear here.</p>
          </div>
        )}
        {activeTab === 'Leadership' && (
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Leadership Programs</h2>
            <p className="text-neutral-400">Training modules and participant progress will show here.</p>
          </div>
        )}
      </section>
    </main>
  )
}