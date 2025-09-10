'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  FileCheck, 
  Smartphone, 
  TrendingUp, 
  Coins, 
  Home,
  Target,
  Zap
} from 'lucide-react';

interface RoadmapPhase {
  id: number;
  title: string;
  period: string;
  funding: string;
  status: 'completed' | 'active' | 'upcoming';
  icon: React.ElementType;
  description: string;
  achievements: string[];
  color: string;
}

export function Roadmap() {
  const phases: RoadmapPhase[] = [
    {
      id: 1,
      title: "Phase 1 - Fondation",
      period: "Q4 2025",
      funding: "Palier 1 - 100k",
      status: 'active',
      icon: Building,
      description: "Établissement des bases légales et structurelles du projet",
      achievements: [
        "Création de la société en Suisse",
        "Mise en place du cadre juridique pour compliance",
        "Obtention des licences nécessaires",
        "Constitution de l'équipe core"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Phase 2 - Premier Investissement",
      period: "Q1 2026",
      funding: "Palier 2 - 1M",
      status: 'upcoming',
      icon: Home,
      description: "Acquisition du premier bien immobilier et développement technologique",
      achievements: [
        "Acquisition du premier bien immobilier",
        "Développement de l'application de suivi des biens",
        "Début du développement du prediction market",
        "Mise en place des processus de due diligence"
      ],
      color: "green"
    },
    {
      id: 3,
      title: "Phase 3 - Expansion",
      period: "Q2 2026",
      funding: "Palier 3 - 2.5M",
      status: 'upcoming',
      icon: TrendingUp,
      description: "Croissance du portefeuille et finalisation des outils",
      achievements: [
        "Acquisition du deuxième bien immobilier",
        "Création du vault du token TRUSSO",
        "Application de suivi finalisée",
        "Lancement de la version beta du prediction market"
      ],
      color: "purple"
    },
    {
      id: 4,
      title: "Phase 4 - Lancement Token",
      period: "Q3 2026",
      funding: "Palier 4 - 5M",
      status: 'upcoming',
      icon: Coins,
      description: "Création officielle du token et premier burn",
      achievements: [
        "Création et distribution officielle du token TRUSSO",
        "Premier burn avec les profits du vault",
        "Acquisition du troisième bien immobilier",
        "Finalisation et lancement du prediction market"
      ],
      color: "orange"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'active':
        return 'bg-[#004AAD]/10 text-[#004AAD] border-[#004AAD]/20';
      case 'upcoming':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Complété';
      case 'active':
        return 'En cours';
      case 'upcoming':
        return 'À venir';
      default:
        return 'À venir';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Roadmap du Projet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plan de développement détaillé avec des objectifs clairs pour chaque palier de financement
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Version Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Ligne de progression */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative mb-16">
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.status === 'completed' 
                        ? 'bg-green-500' 
                        : phase.status === 'active' 
                        ? 'bg-[#004AAD]' 
                        : 'bg-gray-300'
                    }`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Contenu alterné */}
                  <div className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge 
                              variant="outline" 
                              className={getStatusColor(phase.status)}
                            >
                              {getStatusText(phase.status)}
                            </Badge>
                            <span className="text-sm text-gray-500">{phase.period}</span>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {phase.title}
                          </CardTitle>
                          <p className="text-[#004AAD] font-semibold">{phase.funding}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <ul className="space-y-2">
                            {phase.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-[#004AAD] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Version Mobile */}
          <div className="lg:hidden space-y-8">
            {phases.map((phase) => (
              <Card key={phase.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.status === 'completed' 
                        ? 'bg-green-500' 
                        : phase.status === 'active' 
                        ? 'bg-[#004AAD]' 
                        : 'bg-gray-300'
                    }`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(phase.status)}
                        >
                          {getStatusText(phase.status)}
                        </Badge>
                        <span className="text-sm text-gray-500">{phase.period}</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {phase.title}
                      </CardTitle>
                      <p className="text-[#004AAD] font-semibold text-sm">{phase.funding}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#004AAD] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}