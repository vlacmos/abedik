"use client";

import { motion } from "framer-motion";
import { FileSearch, Printer, Layers, Truck, type LucideIcon } from "lucide-react";

import { useLocale } from "@/lib/i18n/context";

const ICONS: LucideIcon[] = [FileSearch, Printer, Layers, Truck];

export function ProcessSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">{t.process.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 left-0 right-0 hidden h-px bg-border-subtle lg:block" />
          {t.process.steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-start gap-3"
              >
                <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border-subtle bg-surface text-foreground shadow-sm">
                  <Icon className="size-6" />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-yellow text-[11px] font-bold text-brand-yellow-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
