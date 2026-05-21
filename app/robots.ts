import type { MetadataRoute } from "next";
import { absoluteUrl, seo } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "Bingbot"], allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: seo.siteUrl,
  };
}
