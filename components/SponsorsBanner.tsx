'use client';

export function SponsorsBanner() {
  const sponsors = [
    {
      name: "Credit Suisse",
      logo: (
        <svg width="120" height="40" viewBox="0 0 240 80" className="text-gray-400">
          <rect x="20" y="20" width="200" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="120" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            Credit Suisse
          </text>
        </svg>
      )
    },
    {
      name: "Swiss Re",
      logo: (
        <svg width="100" height="40" viewBox="0 0 200 80" className="text-gray-400">
          <rect x="20" y="20" width="160" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="100" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            Swiss Re
          </text>
        </svg>
      )
    },
    {
      name: "UBS",
      logo: (
        <svg width="80" height="40" viewBox="0 0 160 80" className="text-gray-400">
          <rect x="20" y="20" width="120" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="80" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            UBS
          </text>
        </svg>
      )
    },
    {
      name: "Zurich Insurance",
      logo: (
        <svg width="140" height="40" viewBox="0 0 280 80" className="text-gray-400">
          <rect x="20" y="20" width="240" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="140" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            Zurich Insurance
          </text>
        </svg>
      )
    },
    {
      name: "Lombard Odier",
      logo: (
        <svg width="130" height="40" viewBox="0 0 260 80" className="text-gray-400">
          <rect x="20" y="20" width="220" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="130" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            Lombard Odier
          </text>
        </svg>
      )
    },
    {
      name: "Julius Baer",
      logo: (
        <svg width="110" height="40" viewBox="0 0 220 80" className="text-gray-400">
          <rect x="20" y="20" width="180" height="40" rx="8" fill="currentColor" opacity="0.1"/>
          <text x="110" y="45" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
            Julius Baer
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 font-medium">
            Partenaires de confiance
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8 flex-wrap justify-center">
            {sponsors.map((sponsor, idx) => (
              <div key={sponsor.name} className="flex items-center">
                <div className="flex items-center justify-center h-12 hover:opacity-60 transition-opacity duration-200">
                  {sponsor.logo}
                </div>
                {idx < sponsors.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}