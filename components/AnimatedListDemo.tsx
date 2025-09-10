"use client";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface RealEstateActivity {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  type: "achat" | "vente" | "benefice" | "renovation";
  amount?: string;
}

let realEstateActivities = [
  {
    name: "Appartement acquis",
    description: "Genève - 3.5 pièces, 85m²",
    time: "2h ago",
    icon: "🏠",
    color: "#004AAD",
    type: "achat" as const,
    amount: "CHF 1.2M"
  },
  {
    name: "Villa vendue",
    description: "Lausanne - Profit de +32%",
    time: "5h ago",
    icon: "🏡",
    color: "#00C9A7",
    type: "vente" as const,
    amount: "CHF 2.8M"
  },
  {
    name: "Bénéfice généré",
    description: "Rénovation terminée",
    time: "1d ago",
    icon: "💰",
    color: "#FFB800",
    type: "benefice" as const,
    amount: "+CHF 450K"
  },
  {
    name: "Rénovation démarrée",
    description: "Zurich - Loft industriel",
    time: "2d ago",
    icon: "🔨",
    color: "#FF6B35",
    type: "renovation" as const,
    amount: "CHF 200K"
  },
  {
    name: "Penthouse acquis",
    description: "Montreux - Vue lac Léman",
    time: "3d ago",
    icon: "🏢",
    color: "#004AAD",
    type: "achat" as const,
    amount: "CHF 3.5M"
  },
  {
    name: "Chalet vendu",
    description: "Verbier - ROI 28%",
    time: "4d ago",
    icon: "⛰️",
    color: "#00C9A7",
    type: "vente" as const,
    amount: "CHF 4.2M"
  },
  {
    name: "Token Burn executé",
    description: "15,000 TRUSSO détruits",
    time: "5d ago",
    icon: "🔥",
    color: "#FF3D71",
    type: "benefice" as const,
    amount: "15K tokens"
  },
  {
    name: "Immeuble acquis",
    description: "Bâle - Immeuble de rapport",
    time: "1w ago",
    icon: "🏙️",
    color: "#004AAD",
    type: "achat" as const,
    amount: "CHF 5.8M"
  },
  {
    name: "Duplex rénové",
    description: "Fribourg - Rénovation complète",
    time: "1w ago",
    icon: "✨",
    color: "#FF6B35",
    type: "renovation" as const,
    amount: "CHF 180K"
  },
  {
    name: "Maison familiale vendue",
    description: "Nyon - Plus-value record",
    time: "2w ago",
    icon: "🏘️",
    color: "#00C9A7",
    type: "vente" as const,
    amount: "CHF 1.9M"
  },
];

// Dupliquer pour avoir plus d'activités
realEstateActivities = Array.from({ length: 3 }, () => realEstateActivities).flat();

const RealEstateNotification = ({ 
  name, 
  description, 
  icon, 
  color, 
  time, 
  type,
  amount 
}: RealEstateActivity) => {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "achat": return "ACQUISITION";
      case "vente": return "VENTE";
      case "benefice": return "BÉNÉFICE";
      case "renovation": return "RÉNOVATION";
      default: return "ACTIVITÉ";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "achat": return "bg-blue-100 text-blue-700";
      case "vente": return "bg-green-100 text-green-700";
      case "benefice": return "bg-yellow-100 text-yellow-700";
      case "renovation": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-2xl relative"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-xl">{icon}</span>
          {/* Petit indicateur animé pour les bénéfices */}
          {type === "benefice" && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-col overflow-hidden flex-1">
          <div className="flex flex-row items-center justify-between mb-1">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
              <span className="text-sm sm:text-base font-semibold">{name}</span>
            </figcaption>
            <div className="flex flex-col items-end">
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(type)}`}>
                {getTypeLabel(type)}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm font-normal text-gray-600 dark:text-white/60">
              {description}
            </p>
            <div className="flex flex-col items-end ml-2">
              {amount && (
                <span className={`text-sm font-bold ${
                  type === "benefice" ? "text-green-600" : 
                  type === "vente" ? "text-green-600" : 
                  type === "achat" ? "text-blue-600" : "text-orange-600"
                }`}>
                  {amount}
                </span>
              )}
              <span className="text-xs text-gray-400 mt-1">{time}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barre de progression pour les rénovations */}
      {type === "renovation" && (
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-orange-500 h-1.5 rounded-full transition-all duration-1000 animate-pulse" 
            style={{ width: "65%" }}
          ></div>
        </div>
      )}
      
      {/* Effet de brillance pour les ventes importantes */}
      {type === "vente" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/20 to-transparent transform -skew-x-12 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"></div>
      )}
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {realEstateActivities.map((item, idx) => (
          <RealEstateNotification {...item} key={idx} />
        ))}
      </AnimatedList>
      
      {/* Gradient fade effet */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}