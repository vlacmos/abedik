"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Recycle, Sun, Droplet, Sprout } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/lib/i18n/context";
import { EASE_OUT } from "@/lib/utils";

const ICONS = [Leaf, Recycle, Sun, Droplet];

function EmissionsGauge({ label, value }: { label: string; value: string }) {
  const ref = React.useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const percent = Math.abs(parseFloat(value)) / 100;
  const radius = 72;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 rounded-3xl border border-brand-emerald/20 bg-brand-emerald-soft p-8 text-center">
      <div className="relative flex items-center justify-center">
        <svg ref={ref} width={176} height={176} viewBox="0 0 176 176" className="-rotate-90">
          <circle cx={88} cy={88} r={radius} fill="none" stroke="currentColor" strokeWidth={12} className="text-white/40 dark:text-black/20" />
          <motion.circle
            cx={88}
            cy={88}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={12}
            strokeLinecap="round"
            className="text-brand-emerald"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: circumference * (1 - percent) } : {}}
            transition={{ duration: 1.4, ease: EASE_OUT }}
          />
        </svg>
        <span className="font-display absolute text-4xl font-bold text-brand-emerald">{value}</span>
      </div>
      <p className="max-w-[14rem] text-sm font-medium text-foreground">{label}</p>
    </div>
  );
}

export function EsgSection() {
  const { t } = useLocale();

  return (
    <section id="esg" className="relative overflow-hidden bg-surface-muted/40 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-[-10%] top-1/3 size-[420px] rounded-full bg-brand-emerald/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge variant="emerald">
            <Sprout />
            {t.esg.eyebrow}
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.esg.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.esg.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {t.esg.pillars.map((pillar, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 transition-shadow hover:shadow-lg"
                >
                  <motion.span
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-brand-emerald-soft text-brand-emerald"
                  >
                    <Icon className="size-6" />
                  </motion.span>
                  <h3 className="font-display font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EmissionsGauge label={t.esg.statLabel} value={t.esg.statValue} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
