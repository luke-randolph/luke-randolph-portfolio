import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  subtitle?: string;
  title?: string;
  description?: ReactNode;
  children: ReactNode;
};

export function Section({
  id,
  subtitle,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative py-32 xl:py-36 px-6 sm:px-10 max-w-5xl mx-auto scroll-mt-16"
    >
      {subtitle ? (
        <p className="font-mono text-sm text-cyan mb-3 tracking-wider">
          <span className="text-fg-muted">{"// "}</span>
          {subtitle}
        </p>
      ) : null}
      {title ? (
        <h2
          className={`font-mono text-3xl sm:text-4xl font-bold ${
            description ? "mb-4" : "mb-12"
          }`}
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
