import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Principles } from "./components/Principles";
import { Contact } from "./components/Contact";
import { SideNav } from "./components/SideNav";
import { BottomNav } from "./components/BottomNav";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/icons";
import { profileLinks } from "./lib/links";

const socials = [
  { label: "Email Luke Randolph", Icon: MailIcon, ...profileLinks.email },
  { label: "Luke Randolph on LinkedIn", Icon: LinkedInIcon, ...profileLinks.linkedin },
  { label: "Luke Randolph on GitHub", Icon: GitHubIcon, ...profileLinks.github },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-cyan focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
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

      <footer className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-t border-border/40 px-6 pt-10 pb-24 sm:px-10 lg:pb-10">
        <div className="font-mono text-fg-muted">
          <p className="text-sm">© {new Date().getFullYear()} Luke Randolph</p>
        </div>
        <ul className="flex items-center gap-4">
          {socials.map(({ label, href, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block text-fg-muted transition-colors hover:text-cyan"
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
