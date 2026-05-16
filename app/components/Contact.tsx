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
    <Section
      id="contact"
      subtitle="contact"
      title="Get in touch:"
      className="flex min-h-screen flex-col justify-center lg:min-h-[50vh] lg:pb-54"
    >
      <ul className="space-y-8 sm:space-y-10">
        {links.map(({ label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group grid grid-cols-[6rem_1fr_auto] items-center gap-4 rounded-sm border border-border/40 bg-bg-elev px-4 py-3 neon-border hover:neon-border-hover sm:grid-cols-[8rem_1fr_auto] [@media(any-pointer:coarse)]:neon-border-hover"
            >
              <span className="font-mono text-sm text-fg-muted">
                <span className="text-cyan">{">"}</span> {label}
              </span>
              <span className="truncate font-mono text-sm text-fg transition-colors group-hover:text-cyan [@media(any-pointer:coarse)]:text-cyan">
                {value}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 32 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
                className="h-5 w-10 shrink-0 text-fg-muted/50 transition-colors duration-200 group-hover:animate-neon-blink-once group-hover:text-cyan group-focus-visible:animate-neon-blink-once group-focus-visible:text-cyan [@media(any-pointer:coarse)]:text-cyan [@media(any-pointer:coarse)]:[filter:drop-shadow(0_0_3px_rgba(0,240,255,0.85))_drop-shadow(0_0_10px_rgba(0,240,255,0.45))]"
              >
                <path d="M1 5 L18 5 L18 0 L30 8 L18 16 L18 11 L1 11 Z" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
