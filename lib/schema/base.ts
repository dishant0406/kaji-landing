import site from "@/data/site.json";
import { absoluteUrl, seo } from "@/lib/content";

export type SchemaNode = Record<string, unknown>;

export function graph(nodes: SchemaNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function entityId(path: string, id: string) {
  return `${absoluteUrl(path)}#${id}`;
}

export function organizationNode(): SchemaNode {
  return {
    "@type": "Organization",
    "@id": entityId("/", "organization"),
    name: seo.siteName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/kaji-icon.png"),
      width: 512,
      height: 512,
    },
    sameAs: site.footerGroups.flatMap((group) => group.links.map((link) => link.href)).filter((href) => href.startsWith("https://")),
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": entityId("/", "website"),
    name: seo.siteName,
    url: absoluteUrl("/"),
    description: seo.description,
    inLanguage: "en-US",
    publisher: { "@id": entityId("/", "organization") },
  };
}

export function breadcrumbNode(items: Array<{ name: string; path: string }>): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
