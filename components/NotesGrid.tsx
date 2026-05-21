import site from "@/data/site.json";

export function NotesGrid() {
  return (
    <section className="px-4 py-12 md:px-8" id="docs">
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
        {site.notes.map((note) => (
          <article className="rounded-lg border border-border bg-secondary p-4" key={note.title}>
            <h2 className="mb-2 text-sm font-semibold text-foreground">{note.title}</h2>
            <p className="text-sm leading-6 text-muted-foreground">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
