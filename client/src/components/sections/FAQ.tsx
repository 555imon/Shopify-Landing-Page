import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-600">Alles was Sie wissen müssen, bevor wir starten.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/5 transition-all">
            <AccordionTrigger className="text-lg font-medium text-secondary hover:text-primary py-6">
              Für wen eignet sich eine Shopify Agentur?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
              Für Marken und Händler, die E-Commerce ernsthaft und professionell aufbauen oder skalieren möchten. Wenn Standard-Templates an ihre Grenzen stoßen und individuelle Lösungen gefragt sind.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/5 transition-all">
            <AccordionTrigger className="text-lg font-medium text-secondary hover:text-primary py-6">
              Wie läuft ein Projekt typischerweise ab?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
              Wir starten mit einem Kickoff, definieren Ziele, erstellen ein Konzept und setzen dieses iterativ um. Dabei halten wir Sie mit wöchentlichen Updates auf dem Laufenden.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/5 transition-all">
            <AccordionTrigger className="text-lg font-medium text-secondary hover:text-primary py-6">
              Mit welchen Budgets sollten wir planen?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
              Das hängt stark vom Umfang ab – von kleinen Optimierungen bis hin zu komplexen Enterprise-Lösungen. In einem Erstgespräch klären wir, was für Ihre Ziele sinnvoll ist und erstellen ein transparentes Angebot.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/5 transition-all">
             <AccordionTrigger className="text-lg font-medium text-secondary hover:text-primary py-6">
              Bieten Sie auch Support nach dem Launch an?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
              Ja, absolut. Wir bieten verschiedene Retainer-Pakete für Wartung, Weiterentwicklung und Conversion-Optimierung an, damit Ihr Shop dauerhaft performant bleibt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
