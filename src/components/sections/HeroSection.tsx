"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const fomoLines = [
  "You missed Bitcoin.",
  "You missed Amazon.",
  "You missed Tesla.",
];

const closerLine = "Don't miss THIS.";
const tagline = "The next big opportunity is here. Are you in?";

export function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCloser, setShowCloser] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  // Generate stable particle positions once
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${5 + ((i * 47) % 90)}%`,
        delay: `${(i * 0.7) % 5}s`,
        duration: `${3 + ((i * 1.3) % 4)}s`,
      })),
    []
  );

  useEffect(() => {
    const lineDelay = 1200;
    const timers: ReturnType<typeof setTimeout>[] = [];

    fomoLines.forEach((_, index) => {
      timers.push(
        setTimeout(() => setCurrentLine(index + 1), 1500 + index * lineDelay)
      );
    });

    const closerDelay = 1500 + fomoLines.length * lineDelay + 600;
    timers.push(setTimeout(() => setShowCloser(true), closerDelay));
    timers.push(setTimeout(() => setShowTagline(true), closerDelay + 1000));
    timers.push(setTimeout(() => setShowCTA(true), closerDelay + 1800));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div id="hero" className="hero-sticky h-screen w-full">
      {/* Animated gradient background */}
      <div className="hero-gradient absolute inset-0" />

      {/* Get Paid Nation image as atmospheric background with blend mode */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/get-paid-nation.png"
          alt=""
          width={1920}
          height={600}
          className="h-full w-full object-cover mix-blend-screen opacity-60"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Gold Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="gold-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* FOMO Typewriter Lines */}
        <div className="mb-6 flex min-h-[180px] flex-col items-center justify-center space-y-2 md:min-h-[220px]">
          {fomoLines.map((line, index) => (
            <AnimatePresence key={line}>
              {currentLine > index && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-medium text-white md:text-2xl lg:text-3xl"
                >
                  {line}
                </motion.p>
              )}
            </AnimatePresence>
          ))}

          {/* Closer Line - Big, Bold, Red */}
          <AnimatePresence>
            {showCloser && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-4 text-3xl font-black uppercase text-tan md:text-5xl lg:text-6xl"
              >
                {closerLine}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <AnimatePresence>
          {showTagline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-lg font-medium text-white/80 md:text-xl"
            >
              {tagline}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Scroll CTA */}
        <AnimatePresence>
          {showCTA && (
            <motion.a
              href="#why-bedrock"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group mt-10 flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
              aria-label="Scroll to learn more"
            >
              <span className="text-xs uppercase tracking-[0.2em]">
                See what you&apos;re missing
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
