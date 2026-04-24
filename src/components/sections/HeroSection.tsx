"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import Image from "next/image";

export function HeroSection() {
  return (
    <div id="hero" className="hero-sticky h-screen w-full">
      <ParallaxImage
        src="/images/hero/hero-bg.svg"
        alt="Professional financial planning lifestyle"
        speed={0.3}
        className="absolute inset-0"
        overlay
        overlayOpacity={0.55}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/logos/bedrock-logo-white.png"
            alt="Bedrock Financial Planning"
            width={220}
            height={58}
            className="mx-auto mb-8 h-14 w-auto md:h-16"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-serif text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Build Your Career
          <br />
          <span className="text-tan-light">on Solid Ground</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg font-light text-white/80 md:text-xl"
        >
          Join Bedrock Financial Planning and empower families to take control of
          their financial futures.
        </motion.p>

        <motion.a
          href="#why-bedrock"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="group mt-12 flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-[0.2em]">
            Begin scrolling
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
}
