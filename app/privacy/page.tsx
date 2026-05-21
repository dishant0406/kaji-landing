import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPageShell } from "@/components/LegalPageShell";
import { legalPages } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { legalPageSchema } from "@/lib/schema/legal";

export const metadata: Metadata = pageMetadata({
  title: "Kaji Privacy Notice",
  description: legalPages.privacy.intro,
  path: "/privacy",
  imagePath: "/privacy/opengraph-image",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={legalPageSchema("privacy")} />
      <LegalPageShell page={legalPages.privacy} />
    </>
  );
}
