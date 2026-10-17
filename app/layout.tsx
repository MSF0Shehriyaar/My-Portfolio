import type { Metadata } from "next";
import "./globals.css";
import { PageMotion } from "./components/page-motion";
import { IntroSplash } from "./components/intro-splash";

export const metadata: Metadata = {
  title: {
    default: "Mohammed Shehriyaar F — Full Stack Engineer & Autonomous AI Systems Architect",
    template: "%s | Mohammed Shehriyaar F",
  },
  description:
    "Mohammed Shehriyaar F builds resilient full-stack web applications, autonomous multi-LLM platforms, and low-latency backends. Explore flagship projects, verified benchmarks, and freelance engineering services.",
  metadataBase: new URL("https://shehriyaar-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    title: "Mohammed Shehriyaar F — Full Stack Engineer & AI Systems Architect",
    description: "Bridging engineering rigor with fluid design. Scalable web systems, multi-LLM pipelines, and 20%+ latency optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Shehriyaar F — Full Stack Engineer & AI Systems Architect",
    description: "Scalable web applications, autonomous multi-LLM systems, and 20%+ latency optimization.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "window.process=window.process||{env:{__NEXT_APP_NAV_FAIL_HANDLING:false}};",
          }}
        />
      </head>
      <body className="antialiased">
        <IntroSplash />
        <PageMotion />
        {children}
      </body>
    </html>
  );
}
