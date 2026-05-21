import { notFound } from "next/navigation";
import { getChangelogEntry } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Kaji";
export const size = ogSize;
export const contentType = ogContentType;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;

  if (!getChangelogEntry(slug)) {
    notFound();
  }

  return createOgImage();
}
