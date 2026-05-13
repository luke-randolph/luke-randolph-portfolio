import { GitHubIcon } from "./icons";

type NeonCardProps = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  repoHref: string;
};

export function NeonCard({ href, title, description, tags, repoHref }: NeonCardProps) {
  return (
    <article className="group relative isolate flex h-full flex-col rounded-sm bg-bg-elev p-6 neon-border hover:neon-border-hover [@media(hover:none)]:neon-border-hover">
      <h3 className="font-mono text-2xl font-bold tracking-wide text-fg uppercase transition-colors neon-sign-title group-hover:text-cyan group-hover:neon-sign-title-hover [@media(hover:none)]:text-cyan [@media(hover:none)]:neon-sign-title-hover">
        {/* ::before extends the title link's hit area to cover the whole card — nested interactive elements need z-10 to sit above it. */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — open live site`}
          className="before:absolute before:inset-0 before:rounded-sm before:content-[''] focus-visible:outline-none"
        >
          {title}
        </a>
      </h3>
      <p className="mt-3 leading-relaxed text-fg-muted">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-sm border border-cyan/20 px-2 py-0.5 font-mono text-xs text-cyan/80"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <a
          href={repoHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — view source on GitHub`}
          className="relative z-10 flex shrink-0 items-center gap-2 text-fg-muted transition-colors duration-200 hover:animate-neon-flicker hover:text-cyan focus-visible:animate-neon-flicker focus-visible:text-cyan [@media(hover:none)]:rounded-sm [@media(hover:none)]:border [@media(hover:none)]:border-cyan/40 [@media(hover:none)]:px-3 [@media(hover:none)]:py-1.5 [@media(hover:none)]:text-cyan [@media(hover:none)]:shadow-[0_0_10px_rgba(0,240,255,0.25),inset_0_0_6px_rgba(0,240,255,0.15)]"
        >
          <GitHubIcon className="h-6 w-6" />
          <span className="font-mono text-xs tracking-wider uppercase">source</span>
        </a>
        <svg
          aria-hidden="true"
          viewBox="0 0 32 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="miter"
          className="pointer-events-none h-8 w-12 shrink-0 text-fg-muted/50 transition-all duration-200 group-hover:text-magenta group-hover:[filter:drop-shadow(0_0_4px_rgba(255,43,214,0.75))_drop-shadow(0_0_12px_rgba(255,43,214,0.35))] [@media(hover:none)]:text-magenta [@media(hover:none)]:[filter:drop-shadow(0_0_4px_rgba(255,43,214,0.75))_drop-shadow(0_0_12px_rgba(255,43,214,0.35))]"
        >
          <path d="M0 0 L6 0 L6 11 L18 11 L18 6 L30 14 L18 22 L18 17 L0 17 Z" />
        </svg>
      </div>
    </article>
  );
}
