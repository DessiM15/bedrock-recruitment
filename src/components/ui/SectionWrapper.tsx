"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  dark = false,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-overlay min-h-screen w-full",
        !noPadding && "px-6 py-20 md:px-12 lg:px-24",
        dark ? "bg-dark-green text-cream" : "bg-cream text-dark-green",
        className
      )}
    >
      {children}
    </section>
  );
}
