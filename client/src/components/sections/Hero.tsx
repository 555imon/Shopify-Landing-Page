import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

// Import generated mobile UI images
import mobileFashion from "@assets/generated_images/mobile_ui_of_a_modern_fashion_store.png";
import mobileCoffee from "@assets/generated_images/mobile_ui_of_a_specialty_coffee_shop.png";
import mobileFurniture from "@assets/generated_images/mobile_ui_of_a_minimalist_furniture_brand.png";
import mobileTech from "@assets/generated_images/mobile_ui_of_a_tech_accessories_store.png";
import mobileSkincare from "@assets/generated_images/mobile_ui_of_a_skincare_brand.png";
import mobileSports from "@assets/generated_images/mobile_ui_of_a_sports_equipment_store.png";

const column1 = [mobileFashion, mobileCoffee, mobileFurniture, mobileFashion, mobileCoffee, mobileFurniture];
const column2 = [mobileTech, mobileSkincare, mobileSports, mobileTech, mobileSkincare, mobileSports];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary text-white overflow-hidden pt-20">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-primary font-medium text-sm mb-6 backdrop-blur-sm">
              Shopify Agentur
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Shopify Agentur auf <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                höchstem Niveau
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Wir entwickeln und optimieren Premium Shopify Stores für ambitionierte Marken. 
              Technisch exzellent, designstark und auf Conversion getrimmt.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-b from-[#00c4b8] to-[#008f86] hover:from-[#00d6c9] hover:to-[#00a196] border-none text-white font-semibold text-lg px-8 h-14 rounded-full w-full sm:w-auto shadow-[0_4px_14px_0_rgba(0,166,156,0.39)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,166,156,0.23)]"
              >
                Erstgespräch buchen
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-300">
               <div className="flex gap-1 text-[#FFD700]">
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
               </div>
               <span>4,8 / 5,0 — 150+ erfolgreiche Onlineshop-Projekte</span>
            </div>
          </motion.div>

          {/* Right Column: Animated Scrolling Mockups */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block h-[600px]"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 60%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 60%)"
            }}
          >
            <div 
              className="h-full overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
              }}
            >
              <div className="grid grid-cols-2 gap-6 h-full transform rotate-[-5deg] scale-110 origin-center">
                {/* Column 1 - Scroll Up */}
                <div className="flex flex-col gap-6 animate-marquee-y">
                  {column1.map((img, i) => (
                    <div key={`col1-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white/10 shrink-0">
                      <img src={img} alt="Client Project" className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>

                {/* Column 2 - Scroll Down (Reverse) */}
                <div className="flex flex-col gap-6 animate-marquee-y-reverse">
                  {column2.map((img, i) => (
                    <div key={`col2-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white/10 shrink-0">
                      <img src={img} alt="Client Project" className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
