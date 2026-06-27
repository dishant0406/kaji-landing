import { NextResponse } from "next/server";
import { resolveKajiDownloadTarget } from "@/lib/kajiDownload";

export const dynamic = "force-dynamic";

export async function GET() {
  const target = await resolveKajiDownloadTarget();
  const response = NextResponse.redirect(target.url, 307);

  response.headers.set("cache-control", target.fallback ? "no-store" : "public, max-age=300, s-maxage=300");

  return response;
}
