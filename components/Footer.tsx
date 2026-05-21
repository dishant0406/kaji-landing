import Link from "next/link";
import site from "@/data/site.json";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border px-8 py-12 text-sm">
      <div className="mx-auto grid max-w-xl gap-8 sm:grid-cols-3">
        {site.footerGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 text-muted-foreground">[{group.title}]</p>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link className="text-foreground/75 transition-colors hover:text-foreground" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-xl text-muted-foreground">© 2026 Kaji</p>
    </footer>
  );
}
