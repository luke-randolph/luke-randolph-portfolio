type NeonCardProps = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  repoHref: string;
};

export function NeonCard({
  href,
  title,
  description,
  tags,
  repoHref,
}: NeonCardProps) {
  return (
    <article className="group relative isolate flex h-full flex-col rounded-sm bg-bg-elev p-6 neon-border hover:neon-border-hover [@media(hover:none)]:neon-border-hover">
      <h3 className="font-mono text-2xl font-bold uppercase tracking-wide text-fg neon-sign-title group-hover:text-cyan group-hover:neon-sign-title-hover [@media(hover:none)]:text-cyan [@media(hover:none)]:neon-sign-title-hover transition-colors">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — open live site`}
          className="before:absolute before:inset-0 before:content-[''] before:rounded-sm focus-visible:outline-none"
        >
          {title}
        </a>
      </h3>
      <p className="mt-3 text-fg-muted leading-relaxed">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-xs text-cyan/80 border border-cyan/20 px-2 py-0.5 rounded-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex items-end justify-between gap-4">
        <a
          href={repoHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — view source on GitHub`}
          className="relative z-10 shrink-0 text-fg-muted transition-colors duration-200 hover:text-cyan hover:animate-neon-flicker focus-visible:text-cyan focus-visible:animate-neon-flicker [@media(hover:none)]:text-cyan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
        <svg
          aria-hidden="true"
          viewBox="0 0 32 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="miter"
          className="h-8 w-12 shrink-0 pointer-events-none text-fg-muted/50 transition-all duration-200 group-hover:text-magenta group-hover:[filter:drop-shadow(0_0_4px_rgba(255,43,214,0.75))_drop-shadow(0_0_12px_rgba(255,43,214,0.35))] [@media(hover:none)]:text-magenta [@media(hover:none)]:[filter:drop-shadow(0_0_4px_rgba(255,43,214,0.75))_drop-shadow(0_0_12px_rgba(255,43,214,0.35))]"
        >
          <path d="M0 0 L6 0 L6 11 L18 11 L18 6 L30 14 L18 22 L18 17 L0 17 Z" />
        </svg>
      </div>
    </article>
  );
}
