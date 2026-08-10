"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareText, Phone, Send } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";
import { useContact } from "@/lib/contact-context";

export function ContactSection() {
  const { t } = useLocale();
  const { setOpen } = useContact();

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-[#0F172A] to-[#1B2536] px-6 py-14 text-center sm:px-14"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-16 size-64 rounded-full bg-brand-emerald/15 blur-3xl" />

          <div className="relative mx-auto max-w-xl">
            <Badge className="mx-auto border-white/15 bg-white/10 text-white">
              <MessageSquareText />
              {t.contact.eyebrow}
            </Badge>
            <h2 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl">{t.contact.title}</h2>
            <p className="mt-3 text-white/70">{t.contact.subtitle}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setOpen(true)}>
                <Send className="size-4" />
                {t.contact.triggerLabel}
              </Button>
              <div className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:gap-5">
                <a href="tel:+48616246100" className="inline-flex items-center justify-center gap-2 hover:text-white">
                  <Phone className="size-3.5" />
                  +48 61 624 61 00
                </a>
                <a
                  href="mailto:zapytania@abedik.com.pl"
                  className="inline-flex items-center justify-center gap-2 hover:text-white"
                >
                  <Mail className="size-3.5" />
                  zapytania@abedik.com.pl
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
