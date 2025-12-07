import { motion } from "framer-motion";

const logos = [
  "Shopify Plus", "Klaviyo", "Recharge", "Gorgias", "Yotpo", "Meta", "Google Partner"
];

export function LogoTicker() {
  return (
    <section className="py-10 bg-secondary border-b border-white/5 overflow-hidden">
      <div className="container-custom mb-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Technologie Partner</p>
      </div>
      
      <div className="flex overflow-hidden group select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 shrink-0">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <span 
              key={`${logo}-${idx}`} 
              className="text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 shrink-0">
           {[...logos, ...logos, ...logos].map((logo, idx) => (
            <span 
              key={`${logo}-dup-${idx}`} 
              className="text-2xl font-display font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
