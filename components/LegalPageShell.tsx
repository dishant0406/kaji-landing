import { Footer } from "./Footer";
import { Header } from "./Header";
import { LegalContent } from "./LegalContent";
import { PromoStrip } from "./PromoStrip";

type LegalPageShellProps = React.ComponentProps<typeof LegalContent>;

export function LegalPageShell({ page }: LegalPageShellProps) {
  return (
    <>
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <section className="px-4 pb-16 pt-24 sm:px-8">
          <LegalContent page={page} />
        </section>
      </main>
      <Footer />
    </>
  );
}
