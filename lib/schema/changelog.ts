import { absoluteUrl, changelogEntries, dateToIso, getChangelogDescription } from "@/lib/content";
import { breadcrumbNode, entityId, graph, organizationNode, websiteNode } from "./base";

type ChangelogEntry = (typeof changelogEntries)[number];

function articleNode(entry: ChangelogEntry) {
  return {
    "@type": "TechArticle",
    "@id": entityId(`/changelog/${entry.slug}`, "article"),
    headline: `${entry.title} - Kaji ${entry.version}`,
    description: getChangelogDescription(entry),
    datePublished: dateToIso(entry.date),
    dateModified: dateToIso(entry.date),
    url: absoluteUrl(`/changelog/${entry.slug}`),
    image: absoluteUrl(`/changelog/${entry.slug}/opengraph-image`),
    author: { "@id": entityId("/", "organization") },
    publisher: { "@id": entityId("/", "organization") },
    about: ["Kaji", "coding agents", "macOS", "terminal workflow"],
  };
}

export function changelogIndexSchema() {
  return graph([
    organizationNode(),
    websiteNode(),
    {
      "@type": "CollectionPage",
      "@id": entityId("/changelog", "collection"),
      name: "Kaji Changelog",
      url: absoluteUrl("/changelog"),
      description: `Latest: v${changelogEntries[0].version} · ${changelogEntries[0].date}`,
      hasPart: changelogEntries.map(articleNode),
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Changelog", path: "/changelog" },
    ]),
  ]);
}

export function changelogEntrySchema(entry: ChangelogEntry) {
  return graph([
    organizationNode(),
    websiteNode(),
    articleNode(entry),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Changelog", path: "/changelog" },
      { name: entry.title, path: `/changelog/${entry.slug}` },
    ]),
  ]);
}
