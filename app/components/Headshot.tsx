"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "../lib/cn";

export function Headshot() {
  const [glitching, setGlitching] = useState(false);

  const handleTap = () => {
    if (window.matchMedia("(hover: hover)").matches) return;
    if (glitching) return;
    setGlitching(true);
    window.setTimeout(() => setGlitching(false), 300);
  };

  return (
    <div
      onClick={handleTap}
      className="group relative aspect-square w-56 overflow-hidden rounded-sm bg-bg-elev neon-border md:w-full"
    >
      <Image
        src="/headshot.jpg"
        alt="Luke Randolph"
        fill
        sizes="(min-width: 768px) 200px, 192px"
        className={cn(
          "object-cover group-hover:animate-headshot-base",
          glitching && "animate-headshot-base",
        )}
        priority
      />
      <Image
        src="/headshot-glitch-1.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 768px) 200px, 192px"
        className={cn(
          "object-cover opacity-0 group-hover:animate-headshot-glitch-1",
          glitching && "animate-headshot-glitch-1",
        )}
      />
      <Image
        src="/headshot-glitch-2.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 768px) 200px, 192px"
        className={cn(
          "object-cover opacity-0 group-hover:animate-headshot-glitch-2",
          glitching && "animate-headshot-glitch-2",
        )}
      />
    </div>
  );
}
