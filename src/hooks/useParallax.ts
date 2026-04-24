"use client";

import { useState, useEffect } from "react";

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    function handleScroll() {
      setOffset(window.scrollY * speed);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
}
