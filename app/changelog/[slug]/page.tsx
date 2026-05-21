import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChangelogEntry } from "@/components/ChangelogEntry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PromoStrip } from "@/components/PromoStrip";
import { changelogEntries, dateToIso, getChangelogDescription, getChangelogEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { changelogEntrySchema } from "@/lib/schema/changelog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return changelogEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);

  if (!entry) {
    return {};
  }

  return pageMetadata({
    title: `${entry.title} - Kaji ${entry.version}`,
    description: getChangelogDescription(entry),
    path: `/changelog/${entry.slug}`,
    imagePath: `/changelog/${entry.slug}/opengraph-image`,
    publishedTime: dateToIso(entry.date),
    modifiedTime: dateToIso(entry.date),
    type: "article",
  });
}

export default async function ChangelogDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <JsonLd data={changelogEntrySchema(entry)} />
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <div className="bg-background font-sans">
          <section className="changelog-container pb-24 pt-10 md:py-24">
            <ChangelogEntry entry={entry} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
