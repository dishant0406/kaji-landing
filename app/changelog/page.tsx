import type { Metadata } from "next";
import { ChangelogEntry } from "@/components/ChangelogEntry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PromoStrip } from "@/components/PromoStrip";
import { changelogEntries } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { changelogIndexSchema } from "@/lib/schema/changelog";

export const metadata: Metadata = pageMetadata({
  title: "Kaji Changelog",
  description: `Latest: v${changelogEntries[0].version} · ${changelogEntries[0].date}`,
  path: "/changelog",
  imagePath: "/changelog/opengraph-image",
});

export default function ChangelogPage() {
  return (
    <>
      <JsonLd data={changelogIndexSchema()} />
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <div className="bg-background font-sans">
          <section className="changelog-container pb-24 pt-10 md:py-24">
            <div>
              {changelogEntries.map((entry) => (
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
