"use client";

import * as React from "react";

interface ContactContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  prefill: string;
  openWithPrefill: (message: string) => void;
}

const ContactContext = React.createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [prefill, setPrefill] = React.useState("");

  const openWithPrefill = React.useCallback((message: string) => {
    setPrefill(message);
    setOpen(true);
  }, []);

  const value = React.useMemo(
    () => ({ open, setOpen, prefill, openWithPrefill }),
    [open, prefill, openWithPrefill],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact() {
  const ctx = React.useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactProvider");
  return ctx;
}
