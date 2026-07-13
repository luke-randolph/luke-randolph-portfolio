"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "../lib/cn";

const cats = [
  { src: "/apollo.jpg", name: "Apollo" },
  { src: "/nilla.jpg", name: "Nilla" },
  { src: "/siouxsie.jpg", name: "Siouxsie" },
];

export function CatsPopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <span ref={ref} className="group/cats relative inline-block lg:static">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="cursor-pointer text-cyan"
      >
        our cats ₍^..^₎⟆
      </button>
      <span
        id={panelId}
        role="group"
        aria-label="Photos of my three cats"
        aria-hidden={!open}
        className={cn(
          "absolute bottom-8 left-0 z-20 transition-opacity duration-200 xl:right-0 xl:left-auto",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 group-hover/cats:pointer-events-auto group-hover/cats:opacity-100",
        )}
      >
        <span className="flex flex-col gap-2 rounded-sm border-cyan/30 bg-bg-elev p-2 shadow-[0_0_40px_4px_rgba(0,240,255,0.28)] lg:flex-row">
          {cats.map((c) => (
            <span
              key={c.name}
              className="relative block aspect-square w-[28vw] overflow-hidden rounded-sm sm:w-36"
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
