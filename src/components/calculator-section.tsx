"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PrintCalculator } from "@/components/calculator/print-calculator";
import { useLocale } from "@/lib/i18n/context";

export function CalculatorSection() {
  const { t } = useLocale();

  return (
    <section id="calculator" className="relative bg-surface-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge>
            <Calculator />
            {t.calculator.eyebrow}
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.calculator.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <PrintCalculator />
        </motion.div>
      </div>
    </section>
  );
}
