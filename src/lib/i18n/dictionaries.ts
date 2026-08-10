export type Locale = "pl" | "en" | "de";

export interface Dictionary {
  nav: {
    technology: string;
    calculator: string;
    esg: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
    stats: {
      books: { value: string; label: string };
      publishers: { value: string; label: string };
      years: { value: string; label: string };
      green: { value: string; label: string };
    };
  };
  logos: {
    heading: string;
  };
  calculator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabels: [string, string, string, string];
    step1: {
      title: string;
      hardcover: { title: string; desc: string };
      softcover: { title: string; desc: string };
    };
    step2: {
      title: string;
      offset: { title: string; desc: string; badge: string };
      digital: { title: string; desc: string; badge: string };
    };
    step3: {
      title: string;
      cream: string;
      white: string;
      gray: string;
      pagesLabel: string;
      copiesLabel: string;
    };
    step4: {
      title: string;
      summaryTitle: string;
      coverLabel: string;
      techLabel: string;
      paperLabel: string;
      pagesLabel: string;
      copiesLabel: string;
      etaLabel: string;
      etaValue: string;
      priceLabel: string;
      priceNote: string;
      submitCta: string;
    };
    back: string;
    next: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    specsLabel: string;
    machines: {
      name: string;
      type: string;
      desc: string;
      specs: string[];
    }[];
  };
  esg: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: { title: string; desc: string }[];
    statLabel: string;
    statValue: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  finishing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: [string, string, string, string];
    softcover: { title: string; desc: string }[];
    hardcover: { title: string; desc: string }[];
    embellishment: string[];
    services: { title: string; desc: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formName: string;
    formCompany: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    uploadLabel: string;
    uploadHint: string;
    uploadCta: string;
    uploadedPrefix: string;
    submit: string;
    submitting: string;
    submitted: string;
    submittedDesc: string;
    triggerLabel: string;
    directPhoneLabel: string;
    directEmailLabel: string;
    closeLabel: string;
  };
  footer: {
    tagline: string;
    columns: {
      company: { title: string; links: string[] };
      services: { title: string; links: string[] };
      contact: { title: string };
    };
    rights: string;
  };
  common: {
    yearsBadge: string;
  };
}

