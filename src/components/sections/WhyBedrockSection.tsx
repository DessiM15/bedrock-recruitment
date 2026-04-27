"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Image from "next/image";

const sellingPoints = [
  "Your OWN business — this is NOT an MLM",
  "No dragging friends & family to hotel meetings",
  "Leads flowing in for you from day one",
  "No experience necessary — we train you",
  "No autoship or products piling up in the garage",
  "No spamming people on social media",
  "Work with top industry leaders",
  "Won\u2019t cost you an arm and a leg to start",
];

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
          className="relative aspect-[3/2] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/team/recruitement-team.jpg"
            alt="The Bedrock team together"
            fill
            className="object-cover object-top"
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
            className="mb-8 text-lg font-medium leading-relaxed text-dark-green/80"
            delay={0.3}
          >
            We opened the doors for our business launch challenge.
            Imagine waking up tomorrow with a brand new at-home business —
            that would be pretty cool, right?
          </AnimatedText>

          <div className="space-y-3">
            {sellingPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <span className="text-base font-semibold text-dark-green">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Kicker + CTA */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 text-xl font-black text-tan md:text-2xl"
          >
            All this without costing you an arm and a leg.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-6"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-tan px-10 py-5 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-tan-light sm:w-auto"
            >
              Book Your Free 5-Minute Call
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
