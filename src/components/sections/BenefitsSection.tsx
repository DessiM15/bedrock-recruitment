"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { benefits } from "@/data/benefits";
import { GraduationCap, Target, Clock, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Target,
  Clock,
  TrendingUp,
};

export function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" className="flex items-center bg-cream-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
          >
            What We Offer
          </AnimatedText>
          <AnimatedText
            as="h2"
            className="font-serif text-3xl font-light md:text-4xl lg:text-5xl"
            delay={0.1}
          >
            Built for Your Success
          </AnimatedText>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group rounded-xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-tan/10 text-tan transition-colors group-hover:bg-tan group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-dark-green/70">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
