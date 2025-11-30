import { NextResponse } from "next/server";

export async function GET() {
  // Mock for now—replace with real fetch when keys added
  return NextResponse.json({ temp: 8, desc: "Light rain", rainChance: 68 });
}
