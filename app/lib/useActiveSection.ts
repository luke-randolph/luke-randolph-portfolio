import { useEffect, useState } from "react";

type Options = {
  withProgress?: boolean;
};

export function useActiveSection(
  ids: readonly string[],
  { withProgress = false }: Options = {},
) {
  const [active, setActive] = useState(ids[0] ?? "");
  const [progresses, setProgresses] = useState<Record<string, number>>({});

  const idsKey = ids.join("\x00");

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

      const starts = ids.map((id) => {
        const el = document.getElementById(id);
        return el ? Math.max(0, el.offsetTop - offset) : 0;
      });

      let activeId = ids[0] ?? "";
      for (let i = 0; i < ids.length; i++) {
        if (scrollY >= starts[i]) activeId = ids[i];
      }
      setActive(activeId);

      if (withProgress) {
        const next: Record<string, number> = {};
        for (let i = 0; i < ids.length; i++) {
          const start = starts[i];
          const end = i + 1 < ids.length ? starts[i + 1] : scrollMax;
          const range = Math.max(1, end - start);
          next[ids[i]] = Math.min(1, Math.max(0, (scrollY - start) / range));
        }
        setProgresses(next);
      }
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
  }, [idsKey, withProgress]);

  return { active, progresses };
}
