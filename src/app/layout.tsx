import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n/context";
import { ContactProvider } from "@/lib/contact-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abedik.com.pl"),
  title: {
    default: "ABEDIK S.A. — Drukarnia Książkowa | Offset & Digital Book Printing",
    template: "%s | ABEDIK S.A.",
  },
  description:
    "ABEDIK S.A. — jedna z największych drukarni książkowych w Europie Środkowej. 26M+ książek rocznie, druk offsetowy i cyfrowy, oprawa twarda i miękka, 100% zielona energia, eksport na cały świat.",
  keywords: [
    "drukarnia książek",
    "druk offsetowy",
    "druk cyfrowy",
    "oprawa twarda",
    "oprawa miękka",
    "book printing",
    "ABEDIK",
    "printing house Poland",
  ],
  openGraph: {
    title: "ABEDIK S.A. — Premium Book Manufacturing",
    description:
      "26M+ books printed per year. Offset & digital printing, hardcover & softcover, 100% green energy, export worldwide.",
    url: "https://www.abedik.com.pl",
    siteName: "ABEDIK S.A.",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} min-h-screen bg-background text-foreground antialiased font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <LocaleProvider>
            <ContactProvider>{children}</ContactProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
