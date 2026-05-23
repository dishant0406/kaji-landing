import { legalPages } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Kaji";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    label: "Privacy",
    title: "Kaji Privacy Notice",
    description: legalPages.privacy.intro,
    detail: "kaji.sh/privacy",
  });
}
