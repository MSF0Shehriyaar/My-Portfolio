import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { ContactSection } from "../components/portfolio-sections";

export const metadata: Metadata = {
  title: "Hire / Start a Project & Engineering Consultation",
  description:
    "Direct contact and project brief submission for Mohammed Shehriyaar F. Available for select full-stack contracts, autonomous AI agent pipelines, and backend performance engineering.",
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ContactSection standalone />
      </main>
      <SiteFooter />
    </>
  );
}
