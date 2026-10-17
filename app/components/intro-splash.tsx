"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Asterisk } from "lucide-react";
import { profile } from "../data/portfolio";

export function IntroSplash() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<
    "logo-solo" | "reveal-msf" | "spaced" | "expand" | "pause" | "travel" | "complete"
  >("logo-solo");
  const [targetPos, setTargetPos] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 1,
  });
  const [suffixWidths, setSuffixWidths] = useState<{ w1: number; w2: number }>({ w1: 0, w2: 0 });
  const [msfWidth, setMsfWidth] = useState<number>(0);
  const [hidden, setHidden] = useState(false);
  const lockupRef = useRef<HTMLDivElement>(null);
  const nameLockupRef = useRef<HTMLDivElement>(null);
  const suffix1Ref = useRef<HTMLSpanElement>(null);
  const suffix2Ref = useRef<HTMLSpanElement>(null);

  // Derive initials and word suffixes dynamically from profile.name ("Mohammed Shehriyaar F")
  const nameParts = profile.name.split(" ");
  const w1Lead = nameParts[0]?.charAt(0) || "M";
  const w1Suffix = nameParts[0]?.slice(1) || "ohammed";
  const w2Lead = nameParts[1]?.charAt(0) || "S";
  const w2Suffix = nameParts[1]?.slice(1) || "hehriyaar";
  const w3Lead = nameParts[2]?.charAt(0) || "F";
  const w3Suffix = nameParts[2]?.slice(1) || "";

  useEffect(() => {
    // Only display intro splash on home page ("/"), never on "/contact" or other routes
    if (typeof window === "undefined") return;
    if (pathname !== "/") {
      setHidden(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    // Measure unconstrained natural text widths of the suffixes and the MSF monogram
    const measure = () => {
      if (suffix1Ref.current && suffix2Ref.current) {
        const w1 = suffix1Ref.current.scrollWidth;
        const w2 = suffix2Ref.current.scrollWidth;
        if (w1 > 0 && w2 > 0) {
          setSuffixWidths({ w1, w2 });
        }
      }
      if (nameLockupRef.current) {
        const mw = nameLockupRef.current.scrollWidth;
        if (mw > 0) {
          setMsfWidth(mw);
        }
      }
    };

    measure();
    const rafId = requestAnimationFrame(measure);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }

    // Stage 1: Logo in exact middle of screen first (0ms to 1300ms)
    // Stage 2: Logo slides left and reveals tight "MSF" monogram from behind it (1300ms to 2600ms)
    const t1 = setTimeout(() => {
      setPhase("reveal-msf");
    }, 1300);

    // Stage 3: "MSF" smoothly transforms into spaced initials "M  S  F" (2600ms to 3800ms)
    const t2 = setTimeout(() => {
      setPhase("spaced");
    }, 2600);

    // Stage 4: From "M  S  F", all words slowly and steadily expand together into full name (3800ms to 6800ms)
    const t3 = setTimeout(() => {
      setPhase("expand");
    }, 3800);

    // Stage 5: Poise on the full name "Mohammed Shehriyaar F" (6800ms to 7600ms)
    const t4 = setTimeout(() => {
      setPhase("pause");
    }, 6800);

    // Stage 6: Smoothly glide to top navbar wordmark position (7600ms to 8900ms)
    const t5 = setTimeout(() => {
      const headerWordmark = document.querySelector(".site-header .wordmark");
      if (headerWordmark && lockupRef.current) {
        const targetRect = headerWordmark.getBoundingClientRect();
        const currentRect = lockupRef.current.getBoundingClientRect();

        // Safety guard: only travel if navbar wordmark is actually visible in the top viewport area
        if (targetRect.top >= -20 && targetRect.top <= 250) {
          const dx = targetRect.left - currentRect.left;
          const dy = targetRect.top - currentRect.top;
          const scale = Math.min(1, targetRect.height / Math.max(1, currentRect.height));
          setTargetPos({ x: dx, y: dy, scale: scale > 0.35 ? scale : 0.65 });
          setPhase("travel");
        } else {
          // If wordmark is scrolled away, fade out cleanly in place instead of launching off-screen
          setPhase("complete");
        }
      } else {
        setPhase("complete");
      }
    }, 7600);

    // Stage 7: Fade out the overlay cleanly (600ms)
    const t6 = setTimeout(() => {
      setPhase("complete");
    }, 8900);

    // Stage 8: Remove from DOM
    const t7 = setTimeout(() => {
      setHidden(true);
    }, 9550);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [pathname]);

  if (hidden || pathname !== "/") return null;

  const isExpanded = phase === "expand" || phase === "pause" || phase === "travel" || phase === "complete";

  return (
    <aside
      className={`intro-splash-overlay ${phase === "complete" ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Welcome intro animation"
    >
      <div
        ref={lockupRef}
        className={`intro-lockup phase-${phase}`}
        style={
          phase === "travel" || phase === "complete"
            ? {
                transform: `translate3d(${targetPos.x}px, ${targetPos.y}px, 0) scale(${targetPos.scale})`,
              }
            : undefined
        }
      >
        {/* Red Asterisk Logo: Starts dead center in Stage 1, then slides left */}
        <div className="intro-logo-box">
          <Asterisk
            className="intro-asterisk-icon text-[var(--red)]"
            size={64}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </div>

        {/* Name Wrapper: width 0 when logo is in middle, expands to reveal MSF, then expands into full name */}
        <div
          className={`intro-name-wrapper phase-${phase}`}
          style={{
            maxWidth:
              phase === "logo-solo"
                ? "0px"
                : phase === "reveal-msf"
                ? msfWidth
                  ? `${msfWidth + 4}px`
                  : "6ch"
                : phase === "spaced"
                ? "450px"
                : "1400px",
            opacity: phase === "logo-solo" ? 0 : 1,
          }}
        >
          <div
            ref={nameLockupRef}
            className={`intro-name-lockup state-${phase} ${isExpanded ? "is-expanded" : ""}`}
          >
            {/* Word 1: M -> Mohammed */}
            <span className="intro-word">
              <span className="intro-lead-letter">{w1Lead}</span>
              <span
                className={`intro-suffix-track ${isExpanded ? "is-expanded" : ""}`}
                style={{
                  maxWidth: isExpanded ? (suffixWidths.w1 ? `${suffixWidths.w1 + 2}px` : "14ch") : "0px",
                }}
              >
                <span ref={suffix1Ref} className="intro-suffix-text">
                  {w1Suffix.split("").map((char, i) => (
                    <span
                      key={i}
                      className="intro-char"
                      style={{
                        transitionDelay: isExpanded ? `${i * 125}ms` : "0ms",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </span>

            {/* Word 2: S -> Shehriyaar */}
            <span className="intro-word">
              <span className="intro-lead-letter">{w2Lead}</span>
              <span
                className={`intro-suffix-track ${isExpanded ? "is-expanded" : ""}`}
                style={{
                  maxWidth: isExpanded ? (suffixWidths.w2 ? `${suffixWidths.w2 + 2}px` : "15ch") : "0px",
                }}
              >
                <span ref={suffix2Ref} className="intro-suffix-text">
                  {w2Suffix.split("").map((char, i) => (
                    <span
                      key={i}
                      className="intro-char"
                      style={{
                        transitionDelay: isExpanded ? `${i * 115}ms` : "0ms",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </span>

            {/* Word 3: F */}
            <span className="intro-word">
              <span className="intro-lead-letter">{w3Lead}</span>
              {w3Suffix ? (
                <span className={`intro-suffix-track ${isExpanded ? "is-expanded" : ""}`}>
                  <span className="intro-suffix-text">
                    {w3Suffix.split("").map((char, i) => (
                      <span key={i} className="intro-char">
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
