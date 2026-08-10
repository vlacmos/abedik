import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-brand-yellow/30 bg-brand-yellow-soft text-brand-yellow-foreground dark:border-brand-yellow/40 dark:bg-brand-yellow/15 dark:text-brand-yellow",
        outline: "border-border-subtle bg-surface text-foreground",
        emerald: "border-brand-emerald/25 bg-brand-emerald-soft text-brand-emerald",
        muted: "border-border-subtle bg-surface-muted text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
