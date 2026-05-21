import site from "@/data/site.json";
import { absoluteUrl, changelogEntries, dateToIso, seo } from "@/lib/content";
import { breadcrumbNode, entityId, graph, organizationNode, websiteNode } from "./base";

export function homeSchema() {
  return graph([
    organizationNode(),
    websiteNode(),
    {
      "@type": "SoftwareApplication",
      "@id": entityId("/", "software"),
      name: seo.siteName,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS",
      softwareVersion: changelogEntries[0].version,
      url: absoluteUrl("/"),
      downloadUrl: site.downloadHref,
      image: absoluteUrl(seo.ogImage),
      screenshot: absoluteUrl("/kaji-hero-screenshot.png"),
      description: seo.description,
      releaseNotes: absoluteUrl(`/changelog/${changelogEntries[0].slug}`),
      publisher: { "@id": entityId("/", "organization") },
      video: { "@id": entityId("/", "hero-video") },
    },
    {
      "@type": "VideoObject",
      "@id": entityId("/", "hero-video"),
      name: "Kaji app demo",
      description: seo.description,
      contentUrl: absoluteUrl("/media/kaji-hero-desktop.mp4"),
      thumbnailUrl: absoluteUrl("/media/kaji-hero-poster.webp"),
      uploadDate: dateToIso(changelogEntries[0].date),
      duration: "PT61S",
    },
    {
      "@type": "FAQPage",
      mainEntity: site.faqs.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
    breadcrumbNode([{ name: "Home", path: "/" }]),
  ]);
}
