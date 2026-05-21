import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import legal from "@/data/legal.json";

export const metadata: Metadata = {
  title: "Kaji Privacy Notice",
  description: legal.privacy.intro,
};

export default function PrivacyPage() {
  return <LegalPageShell page={legal.privacy} />;
}
