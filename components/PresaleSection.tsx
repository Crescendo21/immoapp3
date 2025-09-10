'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Target, TrendingUp, Clock } from 'lucide-react';

interface Tier {
  id: number;
  name: string;
  target: number;
  price: number;
  bonus: string;
  isActive: boolean;
  isCompleted: boolean;
}

export function PresaleSection() {
  const [currentAmount, setCurrentAmount] = useState(10000); // Montant actuel simulé
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  // Simuler un compte à rebours
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const tiers: Tier[] = [
    { id: 1, name: 'Palier 1', target: 100000, price: 0.10, bonus: '+20% bonus', isActive: true, isCompleted: false },
    { id: 2, name: 'Palier 2', target: 1000000, price: 0.15, bonus: '+15% bonus', isActive: false, isCompleted: false },
    { id: 3, name: 'Palier 3', target: 2500000, price: 0.20, bonus: '+10% bonus', isActive: false, isCompleted: false },
    { id: 4, name: 'Palier 4', target: 5000000, price: 0.25, bonus: '+5% bonus', isActive: false, isCompleted: false },
  ];

  const totalTarget = 5000000;
  const progressPercentage = (currentAmount / totalTarget) * 100;

  // Trouver le palier actuel
  const currentTier = tiers.find(tier => 
    currentAmount >= (tiers[tier.id - 2]?.target || 0) && 
    currentAmount < tier.target
  ) || tiers[tiers.length - 1];

  // Calculer le progrès du palier actuel
  const previousTierTarget = tiers[currentTier.id - 2]?.target || 0;
  const currentTierProgress = ((currentAmount - previousTierTarget) / (currentTier.target - previousTierTarget)) * 100;

  return (
    <section id="presale" className="py-20 bg-gradient-to-br from-[#004AAD]/5 via-white to-[#004AAD]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#004AAD]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium mb-4 animate-pulse">
            🔥 PRESALE ACTIVE - OFFRE LIMITÉE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Investissez dans l'avenir de l'immobilier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez la presale maintenant et bénéficiez de <span className="font-bold text-[#004AAD]">20% de bonus</span> + prix préférentiel
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Compte à rebours */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">⏰ Fin de l'offre spéciale dans :</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Jours', value: timeLeft.days },
                { label: 'Heures', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Secondes', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 border-2 border-[#004AAD]/20">
                  <div className="text-2xl font-bold text-[#004AAD]">{item.value.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Carte principale de presale */}
          <Card className="mb-8 border-2 border-[#004AAD]/20 shadow-2xl bg-gradient-to-br from-white via-white to-[#004AAD]/5 relative overflow-hidden">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"></div>
            
            <CardContent className="space-y-6">
              {/* Barre de progression avec animation */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">Progression du Palier 1</span>
                  <span className="font-bold">{(currentAmount / 100000 * 100).toFixed(1)}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-[#004AAD] to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${(currentAmount / 100000) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Avantages de la presale */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gradient-to-br from-[#004AAD]/10 to-[#004AAD]/5 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">+20%</div>
                  <div className="text-sm text-gray-600">Bonus Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#004AAD] mb-1">$0.10</div>
                  <div className="text-sm text-gray-600">Prix actuel</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">🥇</div>
                  <div className="text-sm text-gray-600">Early Adopter</div>
                </div>
              </div>

              {/* Paliers avec design amélioré */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                      tier.isCompleted
                        ? 'border-green-300 bg-green-50 shadow-green-100'
                        : tier.isActive
                        ? 'border-[#004AAD] bg-[#004AAD]/10 shadow-lg shadow-[#004AAD]/20 animate-pulse'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xs font-medium text-gray-600 mb-1">
                        {tier.name}
                      </div>
                      <div className="text-sm font-bold text-gray-900 mb-1">
                        ${tier.target.toLocaleString('fr-CH')}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        ${tier.price}
                      </div>
                      <Badge 
                        variant={tier.isCompleted ? "default" : tier.isActive ? "secondary" : "outline"}
                        className={`text-xs ${
                          tier.isCompleted
                            ? "bg-green-100 text-green-700"
                            : tier.isActive
                            ? "bg-[#004AAD] text-white"
                            : ""
                        }`}
                      >
                        {tier.isCompleted ? "✓" : tier.isActive ? "ACTUEL" : tier.bonus}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Boutons d'action améliorés */}
              <div className="text-center pt-6 space-y-4">
                <div className="space-y-2">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#004AAD] to-blue-600 hover:from-[#003A8C] hover:to-blue-700 text-white px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Coins className="mr-3 w-6 h-6" />
                    Acheter TRUSSO maintenant - 20% BONUS
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white">
                    💳 Payer par carte
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white">
                    ₿ Payer en crypto
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white">
                    🏦 Virement bancaire
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Témoignages sociaux */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-[#004AAD] mb-2">247</div>
                <div className="text-sm text-gray-600">Investisseurs rejoints</div>
                <div className="text-xs text-green-600 mt-1">+12 aujourd'hui</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
                <div className="text-xs text-gray-500 mt-1">156 avis</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Support client</div>
                <div className="text-xs text-gray-500 mt-1">Réponse &lt; 1h</div>
              </CardContent>
            </Card>
          </div>          
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #004AAD 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}