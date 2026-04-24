import Link from "next/link";
import Image from "next/image";
import { Clock, User } from "lucide-react";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishDate + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-tan px-3 py-1 text-xs font-medium text-white">
          {article.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-serif text-lg font-semibold leading-tight text-dark-green transition-colors group-hover:text-tan md:text-xl">
          {article.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-dark-green/60">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-dark-green/50">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime} min read
          </span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
