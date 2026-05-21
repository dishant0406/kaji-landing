import type { Metadata } from "next";
import { absoluteUrl, seo } from "./content";

type PageMetadata = {
  description: string;
  imagePath?: string;
  modifiedTime?: string;
  path: string;
  publishedTime?: string;
  title: string;
  type?: "website" | "article";
};

export function pageMetadata({ description, imagePath = seo.ogImage, modifiedTime, path, publishedTime, title, type = "website" }: PageMetadata): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(imagePath);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: seo.siteName,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
