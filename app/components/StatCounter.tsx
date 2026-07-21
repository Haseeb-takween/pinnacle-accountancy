"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export function StatCounter({ value, suffix = "", prefix = "", label, decimals = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        if (displayRef.current) {
          displayRef.current.textContent = prefix + v.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, count, value, suffix, prefix, decimals]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tabular-nums" style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}>
        <span ref={displayRef}>{prefix}0{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
