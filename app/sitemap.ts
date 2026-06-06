import type { MetadataRoute } from "next";
import { absoluteUrl, changelogEntries, dateToIso } from "@/lib/content";
import { getBlogPostsSafe } from "@/lib/hashnode";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPostsSafe(20);
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: dateToIso(changelogEntries[0].date), changeFrequency: "weekly", priority: 1, images: [absoluteUrl("/og-main.png")] },
    { url: absoluteUrl("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
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

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: dateToIso(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...changelogRoutes];
}
