export const questionCatalog = [
  {
    topic: "SystemAndApplikationManagement",
    subTopic: [
      {
        name: "Monitoring",
        questions: [
          "Führt der Provider eine automatisierte Systemüberwachung durch?",
          "Werden Systemressourcen: wie z.B. Festplattenkapazität, RAM-Ausnutzung, CPU-Nutzung überwacht?",
          "Werden Dienste-Verfügbarkeit: u.a. Datenbank-Dienste, IIS-relevante Dienste überwacht?",
          "Werden Konnektivität: VPN, Internet, Zugriffe beteiligter Systeme, Mailserver überwacht?",
        ],
      },
      {
        name: "Systempflege",
        questions: [
          "Werden durch den Anbieter alle relevanten Systeme  für die Bereitstellung der SaaS-Lösung gewartet?",
          "Prüft der Provider die Verfügbarkeit von Systemupdates /Sicherheitsupdates von Dritthersteller (bspw. Microsoft)	",
          "Werden anstehende Systemupdates mittels eines geplanten und abgestimmten Change durchgeführt? (mit dem SM der EnBW/ den Fachbereichen)",
          "Werden notwendige Datenträgerbereinigungen (z.B. Löschen von Systemlogs) durch den Anbieter durchgeführt?",
          "Werden nicht erforderliche Systemdaten bei Bedarf nach einer definierten Zeit gelöscht?",
        ],
      },
      {
        name: "Applikationsanalyse",
        questions: [
          "Werden regelmäßig von der Applikation erzeugten Logfiles analysiert und bewertet?",
        ],
      },
    ],
  },
  {
    topic: "Betriebszeiten, Service-Level und Verfügbarkeit",
    subTopic: [
      {
        name: "Betriebszeiten",
        questions: [
          "Können die Anforderungen an Betriebszeiten des Geschäftspartners durch die angebotenen Betriebszeiten des CSP erfüllt werden? (z.B. 24/7 Betrieb)",
        ],
      },
      {
        name: "Servicezeiten",
        questions: [
          "Können die Anforderungen an Servicezeiten des Geschäftspartners durch die angebotenen Servicezeiten des CSP erfüllt werden? (z.B. 24/7 Servicesupport) ",
        ],
      },
      {
        name: "Reaktionszeiten",
        questions: [
          "Können die Anforderungen an Reaktionszeiten des Geschäftspartners durch die angebotenen Reaktionszeiten des CSP erfüllt werden? (z.B. 24/7 Support) ",
        ],
      },
      {
        name: "Wartungsfenster",
        questions: [
          "Können geplante Wartungsfenster individuell zwischen Kunde/Geschäftspartner und CSP definiert und ausgehandelt werden?",
        ],
      },
      {
        name: "Service-Verfügbarkeit",
        questions: [
          "Können individuelle - auf die Bedürfnisse des Kunden/Geschäftspartner angepasste Verfügbarkeiten des Service mit dem CSP definiert werden?",
        ],
      },
    ],
  },
  {
    topic: "Reporting",
    subTopic: [
      {
        name: "Verfügbarkeitsreport",
        questions: [
          "Gibt es die Möglichkeit einen z.B. monatlichen Report zur Gesamtverfügbarkeit der Service-Lösung zu erstellen und dem Kunden zur Verfügung zu stellen? Hieraus kann z.B. die Erfüllung- bzw. Nichterfüllung der vereinbarten Vorgabe abgeleitet werden.",
        ],
      },
      {
        name: "Service-Report",
        questions: [
          "Gibt es zu jeder gemeldeten Störung oder jedem registrierten Vorfall, der eine Beeinträchtigung der Gesamtverfügbarkeitszeit darstellt und wird ein detaillierter Report inkl. Fehlerbeschreibung, Rootcause-Analyse und ggf. eingeleiteter Maßnahmen zur Vermeidung des Wiederholungsfalls erstellt? Ein solcher Service-Report könnte pro erfasster, betriebsrelevanter Anfrage erstellt werden.",
        ],
      },
      {
        name: "Sicherheitsvorfälle",
        questions: [
          "Werden die IT-Infrastruktur Komponenten permanent hinsichtlich Sicherheit überwacht und ggf. optimiert?",
        ],
      },
    ],
  },
  {
    topic: "Schnittstellen und Integration zu/in BaseIT",
    subTopic: [
      {
        name: "Integrationsfähigkeiten",
        questions: [
          "Kann eine Intregation zwischen baseIT und einem fremden Ticketsystem aufgebaut werden?",
        ],
      },
      {
        name: "Integrationsfähigkeiten ",
        questions: ["Gibt es ein Zugriff auf ein fremdes Ticketsystem?"],
      },
    ],
  },
  {
    topic: "Sonstiges",
    subTopic: [
      {
        name: "Kommunikation und Transparenz ",
        questions: [
          "Kann ein Servicemanager Einsicht in Changes beim CSP haben?",
        ],
      },
      {
        name: "Kommunikation und Transparenz",
        questions: [
          "Werden geplante und ungeplante Wartungsarbeiten auf Seiten des CSP an uns Servicemanager kommuniziert?",
        ],
      },
      {
        name: "Sicherheitsproaktivität",
        questions: [
          "Gibt es vom CSP die Möglichkeit proaktiv auf Sicherheitsschwachstellen in der Software/Applikation hingewiesen zu werden?",
        ],
      },
    ],
  },
];
