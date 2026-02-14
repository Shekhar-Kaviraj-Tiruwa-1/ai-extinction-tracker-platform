import { useEffect, useRef, useState } from 'react';
import { Microscope, Truck, TrendingUp, AlertCircle, ChevronRight } from 'lucide-react';

const mechanismCards = [
  {
    id: 'plf',
    icon: Microscope,
    title: 'Precision Livestock Farming',
    subtitle: 'On-Farm Automation',
    description: 'AI-enabled systems monitor and optimize every aspect of animal production in real-time.',
    features: [
      'Sensors, cameras, and ML models monitor health and growth',
      'Real-time feed conversion tracking and optimization',
      'Predictive health analytics and early disease detection',
      'Automated scheduling and resource allocation',
    ],
    extinctionLink: 'Scaling production increases demand for feed crops → habitat conversion pressure',
    sources: ['European Parliament, 2025', 'Distante et al., 2025', 'Menezes et al., 2025'],
    color: '#EF4444',
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Supply-Chain Optimization',
    subtitle: 'Processing & Distribution',
    description: 'AI forecasting and logistics systems optimize the entire agricultural supply chain.',
    features: [
      'Demand forecasting reduces spoilage and waste',
      'Cold chain expansion into new markets',
      'Higher slaughter/processing utilization rates',
      'Tighter integration of global commodity flows',
    ],
    extinctionLink: 'Commodity expansion drives deforestation in biodiversity hotspots',
    sources: ['Reitano et al., 2025'],
    color: '#F59E0B',
  },
  {
    id: 'rebound',
    icon: TrendingUp,
    title: 'The Efficiency Trap',
    subtitle: 'System-Level Rebound',
    description: 'Even when AI reduces per-unit impacts, total environmental pressure can increase.',
    features: [
      'Per-unit efficiency gains lower production costs',
      'Lower costs enable market expansion',
      'Total volume increases if uncapped by policy',
      'Jevons paradox in action: efficiency → more consumption',
    ],
    extinctionLink: 'Efficiency without governance = more pressure, not less',
    sources: ['ACM, 2025'],
    color: '#DC2626',
  },
];

export function AIMechanisms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#0A0F1A] section-padding"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/agriculture_aerial.jpg"
          alt="Industrial agriculture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#0A0F1A]/90 to-[#0A0F1A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            How AI Changes Animal Agriculture
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Three mechanisms by which artificial intelligence amplifies the scale and environmental impact of animal production
          </p>
        </div>

        {/* Mechanism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mechanismCards.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedCard === card.id;
            
            return (
              <div
                key={card.id}
                className={`card-dark overflow-hidden transition-all duration-500 cursor-pointer ${
                  isExpanded ? 'lg:col-span-3' : ''
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={() => setExpandedCard(isExpanded ? null : card.id)}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: `${card.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: card.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      {card.sources.map((source, i) => (
                        <span key={i} className="citation-badge text-xs">
                          {source.split(',')[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: card.color }}>
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mt-1 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF]">{card.description}</p>

                  {/* Expand Indicator */}
                  <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: card.color }}>
                    <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-white/10 pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-bold text-[#F9FAFB] mb-3">Key Capabilities</h4>
                        <ul className="space-y-2">
                          {card.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: card.color }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Extinction Link */}
                      <div>
                        <div className="p-4 rounded-lg" style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: card.color }} />
                            <div>
                              <h4 className="text-sm font-bold text-[#F9FAFB] mb-1">Extinction Linkage</h4>
                              <p className="text-sm text-[#9CA3AF]">{card.extinctionLink}</p>
                            </div>
                          </div>
                        </div>

                        {/* Sources */}
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-[#9CA3AF] mb-2">FULL CITATIONS</h4>
                          {card.sources.map((source, i) => (
                            <p key={i} className="text-xs text-[#9CA3AF] font-mono">{source}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Insight */}
        <div
          className={`mt-12 card-dark p-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-[#EF4444]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">
                The Core Problem: AI as Catalyst, Not Root Cause
              </h3>
              <p className="text-[#9CA3AF]">
                AI rarely creates demand by itself; it <span className="text-[#F9FAFB] font-medium">reduces friction</span>. When a system's main brake is cost, labor, or coordination, AI can remove that brake. The risk is a <span className="text-[#EF4444] font-medium">rebound effect</span>: efficiency gains lower per-unit resource use but increase total volume produced and consumed—unless strong governance constraints exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
