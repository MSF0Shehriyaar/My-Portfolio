import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import { ProjectPreview } from "../../components/project-preview";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { GithubIcon } from "../../components/icons";

type Props = { params: Promise<{ slug: string }> | { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const p = projects.find(x => x.slug === slug);
  return {
    title: p ? `${p.name} — Architecture Case Study` : "Project Not Found",
    description: p?.summary,
    openGraph: { title: p?.name, description: p?.summary },
  };
}

export default async function CaseStudy({ params }: Props) {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const project = projects.find(x => x.slug === slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Case Study Hero */}
        <section className="case-hero wrap">
          <Link href="/work" className="text-link inline-flex items-center gap-1.5 mb-4 text-xs font-medium">
            <ArrowLeft size={13} /> Back to all selected work
          </Link>

          <div className="case-title">
            <p className="eyebrow text-[var(--red)]">
              Architecture Case Study &bull; {project.category}
            </p>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
          </div>

          <div className="case-facts">
            <div>
              <span>Domain / Audience</span>
              <strong>{project.client}</strong>
            </div>
            <div>
              <span>Role &amp; Responsibility</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Core Technologies</span>
              <strong>{project.technologies}</strong>
            </div>
            <div>
              <span>Key Impact Benchmark</span>
              <strong className="text-[var(--red)]">{project.metrics}</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-[var(--line)]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button dark !text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
            >
              <GithubIcon size={15} /> View GitHub Repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button outline !text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
              >
                <ExternalLink size={15} /> Open Live Platform
              </a>
            )}
          </div>
        </section>

        {/* Visual Showcase */}
        <div className={`case-image wrap project-image preview-${project.visual}`}>
          <ProjectPreview variant={project.visual} image={project.image} />
          <span className="image-label">Production Architecture &bull; {project.name}</span>
        </div>

        {/* Detailed Stages & Technical Deep Dive */}
        <div className="case-body wrap">
          <aside>
            <span className="eyebrow">Case Study Sections</span>
            <nav aria-label="Case study contents">
              {project.stages.map((s, i) => (
                <a key={s.title} href={`#stage-${i}`}>
                  0{i + 1} / {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            {project.stages.map((stage, i) => (
              <section className="case-stage" key={stage.title} id={`stage-${i}`}>
                <span className="eyebrow">Phase 0{i + 1}</span>
                <h2>{stage.title}</h2>
                <p>{stage.copy}</p>

                {i === 6 && project.image && (
                  <div className="mt-8 rounded-lg overflow-hidden border border-[var(--line)] shadow-lg bg-zinc-900">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-auto object-cover max-h-[500px]"
                    />
                    <div className="p-3 bg-zinc-950 text-zinc-400 text-xs font-mono flex justify-between items-center">
                      <span>Production Interface Capture &bull; {project.name}</span>
                      <span className="text-emerald-400">Verified Deployment</span>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Next project teaser */}
        <section className="case-next">
          <div className="wrap">
            <div>
              <p className="eyebrow">Next Engineering Case Study</p>
              <Link href={`/work/${next.slug}`}>
                <h2>{next.name} &rarr;</h2>
              </Link>
            </div>
            <a className="button dark" href="/contact">
              Build a System Like This
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
