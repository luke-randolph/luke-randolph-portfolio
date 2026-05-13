import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type SectionProps = {
  id: string;
  subtitle?: string;
  shortSubtitle?: string;
  title?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  subtitle,
  shortSubtitle,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn(
        "relative py-32 lg:py-42 px-6 sm:px-10 lg:pl-8 lg:pr-44 xl:pr-10 max-w-5xl mx-auto scroll-mt-16",
        className,
      )}
    >
      {subtitle ? (
        <p className="font-mono text-sm text-cyan mb-3 tracking-wider">
          <span className="text-fg-muted">{"// "}</span>
          {shortSubtitle ? (
            <>
              <span className="min-[400px]:hidden">{shortSubtitle}</span>
              <span className="hidden min-[400px]:inline">{subtitle}</span>
            </>
          ) : (
            subtitle
          )}
        </p>
      ) : null}
      {title ? (
        <h2
          id={`${id}-heading`}
          className={cn(
            "font-mono text-3xl sm:text-4xl font-bold",
            description ? "mb-4" : "mb-12",
          )}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="text-sm text-fg-muted max-w-2xl mb-12 leading-relaxed">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );
}
