import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface KpiCardProps {
  title: string
  value: string
  icon: LucideIcon
  color?: string
}

export default function KpiCard({ title, value, icon: Icon, color = 'neon.green' }: KpiCardProps) {
  return (
    <div className="flex items-center p-4 bg-neutral-800 rounded-lg shadow-md">
      <div className={clsx('p-3 rounded-full mr-4', {
        ['bg-' + color]: color,
      })}>
        <Icon className="h-5 w-5 text-neutral-900" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-400">{title}</span>
        <span className="text-lg font-medium text-neutral-100">{value}</span>
      </div>
    </div>
  )
}