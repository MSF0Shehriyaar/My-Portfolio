import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { Services } from "../components/services";
import { TestimonialsSection } from "../components/portfolio-sections";

export const metadata: Metadata = {
  title: "Freelance Engineering Services & Studio",
  description:
    "Custom full-stack web applications, autonomous AI multi-LLM automation, real-time cloud architectures, and 20%+ API latency optimization by Mohammed Shehriyaar F.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Services standalone />
        <TestimonialsSection />
        <section className="page-end wrap">
          <div>
            <h3 className="text-xl font-medium text-[var(--ink)]">Have a specific roadmap or custom scope?</h3>
            <p className="text-sm text-[var(--quiet)] mt-1">Let’s schedule a 20-minute architecture discovery call.</p>
          </div>
          <a className="button dark" href="/contact">
            Schedule Discovery Consultation
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
