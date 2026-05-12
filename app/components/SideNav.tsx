"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

const sections = [
  { id: "intro", label: "intro" },
  { id: "about", label: "about" },
  { id: "portfolio", label: "portfolio" },
  { id: "principles", label: "principles" },
  { id: "contact", label: "contact" },
];

const MIN_WIDTH = 8;
const MAX_WIDTH = 40;

export function SideNav() {
  const [active, setActive] = useState(sections[0].id);
  const [progresses, setProgresses] = useState<Record<string, number>>({});

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const scrollMax = Math.max(
        1,
        document.documentElement.scrollHeight - viewportH,
      );
      const offset = viewportH * 0.5;

      const starts = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? Math.max(0, el.offsetTop - offset) : 0;
      });

      const next: Record<string, number> = {};
      let activeId = sections[0].id;

      for (let i = 0; i < sections.length; i++) {
        const start = starts[i];
        const end = i + 1 < sections.length ? starts[i + 1] : scrollMax;
        const range = Math.max(1, end - start);
        next[sections[i].id] = Math.min(
          1,
          Math.max(0, (scrollY - start) / range),
        );
        if (scrollY >= start) activeId = sections[i].id;
      }

      setActive(activeId);
      setProgresses(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <ul className="flex flex-col gap-5">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          const progress = progresses[id] ?? 0;
          const width = MIN_WIDTH + (MAX_WIDTH - MIN_WIDTH) * progress;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={`Jump to ${label} section`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3 font-mono text-xs uppercase tracking-wider"
              >
                <span
                  aria-hidden="true"
                  className="order-1 flex w-10 justify-start"
                >
                  <span
                    className={cn(
                      "block h-px transition-[width,background-color,box-shadow] duration-150 ease-out",
                      isActive
                        ? "bg-cyan shadow-[0_0_8px_rgba(255,43,214,0.7)]"
                        : "bg-fg-muted/50 group-hover:bg-cyan/70",
                    )}
                    style={{ width: `${width}px` }}
                  />
                </span>
                <span
                  className={cn(
                    "order-2 transition-colors duration-200",
                    isActive
                      ? "text-cyan"
                      : "text-fg-muted group-hover:text-cyan",
                  )}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
