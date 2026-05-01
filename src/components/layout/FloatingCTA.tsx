"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: floating button */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href="tel:9362433181"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-lg bg-tan px-6 py-4 font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-tan-light md:flex"
            aria-label="Call Get Paid Nation at (936) 243-3181"
          >
            <Phone className="h-5 w-5" />
            <span className="text-sm font-bold">(936) 243-3181</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile: sticky bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 z-50 md:hidden"
          >
            <a
              href="tel:9362433181"
              className="flex items-center justify-center gap-2 bg-tan py-5 font-bold uppercase tracking-wide text-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)]"
              aria-label="Call Get Paid Nation"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call Now — (936) 243-3181</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
