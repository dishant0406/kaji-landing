import { llmsText } from "@/lib/agentFiles";

export function GET() {
  return new Response(llmsText(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
