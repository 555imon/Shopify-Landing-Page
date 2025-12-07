import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Design & Konzept",
    description: "Wir analysieren Ihre Marke und erstellen ein UX/UI Design, das Ihre Zielgruppe überzeugt und konvertiert.",
  },
  {
    number: "02",
    title: "Entwicklung & Import",
    description: "Clean Code und performante Umsetzung. Wir migrieren Ihre Daten sicher und integrieren notwendige Schnittstellen.",
  },
  {
    number: "03",
    title: "Testing & Go-Live",
    description: "Umfangreiches Testing auf allen Endgeräten. Wir begleiten den Launch und sorgen für einen reibungslosen Start.",
  },
  {
    number: "04",
    title: "Wachstum & Skalierung",
    description: "Nach dem Launch ist vor dem Wachstum. Wir optimieren Ihren Store datenbasiert und entwickeln neue Features.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-secondary text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Unser Prozess</span>
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Von der Strategie zum <br/>erfolgreichen Launch
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="w-24 h-24 bg-secondary border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white/20 mb-8 group hover:border-primary hover:text-primary transition-colors duration-300 backdrop-blur-sm">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
