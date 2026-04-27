"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  buttonText?: string;
  href?: string;
}

export function CTABanner({
  headline,
  subtext,
  buttonText = "Book Your Free Call",
  href = "#contact",
}: CTABannerProps) {
  return (
    <section className="section-overlay bg-tan">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-2xl font-black uppercase tracking-tight text-white md:text-4xl"
        >
          {headline}
        </motion.h3>
        {subtext && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-medium text-white/80 md:text-lg"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-10 py-5 text-lg font-bold uppercase tracking-wide text-tan transition-colors hover:bg-cream-dark"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
