import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPageShell } from "@/components/LegalPageShell";
import { legalPages } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { legalPageSchema } from "@/lib/schema/legal";

export const metadata: Metadata = pageMetadata({
  title: "Kaji Customer Terms and Conditions",
  description: legalPages.terms.intro,
  path: "/terms",
  imagePath: "/terms/opengraph-image",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={legalPageSchema("terms")} />
      <LegalPageShell page={legalPages.terms} />
    </>
  );
}
