'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Building } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const scrollToPresale = () => {
    const element = document.querySelector('#presale');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] text-sm font-medium">
                <Building className="w-4 h-4 mr-2" />
                Hedge Fund Immobilier Décentralisé
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Investissez dans l'immobilier suisse avec
                <span className="text-[#004AAD] block mt-2">TRUSSO</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Le premier token adossé à des talents de flipping immobilier en Suisse. 
                Participez à l'économie décentralisée de l'immobilier avec des retours optimisés.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPresale}
                size="lg" 
                className="bg-[#004AAD] hover:bg-[#003A8C] text-white px-8 py-3 text-lg font-medium"
              >
                Acheter TRUSSO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white px-8 py-3 text-lg"
              >
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">100k+</div>
                <div className="text-sm text-gray-600">Objectif Initial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5M</div>
                <div className="text-sm text-gray-600">Objectif Final</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">CH</div>
                <div className="text-sm text-gray-600">Marché Suisse</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Placeholder for real estate image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#004AAD]/20 to-[#004AAD]/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building className="w-24 h-24 text-[#004AAD] mx-auto mb-4" />
                  <p className="text-[#004AAD] font-medium">Immobilier Premium Suisse</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="text-sm font-medium text-gray-900">ROI Projeté</div>
              <div className="text-2xl font-bold text-green-600">+24%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="text-sm font-medium text-gray-900">Token Supply</div>
              <div className="text-lg font-bold text-[#004AAD]">1,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}