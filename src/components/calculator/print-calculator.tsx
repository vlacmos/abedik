"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, Layers, Printer, Scan, ArrowLeft, ArrowRight, Clock, Wallet, Send } from "lucide-react";

import { OptionCard } from "@/components/calculator/option-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "@/lib/i18n/context";
import { useContact } from "@/lib/contact-context";
import {
  estimateCost,
  estimateDays,
  formatPLN,
  type CalculatorConfig,
  type CoverType,
  type PaperType,
  type PrintTech,
} from "@/lib/calculator";
import { cn, EASE_OUT } from "@/lib/utils";

const STEP_COUNT = 4;

export function PrintCalculator() {
  const { t } = useLocale();
  const { openWithPrefill } = useContact();

  const [step, setStep] = React.useState(0);
  const [config, setConfig] = React.useState<CalculatorConfig>({
    cover: "softcover",
    tech: "offset",
    paper: "cream",
    pages: 240,
    copies: 3000,
  });

  const canAdvance = step < STEP_COUNT - 1;
  const canGoBack = step > 0;

  const { total } = estimateCost(config);
  const days = estimateDays(config);

  function update<K extends keyof CalculatorConfig>(key: K, value: CalculatorConfig[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    const coverLabel = t.calculator.step1[config.cover].title;
    const techLabel = t.calculator.step2[config.tech].title;
    const paperLabel = t.calculator.step3[config.paper];

    const message = `${t.calculator.step4.coverLabel}: ${coverLabel}\n${t.calculator.step4.techLabel}: ${techLabel}\n${t.calculator.step4.paperLabel}: ${paperLabel}\n${t.calculator.step4.pagesLabel}: ${config.pages}\n${t.calculator.step4.copiesLabel}: ${config.copies.toLocaleString("pl-PL")}\n${t.calculator.step4.etaLabel}: ~${days} ${t.calculator.step4.etaValue}\n${t.calculator.step4.priceLabel}: ~${formatPLN(total)}`;

    openWithPrefill(message);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-border-subtle bg-surface p-5 shadow-xl sm:p-8">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-muted-foreground">
          {t.calculator.stepLabels.map((label, i) => (
            <span key={label} className={cn("transition-colors", i === step && "text-foreground font-semibold")}>
              {label}
            </span>
          ))}
        </div>
        <Progress value={((step + 1) / STEP_COUNT) * 100} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        >
          {step === 0 && (
            <div>
              <h3 className="font-display mb-5 text-xl font-semibold text-foreground">{t.calculator.step1.title}</h3>
              <div className="flex flex-col gap-4 sm:flex-row">
                <OptionCard
                  icon={<BookText className="size-5" />}
                  title={t.calculator.step1.hardcover.title}
                  description={t.calculator.step1.hardcover.desc}
                  selected={config.cover === "hardcover"}
                  onSelect={() => update("cover", "hardcover" as CoverType)}
                />
                <OptionCard
                  icon={<Layers className="size-5" />}
                  title={t.calculator.step1.softcover.title}
                  description={t.calculator.step1.softcover.desc}
                  selected={config.cover === "softcover"}
                  onSelect={() => update("cover", "softcover" as CoverType)}
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display mb-5 text-xl font-semibold text-foreground">{t.calculator.step2.title}</h3>
              <div className="flex flex-col gap-4 sm:flex-row">
                <OptionCard
                  icon={<Printer className="size-5" />}
                  title={t.calculator.step2.offset.title}
                  description={t.calculator.step2.offset.desc}
                  badge={t.calculator.step2.offset.badge}
                  selected={config.tech === "offset"}
                  onSelect={() => update("tech", "offset" as PrintTech)}
                />
                <OptionCard
                  icon={<Scan className="size-5" />}
                  title={t.calculator.step2.digital.title}
                  description={t.calculator.step2.digital.desc}
                  badge={t.calculator.step2.digital.badge}
                  selected={config.tech === "digital"}
                  onSelect={() => update("tech", "digital" as PrintTech)}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display mb-5 text-xl font-semibold text-foreground">{t.calculator.step3.title}</h3>
              <div className="grid gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">{t.calculator.step4.paperLabel}</label>
                  <Select value={config.paper} onValueChange={(v) => update("paper", v as PaperType)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cream">{t.calculator.step3.cream}</SelectItem>
                      <SelectItem value="white">{t.calculator.step3.white}</SelectItem>
                      <SelectItem value="gray">{t.calculator.step3.gray}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">{t.calculator.step3.pagesLabel}</label>
                    <span className="font-display text-sm font-semibold text-foreground">{config.pages} str.</span>
                  </div>
                  <Slider
                    value={[config.pages]}
                    min={32}
                    max={800}
                    step={16}
                    onValueChange={([v]) => update("pages", v)}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">{t.calculator.step3.copiesLabel}</label>
                    <span className="font-display text-sm font-semibold text-foreground">
                      {config.copies.toLocaleString("pl-PL")}
                    </span>
                  </div>
                  <Slider
                    value={[config.copies]}
                    min={100}
                    max={50000}
                    step={100}
                    onValueChange={([v]) => update("copies", v)}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display mb-5 text-xl font-semibold text-foreground">{t.calculator.step4.title}</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border-subtle bg-surface-muted p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.calculator.step4.summaryTitle}
                  </p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.calculator.step4.coverLabel}</dt>
                      <dd className="font-medium text-foreground">{t.calculator.step1[config.cover].title}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.calculator.step4.techLabel}</dt>
                      <dd className="font-medium text-foreground">{t.calculator.step2[config.tech].title}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.calculator.step4.paperLabel}</dt>
                      <dd className="font-medium text-foreground">{t.calculator.step3[config.paper]}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.calculator.step4.pagesLabel}</dt>
                      <dd className="font-medium text-foreground">{config.pages}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t.calculator.step4.copiesLabel}</dt>
                      <dd className="font-medium text-foreground">{config.copies.toLocaleString("pl-PL")}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-brand-yellow/30 bg-brand-yellow-soft p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-yellow-foreground">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.calculator.step4.etaLabel}</p>
                      <p className="font-display text-xl font-bold text-foreground">
                        ~{days} <span className="text-sm font-medium text-muted-foreground">{t.calculator.step4.etaValue}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-foreground">
                      <Wallet className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.calculator.step4.priceLabel}</p>
                      <p className="font-display text-xl font-bold text-foreground">~{formatPLN(total)}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.calculator.step4.priceNote}</p>
                </div>
              </div>

              <Button size="lg" className="mt-6 w-full" onClick={handleSubmit}>
                <Send className="size-4" />
                {t.calculator.step4.submitCta}
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-6">
        <Button variant="outline" disabled={!canGoBack} onClick={() => setStep((s) => Math.max(0, s - 1))}>
          <ArrowLeft className="size-4" />
          {t.calculator.back}
        </Button>
        {canAdvance && (
          <Button onClick={() => setStep((s) => Math.min(STEP_COUNT - 1, s + 1))}>
            {t.calculator.next}
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
