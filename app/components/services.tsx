"use client";

import { Check } from "lucide-react";
import { services } from "../data/portfolio";

export function Services({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <section className={`services-section section ${standalone ? "page-section" : ""}`} id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="index">02</span> Freelance Studio &amp; Engineering Services
            </p>
            <Heading id="services-title" className="section-title">
              From Concept &amp; Architecture<br />
              <em>to Production-Ready Software.</em>
            </Heading>
          </div>
          <div className="section-intro">
            <p>
              Dedicated senior full-stack development without the agency overhead. Predictable sprints, verified 20%+ performance gains, and direct communication.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for Q1/Q2 Contracts
              </span>
            </div>
          </div>
        </div>

        {/* Services accordion / interactive list */}
        <div className="services-list mt-8">
          {services.map((item, i) => (
            <details
              key={item.id}
              className="service-item group"
              open={i === 0}
            >
              <summary className="service-trigger cursor-pointer list-none py-6 border-b border-[#364238] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0 pr-4">
                  <span className="service-number font-mono text-xs text-[#f17d67] shrink-0">0{i + 1}</span>
                  <span className="service-name text-lg md:text-xl lg:text-2xl font-normal text-white group-hover:text-[#e7bc9d] transition-colors break-words">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-auto md:ml-0">
                  <span className="service-short text-xs text-[#a9b3a5] hidden lg:block max-w-[260px] leading-relaxed">{item.short}</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#29352c] text-emerald-300 border border-[#3b4b3f] shrink-0 whitespace-nowrap">
                    {item.turnaround}
                  </span>
                </div>
              </summary>

              <div className="service-content py-6 pl-0 md:pl-12 border-b border-[#364238]/60 bg-[#1e2420]/50 rounded-b-lg p-6 my-2">
                <div className="max-w-3xl">
                  <p className="text-sm md:text-base text-[#c5cbbe] leading-relaxed">{item.description}</p>

                  <div className="my-5">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#e7bc9d] block mb-2">
                      Key Deliverables &amp; Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#d0d6c9]">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <Check size={14} className="text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#344036] flex flex-wrap justify-between items-center gap-4">
                    <div className="text-xs text-[#9ba496]">
                      <span className="font-semibold text-zinc-300">Recommended for: </span>
                      {item.recommendedFor}
                    </div>

                    <a
                      className="button dark !bg-[#f7f7f4] !text-[#222622] hover:!bg-[#e7bc9d] text-xs font-semibold py-2 px-5"
                      href={`/contact?package=${encodeURIComponent(item.title)}`}
                    >
                      Book This Scope &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Freelance Engagement Models */}
        <div className="mt-16 pt-12 border-t border-[#344036]">
          <h3 className="text-xl font-medium text-white mb-2">How We Can Work Together</h3>
          <p className="text-xs text-[#a3ada0] mb-8 max-w-xl">
            Choose the engagement model that best matches your roadmap, budget, and development velocity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-[#1c221e] border border-[#2f3b31] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#e7bc9d] block">Rapid Sprint</span>
                <h4 className="text-lg font-semibold text-white mt-1">1–2 Week MVP Build</h4>
                <p className="text-xs text-[#a8b2a5] mt-2 leading-relaxed">
                  Fast turnaround prototype or single-feature delivery. Ideal for validating ideas, testing traction, or building investor demos.
                </p>
              </div>
              <a href="/contact" className="text-link !text-[#e7bc9d] text-xs mt-6 block">
                Inquire for Sprint &rarr;
              </a>
            </div>

            <div className="p-6 rounded-lg bg-[#202722] border border-[#3e4f41] relative flex flex-col justify-between shadow-lg">
              <span className="absolute -top-2.5 right-4 bg-[#be3e2e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-[#e7bc9d] block">Fixed Milestone</span>
                <h4 className="text-lg font-semibold text-white mt-1">Complete Turnkey System</h4>
                <p className="text-xs text-[#a8b2a5] mt-2 leading-relaxed">
                  Full product build from discovery to architecture, frontend, backend API, database, and cloud launch with 30-day warranty.
                </p>
              </div>
              <a href="/contact" className="text-link !text-[#e7bc9d] text-xs mt-6 block">
                Request Scope Proposal &rarr;
              </a>
            </div>

            <div className="p-6 rounded-lg bg-[#1c221e] border border-[#2f3b31] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#e7bc9d] block">Retainer / Advisory</span>
                <h4 className="text-lg font-semibold text-white mt-1">Dedicated Engineering Lead</h4>
                <p className="text-xs text-[#a8b2a5] mt-2 leading-relaxed">
                  Ongoing weekly development capacity, architecture reviews, performance tuning, and 24/7 reliability support for scaling teams.
                </p>
              </div>
              <a href="/contact" className="text-link !text-[#e7bc9d] text-xs mt-6 block">
                Schedule a Call &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
