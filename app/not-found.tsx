import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 sm:px-10">
      <p className="font-mono text-sm text-cyan">{">"} 404</p>
      <h1 className="mt-4 font-mono text-5xl leading-none font-bold tracking-tight sm:text-7xl">
        Not found
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
        The URL you followed doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block w-fit font-mono text-sm text-cyan underline-offset-4 hover:underline"
      >
        {">"} return home
      </Link>
    </main>
  );
}
