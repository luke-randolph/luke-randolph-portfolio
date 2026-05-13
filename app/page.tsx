import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Principles } from "./components/Principles";
import { Contact } from "./components/Contact";
import { SideNav } from "./components/SideNav";
import { BottomNav } from "./components/BottomNav";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/icons";

const socials = [
  {
    label: "Email Luke Randolph",
    href: "mailto:lukerandolph116@gmail.com",
    external: false,
    Icon: MailIcon,
  },
  {
    label: "Luke Randolph on LinkedIn",
    href: "https://www.linkedin.com/in/luke-randolph-1662241a0",
    external: true,
    Icon: LinkedInIcon,
  },
  {
    label: "Luke Randolph on GitHub",
    href: "https://github.com/luke-randolph",
    external: true,
    Icon: GitHubIcon,
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
      <main id="main" tabIndex={-1} className="relative focus:outline-none">
        <Intro />
        <About />
        <Portfolio />
        <Principles />
        <Contact />
      </main>

      <footer className="border-t border-border/40 pt-10 pb-24 lg:pb-10 px-6 sm:px-10 max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="font-mono text-fg-muted">
          <p className="text-sm">
            © {new Date().getFullYear()} Luke Randolph
          </p>
        </div>
        <ul className="flex items-center gap-4">
          {socials.map(({ label, href, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block text-fg-muted hover:text-cyan transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
