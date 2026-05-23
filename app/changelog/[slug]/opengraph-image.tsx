import { notFound } from "next/navigation";
import { getChangelogDescription, getChangelogEntry } from "@/lib/content";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Kaji";
export const size = ogSize;
export const contentType = ogContentType;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);

  if (!entry) {
    notFound();
  }

  return createOgImage({
    label: `Kaji ${entry.version}`,
    title: entry.title,
    description: getChangelogDescription(entry),
    detail: entry.date,
  });
}
