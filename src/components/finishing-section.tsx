"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Link2,
  Paperclip,
  RectangleVertical,
  Circle,
  BookOpen,
  Ribbon,
  Sparkles,
  Sun,
  Droplets,
  ShieldCheck,
  PenTool,
  Stamp,
  Gem,
  Palette,
  PackagePlus,
  Hexagon,
  Package,
  ThermometerSun,
  Warehouse,
  Truck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLocale } from "@/lib/i18n/context";

const SOFTCOVER_ICONS: LucideIcon[] = [Layers, Link2, Paperclip];
const HARDCOVER_ICONS: LucideIcon[] = [RectangleVertical, Circle, BookOpen, Ribbon];
const EMBELLISHMENT_ICONS: LucideIcon[] = [Sun, Sparkles, Droplets, ShieldCheck, PenTool, Stamp, Gem, Palette];
const SERVICE_ICONS: LucideIcon[] = [PackagePlus, Hexagon, Package, ThermometerSun, Warehouse, Truck];

function ItemCard({ icon: Icon, title, desc, index }: { icon: LucideIcon; title: string; desc?: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-border-subtle bg-surface p-5 transition-shadow hover:shadow-lg"
    >
      <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-yellow-foreground dark:bg-brand-yellow/15 dark:text-brand-yellow">
        <Icon className="size-5" />
      </span>
      <h4 className="font-display font-semibold text-foreground">{title}</h4>
      {desc && <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

export function FinishingSection() {
  const { t } = useLocale();

  return (
    <section id="finishing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge>
            <SlidersHorizontal />
            {t.finishing.eyebrow}
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.finishing.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.finishing.subtitle}</p>
        </motion.div>

        <Tabs defaultValue="0" className="items-center">
          <div className="no-scrollbar mb-10 w-full overflow-x-auto">
            <TabsList className="mx-auto flex w-max sm:w-fit">
              {t.finishing.tabs.map((label, i) => (
                <TabsTrigger key={label} value={String(i)}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="0" className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {t.finishing.softcover.map((item, i) => (
                <ItemCard key={item.title} icon={SOFTCOVER_ICONS[i]} title={item.title} desc={item.desc} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="1" className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.finishing.hardcover.map((item, i) => (
                <ItemCard key={item.title} icon={HARDCOVER_ICONS[i]} title={item.title} desc={item.desc} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="2" className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.finishing.embellishment.map((title, i) => (
                <ItemCard key={title} icon={EMBELLISHMENT_ICONS[i]} title={title} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="3" className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.finishing.services.map((item, i) => (
                <ItemCard key={item.title} icon={SERVICE_ICONS[i]} title={item.title} desc={item.desc} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
