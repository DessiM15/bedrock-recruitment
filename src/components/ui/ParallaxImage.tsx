"use client";

import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className,
  overlay = false,
  overlayOpacity = 0.5,
}: ParallaxImageProps) {
  const offset = useParallax(speed);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      {overlay && (
        <div
          className="absolute inset-0 bg-dark-green"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
