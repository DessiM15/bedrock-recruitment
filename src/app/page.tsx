import { LandingPage } from "@/components/LandingPage";
import { getLatestArticles } from "@/lib/articles";

export const revalidate = 86400; // Revalidate daily for auto-publishing

export default function Home() {
  const latestArticles = getLatestArticles(3);

  return <LandingPage latestArticles={latestArticles} />;
}
