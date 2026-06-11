"use client";

import { motion } from "motion/react";
import Script from "next/script";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";

const BOOKING_WIDGET_URL =
  "https://api.botmakers.ai/widget/booking/oD6LWORvZKHZONp65s52";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="flex items-center">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* CTA Side */}
        <div className="flex flex-col justify-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
          >
            Get Started
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mb-6 font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            delay={0.1}
          >
            Your Future Self
            <br />
            Will Thank You
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-8 text-lg leading-relaxed text-dark-green/80"
            delay={0.2}
          >
            Every day you wait is money left on the table. Pick a time that works
            for you and book your call — your dream lifestyle is one conversation
            away.
          </AnimatedText>
        </div>

        {/* Booking Widget Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-xl bg-white p-2 shadow-sm sm:p-4"
        >
          <iframe
            src={BOOKING_WIDGET_URL}
            title="Schedule Your Call"
            className="h-[700px] w-full border-none"
            scrolling="no"
            id="oD6LWORvZKHZONp65s52_1781196819543"
          />
        </motion.div>
      </div>

      <Script
        src="https://api.botmakers.ai/js/form_embed.js"
        strategy="afterInteractive"
      />
    </SectionWrapper>
  );
}
