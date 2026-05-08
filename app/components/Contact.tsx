import { Section } from "./Section";

const links = [
  {
    label: "email",
    value: "lukerandolph116@gmail.com",
    href: "mailto:lukerandolph116@gmail.com",
    external: false,
  },
  {
    label: "linkedin",
    value: "Luke Randolph",
    href: "https://www.linkedin.com/in/luke-randolph-1662241a0",
    external: true,
  },
  {
    label: "github",
    value: "luke-randolph",
    href: "https://github.com/luke-randolph",
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" subtitle="contact" title="Get in touch.">
      <ul className="space-y-3">
        {links.map(({ label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group grid grid-cols-[8rem_1fr_auto] items-center gap-4 rounded-sm border border-border/40 bg-bg-elev px-4 py-3 neon-border hover:neon-border-hover"
            >
              <span className="font-mono text-sm text-fg-muted">
                <span className="text-cyan">{">"}</span> {label}
              </span>
              <span className="font-mono text-sm text-fg group-hover:text-cyan transition-colors truncate">
                {value}
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-fg-muted group-hover:text-magenta group-hover:translate-x-1 transition-all duration-200"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
