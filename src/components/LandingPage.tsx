"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DotNavigation } from "@/components/layout/DotNavigation";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBedrockSection } from "@/components/sections/WhyBedrockSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LatestArticles } from "@/components/blog/LatestArticles";
import type { Article } from "@/types";

interface LandingPageProps {
  latestArticles: Article[];
}

export function LandingPage({ latestArticles }: LandingPageProps) {
  return (
    <>
      <Header />
      <DotNavigation />
      <FloatingCTA />

      <main>
        <HeroSection />
        <WhyBedrockSection />
        <BenefitsSection />
        <TeamSection />
        <ContactSection />
        <LatestArticles articles={latestArticles} />
      </main>

      <Footer />
    </>
  );
}
