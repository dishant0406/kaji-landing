import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { AnswerBlocks } from "@/components/AnswerBlocks";
import { ClosingCta } from "@/components/ClosingCta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NotesGrid } from "@/components/NotesGrid";
import { HeroMedia } from "@/components/HeroMedia";
import { ProcessList } from "@/components/ProcessList";
import { PromoStrip } from "@/components/PromoStrip";
import { ToolGrid } from "@/components/ToolGrid";
import { homeSchema } from "@/lib/schema/home";

export const metadata: Metadata = pageMetadata({
  title: "Kaji - Run terminal-native coding agents on your Mac",
  description: "Kaji is a native macOS command center for Codex, Claude Code, OpenCode, Pi, worktrees, terminal panes, diffs, and verification.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema()} />
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <Hero />
        <HeroMedia />
        <AnswerBlocks />
        <ToolGrid />
        <NotesGrid />
        <ProcessList />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
