"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog, Printer, Layers, BookText, Scan, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [Printer, Layers, BookText, Scan];

export function TechnologySection() {
  const { t } = useLocale();
  const [active, setActive] = React.useState("0");
  const machines = t.technology.machines;
  const activeMachine = machines[Number(active)];
  const ActiveIcon = ICONS[Number(active)];

  return (
    <section id="technology" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge>
            <Cog />
            {t.technology.eyebrow}
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.technology.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.technology.subtitle}</p>
        </motion.div>

        <Tabs value={active} onValueChange={setActive} className="items-center">
          <div className="no-scrollbar mb-10 w-full overflow-x-auto">
            <TabsList className="mx-auto flex w-max sm:w-fit">
              {machines.map((machine, i) => {
                const Icon = ICONS[i];
                return (
                  <TabsTrigger key={machine.name} value={String(i)} className="gap-2">
                    <Icon className="size-4" />
                    <span className="max-w-[10rem] truncate sm:max-w-none">{machine.name.split(" ")[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 lg:col-span-3"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow-soft text-brand-yellow">
                    <ActiveIcon className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-yellow">
                      {activeMachine.type}
                    </p>
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{activeMachine.name}</h3>
                  </div>
                </div>

                <p className="mt-5 text-muted-foreground">{activeMachine.desc}</p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.technology.specsLabel}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {activeMachine.specs.map((spec) => (
                      <motion.div
                        key={spec}
                        whileHover={{ y: -3 }}
                        className="rounded-xl border border-border-subtle bg-surface-muted px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand-yellow/40"
                      >
                        {spec}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-[#0F172A] to-[#1B2536] p-6 sm:p-8 lg:col-span-2">
              <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-brand-yellow/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-white/70">
                  <Cog className="size-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">Machine Park</span>
                </div>

                <div className="my-8 flex items-end gap-3">
                  {machines.map((m, i) => (
                    <button
                      key={m.name}
                      onClick={() => setActive(String(i))}
                      aria-label={m.name}
                      className={cn(
                        "flex-1 rounded-t-lg transition-all",
                        Number(active) === i ? "bg-brand-yellow" : "bg-white/15 hover:bg-white/25",
                      )}
                      style={{ height: `${44 + i * 18}px` }}
                    />
                  ))}
                </div>

                <div>
                  <p className="font-display text-3xl font-bold text-white">{machines.length}</p>
                  <p className="text-sm text-white/60">{t.technology.eyebrow}</p>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
