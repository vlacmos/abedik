"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  selected: boolean;
  onSelect: () => void;
}

export function OptionCard({ icon, title, description, badge, selected, onSelect }: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex flex-1 flex-col gap-3 rounded-2xl border p-5 text-left transition-all",
        selected
          ? "border-brand-yellow bg-brand-yellow-soft shadow-[0_8px_24px_-12px_rgba(245,180,0,0.5)]"
          : "border-border-subtle bg-surface hover:border-foreground/20 hover:bg-surface-muted",
      )}
    >
      {selected && (
        <span className="absolute top-4 right-4 flex size-5 items-center justify-center rounded-full bg-brand-yellow">
          <Check className="size-3 text-brand-yellow-foreground" />
        </span>
      )}
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-xl",
          selected ? "bg-brand-yellow text-brand-yellow-foreground" : "bg-surface-muted text-foreground",
        )}
      >
        {icon}
      </span>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-display font-semibold text-foreground">{title}</h4>
          {badge && (
            <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.button>
  );
}
