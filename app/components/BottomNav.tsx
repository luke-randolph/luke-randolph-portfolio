"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "intro" },
  { id: "about", label: "about" },
  { id: "portfolio", label: "portfolio" },
  { id: "principles", label: "principles" },
];

export function BottomNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

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
      aria-hidden={!visible}
      className={`fixed bottom-3 left-3 right-3 z-40 rounded-sm border border-border/40 bg-bg/70 px-2 py-1.5 backdrop-blur-md transition-all duration-300 xl:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ul className="flex items-stretch justify-between gap-1">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex-1">
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                tabIndex={visible ? 0 : -1}
                className={`flex items-center justify-center px-1 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  isActive ? "text-cyan" : "text-fg-muted hover:text-cyan"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
