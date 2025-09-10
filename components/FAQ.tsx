'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Qu'est-ce que TRUSSO et comment fonctionne-t-il ?",
      answer: "TRUSSO est un token adossé à un hedge fund immobilier décentralisé spécialisé dans le flipping de biens immobiliers en Suisse. Le token permet aux investisseurs de participer aux bénéfices générés par l'achat, la rénovation et la revente de propriétés suisses. Une partie des profits est automatiquement réinvestie dans le rachat et la destruction (burn) de tokens, créant un mécanisme déflationniste."
    },
    {
      question: "Pourquoi investir dans l'immobilier suisse via TRUSSO ?",
      answer: "La Suisse offre un marché immobilier stable et premium avec un potentiel de croissance constant. Notre équipe d'experts en flipping immobilier combine cette stabilité avec des stratégies d'optimisation de valeur. Le token TRUSSO permet d'accéder à ce marché traditionnellement réservé aux gros investisseurs, tout en bénéficiant d'une gouvernance décentralisée et de mécanismes déflationnistes."
    },
    {
      question: "Comment fonctionne le système de burn des tokens ?",
      answer: "À chaque vente immobilière réussie, 50% des bénéfices nets sont utilisés pour racheter des tokens TRUSSO sur le marché, qui sont ensuite automatiquement détruits (burned). Cela réduit l'offre totale de tokens en circulation, augmentant potentiellement la valeur des tokens restants pour les détenteurs. Ce mécanisme crée une corrélation directe entre le succès des investissements immobiliers et la valeur du token."
    },
    {
      question: "Qu'est-ce que la gouvernance DAO et comment puis-je participer ?",
      answer: "La DAO (Organisation Autonome Décentralisée) permet aux détenteurs de tokens TRUSSO de voter sur les décisions importantes : sélection des biens immobiliers, stratégies d'investissement, allocation des fonds. Plus vous détenez de tokens, plus votre pouvoir de vote est important. Les propositions sont soumises via notre plateforme de gouvernance et les votes sont enregistrés sur la blockchain pour une transparence totale."
    },
    {
      question: "Quel est le rôle de l'intelligence artificielle dans le projet ?",
      answer: "Notre IA analyse les données du marché immobilier suisse en temps réel : prix, tendances, zones en développement, potentiel de plus-value. Elle alimente également notre marché prédictif permettant aux utilisateurs de parier sur l'évolution des prix immobiliers. Cette technologie aide à identifier les meilleures opportunités d'investissement et à optimiser le timing des achats et ventes."
    },
    {
      question: "Quels sont les risques associés à l'investissement dans TRUSSO ?",
      answer: "Comme tout investissement, TRUSSO comporte des risques : volatilité du marché immobilier, risques réglementaires, risques technologiques liés à la blockchain. Le marché immobilier suisse, bien que stable, peut subir des fluctuations. La valeur du token peut varier selon les performances des investissements immobiliers. Nous recommandons de ne jamais investir plus que ce que vous pouvez vous permettre de perdre."
    },
    {
      question: "Comment puis-je acheter des tokens TRUSSO ?",
      answer: "Pendant la presale, vous pouvez acheter des tokens TRUSSO directement via notre plateforme en utilisant des cryptomonnaies (ETH, USDT, USDC) ou des virements bancaires. Après le lancement officiel, les tokens seront disponibles sur des exchanges décentralisés. Un wallet crypto compatible (MetaMask, Trust Wallet) est nécessaire pour stocker vos tokens."
    },
    {
      question: "Quand aura lieu le premier burn de tokens ?",
      answer: "Le premier burn officiel est prévu pour Q3 2026, après l'acquisition et la revente réussie de notre premier bien immobilier. Cependant, des burns plus petits pourraient avoir lieu plus tôt si des opportunités d'investissement rapides se présentent. Tous les burns sont transparents et vérifiables sur la blockchain."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur TRUSSO et notre écosystème
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#004AAD] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est là pour vous aider
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@trusso.ch" 
                  className="px-6 py-2 bg-[#004AAD] text-white rounded-lg hover:bg-[#003A8C] transition-colors"
                >
                  Contacter le support
                </a>
                <a 
                  href="#" 
                  className="px-6 py-2 border border-[#004AAD] text-[#004AAD] rounded-lg hover:bg-[#004AAD] hover:text-white transition-colors"
                >
                  Rejoindre Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}