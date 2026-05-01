"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Play } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";

const sellingPoints = [
  "Our top earners make six figures from home",
  "Real residual income — get paid while you sleep",
  "No ceiling on your earnings — sky\u2019s the limit",
  "Work from anywhere — your laptop is your office",
  "Full training & mentorship from day one",
  "Leads provided — no cold calling required",
  "Join a community of winners who are crushing it",
];

export function WhyBedrockSection() {
  return (
    <SectionWrapper id="why-bedrock" className="flex items-center">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="video-placeholder-shimmer relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border border-gold/30 bg-dark-green"
        >
          {/* Decorative gold corner accents */}
          <div className="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/60 bg-gold/10 transition-colors hover:bg-gold/20">
              <Play className="ml-1 h-8 w-8 text-gold" fill="currentColor" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">
                Lifestyle Video Coming Soon
              </p>
              <p className="mt-1 text-sm text-white/50">
                See how our team really lives
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
            delay={0.1}
          >
            The Opportunity
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mb-6 font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            delay={0.2}
          >
            Why Get Paid Nation?
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-8 text-lg font-medium leading-relaxed text-dark-green/80"
            delay={0.3}
          >
            While everyone else is trading time for money, our team members are
            building real wealth from home. This isn&apos;t a job — it&apos;s a
            lifestyle upgrade. The only question is whether you&apos;re ready.
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
            Stop dreaming. Start earning.
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
              className="cta-pulse inline-flex w-full items-center justify-center gap-2 rounded-lg bg-tan px-10 py-5 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-tan-light sm:w-auto"
            >
              Increase Your Income Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