export const pl: Dictionary = {
  nav: {
    technology: "Technologia",
    calculator: "Kalkulator druku",
    esg: "Zielony Abedik",
    about: "O firmie",
    contact: "Kontakt",
    cta: "Darmowa wycena",
  },
  hero: {
    badge: "30 lat doświadczenia w poligrafii",
    titleLine1: "Drukujemy książki,",
    titleLine2: "które zmieniają",
    titleAccent: "rynek wydawniczy.",
    subtitle:
      "ABEDIK S.A. to jedna z największych drukarni książkowych w Europie Środkowej — oprawa twarda i miękka, druk offsetowy i cyfrowy, eksport do ponad 20 krajów.",
    ctaPrimary: "Darmowa wycena",
    ctaSecondary: "Zobacz technologię",
    scrollHint: "Przewiń, aby zobaczyć więcej",
    stats: {
      books: { value: "26M+", label: "książek rocznie" },
      publishers: { value: "250+", label: "wydawnictw" },
      years: { value: "30", label: "lat doświadczenia" },
      green: { value: "100%", label: "zielona energia" },
    },
  },
  logos: {
    heading: "Zaufali nam wydawcy w całej Europie",
  },
  calculator: {
    eyebrow: "Interaktywny kalkulator",
    title: "Wycen swój nakład w 60 sekund",
    subtitle:
      "Wybierz parametry książki, a nasz kalkulator oszacuje czas produkcji i przygotuje zapytanie do działu handlowego.",
    stepLabels: ["Oprawa", "Technologia", "Papier i nakład", "Podsumowanie"],
    step1: {
      title: "Wybierz typ oprawy",
      hardcover: {
        title: "Oprawa twarda",
        desc: "Szyta lub klejona, grzbiet prosty lub okrągły — prestiżowe wydania.",
      },
      softcover: {
        title: "Oprawa miękka",
        desc: "Broszurowa klejona lub szyto-klejona — najczęściej wybierana do dużych nakładów.",
      },
    },
    step2: {
      title: "Wybierz technologię druku",
      offset: {
        title: "Offset",
        desc: "Najwyższa jakość i najniższy koszt jednostkowy przy dużych nakładach.",
        badge: "od 1000 egz.",
      },
      digital: {
        title: "Druk cyfrowy",
        desc: "Krótkie serie, dodruki i personalizacja bez kompromisów jakościowych.",
        badge: "od 1 egz.",
      },
    },
    step3: {
      title: "Papier, liczba stron i nakład",
      cream: "Papier kremowy (53–90g)",
      white: "Papier biały (70–90g)",
      gray: "Papier szary (50g)",
      pagesLabel: "Liczba stron",
      copiesLabel: "Nakład (egzemplarze)",
    },
    step4: {
      title: "Podsumowanie zapytania",
      summaryTitle: "Twoja konfiguracja",
      coverLabel: "Oprawa",
      techLabel: "Technologia",
      paperLabel: "Papier",
      pagesLabel: "Strony",
      copiesLabel: "Nakład",
      etaLabel: "Szacowany czas produkcji",
      etaValue: "dni roboczych",
      priceLabel: "Szacunkowa wartość zamówienia",
      priceNote: "Ostateczna cena zostanie potwierdzona przez dział handlowy.",
      submitCta: "Wyślij zapytanie do handlowca",
    },
    back: "Wstecz",
    next: "Dalej",
  },
  technology: {
    eyebrow: "Park maszynowy",
    title: "Technologia klasy światowej",
    subtitle:
      "Inwestujemy w najnowocześniejsze linie produkcyjne od liderów branży, aby gwarantować powtarzalną jakość przy każdym nakładzie.",
    specsLabel: "Specyfikacja",
    machines: [
      {
        name: "Heidelberg Speedmaster XL 106",
        type: "Druk offsetowy arkuszowy",
        desc: "Wysokonakładowe maszyny offsetowe zapewniające precyzyjny kolor i najwyższą wydajność.",
        specs: ["Format 106×145 cm", "18 000 ark./h", "8 kolorów + lakier"],
      },
      {
        name: "Müller Martini Vareo Bindery",
        type: "Oprawa broszurowa",
        desc: "Zautomatyzowana linia klejenia i szycia bocznego dla oprawy miękkiej.",
        specs: ["Do 15 000 egz./h", "Klejenie PUR", "Zmiana formatu < 10 min"],
      },
      {
        name: "Kolbus Casematic Line",
        type: "Oprawa twarda",
        desc: "Kompletna linia do produkcji okładek i oprawy zintegrowanej z tworzywem.",
        specs: ["Grzbiet prosty/okrągły", "Do 4 000 egz./h", "Pełna automatyzacja"],
      },
      {
        name: "HP Indigo & HP PageWide",
        type: "Druk cyfrowy",
        desc: "Krótkie nakłady i dodruki on-demand bez utraty jakości offsetowej.",
        specs: ["Nakład od 1 egz.", "Zmienne dane", "Kolor zarządzany"],
      },
    ],
  },
  esg: {
    eyebrow: "Zielony Abedik",
    title: "Drukujemy z odpowiedzialnością",
    subtitle:
      "Środowisko naturalne jest częścią naszej strategii biznesowej — od źródła papieru do ostatniej kropli farby.",
    pillars: [
      {
        title: "Papier z certyfikatem FSC®",
        desc: "100% papieru pochodzi z odpowiedzialnie zarządzanych lasów.",
      },
      {
        title: "Zero waste",
        desc: "Odzysk i recykling makulatury oraz odpadów produkcyjnych na każdym etapie.",
      },
      {
        title: "Energia solarna",
        desc: "Instalacje fotowoltaiczne pokrywające znaczną część zapotrzebowania zakładu.",
      },
      {
        title: "Farby wodorozcieńczalne",
        desc: "Ograniczone zużycie rozpuszczalników i lotnych związków organicznych (VOC).",
      },
    ],
    statLabel: "redukcja emisji CO₂ od 2019 roku",
    statValue: "-42%",
  },
  process: {
    eyebrow: "Jak pracujemy",
    title: "Od plików do gotowej książki",
    steps: [
      { title: "Preflight plików", desc: "Automatyczna kontrola PDF i korekta przed drukiem." },
      { title: "Druk", desc: "Offset lub cyfra — w zależności od nakładu i terminu." },
      { title: "Oprawa i wykończenie", desc: "Szycie, klejenie, folia, lakier UV, złocenie." },
      { title: "Logistyka i eksport", desc: "Dystrybucja do ponad 20 krajów Europy i świata." },
    ],
  },
  finishing: {
    eyebrow: "Konfigurator druku",
    title: "Oprawy, papier i uszlachetnienia",
    subtitle: "Pełna paleta opraw, uszlachetnień i usług dodatkowych dostępnych w naszej drukarni.",
    tabs: ["Miękka oprawa", "Twarda oprawa", "Uszlachetnienia", "Usługi dodatkowe"],
    softcover: [
      { title: "Oprawa klejona", desc: "Okładka połączona ze składkami za pomocą kleju — najpopularniejsza forma, idealna do dużych nakładów." },
      { title: "Oprawa szyto-klejona", desc: "Składki zszyte nićmi syntetycznymi w blok, który dodatkowo klejony jest z okładką." },
      { title: "Oprawa szyta drutem", desc: "Zwana też zeszytową — blok zbierany i łączony metalowymi zszywkami, ograniczona do 48 stron." },
    ],
    hardcover: [
      { title: "Grzbiet prosty", desc: "Klasyczna, elegancka forma oprawy twardej o płaskim grzbiecie." },
      { title: "Grzbiet zaokrąglony", desc: "Zaokrąglony grzbiet nadający książce bardziej premium, tradycyjny charakter." },
      { title: "Obwoluta", desc: "Zdejmowana okładka ochronna i promocyjna nakładana na oprawę twardą." },
      { title: "Kapitałka i tasiemka", desc: "Dekoracyjne wykończenie grzbietu oraz wstawka do zaznaczania stron." },
    ],
    embellishment: [
      "Folia matowa",
      "Folia błyszcząca",
      "Folia satynowa",
      "Folia anti scratch",
      "Lakier wybiórczy UV",
      "Tłoczenie wypukłe / wklęsłe",
      "Folia metalizowana",
      "Barwienie bloku",
    ],
    services: [
      { title: "Insertowanie", desc: "Dodawanie wkładek, ulotek i dodatków do nakładu." },
      { title: "Hologramowanie", desc: "Naklejanie hologramów zabezpieczających przed podrobieniem." },
      { title: "Pakietowanie", desc: "Pakowanie kolekcji i zestawów książek." },
      { title: "Folia termo", desc: "Zgrzewanie pakietów książek w folię termiczną." },
      { title: "Magazynowanie", desc: "Przechowywanie nakładu do momentu premiery lub wysyłki." },
      { title: "Transport", desc: "Dystrybucja do jednego lub wielu magazynów w Polsce i Europie." },
    ],
  },
  contact: {
    eyebrow: "Szybki kontakt",
    title: "Wyślij zapytanie ofertowe",
    subtitle:
      "Odpowiadamy w ciągu 24 godzin roboczych. Możesz też wgrać plik PDF do wstępnej kontroli (preflight).",
    formName: "Imię i nazwisko",
    formCompany: "Nazwa wydawnictwa",
    formEmail: "Adres e-mail",
    formPhone: "Telefon",
    formMessage: "Opis projektu",
    uploadLabel: "Wgraj plik PDF do preflight",
    uploadHint: "Przeciągnij i upuść plik lub kliknij, aby wybrać (symulacja, max 50MB)",
    uploadCta: "Wybierz plik",
    uploadedPrefix: "Wgrano:",
    submit: "Wyślij zapytanie",
    submitting: "Wysyłanie...",
    submitted: "Zapytanie wysłane!",
    submittedDesc: "Nasz dział handlowy skontaktuje się z Tobą w ciągu 24 godzin.",
    triggerLabel: "Szybkie zapytanie",
    directPhoneLabel: "Zadzwoń do nas",
    directEmailLabel: "Napisz e-mail",
    closeLabel: "Zamknij",
  },
  footer: {
    tagline: "Drukarnia książkowa z 30-letnim doświadczeniem i eksportem na cały świat.",
    columns: {
      company: {
        title: "Firma",
        links: ["O nas", "Kariera", "Aktualności", "Certyfikaty"],
      },
      services: {
        title: "Usługi",
        links: ["Druk offsetowy", "Druk cyfrowy", "Oprawa twarda", "Oprawa miękka"],
      },
      contact: { title: "Kontakt" },
    },
    rights: "Wszystkie prawa zastrzeżone.",
  },
  common: {
    yearsBadge: "od 1994",
  },
};

