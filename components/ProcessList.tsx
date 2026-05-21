import site from "@/data/site.json";

export function ProcessList() {
  return (
    <section className="px-8 py-12 text-sm" id="updates">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 inline-flex rounded-xs border border-tip-border bg-tip px-1 py-0.5 text-xs uppercase tracking-wider text-tip-muted">
          How it works
        </div>
        <ol className="space-y-6">
          {site.steps.map(([title, body], index) => (
            <li className="grid grid-cols-[auto_1fr] gap-x-2" key={title}>
              <span className="text-muted-foreground">{index + 1}.</span>
              <span className="font-semibold text-foreground">{title}</span>
              <span />
              <span className="text-muted-foreground">{body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
