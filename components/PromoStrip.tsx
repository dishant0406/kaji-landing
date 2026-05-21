import Link from "next/link";
import site from "@/data/site.json";

export function PromoStrip() {
  return (
    <Link className="block bg-foreground px-4 py-2 text-center text-sm text-background" href={site.promo.href}>
      {site.promo.label}
    </Link>
  );
}