export const en: Dictionary = {
  nav: {
    technology: "Technology",
    calculator: "Print Calculator",
    esg: "Green Abedik",
    about: "About",
    contact: "Contact",
    cta: "Free Quote",
  },
  hero: {
    badge: "30 years of printing excellence",
    titleLine1: "We print books",
    titleLine2: "that move the",
    titleAccent: "publishing world.",
    subtitle:
      "ABEDIK S.A. is one of the largest book manufacturing plants in Central Europe — hardcover & softcover, offset and digital printing, exporting to 20+ countries.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See the Technology",
    scrollHint: "Scroll to explore",
    stats: {
      books: { value: "26M+", label: "books per year" },
      publishers: { value: "250+", label: "publishers served" },
      years: { value: "30", label: "years of experience" },
      green: { value: "100%", label: "green energy" },
    },
  },
  logos: {
    heading: "Trusted by publishers across Europe",
  },
  calculator: {
    eyebrow: "Interactive tool",
    title: "Estimate your print run in 60 seconds",
    subtitle:
      "Configure your book and our calculator will estimate production time and prepare an inquiry for our sales team.",
    stepLabels: ["Cover", "Technology", "Paper & Run", "Summary"],
    step1: {
      title: "Choose your cover type",
      hardcover: {
        title: "Hardcover",
        desc: "Sewn or glued binding, straight or rounded spine — for premium editions.",
      },
      softcover: {
        title: "Softcover",
        desc: "Glued or sewn-glued brochure binding — the go-to choice for large runs.",
      },
    },
    step2: {
      title: "Choose your print technology",
      offset: {
        title: "Offset",
        desc: "Best quality and lowest unit cost for large print runs.",
        badge: "from 1,000 copies",
      },
      digital: {
        title: "Digital",
        desc: "Short runs, reprints and personalization without compromising quality.",
        badge: "from 1 copy",
      },
    },
    step3: {
      title: "Paper, page count & run size",
      cream: "Cream paper (53–90g)",
      white: "White paper (70–90g)",
      gray: "Grey paper (50g)",
      pagesLabel: "Page count",
      copiesLabel: "Print run (copies)",
    },
    step4: {
      title: "Inquiry summary",
      summaryTitle: "Your configuration",
      coverLabel: "Cover",
      techLabel: "Technology",
      paperLabel: "Paper",
      pagesLabel: "Pages",
      copiesLabel: "Run size",
      etaLabel: "Estimated production time",
      etaValue: "business days",
      priceLabel: "Estimated order value",
      priceNote: "Final pricing will be confirmed by our sales team.",
      submitCta: "Send inquiry to sales",
    },
    back: "Back",
    next: "Next",
  },
  technology: {
    eyebrow: "Machine park",
    title: "World-class production technology",
    subtitle:
      "We invest in the most advanced production lines from industry leaders to guarantee consistent quality on every run.",
    specsLabel: "Specification",
    machines: [
      {
        name: "Heidelberg Speedmaster XL 106",
        type: "Sheet-fed offset printing",
        desc: "High-volume offset presses delivering precise color and top-tier efficiency.",
        specs: ["106×145 cm format", "18,000 sheets/h", "8 colors + coating"],
      },
      {
        name: "Müller Martini Vareo Bindery",
        type: "Softcover binding",
        desc: "Automated gluing and side-stitching line for softcover binding.",
        specs: ["Up to 15,000 copies/h", "PUR binding", "Format change < 10 min"],
      },
      {
        name: "Kolbus Casematic Line",
        type: "Hardcover binding",
        desc: "Complete line for case production and integrated cover binding.",
        specs: ["Straight/rounded spine", "Up to 4,000 copies/h", "Full automation"],
      },
      {
        name: "HP Indigo & HP PageWide",
        type: "Digital printing",
        desc: "Short runs and on-demand reprints without sacrificing offset-level quality.",
        specs: ["Runs from 1 copy", "Variable data", "Managed color"],
      },
    ],
  },
  esg: {
    eyebrow: "Green Abedik",
    title: "Printing with responsibility",
    subtitle:
      "Environmental care is part of our business strategy — from the paper source to the last drop of ink.",
    pillars: [
      {
        title: "FSC® certified paper",
        desc: "100% of our paper comes from responsibly managed forests.",
      },
      {
        title: "Zero waste",
        desc: "Recovery and recycling of paper offcuts and production waste at every stage.",
      },
      {
        title: "Solar energy",
        desc: "Photovoltaic installations covering a significant share of plant demand.",
      },
      {
        title: "Water-based inks",
        desc: "Reduced use of solvents and volatile organic compounds (VOC).",
      },
    ],
    statLabel: "CO₂ emissions reduction since 2019",
    statValue: "-42%",
  },
  process: {
    eyebrow: "How we work",
    title: "From files to finished books",
    steps: [
      { title: "File preflight", desc: "Automated PDF checks and correction before print." },
      { title: "Printing", desc: "Offset or digital — matched to your run size and deadline." },
      { title: "Binding & finishing", desc: "Sewing, gluing, foil, UV coating, embossing." },
      { title: "Logistics & export", desc: "Distribution to 20+ countries across Europe and beyond." },
    ],
  },
  finishing: {
    eyebrow: "Print configurator",
    title: "Bindings, paper & finishing",
    subtitle: "The full range of bindings, finishes and add-on services available at our plant.",
    tabs: ["Softcover", "Hardcover", "Finishing", "Add-on services"],
    softcover: [
      { title: "Glued binding", desc: "Cover attached to the signatures with glue — the most popular choice, ideal for large runs." },
      { title: "Sewn-glued binding", desc: "Signatures sewn with synthetic thread into a block, then glued to the cover." },
      { title: "Wire-stitched binding", desc: "Also called saddle-stitch — block assembled with metal staples, limited to 48 pages." },
    ],
    hardcover: [
      { title: "Straight spine", desc: "Classic, elegant hardcover form with a flat spine." },
      { title: "Rounded spine", desc: "Rounded spine giving the book a more premium, traditional feel." },
      { title: "Dust jacket", desc: "Removable protective and promotional cover placed over the hardcover." },
      { title: "Headband & ribbon", desc: "Decorative spine finishing and a built-in bookmark ribbon." },
    ],
    embellishment: [
      "Matte film",
      "Gloss film",
      "Satin film",
      "Anti-scratch film",
      "Spot UV varnish",
      "Raised / recessed embossing",
      "Metallic foil",
      "Edge coloring",
    ],
    services: [
      { title: "Inserting", desc: "Adding inserts, flyers and extras to the print run." },
      { title: "Holography", desc: "Applying anti-counterfeit hologram stickers." },
      { title: "Packaging", desc: "Packing book collections and sets." },
      { title: "Thermo shrink wrap", desc: "Shrink-wrapping book packages in thermal film." },
      { title: "Warehousing", desc: "Storing the print run until release or shipment." },
      { title: "Transport", desc: "Distribution to one or multiple warehouses across Poland and Europe." },
    ],
  },
  contact: {
    eyebrow: "Quick contact",
    title: "Send a quote request",
    subtitle:
      "We respond within 24 business hours. You can also upload a PDF for preliminary preflight review.",
    formName: "Full name",
    formCompany: "Publishing house",
    formEmail: "Email address",
    formPhone: "Phone",
    formMessage: "Project description",
    uploadLabel: "Upload PDF for preflight",
    uploadHint: "Drag & drop a file or click to browse (simulation, max 50MB)",
    uploadCta: "Choose file",
    uploadedPrefix: "Uploaded:",
    submit: "Send inquiry",
    submitting: "Sending...",
    submitted: "Inquiry sent!",
    submittedDesc: "Our sales team will reach out within 24 hours.",
    triggerLabel: "Quick inquiry",
    directPhoneLabel: "Call us",
    directEmailLabel: "Email us",
    closeLabel: "Close",
  },
  footer: {
    tagline: "A book manufacturing plant with 30 years of experience, exporting worldwide.",
    columns: {
      company: {
        title: "Company",
        links: ["About us", "Careers", "News", "Certificates"],
      },
      services: {
        title: "Services",
        links: ["Offset printing", "Digital printing", "Hardcover", "Softcover"],
      },
      contact: { title: "Contact" },
    },
    rights: "All rights reserved.",
  },
  common: {
    yearsBadge: "since 1994",
  },
};

