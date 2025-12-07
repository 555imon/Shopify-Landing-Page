import { Link } from "wouter";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold text-white tracking-tight mb-6 block">
              dgtl<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Wir sind Ihre strategische Shopify Agentur für skalierbaren E-Commerce. 
              Technologie, Design und Strategie aus einer Hand.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="#cases" className="text-gray-400 hover:text-primary transition-colors">Projekte</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary transition-colors">Agentur</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Rechtliches</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 dgtl. Agency GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-400 text-sm">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
