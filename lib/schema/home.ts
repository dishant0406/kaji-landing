import site from "@/data/site.json";
import { absoluteUrl, changelogEntries, seo } from "@/lib/content";
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
      downloadUrl: absoluteUrl("/"),
      image: absoluteUrl(seo.ogImage),
      screenshot: absoluteUrl("/kaji-hero-screenshot.png"),
      description: seo.description,
      releaseNotes: absoluteUrl(`/changelog/${changelogEntries[0].slug}`),
      publisher: { "@id": entityId("/", "organization") },
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
