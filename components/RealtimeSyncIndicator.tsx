"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function RealtimeSyncIndicator() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs text-slate-400">
      <Clock className="h-4 w-4 animate-pulse" />
      <span>Last synced {time}</span>
    </div>
  );
}
