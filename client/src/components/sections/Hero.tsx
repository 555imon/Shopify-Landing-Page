import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/dark_abstract_geometric_background_for_hero_section.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary text-white pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/50 to-secondary/90" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 lg:col-start-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary font-medium text-sm mb-6 backdrop-blur-sm">
              Shopify Agentur
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Shopify Agentur auf <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                höchstem Niveau
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Wir bauen hochkonvertierende Shopify Stores für Marken und Händler, 
              die E-Commerce ernsthaft und professionell skalieren möchten.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 h-14 rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:scale-105">
                Unverbindliches Gespräch buchen
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 rounded-full w-full sm:w-auto backdrop-blur-sm">
                Unsere Projekte <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
