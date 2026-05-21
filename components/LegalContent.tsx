type LegalContentProps = {
  page: {
    intro: string;
    modified: string;
    sections: Array<{
      bullets?: string[];
      heading: string;
      paragraphs?: string[];
    }>;
    title: string;
  };
};

export function LegalContent({ page }: LegalContentProps) {
  return (
    <article className="legal-prose mx-auto max-w-3xl">
      <h1>{page.title}</h1>
      <p>
        <em>{page.modified}</em>
      </p>
      <p>{page.intro}</p>
      {page.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
