"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBedrockSection } from "@/components/sections/WhyBedrockSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { CTABanner } from "@/components/ui/CTABanner";
import type { Article } from "@/types";

interface LandingPageProps {
  latestArticles: Article[];
}

export function LandingPage({ latestArticles }: LandingPageProps) {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main>
        <HeroSection />
        <WhyBedrockSection />
        <CTABanner
          headline="What Are You Waiting For?"
          subtext="Your dream life is one call away."
          buttonText="Schedule Your Call Now"
          backgroundVideo="https://lnszbxtpcfdmn5vu.public.blob.vercel-storage.com/cta-1.mp4"
        />
        <BenefitsSection />
        <VideoSection />
        <TeamSection />
        <TestimonialsSection />
        <CTABanner
          headline="Ready to Upgrade Your Life & Bank Account?"
          subtext="The only thing between you and your dream life is one phone call."
          buttonText="Call Now"
          backgroundImage="/images/cta-luxury.jpg"
        />
        <ContactSection />
        <LatestArticles articles={latestArticles} />
      </main>

      <Footer />
    </>
  );
}
