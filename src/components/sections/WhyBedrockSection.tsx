"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

export function WhyBedrockSection() {
  return (
    <SectionWrapper id="why-bedrock" className="flex items-center">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/hero/why-bedrock.jpg"
            alt="Financial advisor helping a family with their plans"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/20 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
            delay={0.1}
          >
            Our Mission
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mb-6 font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            delay={0.2}
          >
            Why Bedrock?
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-6 text-lg leading-relaxed text-dark-green/80"
            delay={0.3}
          >
            At Bedrock Financial Planning, we believe everyone deserves access to
            expert financial guidance. Our mission is to{" "}
            <strong className="text-dark-green">
              empower individuals to take control of their financial futures
            </strong>{" "}
            — and we do that by building a team of dedicated, compassionate
            professionals.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-6 text-lg leading-relaxed text-dark-green/80"
            delay={0.4}
          >
            Whether you&apos;re an experienced financial advisor looking for a
            team that values integrity and growth, or you&apos;re new to the
            industry and ready to make a real impact, Bedrock is the place to
            build a career that matters.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-lg leading-relaxed text-dark-green/80"
            delay={0.5}
          >
            We provide the training, the tools, and the community — you bring
            the passion and the drive. Together, we help families across Texas
            and beyond build financial security that lasts generations.
          </AnimatedText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-tan/30" />
              <span className="font-serif text-sm italic text-tan">
                Est. in service of families
              </span>
              <div className="h-px flex-1 bg-tan/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
