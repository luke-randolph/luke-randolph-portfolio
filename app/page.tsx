import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Principles } from "./components/Principles";
import { Contact } from "./components/Contact";
import { SideNav } from "./components/SideNav";
import { BottomNav } from "./components/BottomNav";

const socials = [
  {
    label: "Email Luke Randolph",
    href: "mailto:lukerandolph116@gmail.com",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Luke Randolph on LinkedIn",
    href: "https://www.linkedin.com/in/luke-randolph-1662241a0",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "Luke Randolph on GitHub",
    href: "https://github.com/luke-randolph",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan focus:text-bg focus:font-mono focus:text-sm focus:rounded-sm"
      >
        Skip to main content
      </a>
      <SideNav />
      <BottomNav />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Portfolio />
        <Principles />
        <Contact />

        <footer className="border-t border-border/40 pt-10 pb-24 xl:pb-10 px-6 sm:px-10 max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="font-mono text-fg-muted">
            <p className="text-sm">
              © {new Date().getFullYear()} Luke Randolph
            </p>
            <p className="text-xs mt-1">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan transition-colors"
              >
                Next.js
              </a>
            </p>
          </div>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, external, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block text-fg-muted hover:text-cyan transition-colors"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </>
  );
}
