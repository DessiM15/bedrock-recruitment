"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "electric", label: "Electric Red", color: "#FF2D2D" },
  { id: "neon", label: "Neon Orange", color: "#FF5500" },
  { id: "hotpink", label: "Hot Pink", color: "#FF0055" },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>("electric");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("br-theme") as ThemeId | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setActive(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "electric");
    }
    setMounted(true);
  }, []);

  function switchTheme(id: ThemeId) {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("br-theme", id);
  }

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 shadow-lg backdrop-blur-md border border-black/5">
        <Palette className="h-4 w-4 text-dark-green/50" />
        <span className="hidden text-xs font-medium tracking-wide text-dark-green/60 uppercase sm:inline">
          Theme
        </span>
        <div className="flex items-center gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => switchTheme(theme.id)}
              title={theme.label}
              className={cn(
                "group relative h-7 w-7 rounded-full transition-all duration-200",
                active === theme.id
                  ? "ring-2 ring-offset-2 ring-dark-green/30 scale-110"
                  : "hover:scale-110"
              )}
              style={{ backgroundColor: theme.color }}
              aria-label={`Switch to ${theme.label} theme`}
            >
              {active === theme.id && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
