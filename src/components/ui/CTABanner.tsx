"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  buttonText?: string;
  href?: string;
  backgroundImage?: string;
}

export function CTABanner({
  headline,
  subtext,
  buttonText = "Book Your Free Call",
  href = "#contact",
  backgroundImage,
}: CTABannerProps) {
  return (
    <section className={`section-overlay relative overflow-hidden ${backgroundImage ? "bg-dark-green" : "bg-tan"}`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
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
            className={`inline-flex items-center gap-2 rounded-lg px-10 py-5 text-lg font-bold uppercase tracking-wide transition-colors ${
              backgroundImage
                ? "bg-tan text-white hover:bg-tan-light"
                : "bg-white text-tan hover:bg-cream-dark"
            }`}
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
