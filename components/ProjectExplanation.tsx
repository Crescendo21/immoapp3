import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import AnimatedBeamMultipleOutputDemo  from "@/components/AnimatedBeamDemo"; // Import du nouveau composant
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const daoReviews = [
  {
    name: "Alex M.",
    decision: "ACHAT",
    body: "Je vote pour l'acquisition de cet immeuble parisien. Le rendement de 6.2% est solide et la tokenisation facilitera la liquidité.",
    rating: "🟢 POUR",
  },
  {
    name: "Sophie L.",
    decision: "VENTE", 
    body: "Il est temps de vendre notre position sur Berlin. Le marché local montre des signes de faiblesse selon mes analyses.",
    rating: "🔴 CONTRE",
  },
  {
    name: "Marc D.",
    decision: "HOLD",
    body: "Gardons nos tokens TRUSSO. La stratégie long terme de diversification immobilière européenne porte ses fruits.",
    rating: "🟡 NEUTRE",
  },
  {
    name: "Elena R.",
    decision: "ACHAT",
    body: "L'opportunité à Milan est exceptionnelle. 250k€ pour 4% d'un bien de 6.2M€, c'est du jamais vu !",
    rating: "🟢 POUR",
  },
  {
    name: "Thomas K.",
    decision: "GOUVERNANCE",
    body: "Je propose d'augmenter les frais de gestion de 1.5% à 2% pour financer notre expansion en Espagne.",
    rating: "📊 PROPOSITION",
  },
  {
    name: "Lisa W.",
    decision: "VENTE",
    body: "Liquidons 30% de notre portefeuille londonien. Brexit continue d'impacter négativement les rendements.",
    rating: "🔴 CONTRE",
  },
  {
    name: "Pierre B.",
    decision: "ACHAT", 
    body: "Ce complexe résidentiel à Lyon présente un potentiel énorme. La demande locative explose dans cette zone.",
    rating: "🟢 POUR",
  },
  {
    name: "Anna S.",
    decision: "STAKING",
    body: "Mes tokens TRUSSO en staking génèrent 12% APY. Pourquoi vendre quand on peut earn passivement ?",
    rating: "💎 HODL",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Avis de la DAO",
    description: "Découvrez les décisions et analyses de nos membres investisseurs.",
    href: "#",
    cta: "Rejoindre la DAO",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:25s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {daoReviews.map((review, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white flex items-center gap-2">
                  {review.name}
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {review.decision}
                  </span>
                </figcaption>
                <div className="text-xs font-medium mt-1">{review.rating}</div>
              </div>
            </div>
            <blockquote className="mt-3 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {review.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Restez informé des votes et décisions de la DAO en temps réel.",
    href: "#",
    cta: "Configurer",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute left-1 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Tokenisation Immobilière",
    description: "Transformez vos investissements immobiliers en tokens TRUSSO liquides.",
    href: "#",
    cta: "Découvrir",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendrier DAO",
    description: "Suivez les dates de votes et assemblées de la communauté.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Voir agenda",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Écosystème TRUSSO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre plateforme complète alliant gouvernance décentralisée, 
            intelligence artificielle et tokenisation immobilière pour des investissements optimisés
          </p>
        </div>
        
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}