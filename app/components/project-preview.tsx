"use client";

import {
  Check,
  Bot,
  Zap,
  Activity,
  ShieldCheck,
  Cpu,
  Lock,
  GitBranch,
  Database,
  Radio,
} from "lucide-react";

export function ProjectPreview({
  variant,
  image,
}: {
  variant: "commerce" | "application" | "website";
  image?: string;
}) {
  // Variant: ReplyAI (Autonomous Multi-LLM Social Engagement Platform)
  if (variant === "application") {
    return (
      <div className="app-composition replyai-preview" aria-hidden="true">
        <div className="app-window browser shadow-2xl bg-[#0f1411] border-[#1f2c22] text-zinc-100 overflow-hidden">
          <div className="browser-bar bg-[#141b16] border-b border-[#1f2c22]">
            <span className="browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-emerald-400">
              <Radio size={12} className="animate-pulse text-emerald-400" /> ReplyAI Engine · Edge Worker Active
            </span>
            <span className="rounded bg-emerald-950 border border-emerald-800 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
              99.9% Uptime
            </span>
          </div>

          {image ? (
            <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden bg-[#0a0e0b]">
              <img
                src={image}
                alt="ReplyAI autonomous social engagement platform"
                className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0b100d] via-[#0b100d]/80 to-transparent flex justify-between items-end">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 block">Multi-LLM Routing Pipeline</span>
                  <span className="text-sm font-medium text-white">Groq (Sub-200ms) · Gemini 1.5 · Meta Graph API</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur rounded text-xs text-emerald-300 border border-emerald-500/30">
                  124ms Avg Latency
                </span>
              </div>
            </div>
          ) : (
            <div className="app-shell bg-[#0f1411] text-zinc-200">
              {/* Sidebar */}
              <aside className="mock-sidebar bg-[#141b16] border-r border-[#223126]">
                <strong className="text-zinc-100 flex items-center gap-1.5 text-xs font-semibold">
                  <Bot size={15} className="text-red-500" /> ReplyAI Core
                </strong>
                <span className="mock-side-active flex items-center gap-1.5 text-xs text-emerald-400">
                  <Activity size={12} /> Live Event Queue
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Cpu size={12} /> Multi-LLM Router
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <ShieldCheck size={12} /> Guardrails & RBAC
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Database size={12} /> Turso SQLite Logs
                </span>
                <div className="mock-avatar bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono">
                  AI
                </div>
              </aside>

              {/* Main console */}
              <div className="app-main p-4 bg-[#0d120f] flex flex-col justify-between">
                <div>
                  <div className="app-topline flex justify-between items-center text-[10px] text-zinc-400 pb-2 border-b border-[#1f2c22]">
                    <span>Meta Graph API Webhook &bull; v21.0</span>
                    <span className="font-mono text-emerald-400">Avg Latency: 124ms</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-semibold text-zinc-100">Autonomous Event Stream</h4>
                      <p className="text-[11px] text-zinc-400">Real-time Instagram DM & comment triage with dual-model routing</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-red-950 text-red-300 border border-red-800">
                      Groq + Gemini 1.5
                    </span>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-2 mt-3 font-mono">
                    <div className="bg-[#141b16] border border-[#233327] rounded p-2">
                      <span className="text-[9px] text-zinc-400 block">Fast Classifier</span>
                      <strong className="text-xs text-emerald-400 font-semibold">Groq (98ms)</strong>
                    </div>
                    <div className="bg-[#141b16] border border-[#233327] rounded p-2">
                      <span className="text-[9px] text-zinc-400 block">Deep Reasoner</span>
                      <strong className="text-xs text-blue-400 font-semibold">Gemini 1.5 Flash</strong>
                    </div>
                    <div className="bg-[#141b16] border border-[#233327] rounded p-2">
                      <span className="text-[9px] text-zinc-400 block">Deduplication</span>
                      <strong className="text-xs text-amber-400 font-semibold">Idempotent 100%</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#1e2a21] flex justify-between items-center text-[10px] text-zinc-400">
                  <span>Human-in-the-Loop Controls Active</span>
                  <span className="text-emerald-400 font-medium">Ready for high-volume spikes</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <span className="floating-note bg-[#162019] text-emerald-300 border border-[#294230]">
          <Zap size={13} className="text-amber-400" /> Sub-200ms Multi-LLM Edge Architecture
        </span>
      </div>
    );
  }

  // Variant: HEXACORE (Modular Multi-Platform Ecosystem)
  if (variant === "commerce") {
    return (
      <div className="commerce-composition hexacore-preview" aria-hidden="true">
        <div className="browser mock-commerce bg-[#121614] border-[#29362c] text-zinc-100 shadow-2xl overflow-hidden">
          <div className="browser-bar bg-[#18201a] border-b border-[#29362c]">
            <span className="browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="font-mono text-[11px] text-zinc-300">HEXACORE · 6-in-1 Intelligence Hub</span>
            <span className="text-emerald-400 font-mono text-[10px]">Real-Time Sync</span>
          </div>

          {/* If authentic image exists, showcase it cleanly with overlay */}
          <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden bg-[#0c100d]">
            {image ? (
              <img
                src={image}
                alt="HEXACORE multi-platform platform"
                className="w-full h-full object-cover object-top opacity-85 hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-red-400 font-mono">Ecosystem Overview</span>
                  <h4 className="text-2xl md:text-3xl font-serif mt-1 font-normal text-zinc-100">
                    6 Integrated Platforms. <em>1 Unified Core.</em>
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded bg-[#18221b] border border-[#27382c] text-xs">
                    <strong>CodeForge</strong>
                    <span className="text-[10px] text-zinc-400 block">DSA Compiler & Online Judge</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#18221b] border border-[#27382c] text-xs">
                    <strong>PolyArguMind</strong>
                    <span className="text-[10px] text-zinc-400 block">Multi-Agent AI Debates</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#18221b] border border-[#27382c] text-xs">
                    <strong>Resume Analyzer</strong>
                    <span className="text-[10px] text-zinc-400 block">ATS Scoring & Analytics</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0e1310] via-[#0e1310]/80 to-transparent flex justify-between items-end">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 block">Tech Stack & Infrastructure</span>
                <span className="text-sm font-medium text-white">React · Spring Boot · Node.js · Firebase Realtime</span>
              </div>
              <span className="px-3 py-1 bg-white/10 backdrop-blur rounded text-xs text-white border border-white/20">
                6 Active Modules
              </span>
            </div>
          </div>
        </div>

        {/* Floating companion widget */}
        <div className="commerce-mobile hidden md:block bg-[#161e18] border-[#2d3f32] text-zinc-100 shadow-2xl">
          <div className="phone-top">
            <i className="bg-zinc-600" />
          </div>
          <strong className="text-[10px] font-mono uppercase text-emerald-400">Real-Time Chat Module</strong>
          <div className="mt-2 space-y-1.5 text-[9px]">
            <div className="p-1.5 bg-[#202b23] rounded text-zinc-200">
              <span className="text-emerald-400 font-semibold block">Team Channel</span>
              Sprint deployment live.
            </div>
            <div className="p-1.5 bg-[#202b23] rounded text-zinc-200">
              <span className="text-blue-400 font-semibold block">CodeForge</span>
              All 14 test cases passed!
            </div>
          </div>
          <span className="mobile-shop !bg-red-700 !text-white mt-3 font-medium">Sub-50ms WebSocket</span>
        </div>
      </div>
    );
  }

  // Variant: VeriTrust Unified (Enterprise Background Verification)
  return (
    <div className="website-composition veritrust-preview" aria-hidden="true">
      <div className="website-window browser bg-[#171f1a] text-zinc-100 shadow-2xl border-[#2a382e] overflow-hidden">
        <div className="browser-bar bg-[#1e2822] border-b border-[#2a382e]">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="font-mono text-[11px] text-zinc-300">VeriTrust Unified · Secure Enterprise Verification</span>
          <span className="text-emerald-400 font-mono text-[10px]">Aadhaar-Linked Verified</span>
        </div>

        {image ? (
          <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden bg-[#0c100d]">
            <img
              src={image}
              alt="VeriTrust platform preview"
              className="w-full h-full object-cover object-top opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#101712] via-[#101712]/80 to-transparent flex justify-between items-end">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 block">Security & Compliance Core</span>
                <span className="text-sm font-medium text-white">Spring Boot · MySQL · JWT · Multi-Tier RBAC</span>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur rounded text-xs text-emerald-300 border border-emerald-500/30">
                Audit Trail Cryptographic Log
              </span>
            </div>
          </div>
        ) : (
          <div className="website-inner p-6 md:p-8 bg-[#151c17]">
            <span className="website-eyebrow text-xs uppercase tracking-widest text-emerald-400 font-mono">
              Role-Based Access Control (RBAC)
            </span>
            <h4 className="text-2xl md:text-4xl font-serif text-zinc-100 my-3">
              Tamper-Evident Candidate <em>Verification.</em>
            </h4>
            <div className="grid grid-cols-3 gap-3 my-4 font-mono text-xs">
              <div className="p-3 bg-[#1e2821] rounded border border-[#2d3c31]">
                <ShieldCheck size={16} className="text-emerald-400 mb-1" />
                <strong>Candidate Portal</strong>
                <p className="text-[10px] text-zinc-400 mt-1">Encrypted credential upload & job applications</p>
              </div>
              <div className="p-3 bg-[#1e2821] rounded border border-[#2d3c31]">
                <Lock size={16} className="text-blue-400 mb-1" />
                <strong>Employer Console</strong>
                <p className="text-[10px] text-zinc-400 mt-1">Identity validation & background requests</p>
              </div>
              <div className="p-3 bg-[#1e2821] rounded border border-[#2d3c31]">
                <GitBranch size={16} className="text-amber-400 mb-1" />
                <strong>Audit Authority</strong>
                <p className="text-[10px] text-zinc-400 mt-1">Cross-check compliance & criminal records</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-[#253227]">
              <span>Spring Boot REST Microservices</span>
              <span className="text-emerald-400 font-mono">65% Faster Turnaround</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
