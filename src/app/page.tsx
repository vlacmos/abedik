import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { TechnologySection } from "@/components/technology-section";
import { FinishingSection } from "@/components/finishing-section";
import { CalculatorSection } from "@/components/calculator-section";
import { EsgSection } from "@/components/esg-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ContactDialog } from "@/components/contact-dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <TechnologySection />
        <FinishingSection />
        <CalculatorSection />
        <EsgSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactDialog />
    </div>
  );
}
