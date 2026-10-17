import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { AboutSection } from "../components/portfolio-sections";

export const metadata: Metadata = {
  title: "About Me & Engineering Background",
  description:
    "Meet Mohammed Shehriyaar F, Full Stack Engineer & Autonomous AI Systems Architect with practical experience building scalable web applications using Java, Spring Boot, React, and Next.js.",
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <AboutSection standalone />
      </main>
      <SiteFooter />
    </>
  );
}
