"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/types";

interface LatestArticlesProps {
  articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="section-overlay bg-cream-dark px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-tan">
              From Our Blog
            </span>
            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-2 text-sm font-medium text-tan transition-colors hover:text-tan-dark md:flex"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-tan"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
