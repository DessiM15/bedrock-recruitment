"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function VideoSection() {
  return (
    <SectionWrapper id="video" className="flex items-center" dark>
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedText
          as="span"
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
        >
          See For Yourself
        </AnimatedText>

        <AnimatedText
          as="h2"
          className="mb-10 font-serif text-3xl font-light leading-tight text-cream md:text-4xl lg:text-5xl"
          delay={0.1}
        >
          Hear From Our Team
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/W1fllCmj9Ew?start=5"
            title="Learn more about the Bedrock opportunity"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
