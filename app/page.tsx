import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Principles } from "./components/Principles";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Work />
      <Principles />

      <footer className="border-t border-border/40 py-10 px-6 sm:px-10 max-w-5xl mx-auto">
        <p className="font-mono text-sm text-fg-muted">
          © {new Date().getFullYear()} Luke Randolph
        </p>
      </footer>
    </main>
  );
}
