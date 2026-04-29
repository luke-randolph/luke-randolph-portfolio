"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type GlitchTextProps = {
  children: string;
  className?: string;
};

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animate = mounted && !reduce;
  const layerBase = "absolute inset-0 select-none pointer-events-none";

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={animate ? "invisible" : undefined}>{children}</span>

      {animate && (
        <>
          <motion.span
            aria-hidden="true"
            className={layerBase}
            style={{ color: "var(--color-fg)" }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [-2, 1, 0, 2, 0],
              y: [1, -1, 0, 0, 0],
              opacity: [0, 1, 1, 1, 1],
            }}
            transition={{ duration: 1.1, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeOut" }}
          >
            {children}
          </motion.span>

          <motion.span
            aria-hidden="true"
            className={`${layerBase} mix-blend-screen`}
            style={{ color: "var(--color-cyan)" }}
            initial={{ x: -3, opacity: 0 }}
            animate={{ x: [-3, -2, 2, -1, 0], opacity: [0, 0.9, 0.9, 0.7, 0] }}
            transition={{ duration: 1.1, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeOut" }}
          >
            {children}
          </motion.span>

          <motion.span
            aria-hidden="true"
            className={`${layerBase} mix-blend-screen`}
            style={{ color: "var(--color-magenta)" }}
            initial={{ x: 3, opacity: 0 }}
            animate={{ x: [3, 2, -2, 1, 0], opacity: [0, 0.9, 0.9, 0.7, 0] }}
            transition={{ duration: 1.1, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeOut" }}
          >
            {children}
          </motion.span>
        </>
      )}
    </span>
  );
}
