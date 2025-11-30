"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BadgeDollarSign,
  ShieldCheck,
  CalendarClock,
  MessageSquare,
  LineChart,
  Activity
} from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/grants", label: "Grants", icon: LineChart },
  { href: "/cost", label: "Cost", icon: BadgeDollarSign },
  { href: "/quality", label: "Quality", icon: ShieldCheck },
  { href: "/scheduling", label: "Scheduling", icon: CalendarClock },
  { href: "/communication", label: "Communication", icon: MessageSquare },
  { href: "/cashflow", label: "Cash Flow", icon: Activity }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden border-r border-white/10 bg-black/70 backdrop-blur-2xl md:flex md:w-64 lg:w-72">
      <div className="flex w-full flex-col gap-8 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-neon-blue to-neon-green shadow-neon-blue">
            <span className="text-sm font-black tracking-widest text-slate-950">
              Bx
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              BlackstoneHR
            </span>
            <span className="text-sm font-medium text-slate-100">
              Ops &amp; Field Console
            </span>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                )}
              >
                <span
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition",
                    active && "bg-neon-blue/20 text-neon-blue",
                    !active &&
                      "group-hover:bg-neon-blue/20 group-hover:text-neon-blue"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-slate-300">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-semibold tracking-wide text-slate-100">
              Status
            </span>
            <span className="rounded-full bg-neon-green/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neon-green">
              All green
            </span>
          </div>
          <p className="text-[11px] leading-snug text-slate-300/90">
            Field sync &amp; AI suggestions are online. No escalations in the
            last 24 hours.
          </p>
        </div>
      </div>
    </aside>
  );
}
