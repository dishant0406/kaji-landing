import { ChangelogAsset } from "./ChangelogAsset";

type ChangelogSectionProps = {
  section: {
    asset?: {
      alt: string;
      height: number;
      src: string;
      width: number;
    };
    bullets?: string[];
    heading: string;
    paragraphs?: string[];
  };
};

export function ChangelogSection({ section }: ChangelogSectionProps) {
  return (
    <>
      <h3 className="mb-2 mt-6 text-lg font-semibold text-foreground">{section.heading}</h3>
      {section.paragraphs?.map((paragraph) => (
        <p className="mb-4 text-base text-foreground" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {section.asset ? <ChangelogAsset asset={section.asset} /> : null}
      {section.bullets ? (
        <ul className="mb-4 ml-8 list-outside list-disc space-y-2 pl-2">
          {section.bullets.map((bullet) => (
            <li className="text-base text-foreground" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
