"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book3D } from "@/components/book-3d";
import { StatCounter } from "@/components/stat-counter";
import { useLocale } from "@/lib/i18n/context";
import { useContact } from "@/lib/contact-context";
import { EASE_OUT } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function Hero() {
  const { t } = useLocale();
  const { setOpen } = useContact();

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-bottom opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[560px] rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-40 size-[420px] rounded-full bg-brand-emerald/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col justify-center">
          <motion.div variants={item}>
            <Badge>
              <Sparkles />
              {t.hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.hero.titleAccent}</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-yellow/50 sm:h-4" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => setOpen(true)}>
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#technology">{t.hero.ctaSecondary}</a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-4 sm:gap-4"
          >
            <StatCounter value={t.hero.stats.books.value} label={t.hero.stats.books.label} delay={0} />
            <StatCounter value={t.hero.stats.publishers.value} label={t.hero.stats.publishers.label} delay={0.1} />
            <StatCounter value={t.hero.stats.years.value} label={t.hero.stats.years.label} delay={0.2} />
            <StatCounter value={t.hero.stats.green.value} label={t.hero.stats.green.label} delay={0.3} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <Book3D />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden justify-center pb-8 lg:flex"
      >
        <a
          href="#technology"
          className="flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.hero.scrollHint}
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown className="size-4" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
