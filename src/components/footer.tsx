"use client";

import { Mail, Phone, MapPin } from "lucide-react";

import { Logo } from "@/components/logo";
import { useLocale } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-display mb-4 text-sm font-semibold text-foreground">{t.footer.columns.company.title}</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              {t.footer.columns.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-sm font-semibold text-foreground">{t.footer.columns.services.title}</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              {t.footer.columns.services.links.map((link) => (
                <li key={link}>
                  <a href="#technology" className="hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display mb-4 text-sm font-semibold text-foreground">{t.footer.columns.contact.title}</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0" />
                +48 61 624 61 00
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0" />
                zapytania@abedik.com.pl
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0" />
                Polska
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {year} ABEDIK S.A. {t.footer.rights}</span>
          <span>{t.common.yearsBadge}</span>
        </div>
      </div>
    </footer>
  );
}
