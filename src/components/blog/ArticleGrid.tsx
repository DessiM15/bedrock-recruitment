import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/types";

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-dark-green/60">
          No articles published yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
