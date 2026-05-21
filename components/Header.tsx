import Link from "next/link";
import site from "@/data/site.json";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <LogoMark />
        <nav aria-label="Site" className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link className="text-sm text-foreground/70 transition-colors hover:text-foreground" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
          <a
            className="flex h-8 items-center gap-2 rounded-md bg-foreground px-3 text-sm font-medium text-background transition-colors hover:bg-foreground-muted"
            href={site.downloadHref}
          >
            Download
            <kbd className="flex size-6 items-center justify-center rounded-md border border-background/20 bg-background/20 text-xs">
              D
            </kbd>
          </a>
        </nav>
        <a
          aria-label="Download Kaji"
          className="flex size-9 items-center justify-center rounded-md border border-border text-sm md:hidden"
          href={site.downloadHref}
        >
          ↓
        </a>
      </div>
    </header>
  );
}
