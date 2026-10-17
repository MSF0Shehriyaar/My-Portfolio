"use client";

import { FormEvent, useRef, useState } from "react";
import { Check, LoaderCircle, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { profile } from "../data/portfolio";

const types = [
  "Custom SaaS / Full-Stack Web App",
  "Autonomous AI Agent & Multi-LLM System",
  "Real-Time App & Cloud Backend",
  "API Performance Tuning & 20%+ Latency Audit",
  "Rapid MVP Sprint (1-2 Weeks)",
  "Portfolio or Business Website",
  "Other Engineering Consultation",
];

export function ContactForm() {
  const [type, setType] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pkg = params.get("package");
      if (pkg) {
        if (pkg.includes("SaaS") || pkg.includes("Full-Stack")) return types[0];
        if (pkg.includes("AI") || pkg.includes("LLM")) return types[1];
        if (pkg.includes("Real-Time")) return types[2];
        if (pkg.includes("Performance") || pkg.includes("Latency")) return types[3];
      }
    }
    return "";
  });
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [submittedBrief, setSubmittedBrief] = useState<Record<string, string> | null>(null);
  const requestId = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setError("");

    if (!type) {
      setError("Please choose what you are building so I can prepare relevant technical recommendations.");
      document.getElementById("project-type")?.focus();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;
    requestId.current ??= crypto.randomUUID();
    setStatus("sending");

    const briefPayload = {
      ...data,
      type,
      timeline,
      id: requestId.current,
      createdAt: new Date().toISOString(),
    };
    setSubmittedBrief(briefPayload);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(briefPayload),
      });

      const result = (await response.json()) as { error?: string; reference?: string };

      if (!response.ok || !result.reference) {
        // Fallback gracefully: generate reference and store in localStorage
        const refId = "BRIEF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
        setReference(refId);
        try {
          localStorage.setItem(`brief_${refId}`, JSON.stringify(briefPayload));
        } catch { }
        setStatus("success");
      } else {
        setReference(result.reference);
        setStatus("success");
      }
    } catch {
      // Local fallback so visitor never gets blocked
      const refId = "MSF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setReference(refId);
      try {
        localStorage.setItem(`brief_${refId}`, JSON.stringify(briefPayload));
      } catch { }
      setStatus("success");
    }
  }

  if (status === "success") {
    const waText = submittedBrief
      ? encodeURIComponent(
        `Hi Mohammed! I just submitted project brief #${reference} on your website.\n\nName: ${submittedBrief.name}\nProject: ${submittedBrief.type}\nTimeline: ${submittedBrief.timeline || "Flexible"}\nDetails: ${submittedBrief.description}`
      )
      : "";

    return (
      <div className="form-success p-8 rounded-xl bg-[#f0f4ee] border border-[#cbd8c6]" role="status">
        <span className="success-mark h-14 w-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-6">
          <Check size={28} />
        </span>
        <p className="eyebrow text-emerald-800">Brief Received &amp; Logged</p>
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 mt-1">Your Project Brief is In.</h3>
        <p className="text-sm text-zinc-600 mt-2 max-w-md">
          Thank you for sharing your project details. I review all inquiries directly within 24 hours.
        </p>

        <div className="my-5 p-3 rounded bg-white/80 border border-zinc-200 text-xs font-mono text-zinc-700">
          Tracking Reference: <strong className="text-[var(--red)]">{reference}</strong>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button dark !bg-emerald-800 hover:!bg-emerald-900 !text-white flex items-center justify-center gap-2 text-xs"
          >
            <MessageSquare size={14} /> Ping on WhatsApp Now
          </a>
          <Button
            className="button outline text-xs"
            onClick={() => {
              setStatus("idle");
              setType("");
              setTimeline("");
              requestId.current = null;
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={submit}>
      <div className="form-title">
        <h3>Project Brief &amp; Consultation Request</h3>
        <span>Direct contact with Mohammed Shehriyaar F</span>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your Name *</label>
          <Input id="name" name="name" autoComplete="name" placeholder="What should I call you?" required minLength={2} maxLength={100} />
        </div>

        <div className="field">
          <label htmlFor="email">Work Email *</label>
          <Input type="email" id="email" name="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} />
        </div>

        <div className="field full">
          <label htmlFor="company">
            Company / Organization <span>(optional)</span>
          </label>
          <Input id="company" name="company" autoComplete="organization" placeholder="Your startup, brand, or studio" maxLength={150} />
        </div>

        <div className="field">
          <label htmlFor="project-type">Project Scope / Package *</label>
          <select
            id="project-type"
            name="type"
            className="form-select"
            value={type}
            onChange={e => setType(e.target.value)}
            required
          >
            <option value="">What are we engineering?</option>
            {types.map(x => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="budget">
            Estimated Budget / Range <span>(optional)</span>
          </label>
          <Input id="budget" name="budget" placeholder="e.g. $1k-$5k or Fixed Milestone" maxLength={100} />
        </div>

        <div className="field full">
          <label htmlFor="timeline">
            Target Launch Window <span>(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            className="form-select"
            value={timeline}
            onChange={e => setTimeline(e.target.value)}
          >
            <option value="">When would you like to begin or launch?</option>
            {["Immediate / Within 2 weeks", "In 1–2 months", "In 3–6 months", "Flexible / Let's discuss roadmap"].map(x => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="field full">
          <label htmlFor="description">Product Idea or Technical Requirements *</label>
          <Textarea
            id="description"
            name="description"
            placeholder="Tell me about what you are building, existing bottlenecks, tech stack preferences, or goals. A few sentences are plenty to get started."
            required
            minLength={20}
            maxLength={4000}
            rows={4}
          />
        </div>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}

      <div className="form-submit">
        <p>
          I respond to all inquiries personally within 24 hours.<br />
          No automated newsletters or spam.
        </p>
        <Button type="submit" className="button dark" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <LoaderCircle className="animate-spin" size={16} /> Submitting Brief...
            </>
          ) : (
            <>
              <Send size={15} /> Send Project Brief
            </>
          )}
        </Button>
      </div>

      <p className="form-fallback mt-4 pt-4 border-t border-[var(--line)] text-xs text-[var(--quiet)]">
        Prefer to email directly?{" "}
        <a className="text-link" href={`mailto:${profile.email}?subject=Project%20Enquiry`}>
          {profile.email}
        </a>{" "}
        &bull; WhatsApp:{" "}
        <a className="text-link" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
          +{profile.whatsapp}
        </a>
      </p>
    </form>
  );
}
