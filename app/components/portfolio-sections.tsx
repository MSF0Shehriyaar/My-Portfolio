import {
  Code2,
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Zap,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { ProjectPreview } from "./project-preview";
import { ContactForm } from "./contact-form";
import {
  profile,
  projects,
  process,
  stack,
  stats,
  experience,
  education,
  certifications,
  testimonials,
} from "../data/portfolio";

type SectionProps = { standalone?: boolean };

export function StatsBanner() {
  return (
    <div className="stats-banner wrap my-12 py-8 border-y border-[var(--line)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="stat-card p-4 rounded-lg bg-[var(--paper)] border border-[var(--line)]" suppressHydrationWarning>
            <span
              className="stat-value text-3xl md:text-4xl font-semibold tracking-tight text-[var(--red)] block font-mono"
              data-counter={s.value}
              suppressHydrationWarning
            >
              {s.value}
            </span>
            <strong className="text-sm font-medium text-[var(--ink)] mt-1 block">{s.label}</strong>
            <span className="text-xs text-[var(--quiet)] mt-0.5 block">{s.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className={`work-section wrap section ${standalone ? "page-section" : ""}`} id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="index">01</span> Flagship Engineering & Systems
          </p>
          <Heading id="work-title" className="section-title">
            The Work.<br />
            <em>Engineered to perform.</em>
          </Heading>
        </div>
        <p className="section-intro">
          High-throughput multi-LLM platforms, modular web ecosystems, and enterprise verification pipelines built for real-world impact.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.slug}>
            <a
              href={`/work/${project.slug}`}
              className={`project-image preview-${project.visual}`}
              aria-label={`View ${project.name} case study`}
            >
              <ProjectPreview variant={project.visual} image={project.image} />
              <span className="image-label">{project.metrics}</span>
              <span className="project-open">Explore Architecture &rarr;</span>
            </a>

            <div className="project-caption">
              <div>
                <span className="project-number">
                  0{index + 1} / {project.category}
                </span>
                <h3>
                  <a href={`/work/${project.slug}`}>{project.name}</a>
                </h3>
                <p>{project.summary}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs font-mono text-[var(--quiet)]">Role: {project.role}</span>
                  <span className="text-xs text-[var(--line)]">&bull;</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[var(--ink)] hover:text-[var(--red)] flex items-center gap-1"
                  >
                    <GithubIcon size={13} /> Code Repository
                  </a>
                </div>
              </div>
              <a className="round-link" href={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>
                <span>+</span>
              </a>
            </div>

            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="work-end">
        <div>
          <span className="font-medium text-[var(--ink)]">Looking for a custom web application or AI automation?</span>
          <p className="text-xs text-[var(--quiet)] mt-0.5">I build scalable solutions tailored to your business needs.</p>
        </div>
        <div className="flex items-center gap-4">
          <a className="button dark" href="/contact">
            Discuss Your Project
          </a>
          <a className="text-link" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            Executive Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export function Portrait() {
  return (
    <div className={`about-image ${profile.portrait ? "has-portrait" : ""}`}>
      <span className="eyebrow">Full Stack Engineer &amp; Systems Architect</span>
      {profile.portrait ? (
        <img
          className="profile-portrait"
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          width={800}
          height={1000}
          loading="lazy"
        />
      ) : (
        <>
          <span className="portrait-monogram" aria-hidden="true">
            MSF<span>Independent by design.</span>
          </span>
          <span className="photo-placeholder">{profile.name}</span>
        </>
      )}
      <div className="about-image-bottom">
        <span>{profile.name}</span>
        <span>Bengaluru &amp; Mysuru, India</span>
      </div>
    </div>
  );
}

export function AboutSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className={`about-section wrap section ${standalone ? "page-section" : ""}`} id="about" aria-labelledby="about-title">
      <div className="about-layout">
        <Portrait />
        <div className="about-copy">
          <p className="eyebrow">
            <span className="index">03</span> Mohammed Shehriyaar F
          </p>
          <Heading id="about-title" className="section-title">
            Engineering Rigor.<br />
            <em>Fluid Design.</em>
          </Heading>
          <p className="about-lead">{profile.introduction}</p>
          <p>
            From low-latency Spring Boot backends and database optimization (delivering a proven 20% latency reduction at Torus
            Solutions) to real-time Next.js/React applications and multi-LLM autonomous pipelines, I build software that runs reliably
            under load.
          </p>
          <p>
            Whether partnering on an ambitious freelance product or engineering scalable internal tooling, I ensure clear milestones,
            modular clean architecture, and thorough post-launch support.
          </p>

          <div className="about-values">
            <span>
              <Zap size={18} /> 20%+ Latency Optimization &amp; System Reliability
            </span>
            <span>
              <Sparkles size={18} /> Autonomous AI Pipelines (Groq, Gemini, Meta Graph API)
            </span>
            <span>
              <Code2 size={18} /> End-to-End Full-Stack Delivery (Spring Boot &amp; Next.js 15)
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a className="button dark" href="/contact">
              Let’s Build Together
            </a>
            <a
              className="button outline flex items-center gap-2"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="mt-20 pt-10 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="eyebrow flex items-center gap-2 mb-6">
            <Briefcase size={16} className="text-[var(--red)]" /> Professional Experience
          </p>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[var(--paper)] border border-[var(--line)]">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">{exp.role}</h3>
                    <span className="text-sm text-[var(--red)] font-medium">{exp.company}</span>
                  </div>
                  <span className="text-xs text-[var(--quiet)] font-mono whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-[var(--quiet)] list-disc list-inside">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow flex items-center gap-2 mb-6">
            <GraduationCap size={16} className="text-[var(--red)]" /> Education &amp; Certifications
          </p>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[var(--paper)] border border-[var(--line)]">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--ink)]">{edu.degree}</h3>
                    <span className="text-xs text-[var(--quiet)]">{edu.institution}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[var(--red)]">{edu.score}</span>
                </div>
              </div>
            ))}

            <div className="mt-4 pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--quiet)] block mb-3">
                Verified Certifications:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-[var(--secondary)] border border-[var(--line)] text-xs hover:border-[var(--red)] transition-colors flex items-center justify-between"
                  >
                    <div>
                      <strong className="block text-[var(--ink)] font-medium">{cert.title}</strong>
                      <span className="text-[10px] text-[var(--quiet)]">{cert.issuer}</span>
                    </div>
                    <ExternalLink size={12} className="text-[var(--red)] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Toolkit */}
      <div className="stack-section">
        <div>
          <p className="eyebrow">The Toolkit</p>
          <p>
            The right tools for<br />
            the right problem.
          </p>
        </div>
        <div className="stack-grid">
          {stack.map(item => (
            <div key={item.category}>
              <h3>{item.category}</h3>
              <p>{item.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className={`process-section section ${standalone ? "page-section" : ""}`} id="process" aria-labelledby="process-title">
      <div className="wrap process-layout">
        <div className="process-intro">
          <p className="eyebrow">
            <span className="index">04</span> How We Collaborate
          </p>
          <Heading id="process-title" className="section-title">
            Clear Steps.<br />
            <em>Shared Direction.</em>
          </Heading>
          <p>
            You don’t need a finished specification to begin. An idea, an operational bottleneck, or a rough sketch is all we need
            for our first consultation.
          </p>
          <div className="flex items-center gap-4">
            <a className="button outline" href="/contact">
              Start a Conversation
            </a>
            <a className="text-link" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp Direct
            </a>
          </div>
          <figure className="precision-visual">
            <img
              src="/images/precision.webp"
              alt="Engineering and precision systems craftsmanship"
              width={1200}
              height={800}
              loading="lazy"
            />
            <figcaption>Care in the architecture. Discipline in the code.</figcaption>
          </figure>
        </div>

        <ol className="process-list">
          {process.map(step => (
            <li key={step.title}>
              <span className="step-number">{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="trust-section wrap py-16 border-t border-[var(--line)]">
      <div className="mb-8">
        <p className="eyebrow">
          <span className="index">05</span> Verified Feedback &amp; Endorsements
        </p>
        <h2 className="section-title mt-2">
          In Their Words.<br />
          <em>Tested in production.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 rounded-lg bg-[var(--paper)] border border-[var(--line)] flex flex-col justify-between">
            <p className="text-sm text-[var(--ink)] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 pt-4 border-t border-[var(--line)]">
              <strong className="text-sm text-[var(--ink)] block">{t.author}</strong>
              <span className="text-xs text-[var(--red)] block">{t.organization}</span>
              <span className="text-[11px] text-[var(--quiet)]">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection({ standalone = false }: SectionProps) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className={`contact-section section ${standalone ? "page-section" : ""}`} id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">
            <span className="index">06</span> Let’s Make It Happen
          </p>
          <Heading id="contact-title" className="section-title">
            Your Next Idea.<br />
            <em>Our Next Build.</em>
          </Heading>
          <p>
            Building a brand-new SaaS product? Automating workflows with AI? Slashing backend latency? Let’s schedule a consultation
            and map out your technical blueprint.
          </p>

          <div className="contact-details">
            <span className="eyebrow">Direct Contact &amp; Availability</span>
            <a className="contact-address" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>

            <div className="contact-actions">
              <a href={`tel:${profile.telephone}`}>
                <Phone size={17} /> {profile.phone}
              </a>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} /> Chat directly on WhatsApp
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> Send an email enquiry
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download size={17} /> Download Executive CV (PDF)
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
