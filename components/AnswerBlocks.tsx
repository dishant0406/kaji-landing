import site from "@/data/site.json";

export function AnswerBlocks() {
  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-3xl border-y border-border/70 py-10">
        <div className="mb-8 inline-flex rounded-xs border border-tip-border bg-tip px-1 py-0.5 text-xs uppercase tracking-wider text-tip-muted">
          Kaji in brief
        </div>
        <div className="space-y-8">
          {site.answerBlocks.map((block) => (
            <article key={block.question}>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">{block.question}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
