"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/lib/i18n/context";

const PLACEHOLDER_PUBLISHERS = ["FOLIO", "NOVA PRESS", "ARKA", "LUMEN", "VERBA", "PRIMA"];

export function LogoStrip() {
  const { t } = useLocale();

  return (
    <section className="border-y border-border-subtle bg-surface-muted/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {t.logos.heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PLACEHOLDER_PUBLISHERS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="font-display text-lg font-bold tracking-tight text-muted-foreground/60 grayscale transition-all hover:text-foreground hover:grayscale-0"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
