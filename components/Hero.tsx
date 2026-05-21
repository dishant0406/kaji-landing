import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <section className="mx-auto max-w-xl px-4 pt-12 sm:px-8" id="top">
      <Link className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground" href={site.hero.updateHref}>
        {site.hero.updateLabel}
      </Link>
      <div className="mb-6 flex h-26 items-center justify-start">
        <Image alt="Kaji wordmark" className="h-auto w-48 sm:w-56" height={493} priority src="/kaji-wordmark.png" width={1481} />
      </div>
      <h1 className="mb-3 text-xl font-bold tracking-tight text-foreground">{site.hero.title}</h1>
      <p className="mb-6 max-w-2xl text-sm text-muted-foreground">{site.hero.description}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <PrimaryButton href={site.downloadHref}>{site.hero.primaryCta}</PrimaryButton>
        <PrimaryButton href="#docs" variant="secondary">{site.hero.secondaryCta}</PrimaryButton>
      </div>
    </section>
  );
}
