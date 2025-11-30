'use client'

export default function SchedulingPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Crew Scheduling</h1>
      <div className="bg-neutral-800 p-4 rounded-lg">
        <p className="text-neutral-400">A calendar view for allocating crews and equipment will be integrated here.</p>
        <p className="text-neutral-400 mt-2">Use drag-and-drop to assign personnel and vehicles to tasks. Upcoming training expiry notifications will also display on this page.</p>
      </div>
    </main>
  )
}