"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";

import { EASE_OUT } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
}

function parseTarget(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

export function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = React.useState("0");
  const { number, suffix } = React.useMemo(() => parseTarget(value), [value]);

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, number, {
      duration: 1.8,
      delay,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        const rounded = number % 1 === 0 ? Math.round(latest) : latest.toFixed(1);
        setDisplay(`${rounded}`);
      },
    });
    return () => controls.stop();
  }, [isInView, number, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
    >
      <span ref={ref} className="font-display text-4xl font-bold tabular-nums text-foreground sm:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
}
