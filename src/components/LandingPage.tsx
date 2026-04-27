"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DotNavigation } from "@/components/layout/DotNavigation";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBedrockSection } from "@/components/sections/WhyBedrockSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { CTABanner } from "@/components/ui/CTABanner";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
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
        <CTABanner
          headline="Limited Spots Available"
          subtext="Because we are so hands-on, we can only take on a few people at a time."
        />
        <BenefitsSection />
        <TeamSection />
        <TestimonialsSection />
        <CTABanner
          headline="Ready to Change Your Life?"
          subtext="Set your free 5-minute phone appointment now."
          buttonText="Set Your Free Appointment"
        />
        <ContactSection />
        <LatestArticles articles={latestArticles} />
      </main>

      <Footer />
      <ThemeSwitcher />
    </>
  );
}
