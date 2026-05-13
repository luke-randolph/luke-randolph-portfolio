"use client";

import { useEffect, useState } from "react";
import { sections, sectionIds } from "../lib/sections";
import { useActiveSection } from "../lib/useActiveSection";
import { cn } from "../lib/cn";

export function BottomNav() {
  const { active } = useActiveSection(sectionIds);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      frame = 0;
      setVisible(window.scrollY > 80);
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
      className={cn(
        "fixed right-3 bottom-3 left-3 z-40 rounded-sm border border-border/40 bg-bg/70 px-2 py-1.5 backdrop-blur-md transition-all duration-300 lg:hidden",
        "focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ul className="flex items-stretch justify-between gap-1">
        {sections.map(({ id, label, shortLabel }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex-1">
              <a
                href={`#${id}`}
                aria-label={`Jump to ${label} section`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "flex items-center justify-center px-1 py-2.5 font-mono text-[11px] tracking-wider uppercase transition-colors",
                  isActive ? "text-cyan" : "text-fg-muted hover:text-cyan",
                )}
              >
                {shortLabel ? (
                  <>
                    <span className="min-[400px]:hidden">{shortLabel}</span>
                    <span className="hidden min-[400px]:inline">{label}</span>
                  </>
                ) : (
                  label
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
