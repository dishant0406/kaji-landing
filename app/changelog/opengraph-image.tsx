import { changelogEntries } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Kaji";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  const latest = changelogEntries[0];

  return createOgImage({
    label: "Changelog",
    title: `Latest: Kaji ${latest.version}`,
    description: latest.title,
    detail: latest.date,
  });
}
