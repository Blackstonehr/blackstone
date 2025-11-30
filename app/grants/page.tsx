'use client'

import { useState } from 'react'
import { Input } from '@headlessui/react/dist/components/input/input'
import { Button } from '@headlessui/react/dist/components/button/button'

export default function GrantsPage() {
  const [company, setCompany] = useState('')
  const [project, setProject] = useState('')
  const [result, setResult] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: call API to run grant matcher
    setResult({ status: 'ELIGIBLE', score: 0.82, reasons: ['Matches labour funding criteria'] })
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Grant Matcher</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm text-neutral-300 mb-1" htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-700"
            placeholder="Acme Construction"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-1" htmlFor="project">Project Name</label>
          <input
            id="project"
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full p-2 rounded bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-700"
            placeholder="Downtown Tower Renovation"
          />
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-neon-blue text-neutral-900 font-medium hover:opacity-90">Match Grants</button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <p>Status: <span className="font-bold text-neon-green">{result.status}</span></p>
          <p>Score: {Math.round(result.score * 100)}%</p>
          <ul className="list-disc pl-6 mt-2">
            {result.reasons.map((reason: string, idx: number) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}