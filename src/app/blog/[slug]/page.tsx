import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Get Paid Nation" };
  }

  return {
    title: `${article.title} | Get Paid Nation`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(
    article.publishDate + "T00:00:00"
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <article className="mx-auto max-w-4xl px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-tan transition-colors hover:text-tan-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <span className="mb-3 inline-block rounded-full bg-tan/10 px-4 py-1.5 text-xs font-medium text-tan">
              {article.category}
            </span>
            <h1 className="mb-6 font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-green/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime} min read
              </span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative mb-10 aspect-[2/1] overflow-hidden rounded-xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          {/* Article Body */}
          <ArticleContent content={article.content} />

          {/* CTA */}
          <div className="mt-16 rounded-xl bg-dark-green p-8 text-center md:p-12">
            <h3 className="mb-4 font-serif text-2xl font-light text-cream md:text-3xl">
              Ready to Start Earning?
            </h3>
            <p className="mb-6 text-cream/70">
              Don&apos;t just read about success — start building it. Schedule
              your call today.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-tan px-6 py-3 font-medium text-white transition-colors hover:bg-tan-light"
            >
              Schedule Your Call
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
