import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PromoStrip } from "@/components/PromoStrip";
import { absoluteUrl, dateToIso } from "@/lib/content";
import { getBlogPost, getBlogPostsSafe } from "@/lib/hashnode";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

export async function generateStaticParams() {
  const posts = await getBlogPostsSafe(20);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.title,
    description: post.brief,
    path: `/blog/${post.slug}`,
    publishedTime: dateToIso(post.publishedAt),
    modifiedTime: dateToIso(post.updatedAt),
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.brief,
    datePublished: dateToIso(post.publishedAt),
    dateModified: dateToIso(post.updatedAt),
    url: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
      <PromoStrip />
      <main className="flex flex-1 flex-col bg-background">
        <Header />
        <article className="changelog-container pb-24 pt-10 md:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl">{post.title}</h1>
          <div className="blog-prose mt-12" dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
