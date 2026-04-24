import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";

const BASE_URL = "https://bedrockfinancialplanning.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();

  const articleEntries = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articleEntries,
  ];
}
