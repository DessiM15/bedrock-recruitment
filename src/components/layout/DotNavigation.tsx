"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DotNavigation() {
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:items-end md:gap-4 lg:right-8"
      aria-label="Page sections"
    >
      {navigationItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3"
            aria-label={`Navigate to ${item.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={cn(
                "text-xs font-medium tracking-wider transition-all duration-300",
                isActive
                  ? "translate-x-0 opacity-100 text-tan"
                  : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70 text-dark-green/50"
              )}
            >
              {item.number}
            </span>
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                isActive
                  ? "h-3 w-3 bg-tan"
                  : "h-2 w-2 bg-dark-green/20 group-hover:bg-tan/50"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
