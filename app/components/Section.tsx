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
        "relative mx-auto max-w-5xl scroll-mt-16 px-6 py-20 sm:px-10 lg:py-32 lg:pr-44 lg:pl-8 xl:pr-10",
        className,
      )}
    >
      {subtitle ? (
        <p className="mb-3 font-mono text-sm tracking-wider text-cyan">
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
          className={cn("font-mono text-3xl font-bold sm:text-4xl", description ? "mb-4" : "mb-12")}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-fg-muted">{description}</p>
      ) : null}
      {children}
    </section>
  );
}
