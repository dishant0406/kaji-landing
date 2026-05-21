import type { MetadataRoute } from "next";
import { absoluteUrl, changelogEntries, dateToIso } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: dateToIso(changelogEntries[0].date), changeFrequency: "weekly", priority: 1, images: [absoluteUrl("/og-main.png")] },
    { url: absoluteUrl("/changelog"), lastModified: dateToIso(changelogEntries[0].date), changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/privacy"), lastModified: new Date("2026-05-21"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: new Date("2026-05-21"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const changelogRoutes: MetadataRoute.Sitemap = changelogEntries.map((entry) => ({
    url: absoluteUrl(`/changelog/${entry.slug}`),
    lastModified: dateToIso(entry.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...changelogRoutes];
}
