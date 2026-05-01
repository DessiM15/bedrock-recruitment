"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DotNavigation() {
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const activeIndex = navigationItems.findIndex((item) => item.id === activeSection);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-0 lg:right-8"
      aria-label="Page sections"
    >
      <div className="flex flex-col items-center gap-4 rounded-full bg-black/20 px-2 py-4 backdrop-blur-sm">
        {navigationItems.map((item, index) => {
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
                  "text-xs font-medium tracking-wider transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
                  isActive
                    ? "translate-x-0 opacity-100 text-white"
                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70 text-white/60"
                )}
              >
                {item.number}
              </span>
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  isActive
                    ? "h-3 w-3 bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                    : "h-2 w-2 bg-white/40 group-hover:bg-white/70"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Current section label */}
      <div className="mt-3 rounded-full bg-black/20 px-3 py-1 backdrop-blur-sm">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {String(activeIndex + 1).padStart(2, "0")} / {String(navigationItems.length).padStart(2, "0")}
        </span>
      </div>
    </nav>
  );
}
