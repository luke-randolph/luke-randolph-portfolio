import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Principles } from "./components/Principles";
import { SideNav } from "./components/SideNav";
import { BottomNav } from "./components/BottomNav";

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

        <footer className="border-t border-border/40 py-10 px-6 sm:px-10 max-w-5xl mx-auto flex items-center justify-between">
          <p className="font-mono text-sm text-fg-muted">
            © {new Date().getFullYear()} Luke Randolph
          </p>
          <Image
            src="/guitar-icon-gf-muted.png"
            alt=""
            width={32}
            height={32}
            aria-hidden
          />
        </footer>
      </main>
    </>
  );
}
