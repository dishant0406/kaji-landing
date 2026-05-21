import type { Metadata } from "next";
import { ChangelogEntry } from "@/components/ChangelogEntry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PromoStrip } from "@/components/PromoStrip";
import changelog from "@/data/changelog.json";

export const metadata: Metadata = {
  title: "Kaji Changelog",
  description: `Latest: v${changelog.entries[0].version} · ${changelog.entries[0].date}`,
};

export default function ChangelogPage() {
  return (
    <>
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <div className="bg-background font-sans">
          <section className="changelog-container pb-24 pt-10 md:py-24">
            <div>
              {changelog.entries.map((entry) => (
                <ChangelogEntry entry={entry} key={entry.version} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
