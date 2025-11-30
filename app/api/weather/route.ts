import { NextResponse } from "next/server";

const LAT = process.env.NEXT_PUBLIC_LAT || "49.2827";
const LON = process.env.NEXT_PUBLIC_LON || "-123.1207";
const KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function GET() {
  if (!KEY || KEY.includes("your_")) {
    return NextResponse.json({ temp: 8, desc: "Light rain", rainChance: 68 });
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=metric`
    );
    const data = await res.json();
    const rainChance = data.rain?.["1h"] ? Math.min(90, data.rain["1h"] * 20) : data.clouds?.all || 30;

    return NextResponse.json({
      temp: Math.round(data.main.temp),
      desc: data.weather[0].description,
      rainChance,
    });
  } catch (e) {
    return NextResponse.json({ temp: 7, desc: "Cloudy", rainChance: 55 });
  }
}
