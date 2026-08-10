import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-brand-yellow">
        <BookOpen className="size-5 text-[#0F172A]" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        ABEDIK<span className="text-brand-yellow">.</span>
      </span>
    </span>
  );
}
