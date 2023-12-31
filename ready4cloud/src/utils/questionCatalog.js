/**
 * questionCatalog contains a structured list of topics and subtopics,
 * each with its set of questions.
 *
 * Structure:
 * - topic: Represents the main topic name.
 * - subTopic: An array of subtopics, where each subtopic contains:
 *   - name: Name of the subtopic.
 *   - questions: An array of questions related to that subtopic.
 */
export const questionCatalog = [
  {
    topic: "System- und Anwendungsmanagement",
    subTopic: [
      {
        name: "Monitoring",
        questions: [
          "Führt der Cloudanbieter eine automatisierte Systemüberwachung durch?",
          "Werden Systemressourcen wie z.B. Festplattenkapazität, RAM-Ausnutzung, CPU-Nutzung überwacht?",
          "Werden Verfügbarkeiten u.a. Datenbank-Dienste, IIS-relevante Dienste überwacht?",
          "Werden Verbindungen wie z.B. VPN, Internet, Zugriffe beteiligter Systeme, Mailserver überwacht?",
        ],
      },
      {
        name: "Systempflege",
        questions: [
          "Werden durch den Cloudanbieter alle relevanten Systeme für die Bereitstellung der SaaS-Lösung gewartet?",
          "Prüft der Cloudanbieter die Verfügbarkeit von Systemupdates /Sicherheitsupdates von Dritthersteller (bspw. Microsoft)",
          "Werden anstehende Systemupdates mittels eines geplanten und abgestimmten Change durchgeführt und mit dem Servicemanager der EnBW IT abgetimmt?",
          "Werden notwendige Datenträgerbereinigungen (z.B. Löschen von Systemlogs) durch den Cloudanbieter durchgeführt?",
          "Werden nicht erforderliche Systemdaten bei Bedarf nach einer definierten Zeit gelöscht?",
        ],
      },
      {
        name: "Applikationsanalyse",
        questions: [
          "Werden regelmäßig von der Applikation erzeugten Logfiles analysiert und bewertet?",
        ],
      },
      {
        name: "Changemanagement",
        questions: [
          "Betreibt der Cloudanbieter ein Change- bzw. Testmanagement?",
        ],
      },
      {
        name: "Verfügbarkeit und Zuverlässigkeit",
        questions: [
          "Existieren Mechanismen zur Daten- bzw. Systemwiederherstellung?",
        ],
      },
      {
        name: "Skalierbarkeit",
        questions: ["Kann die Kapazität des Cloud-Services angepasst werden?"],
      },
    ],
  },
  {
    topic: "Betriebszeiten, Service-Level und Verfügbarkeit",
    subTopic: [
      {
        name: "Rahmenbedingungen",
        questions: [
          "Können die Anforderungen an Betriebszeiten des Geschäftspartners durch die angebotenen Betriebszeiten des Cloudanbieters erfüllt werden? (z.B. 24/7 Betrieb)",
          "Können die Anforderungen an Servicezeiten des Geschäftspartners durch die angebotenen Servicezeiten des Cloudanbieters erfüllt werden? (z.B. 24/7 Servicesupport) ",
          "Können die Anforderungen an Reaktionszeiten des Geschäftspartners durch die angebotenen Reaktionszeiten des Cloudanbieters erfüllt werden? (z.B. 24/7 Support) ",
        ],
      },
      {
        name: "Wartungsfenster",
        questions: [
          "Können geplante Wartungsfenster individuell zwischen Kunde/Geschäftspartner und Cloudanbieter definiert und ausgehandelt werden?",
        ],
      },
      {
        name: "Service Verfügbarkeit",
        questions: [
          "Können individuelle - auf die Bedürfnisse des Kunden/Geschäftspartner angepasste Verfügbarkeiten des Service mit dem Cloudanbieter definiert werden?",
        ],
      },
      {
        name: "Nachhaltigkeit",
        questions: [
          "Steht ein nachhaltiges betriebs Konzept bei dem CSP zur Verfügung?",
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
        name: "Service Report",
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
      {
        name: "Ressourcenmanagement",
        questions: [
          "Gibt es Tools zur Überwachung der Ressourcennutzung und Kosten?",
          "Bietet der CSP unterschiedlische Kostenmodelle an?",
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
          "Gibt es ein Zugriff auf ein fremdes Ticketsystem?",
        ],
      },
      {
        name: "Datenmanagement",
        questions: [
          "Unterstützt der CSP offene Standards und APIs?",
          "Gibt es die Möglichkeit die Daten zurück On-Premise vollständig herunterzuladen?",
          "Bietet der Cloud-Service Datenredundanz an mehreren geografischen Standorten?",
        ],
      },
    ],
  },
  {
    topic: "Sicherheit und Datenschutz",
    subTopic: [
      {
        name: "Datenschutz",
        questions: [
          "Erfüllt der Cloud Service Provider (CSP) die Anforderungen an den Datenschutz?",
          "Werden Daten während der Übertragung verschlüsselt?",
          "Werden heiße/kalte Daten verschlüsselt?",
        ],
      },
      {
        name: "Zugriffsmanagement",
        questions: ["Unterstützt der CSP rollenbasierten Zugriff?"],
      },
      {
        name: "Sicherheit und Risikomanagement",
        questions: [
          "Gibt es eine klare Richtlinie für den Umgang mit Sicherheitsvorfällen?",
          "Bietet der Service standardmäßig Multi-Faktor-Authentifizierung an?",
          "Werden regelmäßige unabhängige Sicherheitsaudits durch den CSP durchgeführt?",
        ],
      },
    ],
  },
  {
    topic: "Sonstiges",
    subTopic: [
      {
        name: "Kommunikation und Transparenz",
        questions: [
          "Kann ein Servicemanager Einsicht in Changes beim Cloudanbieter haben?",
          "Werden geplante und ungeplante Wartungsarbeiten auf Seiten des Cloudanbieter an Servicemanager kommuniziert?",
          "Werden die aktuellen Regelung zur Arbeitsnehmerüberlassung (ANÜ) eingehalten?",
        ],
      },
      {
        name: "Sicherheitsproaktivität",
        questions: [
          "Gibt es vom Cloudanbieter die Möglichkeit proaktiv auf Sicherheitsschwachstellen in der Software/Applikation hingewiesen zu werden?",
        ],
      },
    ],
  },
];
