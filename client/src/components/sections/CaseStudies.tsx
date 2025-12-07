import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import case1 from "@assets/generated_images/laptop_displaying_fashion_ecommerce_site.png";
import case2 from "@assets/generated_images/tablet_displaying_coffee_brand_shopify_store.png";
import case3 from "@assets/generated_images/desktop_monitor_displaying_furniture_store.png";
import case4 from "@assets/generated_images/smartphone_displaying_tech_gadgets_store.png";

const cases = [
  {
    title: "Urban Fashion Co.",
    category: "Migration & Redesign",
    image: case1,
    stats: "+45% Conversion Rate",
  },
  {
    title: "Roast Coffee Lab",
    category: "Custom Theme Dev",
    image: case2,
    stats: "2x Average Order Value",
  },
  {
    title: "Nordic Living",
    category: "Headless Shopify",
    image: case3,
    stats: "0.5s Load Time",
  },
  {
    title: "TechGear Pro",
    category: "B2B Shop Solution",
    image: case4,
    stats: "+120% B2B Revenue",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ausgewählte Projekte
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Ergebnisse sprechen lauter als Worte. Hier sind einige Erfolgsgeschichten unserer Partner.
            </p>
          </div>
          <a href="#" className="text-primary font-semibold hover:underline">
            Alle Case Studies ansehen
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4">
                   <Badge className="bg-white/90 text-secondary hover:bg-white backdrop-blur-sm shadow-sm border-none">
                     {project.category}
                   </Badge>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-secondary">{project.title}</h3>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                    {project.stats}
                  </span>
                </div>
                <p className="text-gray-500 mb-6">
                  Vollständige Neuentwicklung des Online-Shops mit Fokus auf Performance und UX.
                </p>
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
