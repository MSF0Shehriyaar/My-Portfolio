import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { WorkSection } from "../components/portfolio-sections";

export const metadata: Metadata = {
  title: "Selected Work & Systems Architecture",
  description:
    "Explore flagship platforms engineered by Mohammed Shehriyaar F: ReplyAI (autonomous multi-LLM social platform), HEXACORE (modular multi-platform ecosystem), and VeriTrust Unified (enterprise verification portal).",
};

export default function Work() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <WorkSection standalone />
      </main>
      <SiteFooter />
    </>
  );
}