export const de: Dictionary = {
  nav: {
    technology: "Technologie",
    calculator: "Druckkalkulator",
    esg: "Grünes Abedik",
    about: "Über uns",
    contact: "Kontakt",
    cta: "Kostenloses Angebot",
  },
  hero: {
    badge: "30 Jahre Erfahrung im Druckgewerbe",
    titleLine1: "Wir drucken Bücher,",
    titleLine2: "die den Verlagsmarkt",
    titleAccent: "bewegen.",
    subtitle:
      "ABEDIK S.A. ist eine der größten Buchdruckereien Mitteleuropas — Hardcover & Softcover, Offset- und Digitaldruck, Export in über 20 Länder.",
    ctaPrimary: "Kostenloses Angebot",
    ctaSecondary: "Technologie ansehen",
    scrollHint: "Scrollen für mehr",
    stats: {
      books: { value: "26M+", label: "Bücher pro Jahr" },
      publishers: { value: "250+", label: "Verlage" },
      years: { value: "30", label: "Jahre Erfahrung" },
      green: { value: "100%", label: "grüne Energie" },
    },
  },
  logos: {
    heading: "Vertraut von Verlagen in ganz Europa",
  },
  calculator: {
    eyebrow: "Interaktives Tool",
    title: "Kalkulieren Sie Ihre Auflage in 60 Sekunden",
    subtitle:
      "Konfigurieren Sie Ihr Buch — unser Rechner schätzt die Produktionszeit und erstellt eine Anfrage für unser Vertriebsteam.",
    stepLabels: ["Einband", "Technologie", "Papier & Auflage", "Zusammenfassung"],
    step1: {
      title: "Einbandart wählen",
      hardcover: {
        title: "Hardcover",
        desc: "Fadenheftung oder Klebebindung, gerader oder runder Rücken — für Premiumausgaben.",
      },
      softcover: {
        title: "Softcover",
        desc: "Klebebindung oder Klebe-Fadenheftung — die Wahl für große Auflagen.",
      },
    },
    step2: {
      title: "Drucktechnologie wählen",
      offset: {
        title: "Offset",
        desc: "Beste Qualität und niedrigste Stückkosten bei großen Auflagen.",
        badge: "ab 1.000 Exemplare",
      },
      digital: {
        title: "Digitaldruck",
        desc: "Kleine Auflagen, Nachdrucke und Personalisierung ohne Qualitätsverlust.",
        badge: "ab 1 Exemplar",
      },
    },
    step3: {
      title: "Papier, Seitenzahl & Auflage",
      cream: "Cremepapier (53–90g)",
      white: "Weißes Papier (70–90g)",
      gray: "Graues Papier (50g)",
      pagesLabel: "Seitenzahl",
      copiesLabel: "Auflage (Exemplare)",
    },
    step4: {
      title: "Zusammenfassung der Anfrage",
      summaryTitle: "Ihre Konfiguration",
      coverLabel: "Einband",
      techLabel: "Technologie",
      paperLabel: "Papier",
      pagesLabel: "Seiten",
      copiesLabel: "Auflage",
      etaLabel: "Geschätzte Produktionszeit",
      etaValue: "Werktage",
      priceLabel: "Geschätzter Bestellwert",
      priceNote: "Der endgültige Preis wird von unserem Vertriebsteam bestätigt.",
      submitCta: "Anfrage an Vertrieb senden",
    },
    back: "Zurück",
    next: "Weiter",
  },
  technology: {
    eyebrow: "Maschinenpark",
    title: "Produktionstechnologie der Weltklasse",
    subtitle:
      "Wir investieren in modernste Produktionslinien führender Hersteller, um gleichbleibende Qualität bei jeder Auflage zu garantieren.",
    specsLabel: "Spezifikation",
    machines: [
      {
        name: "Heidelberg Speedmaster XL 106",
        type: "Bogenoffsetdruck",
        desc: "Hochvolumige Offsetmaschinen für präzise Farbe und höchste Effizienz.",
        specs: ["Format 106×145 cm", "18.000 Bogen/h", "8 Farben + Lack"],
      },
      {
        name: "Müller Martini Vareo Bindery",
        type: "Softcover-Bindung",
        desc: "Automatisierte Klebe- und Seitenheftungslinie für Softcover-Bindung.",
        specs: ["Bis 15.000 Exemplare/h", "PUR-Klebung", "Formatwechsel < 10 Min."],
      },
      {
        name: "Kolbus Casematic Line",
        type: "Hardcover-Bindung",
        desc: "Komplette Linie für Deckenproduktion und integrierte Einbandbindung.",
        specs: ["Gerader/runder Rücken", "Bis 4.000 Exemplare/h", "Vollautomatisierung"],
      },
      {
        name: "HP Indigo & HP PageWide",
        type: "Digitaldruck",
        desc: "Kleine Auflagen und On-Demand-Nachdrucke ohne Qualitätsverlust.",
        specs: ["Ab 1 Exemplar", "Variable Daten", "Farbmanagement"],
      },
    ],
  },
  esg: {
    eyebrow: "Grünes Abedik",
    title: "Verantwortungsvoll drucken",
    subtitle:
      "Umweltverantwortung ist Teil unserer Unternehmensstrategie — von der Papierquelle bis zum letzten Tropfen Farbe.",
    pillars: [
      {
        title: "FSC®-zertifiziertes Papier",
        desc: "100 % unseres Papiers stammt aus verantwortungsvoll bewirtschafteten Wäldern.",
      },
      {
        title: "Zero Waste",
        desc: "Rückgewinnung und Recycling von Papierabfällen und Produktionsabfällen in jeder Phase.",
      },
      {
        title: "Solarenergie",
        desc: "Photovoltaikanlagen decken einen erheblichen Teil des Energiebedarfs.",
      },
      {
        title: "Wasserbasierte Farben",
        desc: "Reduzierter Einsatz von Lösungsmitteln und flüchtigen organischen Verbindungen (VOC).",
      },
    ],
    statLabel: "CO₂-Reduktion seit 2019",
    statValue: "-42%",
  },
  process: {
    eyebrow: "So arbeiten wir",
    title: "Von der Datei zum fertigen Buch",
    steps: [
      { title: "Datei-Preflight", desc: "Automatische PDF-Prüfung und Korrektur vor dem Druck." },
      { title: "Druck", desc: "Offset oder digital — abgestimmt auf Auflage und Termin." },
      { title: "Bindung & Veredelung", desc: "Heften, Kleben, Folie, UV-Lack, Prägung." },
      { title: "Logistik & Export", desc: "Vertrieb in über 20 Länder in Europa und weltweit." },
    ],
  },
  finishing: {
    eyebrow: "Druck-Konfigurator",
    title: "Einbände, Papier & Veredelung",
    subtitle: "Die gesamte Palette an Einbänden, Veredelungen und Zusatzleistungen unseres Betriebs.",
    tabs: ["Softcover", "Hardcover", "Veredelung", "Zusatzleistungen"],
    softcover: [
      { title: "Klebebindung", desc: "Der Einband wird mit Klebstoff an den Falzbogen befestigt — die beliebteste Form, ideal für große Auflagen." },
      { title: "Klebe-Fadenheftung", desc: "Falzbogen werden mit synthetischem Faden zu einem Block genäht und anschließend mit dem Einband verklebt." },
      { title: "Drahtheftung", desc: "Auch Rückstichheftung genannt — der Block wird mit Metallklammern zusammengehalten, begrenzt auf 48 Seiten." },
    ],
    hardcover: [
      { title: "Gerader Rücken", desc: "Klassische, elegante Hardcover-Form mit flachem Rücken." },
      { title: "Runder Rücken", desc: "Runder Rücken verleiht dem Buch einen premiumhaften, traditionellen Charakter." },
      { title: "Schutzumschlag", desc: "Abnehmbarer Schutz- und Werbeumschlag über dem Hardcover." },
      { title: "Kapitalband & Lesebändchen", desc: "Dekorative Rückenveredelung und ein eingearbeitetes Lesebändchen." },
    ],
    embellishment: [
      "Mattfolie",
      "Glanzfolie",
      "Seidenmattfolie",
      "Anti-Scratch-Folie",
      "Partieller UV-Lack",
      "Erhabene / vertiefte Prägung",
      "Metallfolie",
      "Schnittfärbung",
    ],
    services: [
      { title: "Beilegen", desc: "Einlegen von Beilagen, Flyern und Zusatzmaterialien in die Auflage." },
      { title: "Hologramme", desc: "Anbringen fälschungssicherer Hologrammaufkleber." },
      { title: "Verpacken", desc: "Verpacken von Buchkollektionen und Sets." },
      { title: "Thermofolie", desc: "Einschweißen von Buchpaketen in Thermofolie." },
      { title: "Lagerung", desc: "Lagerung der Auflage bis zur Veröffentlichung oder zum Versand." },
      { title: "Transport", desc: "Verteilung an ein oder mehrere Lager in Polen und Europa." },
    ],
  },
  contact: {
    eyebrow: "Schnellkontakt",
    title: "Angebot anfordern",
    subtitle:
      "Wir antworten innerhalb von 24 Werkstunden. Sie können auch eine PDF-Datei zur Preflight-Prüfung hochladen.",
    formName: "Vollständiger Name",
    formCompany: "Verlag",
    formEmail: "E-Mail-Adresse",
    formPhone: "Telefon",
    formMessage: "Projektbeschreibung",
    uploadLabel: "PDF für Preflight hochladen",
    uploadHint: "Datei per Drag & Drop ablegen oder klicken (Simulation, max. 50MB)",
    uploadCta: "Datei auswählen",
    uploadedPrefix: "Hochgeladen:",
    submit: "Anfrage senden",
    submitting: "Wird gesendet...",
    submitted: "Anfrage gesendet!",
    submittedDesc: "Unser Vertriebsteam meldet sich innerhalb von 24 Stunden.",
    triggerLabel: "Schnellanfrage",
    directPhoneLabel: "Rufen Sie uns an",
    directEmailLabel: "Schreiben Sie uns",
    closeLabel: "Schließen",
  },
  footer: {
    tagline: "Eine Buchdruckerei mit 30 Jahren Erfahrung und weltweitem Export.",
    columns: {
      company: {
        title: "Unternehmen",
        links: ["Über uns", "Karriere", "Neuigkeiten", "Zertifikate"],
      },
      services: {
        title: "Dienstleistungen",
        links: ["Offsetdruck", "Digitaldruck", "Hardcover", "Softcover"],
      },
      contact: { title: "Kontakt" },
    },
    rights: "Alle Rechte vorbehalten.",
  },
  common: {
    yearsBadge: "seit 1994",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pl, en, de };
