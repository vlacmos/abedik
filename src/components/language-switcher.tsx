"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Globe } from "lucide-react";

import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Change language"
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border-subtle bg-transparent px-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <Globe className="size-4 text-muted-foreground" />
          {locale.toUpperCase()}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-32 rounded-xl border border-border-subtle bg-surface p-1.5 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {LOCALES.map((item) => (
            <DropdownMenu.Item
              key={item.code}
              onSelect={() => setLocale(item.code)}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none data-[highlighted]:bg-surface-muted",
                locale === item.code && "font-semibold",
              )}
            >
              {item.label}
              {locale === item.code && <Check className="size-3.5 text-brand-yellow" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
