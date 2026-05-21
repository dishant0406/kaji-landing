import Link from "next/link";
import { ChangelogSection } from "./ChangelogSection";

type ChangelogEntryProps = {
  entry: {
    date: string;
    sections: React.ComponentProps<typeof ChangelogSection>["section"][];
    slug: string;
    title: string;
    version: string;
  };
};

export function ChangelogEntry({ entry }: ChangelogEntryProps) {
  return (
    <article className="relative mb-14 scroll-mt-8 border-b border-border/40 pb-14 last:mb-0 last:border-b-0 last:pb-0" id={entry.version.replaceAll(".", "-")}>
      <div className="mb-5 flex flex-col items-start gap-3 text-left md:absolute md:inset-y-0 md:left-[-12rem] md:mb-0 md:w-40 md:pt-1">
        <div className="flex flex-col items-start gap-3 md:sticky md:top-24">
          <Link href={`/changelog/${entry.slug}`}>
            <span className="inline-flex items-center rounded-xs border border-tip-border bg-tip px-1 py-0.5 text-xs uppercase tracking-wider text-tip-muted transition-colors hover:text-foreground">
              {entry.version}
            </span>
          </Link>
          <span className="text-sm text-muted-foreground">{entry.date}</span>
        </div>
      </div>
      <div className="min-w-0">
        <Link className="mb-6 block text-2xl font-semibold text-foreground hover:underline sm:text-3xl" href={`/changelog/${entry.slug}`}>
          {entry.title}
        </Link>
        {entry.sections.map((section) => (
          <ChangelogSection key={section.heading} section={section} />
        ))}
      </div>
    </article>
  );
}
