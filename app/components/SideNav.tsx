"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "intro" },
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "principles", label: "principles" },
];

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      let current = sections[0].id;
      let bestDistance = Infinity;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const distance = Math.abs(el.getBoundingClientRect().top);
        if (distance < bestDistance) {
          bestDistance = distance;
          current = id;
        }
      }
      setActive(current);
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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <ul className="flex flex-col gap-5">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
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
                    className={`block h-px transition-all duration-200 ${
                      isActive
                        ? "w-10 bg-cyan shadow-[0_0_8px_rgba(0,240,255,0.7)]"
                        : "w-5 bg-fg-muted/50 group-hover:w-8 group-hover:bg-cyan/70"
                    }`}
                  />
                </span>
                <span
                  className={`order-2 transition-opacity duration-200 ${
                    isActive
                      ? "text-cyan opacity-100"
                      : "text-fg-muted opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
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
