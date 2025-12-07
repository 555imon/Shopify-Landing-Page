import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import founderImg from "@assets/generated_images/professional_headshot_of_agency_founder.png";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-secondary rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Bereit für den nächsten Schritt im E-Commerce?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Lassen Sie uns in einem unverbindlichen Erstgespräch herausfinden, wie wir Ihr Potenzial voll ausschöpfen können.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Kostenlose Status-Quo Analyse",
                  "Konkrete Handlungsempfehlungen",
                  "Transparentes Angebot",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-16 rounded-full w-full sm:w-auto shadow-lg hover:shadow-primary/25 transition-all">
                Zur Terminbuchung
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={founderImg}
                    alt="Founder"
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <h4 className="text-xl font-bold">Thomas Weber</h4>
                    <p className="text-primary text-sm font-medium">Gründer & CEO</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Wir sehen uns nicht als Dienstleister, sondern als Ihren strategischen Partner für digitales Wachstum. Ihr Erfolg ist unser Erfolg."
                </p>
                {/* Signature Placeholder - utilizing a script font instead of image for crispness */}
                <div className="font-serif text-3xl text-white/50 font-medium">Thomas Weber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
