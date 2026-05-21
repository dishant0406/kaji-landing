import type { MetadataRoute } from "next";
import { seo } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.defaultTitle,
    short_name: seo.siteName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#141110",
    theme_color: "#141110",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
