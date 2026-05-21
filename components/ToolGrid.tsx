import site from "@/data/site.json";

export function ToolGrid() {
  return (
    <section className="py-16 md:px-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-6 w-full text-center text-sm text-muted-foreground">Built for terminal-native builders using</p>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {site.builderTools.map((tool) => (
            <div className="flex h-10 items-center justify-center text-sm font-semibold text-foreground/80" key={tool}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
