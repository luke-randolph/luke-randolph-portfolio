import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScanlineGrid } from "./components/ScanlineGrid";
import { Cityscape } from "./components/Cityscape";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luke Randolph — Full-stack developer",
  description:
    "Full-stack web developer building accessible, resilient interfaces.",
  metadataBase: new URL("https://luke-randolph.com"),
  openGraph: {
    title: "Luke Randolph — Full-stack developer",
    description:
      "Full-stack web developer building accessible, resilient interfaces.",
    url: "https://luke-randolph.com",
    siteName: "Luke Randolph",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-bg text-fg font-sans">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_85%_-10%,rgba(0,240,255,0.18),transparent_45%),radial-gradient(circle_at_15%_110%,rgba(255,43,214,0.15),transparent_45%)]"
        />
        <ScanlineGrid />
        <Cityscape />
        {children}
      </body>
    </html>
  );
}
