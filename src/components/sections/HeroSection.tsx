"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div id="hero" className="hero-sticky h-screen w-full">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero/hero-bg.svg"
        >
          <source src="https://lnszbxtpcfdmn5vu.public.blob.vercel-storage.com/bech-hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-tan/70"
        />
      </div>

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
          className="max-w-5xl font-sans text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Your Dream Life
          <br />
          <span className="text-white/90">Starts Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg font-medium text-white/90 md:text-xl"
        >
          Imagine waking up tomorrow with a brand new business — your very own,
          up and running for you. No experience necessary.
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
