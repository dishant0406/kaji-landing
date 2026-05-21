import site from "@/data/site.json";
import { changelogEntries, seo } from "@/lib/content";

export function llmsText() {
  const faqs = site.faqs.map(([question, answer]) => `- ${question}: ${answer}`).join("\n");
  const updates = changelogEntries.map((entry) => `- ${entry.version} (${entry.date}): ${entry.title}`).join("\n");

  return `# Kaji\n\n${seo.description}\n\n## Product\nKaji is a native macOS command center for developers running terminal-native AI coding agents. It keeps projects, git worktrees, panes, diffs, verification, Codex, Claude Code, OpenCode, Pi, and regular terminal sessions in one local workspace.\n\n## Best pages\n- Homepage: ${seo.siteUrl}/\n- Changelog: ${seo.siteUrl}/changelog\n- Privacy: ${seo.siteUrl}/privacy\n- Terms: ${seo.siteUrl}/terms\n\n## Key questions\n${faqs}\n\n## Latest releases\n${updates}\n`;
}

export function pricingMarkdown() {
  return `# Kaji Pricing\n\nKaji pricing has not been publicly announced yet.\n\n## Current status\n- Product: Kaji for macOS\n- Category: native macOS command center for AI coding agents\n- Pricing: not announced\n- Public updates: ${seo.siteUrl}/changelog\n`;
}
