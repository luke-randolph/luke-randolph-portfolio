"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

const cats = [
  { src: "/apollo.jpg", name: "Apollo" },
  { src: "/nilla.jpg", name: "Nilla" },
  { src: "/siouxsie.jpg", name: "Siouxsie" },
];

export function CatsPopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <span
      ref={ref}
      tabIndex={0}
      onClick={() => setOpen((o) => !o)}
      className="group/cats cursor-pointer text-cyan relative inline-block lg:static"
    >
      my 3 cats ₍^..^₎⟆
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-8 left-0 xl:left-auto xl:right-0 z-20 transition-opacity duration-200",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 group-hover/cats:pointer-events-auto group-hover/cats:opacity-100 group-focus-visible/cats:pointer-events-auto group-focus-visible/cats:opacity-100",
        )}
      >
        <span className="flex flex-col lg:flex-row gap-2 rounded-sm border-cyan/30 bg-bg-elev p-2 shadow-[0_0_40px_4px_rgba(0,240,255,0.28)]">
          {cats.map((c) => (
            <span
              key={c.name}
              className="relative block aspect-square w-[28vw] overflow-hidden rounded-sm sm:w-36 lg:w-unset"
            >
              <Image
                src={c.src}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 144px, 28vw"
                className="object-cover"
              />
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
