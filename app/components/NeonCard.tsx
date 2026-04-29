type NeonCardProps = {
  href: string;
  title: string;
  description: string;
  tags: string[];
};

export function NeonCard({ href, title, description, tags }: NeonCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-sm bg-bg-elev p-6 neon-border hover:neon-border-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg font-semibold text-fg group-hover:text-cyan transition-colors">
          {title}
        </h3>
        <span
          aria-hidden="true"
          className="font-mono text-fg-muted group-hover:text-magenta transition-colors translate-x-0 group-hover:translate-x-1 duration-200"
        >
          →
        </span>
      </div>
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
    </a>
  );
}
