"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const fomoSequence = [
  { time: 0.0, text: "YOU MISSED BITCOIN." },
  { time: 2.0, text: "YOU MISSED AMAZON." },
  { time: 5.8, text: "YOU MISSED TESLA." },
  { time: 7.8, text: "YOU MISSED UBER." },
  { time: 10.5, text: "YOU MISSED CRYPTO." },
  { time: 12.9, text: "DON'T MISS THIS." },
];

const CLOSER_INDEX = fomoSequence.length - 1;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);

  const syncText = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.paused || video.ended) return;

    const t = video.currentTime;
    let newIndex = 0;
    for (let i = fomoSequence.length - 1; i >= 0; i--) {
      if (t >= fomoSequence[i].time) {
        newIndex = i;
        break;
      }
    }
    setActiveIndex(newIndex);
    rafRef.current = requestAnimationFrame(syncText);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handleCanPlay() {
      setVideoReady(true);
      video?.play().catch(() => {
        setVideoReady(true);
      });
    }

    function handlePlay() {
      rafRef.current = requestAnimationFrame(syncText);
    }

    function handleEnded() {
      cancelAnimationFrame(rafRef.current);
      setActiveIndex(CLOSER_INDEX);
      setTimeout(() => setShowCTA(true), 1000);
    }

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 3) {
      setVideoReady(true);
      video.play().catch(() => {});
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, [syncText]);

  const currentItem = fomoSequence[activeIndex];
  const isCloser = activeIndex === CLOSER_INDEX;

  return (
    <div id="hero" className="hero-sticky h-screen w-full bg-black">
      {/* Poster image — shows immediately while video loads */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/images/hero/new-hero-poster.jpg')" }}
      />

      {/* Video background with tint */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/images/hero/new-hero-poster.jpg"
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src="https://lnszbxtpcfdmn5vu.public.blob.vercel-storage.com/new-hero.mp4"
        />
        {/* Tint — darker on the last clip so red text pops over GPN logo */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isCloser ? "bg-black/70" : "bg-black/50"
          }`}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* FOMO text — one line at a time, synced to video cuts */}
        <div className="flex min-h-[100px] items-center justify-center md:min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={
                isCloser
                  ? "text-4xl font-black uppercase text-tan drop-shadow-[0_0_40px_rgba(255,45,45,0.6)] md:text-6xl lg:text-8xl"
                  : "text-2xl font-bold uppercase tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-3xl lg:text-5xl"
              }
            >
              {currentItem.text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Scroll CTA — appears after video ends */}
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
