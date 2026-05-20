"use client";

import { sections, sectionIds } from "../lib/sections";
import { useActiveSection } from "../lib/useActiveSection";
import { cn } from "../lib/cn";

const MIN_WIDTH = 8;
const MAX_WIDTH = 40;

export function SideNav() {
  const { active, progresses } = useActiveSection(sectionIds, {
    withProgress: true,
  });

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 lg:block"
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
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center gap-3 font-mono text-xs tracking-wider uppercase"
              >
                <span aria-hidden="true" className="order-1 flex w-10 justify-start">
                  <span
                    className={cn(
                      "block h-px transition-[background-color,box-shadow] duration-150 ease-out",
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
                    isActive ? "text-cyan" : "text-fg-muted group-hover:text-cyan",
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
