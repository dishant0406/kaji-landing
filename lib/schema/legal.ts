import { absoluteUrl, legalPages } from "@/lib/content";
import { breadcrumbNode, entityId, graph, organizationNode, websiteNode } from "./base";

type LegalKind = keyof typeof legalPages;

const legalPaths: Record<LegalKind, string> = {
  privacy: "/privacy",
  terms: "/terms",
};

export function legalPageSchema(kind: LegalKind) {
  const page = legalPages[kind];
  const path = legalPaths[kind];

  return graph([
    organizationNode(),
    websiteNode(),
    {
      "@type": "WebPage",
      "@id": entityId(path, "webpage"),
      name: page.title,
      description: page.intro,
      url: absoluteUrl(path),
      dateModified: "2026-05-21",
      isPartOf: { "@id": entityId("/", "website") },
      publisher: { "@id": entityId("/", "organization") },
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: page.title, path },
    ]),
  ]);
}
