import { getPublishedArticles, getAllCategories } from "@/lib/articles";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const revalidate = 86400; // Daily revalidation for auto-publishing

export const metadata: Metadata = {
  title: "Blog | Bedrock Financial Planning",
  description:
    "Insights, tips, and resources for financial planning professionals. Career advice, industry trends, and more from the Bedrock team.",
};

export default function BlogPage() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Blog Header */}
          <div className="mb-12 text-center">
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-tan">
              Our Blog
            </span>
            <h1 className="mb-4 font-serif text-4xl font-light md:text-5xl">
              Insights & Resources
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-dark-green/70">
              Expert perspectives on building a successful career in financial
              planning, industry trends, and professional development.
            </p>
          </div>

          {/* Category Tags */}
          {categories.length > 0 && (
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-cream-dark px-4 py-1.5 text-xs font-medium text-dark-green/70"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <ArticleGrid articles={articles} />
        </div>
      </main>
      <Footer />
    </>
  );
}
