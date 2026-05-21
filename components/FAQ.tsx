import site from "@/data/site.json";

export function FAQ() {
  return (
    <section className="px-8 py-12 text-sm">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 inline-flex rounded-xs border border-tip-border bg-tip px-1 py-0.5 text-xs uppercase tracking-wider text-tip-muted">
          Frequently asked questions
        </div>
        <dl className="space-y-6">
          {site.faqs.map(([question, answer]) => (
            <div key={question}>
              <dt className="font-semibold text-foreground">{question}</dt>
              <dd className="mt-1 grid grid-cols-[auto_1fr] gap-x-2 text-muted-foreground">
                <span>└</span>
                <span>{answer}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
