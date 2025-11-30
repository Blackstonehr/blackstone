import '../styles/globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>BlackstoneHR Platform</title>
        <meta name="description" content="Unified construction management platform for subcontractors." />
      </head>
      <body className="bg-neutral-900 text-neutral-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}