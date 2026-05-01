"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { teamMembers } from "@/data/team";
import Image from "next/image";

export function TeamSection() {
  return (
    <SectionWrapper id="team" dark className="flex items-center">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
          >
            Our Leadership
          </AnimatedText>
          <AnimatedText
            as="h2"
            className="font-serif text-3xl font-light text-cream md:text-4xl lg:text-5xl"
            delay={0.1}
          >
            Meet the Team
          </AnimatedText>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-xl lg:h-72 lg:w-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent" />
              </div>
              <h3 className="mb-1 font-serif text-xl font-semibold text-cream">
                {member.name}
              </h3>
              {member.role && (
                <p className="mb-4 text-sm font-medium text-tan">
                  {member.role}
                </p>
              )}
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-cream/70">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
