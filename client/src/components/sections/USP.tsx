import { Puzzle, Users, Cpu, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const usps = [
  {
    icon: Puzzle,
    title: "Nahtlose Integrationen",
    description: "Wir verbinden Ihren Shopify Store perfekt mit bestehenden ERP-Systemen, PIM-Lösungen und Marketing-Tools für automatisierte Workflows.",
  },
  {
    icon: Users,
    title: "Partner auf Augenhöhe",
    description: "Kein Agentur-Sprech, sondern klare Kommunikation. Wir verstehen Ihr Geschäftsmodell und denken proaktiv mit.",
  },
  {
    icon: Cpu,
    title: "Modernste Technologie",
    description: "Von Headless Commerce bis zu AI-gestützten Personalisierungen – wir nutzen den neuesten Tech-Stack für Ihren Wettbewerbsvorteil.",
  },
];

export function USP() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Warum führende Marken uns vertrauen
          </h2>
          <p className="text-lg text-gray-600">
            Wir kombinieren technisches Expertenwissen mit tiefem Verständnis für E-Commerce Prozesse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card key={index} className="border-none shadow-none bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <usp.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {usp.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
