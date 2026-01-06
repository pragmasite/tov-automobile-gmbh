export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      about: "Über uns",
      services: "Services",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "AUTOVERKÄUFER & WERKSTATT",
    },
    hero: {
      badge: "Qualität und Zuverlässigkeit",
      title1: "Ihr Partner für",
      title2: "Automobile",
      description: "Verkauf, Reparatur und Service von hochwertigen Fahrzeugen in Kleindöttingen",
      sendEmail: "Email senden",
      location: "Kleindöttingen, Schweiz",
    },
    about: {
      label: "Über uns",
      title1: "Über TOV",
      title2: "Automobile GmbH",
      p1: "TOV Automobile GmbH ist eine vertrauenswürdige Schweizer Autoverkaufsstelle und Werkstatt in Kleindöttingen. Mit Fachwissen und Leidenschaft für Automobile bieten wir umfassende Dienstleistungen für anspruchsvolle Kunden.",
      p2: "Von Fahrzeugverkauf über Reparaturen bis hin zu Wartungsarbeiten und Zubehör – wir sind Ihr kompetenter Partner für alle Ihre Automobilbedürfnisse.",
      stat1: "Jahre Erfahrung",
      stat2: "Fahrzeuge",
      stat3: "Kundenzufriedenheit",
      features: [
        { title: "Fahrzeugverkauf", description: "Breite Auswahl an neuen und gebrauchten Fahrzeugen von hoher Qualität" },
        { title: "Reparatur & Wartung", description: "Professionelle Reparatur- und Wartungsdienstleistungen für alle Fahrzeugtypen" },
        { title: "Zubehör & Teile", description: "Hochwertige Autoteile und Zubehör für Ihr Fahrzeug" },
        { title: "Ankauf", description: "Faire Ankaufspreise für Ihre Gebrauchtwagen" },
      ],
    },
    services: {
      label: "Dienstleistungen",
      title: "Unsere Services",
      description: "Professionelle Automobildienstleistungen für Ihre Bedürfnisse",
      items: [
        { title: "Fahrzeugverkauf", description: "Wir bieten eine sorgfältig ausgewählte Auswahl an neuen und gebrauchten Fahrzeugen" },
        { title: "Reparatur & Service", description: "Vollständige Reparatur- und Wartungsdienstleistungen von erfahrenen Fachleuten" },
        { title: "Fahrzeuganpassung", description: "Professionelle Modifikationen und Anpassungen Ihres Fahrzeugs" },
        { title: "Fahrzeugankauf", description: "Wir kaufen Ihre Gebrauchtwagen zu fairen Preisen" },
        { title: "Zubehör & Ausrüstung", description: "Umfangreiche Auswahl an Autoteilen und Zubehör" },
        { title: "Inspektionen", description: "Gründliche Fahrzeuginspektionen und Wartungschecks" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Unsere Fahrzeuge",
      description: "Sehen Sie sich unsere aktuelle Auswahl hochwertiger Fahrzeuge an",
    },
    hours: {
      label: "Öffnungszeiten",
      title: "Öffnungszeiten",
      header: "Öffnungszeiten",
      today: "Heute",
      closed: "Geschlossen",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Kontaktieren Sie",
      title2: "uns heute",
      description: "Wir sind bereit, Ihnen bei all Ihren Automobilbedürfnissen zu helfen",
      phone: "Telefon",
      email: "Email",
      address: "Adresse",
      cta: "Kontaktieren Sie uns jetzt",
      callNow: "Jetzt anrufen",
    },
    footer: {
      tagline: "Autoverkäufer & Werkstatt",
      description: "TOV Automobile GmbH – Ihre vertrauenswürdige Quelle für Fahrzeugverkauf, Reparatur und Service",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist eine Draft-Vorschau",
        "Sie ist auf Google nicht indexiert",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Verstanden",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "CAR DEALER & AUTO REPAIR",
    },
    hero: {
      badge: "Quality and Reliability",
      title1: "Your Partner for",
      title2: "Automobiles",
      description: "Sales, repair and service of high-quality vehicles in Kleindöttingen",
      sendEmail: "Send Email",
      location: "Kleindöttingen, Switzerland",
    },
    about: {
      label: "About",
      title1: "About TOV",
      title2: "Automobile GmbH",
      p1: "TOV Automobile GmbH is a trusted Swiss car dealership and repair shop in Kleindöttingen. With expertise and passion for automobiles, we offer comprehensive services for discerning customers.",
      p2: "From vehicle sales to repairs and maintenance work to accessories – we are your competent partner for all your automotive needs.",
      stat1: "Years Experience",
      stat2: "Vehicles",
      stat3: "Customer Satisfaction",
      features: [
        { title: "Vehicle Sales", description: "Wide selection of new and used vehicles of high quality" },
        { title: "Repair & Maintenance", description: "Professional repair and maintenance services for all vehicle types" },
        { title: "Accessories & Parts", description: "High-quality car parts and accessories for your vehicle" },
        { title: "Vehicle Purchase", description: "Fair prices for your used cars" },
      ],
    },
    services: {
      label: "Services",
      title: "Our Services",
      description: "Professional automotive services for your needs",
      items: [
        { title: "Vehicle Sales", description: "We offer a carefully selected range of new and used vehicles" },
        { title: "Repair & Service", description: "Complete repair and maintenance services by experienced professionals" },
        { title: "Vehicle Customization", description: "Professional modifications and adjustments to your vehicle" },
        { title: "Vehicle Purchase", description: "We buy your used cars at fair prices" },
        { title: "Accessories & Equipment", description: "Extensive selection of car parts and accessories" },
        { title: "Inspections", description: "Thorough vehicle inspections and maintenance checks" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our Vehicles",
      description: "View our current selection of high-quality vehicles",
    },
    hours: {
      label: "Hours",
      title: "Opening Hours",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Contact",
      title2: "us today",
      description: "We are ready to help you with all your automotive needs",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Contact us now",
      callNow: "Call now",
    },
    footer: {
      tagline: "Car Dealer & Auto Repair",
      description: "TOV Automobile GmbH – Your trusted source for vehicle sales, repair and service",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "Understood",
    },
  },
};

export interface Translations {
  nav: {
    about: string;
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
