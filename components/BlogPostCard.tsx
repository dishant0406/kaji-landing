import Link from "next/link";
import type { HashnodePostSummary } from "@/lib/hashnode";

type Props = {
  post: HashnodePostSummary;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

export function BlogPostCard({ post }: Props) {
  return (
    <article className="border-t border-border py-8">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
      </p>
      <h2 className="max-w-3xl font-sans text-2xl font-semibold leading-tight text-foreground md:text-3xl">
        <Link className="transition-colors hover:text-foreground-muted" href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-muted-foreground md:text-base">{post.brief}</p>
    </article>
  );
}
