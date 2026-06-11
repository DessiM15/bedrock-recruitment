"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackFbEvent } from "@/lib/fbq";

const navLinks = [
  { href: "/#why-bedrock", label: "The Opportunity" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Schedule Your Call", cta: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative z-10">
          <span
            className={cn(
              "text-xl font-black uppercase tracking-wider transition-colors duration-300 md:text-2xl",
              scrolled ? "text-dark-green" : "text-white"
            )}
          >
            Get Paid{" "}
            <span
              className={cn(
                "transition-colors duration-300",
                scrolled ? "text-tan" : "text-gold"
              )}
            >
              Nation
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.cta ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => trackFbEvent("Lead")}
                className="rounded-lg bg-tan px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-tan-light"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200",
                  scrolled
                    ? "text-dark-green hover:text-tan"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "relative z-10 md:hidden",
            scrolled || mobileMenuOpen ? "text-dark-green" : "text-white"
          )}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0 bg-white pt-20 pb-8 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) =>
                link.cta ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => { setMobileMenuOpen(false); trackFbEvent("Lead"); }}
                    className="rounded-lg bg-tan px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-tan-light"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-dark-green transition-colors hover:text-tan"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
