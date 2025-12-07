import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImg from "@assets/generated_images/laptop_displaying_fashion_ecommerce_site.png";

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

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
              <img
                src={heroImg}
                alt="Shopify Store Mockup"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Elements behind image */}
            <div className="absolute -inset-4 border border-white/5 rounded-2xl z-0 transform rotate-[2deg]" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
