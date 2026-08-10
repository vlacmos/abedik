"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UploadZone } from "@/components/upload-zone";
import { useLocale } from "@/lib/i18n/context";
import { useContact } from "@/lib/contact-context";

type Status = "idle" | "submitting" | "submitted";

export function ContactDialog() {
  const { t } = useLocale();
  const { open, setOpen, prefill } = useContact();
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync external prefill into local editable state
    if (prefill) setMessage(prefill);
  }, [prefill]);

  React.useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setStatus("idle"), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("submitted"), 1300);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl">
        <AnimatePresence mode="wait">
          {status === "submitted" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-6 text-center"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-brand-emerald-soft text-brand-emerald">
                <CheckCircle2 className="size-9" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">{t.contact.submitted}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.contact.submittedDesc}</p>
              </div>
              <Button onClick={() => setOpen(false)} className="mt-2">
                {t.contact.closeLabel}
              </Button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <DialogHeader>
                <DialogTitle>{t.contact.title}</DialogTitle>
                <DialogDescription>{t.contact.subtitle}</DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">{t.contact.formName}</Label>
                    <Input id="name" required placeholder="Jan Kowalski" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="company">{t.contact.formCompany}</Label>
                    <Input id="company" required placeholder="Wydawnictwo XYZ" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">{t.contact.formEmail}</Label>
                    <Input id="email" type="email" required placeholder="jan@wydawnictwo.pl" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">{t.contact.formPhone}</Label>
                    <Input id="phone" type="tel" placeholder="+48 600 000 000" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">{t.contact.formMessage}</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <UploadZone
                  label={t.contact.uploadLabel}
                  hint={t.contact.uploadHint}
                  cta={t.contact.uploadCta}
                  uploadedPrefix={t.contact.uploadedPrefix}
                />

                <Button type="submit" size="lg" className="mt-1 w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {t.contact.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      {t.contact.submit}
                    </>
                  )}
                </Button>

                <div className="flex flex-col gap-2 border-t border-border-subtle pt-4 sm:flex-row sm:justify-center sm:gap-6">
                  <a href="tel:+48616246100" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Phone className="size-3.5" />
                    {t.contact.directPhoneLabel}: +48 61 624 61 00
                  </a>
                  <a href="mailto:zapytania@abedik.com.pl" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Mail className="size-3.5" />
                    zapytania@abedik.com.pl
                  </a>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
