"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Asterisk, Menu, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

const navigation = [
  ["Home", "/"],
  ["Work", "/work"],
  ["Services & Freelance", "/services"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const active = (path: string) => (path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/"));

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label={`${profile.name} — home`}>
          <Asterisk aria-hidden="true" size={32} strokeWidth={1.8} />
          <span>{profile.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, -1).map(([label, path]) => (
            <Link key={path} href={path} aria-current={active(path) ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--red)] font-medium hover:underline"
          >
            <Download size={13} /> Resume
          </a>
        </nav>

        <a className="header-cta" href="/contact">
          Hire / Consult <span className="cta-dot" aria-hidden="true" />
        </a>

        <div className="mobile-nav">
          <details className="mobile-menu">
            <summary className="menu-button" aria-label="Open navigation">
              <Menu size={24} />
            </summary>
            <div className="mobile-sheet native-mobile-panel">
              <p className="eyebrow text-zinc-400">{profile.name}</p>
              <nav aria-label="Mobile navigation">
                {navigation.map(([label, path]) => (
                  <a key={path} href={path} aria-current={active(path) ? "page" : undefined}>
                    {label}
                  </a>
                ))}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--red)] font-medium"
                >
                  <Download size={16} /> Executive Resume (PDF)
                </a>
              </nav>
              <div className="mobile-menu-bottom pt-4 border-t border-zinc-700">
                <span className="text-xs text-zinc-400 block">{profile.email}</span>
                <span className="text-xs text-zinc-400 block mt-1">{profile.phone}</span>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          <Asterisk size={28} aria-hidden="true" />
          <span>{profile.name}</span>
        </Link>
        <p>Full Stack Engineer &amp; Systems Architect &bull; Available for Select Client Builds &amp; Contracts</p>
        <a href="#main" className="text-link">
          Back to top
        </a>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} {profile.name} &bull; Bengaluru &amp; Mysuru, Karnataka, India
        </span>

        <div className="footer-contact">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`tel:${profile.telephone}`}>Call</a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume (PDF)
          </a>
        </div>

        <div className="social-links flex items-center gap-4">
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          ) : null}
          {profile.github ? (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <GithubIcon size={14} /> GitHub
            </a>
          ) : null}

        </div>
      </div>
    </footer>
  );
}
