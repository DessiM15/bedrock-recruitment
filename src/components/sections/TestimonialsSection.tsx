"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";

const testimonials = [
  {
    quote:
      "An Amazing Company! They are very professional and love that they are all about teaching people how to win the money game. This company has helped me with my future and taught me a system that I can pass down for generations. I would recommend them to everyone I know — they have changed my life.",
    name: "Amanda W.",
  },
  {
    quote:
      "Seriously life changing!! I had spent my whole entire life living paycheck to paycheck. Constantly stressing and feeling overwhelmed. I worked 2 to 3 jobs and was never able to get ahead! Thanks to this team I have become educated in my finances. My life is forever changed for myself and my son.",
    name: "Kara G.",
  },
  {
    quote: "The best of the best advice in the nation.",
    name: "David B.",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="flex items-center">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
          >
            Real Stories
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            delay={0.1}
          >
            What Others Are Saying
          </AnimatedText>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-xl bg-white p-8 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-tan/30" />
              <p className="mb-6 text-base leading-relaxed text-dark-green/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-tan/20" />
                <span className="text-sm font-semibold text-dark-green">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
