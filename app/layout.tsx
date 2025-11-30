import "../styles/globals.css";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { RealtimeSyncIndicator } from "@/components/RealtimeSyncIndicator";
import { VoiceBriefButton } from "@/components/VoiceBriefButton";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          body {
            font-family: 'Orbitron', monospace;
          }
          h1, h2, h3, .font-prototype {
            font-family: 'Orbitron', monospace;
            letter-spacing: 0.05em;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-black text-gray-100 font-prototype antialiased">
        {/* Matte black base + subtle concrete grain */}
        <div className="fixed inset-0 bg-[#0a0a0a]" />
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.15"/%3E%3C/svg%3E')] opacity-30" />

        {/* Swirling due-date particles – red = overdue, orange = <3 days, yellow = this week */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-swirl-slow" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-swirl-reverse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600/8 rounded-full blur-3xl animate-swirl-fast" />
        </div>

        <div className="relative z-10 flex min-h-screen">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <Topbar>
              <RealtimeSyncIndicator />
              <VoiceBriefButton />
            </Topbar>
            <main className="flex-1 px-3 py-5 md:px-6 md:py-7">
              <div className="mx-auto flex max-w-6xl flex-col gap-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
