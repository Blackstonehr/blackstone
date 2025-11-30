"use client";

import { Volume2 } from "lucide-react";

export function VoiceBriefButton() {
  const speak = () => {
    const text =
      "Morning boss. Critical path L28 slab pour, 1.4 days float. Cash burn negative four twelve k. Pour risk seventy eight percent, light rain. Thirty one crews onsite. Seven open punches. Go kick ass.";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="flex items-center gap-2 rounded-lg bg-neon-blue/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neon-blue hover:bg-neon-blue/30"
    >
      <Volume2 className="h-4 w-4" />
      Bad news brief
    </button>
  );
}
