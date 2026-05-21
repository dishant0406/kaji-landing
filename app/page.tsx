import { ClosingCta } from "@/components/ClosingCta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NotesGrid } from "@/components/NotesGrid";
import { ProductShot } from "@/components/ProductShot";
import { ProcessList } from "@/components/ProcessList";
import { PromoStrip } from "@/components/PromoStrip";
import { ToolGrid } from "@/components/ToolGrid";

export default function Home() {
  return (
    <>
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <Hero />
        <ProductShot />
        <ToolGrid />
        <NotesGrid />
        <ProcessList />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
