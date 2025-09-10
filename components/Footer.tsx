'use client';

import { 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              TRUSSO
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Le premier hedge fund immobilier décentralisé spécialisé dans le flipping 
              de biens immobiliers suisses. Investissez dans l'avenir de l'immobilier.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004AAD] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004AAD] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@trusso.ch" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004AAD] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#hero')}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#presale')}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Presale
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#project')}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Le Projet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#roadmap')}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#faq')}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  Whitepaper
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  Documentation Technique
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  Audit Smart Contract
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  Guide d'investissement
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  Blog
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Genève, Suisse</div>
                  <div>Rue du Rhône 123</div>
                  <div>1204 Genève</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+41225551234" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +41 22 555 12 34
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@trusso.ch" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  contact@trusso.ch
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
              <p className="text-xs text-gray-400 mb-3">
                Restez informé des dernières actualités TRUSSO
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#004AAD]"
                />
                <button className="px-4 py-2 bg-[#004AAD] hover:bg-[#003A8C] text-white rounded-lg text-sm font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} TRUSSO. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Conditions d'utilisation
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>

            {/* Compliance Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">CH</span>
              </div>
              <span className="text-xs text-gray-400">
                Conforme à la réglementation suisse
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2">⚠️ Avertissement Important</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Les investissements dans les crypto-actifs et l'immobilier présentent des risques de perte en capital. 
              Les performances passées ne préjugent pas des performances futures. TRUSSO n'est pas un conseil en investissement. 
              Veuillez consulter un conseiller financier avant tout investissement. Ce projet est soumis à la réglementation suisse 
              et peut ne pas être disponible dans toutes les juridictions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}