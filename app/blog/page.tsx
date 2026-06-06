import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogUnavailable } from "@/components/BlogUnavailable";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PromoStrip } from "@/components/PromoStrip";
import { getBlogPostsSafe } from "@/lib/hashnode";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Kaji Blog",
  description: "Notes and updates about Kaji, macOS coding agents, and terminal-native development workflows.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPostsSafe();

  return (
    <>
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <section className="changelog-container pb-24 pt-10 md:py-24">
          {posts.length ? (
            <>
              <p className="mb-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">Kaji Blog</p>
              <h1 className="max-w-3xl font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                Notes from building a Mac command center for coding agents.
              </h1>
              <div className="mt-12">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <BlogUnavailable />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
