import site from "@/data/site.json";
import { PrimaryButton } from "./PrimaryButton";

export function ClosingCta() {
  return (
    <section className="px-8 py-12" id="download">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-2 text-sm font-semibold text-foreground">{site.closing.title}</h2>
        <p className="mb-6 text-sm text-muted-foreground">{site.closing.body}</p>
        <div className="max-w-52">
          <PrimaryButton>{site.closing.cta}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
