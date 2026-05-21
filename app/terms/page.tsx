import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import legal from "@/data/legal.json";

export const metadata: Metadata = {
  title: "Kaji Customer Terms and Conditions",
  description: legal.terms.intro,
};

export default function TermsPage() {
  return <LegalPageShell page={legal.terms} />;
}
