import "../styles/globals.css";
import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { RealtimeSyncIndicator } from "../components/RealtimeSyncIndicator";
import { VoiceBriefButton } from "../components/VoiceBriefButton";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.18),transparent_55%)]" />
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
