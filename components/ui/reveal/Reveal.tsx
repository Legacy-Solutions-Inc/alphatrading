"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Milliseconds to wait after intersection before revealing. Use for stagger. */
  delay?: number;
  className?: string;
  /** 0-1. Fraction of the element that must be visible to trigger. Default 0.15. */
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => {
            el.setAttribute("data-reveal", "visible");
          }, delay);
          io.disconnect();
          return () => window.clearTimeout(timer);
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} data-reveal="" className={className}>
      {children}
    </div>
  );
}
