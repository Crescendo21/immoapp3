'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, X } from 'lucide-react';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Presale', href: '#presale' },
    { label: 'Projet', href: '#project' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#004AAD]">
              TRUSSO
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-[#004AAD] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#presale')}
              className="bg-[#004AAD] hover:bg-[#003A8C] text-white font-medium px-6"
            >
              Rejoindre Presale
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#004AAD] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-[#004AAD] block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('#presale')}
                className="bg-[#004AAD] hover:bg-[#003A8C] text-white font-medium w-full"
              >
                Rejoindre Presale
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}