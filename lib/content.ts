import changelog from "@/data/changelog.json";
import legal from "@/data/legal.json";
import site from "@/data/site.json";

export const seo = site.seo;
export const changelogEntries = changelog.entries;
export const legalPages = legal;

export function absoluteUrl(path = "/") {
  return new URL(path, seo.siteUrl).toString();
}

export function getChangelogEntry(slug: string) {
  return changelogEntries.find((entry) => entry.slug === slug);
}

export function getChangelogDescription(entry: (typeof changelogEntries)[number]) {
  const firstSection = entry.sections[0];
  return firstSection.paragraphs?.[0] ?? `${entry.title} in Kaji ${entry.version}.`;
}

export function dateToIso(date: string) {
  return new Date(`${date} 00:00:00 GMT`).toISOString();
}
