"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __initPortfolioMotion?: () => void;
  }
}

export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    // Only execute on client after full hydration
    if (typeof window === "undefined") return;

    function run() {
      if (typeof window.__initPortfolioMotion === "function") {
        window.__initPortfolioMotion();
      }
    }

    if (!window.__initPortfolioMotion) {
      const script = document.createElement("script");
      script.src = "/portfolio-motion.js?v=7";
      script.async = true;
      script.onload = () => {
        // Run after current frame is painted
        requestAnimationFrame(() => {
          setTimeout(run, 60);
        });
      };
      document.body.appendChild(script);
    } else {
      requestAnimationFrame(() => {
        setTimeout(run, 60);
      });
    }
  }, [pathname]);

  return <div className="page-entry-line" aria-hidden="true" />;
}
