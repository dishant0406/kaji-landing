import { pricingMarkdown } from "@/lib/agentFiles";

export function GET() {
  return new Response(pricingMarkdown(), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
