import { SiteHeader, SiteFooter } from "./components/site-chrome";
import { Services } from "./components/services";
import {
  WorkSection,
  AboutSection,
  ProcessSection,
  ContactSection,
  StatsBanner,
  TestimonialsSection,
} from "./components/portfolio-sections";
import { profile } from "./data/portfolio";
import { Download, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Continuous scroll hero stage */}
        <div className="hero-scroll-stage">
          <section className="hero wrap" id="home" aria-labelledby="hero-title">
            <div className="hero-top">
              <span className="eyebrow flex items-center gap-2">
                <Sparkles size={14} className="text-[var(--red)]" /> Full Stack Engineer &amp; Systems Architect
              </span>
              <span className="availability">
                <i /> {profile.freelanceStatus}
              </span>
            </div>

            <div className="hero-layout">
              <h1 id="hero-title">
                <span className="hero-line">Good ideas.</span>
                <span className="hero-line">
                  <em>Great execution.</em>
                </span>
              </h1>

              <div className="hero-art-stage">
                <img
                  className="hero-art"
                  src="/images/design-sculpture.webp"
                  alt="Sculptural architectural study of precision systems and fluid engineering"
                  width={1200}
                  height={900}
                  fetchPriority="high"
                />
                <span className="hero-art-label font-mono">
                  FULL-STACK / MULTI-LLM / 20%+ LATENCY SLICED
                </span>
              </div>

              <div className="hero-intro">
                <p>
                  I’m <strong>{profile.name}</strong>. I design and build resilient web architectures, autonomous multi-LLM platforms,
                  and low-latency backend systems — delivering production software that scales effortlessly.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a className="button dark" href="/contact">
                    Hire / Start a Project
                  </a>
                  <a className="text-link" href="#work">
                    Explore Flagship Work
                  </a>
                  <a
                    className="text-link flex items-center gap-1 text-[var(--red)] font-semibold ml-2"
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={13} /> Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-bottom">
              <a className="scroll-invitation" href="#work">
                <span className="scroll-track" aria-hidden="true">
                  <i />
                </span>
                Scroll to explore engineering case studies
              </a>
              <span className="font-mono text-xs">
                Bengaluru &bull; Mysuru &bull; Available Worldwide Remote
              </span>
            </div>
          </section>
        </div>

        {/* Live metric counters */}
        <StatsBanner />

        {/* Selected Work */}
        <WorkSection />

        {/* Freelance Studio & Services */}
        <Services />

        {/* About, Experience, Education & Toolkit */}
        <AboutSection />

        {/* Engineering Collaboration Process */}
        <ProcessSection />

        {/* Verified Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* Direct Contact & Brief Form */}
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
