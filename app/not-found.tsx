import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 max-w-5xl mx-auto">
      <p className="font-mono text-sm text-cyan">{">"} 404</p>
      <h1 className="mt-4 font-mono text-5xl sm:text-7xl font-bold leading-none tracking-tight">
        Not found
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fg-muted leading-relaxed">
        The URL you followed doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-mono text-sm text-cyan underline-offset-4 hover:underline w-fit"
      >
        {">"} return home
      </Link>
    </main>
  );
}
