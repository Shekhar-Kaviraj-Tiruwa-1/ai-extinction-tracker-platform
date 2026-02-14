import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, TreeDeciduous, Cloud, Cpu } from 'lucide-react';

const evidenceCards = [
  {
    id: 1,
    icon: AlertTriangle,
    stat: '~1 million',
    unit: 'species',
    description: 'threatened with extinction—many within decades if drivers intensify',
    source: 'IPBES, 2019',
    visual: 'progress',
    progress: 12.5,
    color: '#EF4444',
  },
  {
    id: 2,
    icon: TrendingDown,
    stat: '73%',
    unit: 'decline',
    description: 'average decline in monitored wildlife populations since 1970',
    source: 'WWF Living Planet Report, 2024',
    visual: 'trend',
    color: '#F59E0B',
  },
  {
    id: 3,
    icon: TreeDeciduous,
    stat: 'Land-use',
    unit: 'change',
    description: 'primary driver of biodiversity loss and deforestation',
    source: 'UNEP, 2023; IPBES, 2019',
    visual: 'drivers',
    color: '#EF4444',
  },
  {
    id: 4,
    icon: Cloud,
    stat: '7.1 Gt',
    unit: 'CO₂-eq',
    description: '~14.5% of anthropogenic emissions from livestock supply chains',
    source: 'FAO, 2013',
    visual: 'comparison',
    color: '#F59E0B',
  },
  {
    id: 5,
    icon: Cpu,
    stat: 'PLF +',
    unit: 'Optimization',
    description: 'AI increases throughput and scale in animal agriculture',
    source: 'European Parliament, 2025; Reitano et al., 2025',
    visual: 'growth',
    color: '#EF4444',
  },
];

const extinctionDrivers = [
  { name: 'Land-use change', percentage: 30, color: '#EF4444' },
  { name: 'Direct exploitation', percentage: 23, color: '#F59E0B' },
  { name: 'Climate change', percentage: 14, color: '#3B82F6' },
  { name: 'Pollution', percentage: 13, color: '#8B5CF6' },
  { name: 'Invasive species', percentage: 11, color: '#10B981' },
  { name: 'Other', percentage: 9, color: '#6B7280' },
];

export function EvidenceLibrary() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<number, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          evidenceCards.forEach((card) => {
            if (card.visual === 'progress') {
              let current = 0;
              const target = card.progress || 0;
              const interval = setInterval(() => {
                current += 0.5;
                if (current >= target) {
                  current = target;
                  clearInterval(interval);
                }
                setAnimatedStats((prev) => ({ ...prev, [card.id]: current }));
              }, 30);
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #EF4444 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            Evidence Library
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Key statistics documenting the biodiversity crisis and AI's role as an acceleration layer
          </p>
        </div>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidenceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`card-dark p-6 transition-all duration-700 hover:border-[${card.color}]/30`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${card.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <span className="citation-badge">{card.source}</span>
                </div>

                {/* Stat Display */}
                <div className="mb-3">
                  <span className="stat-number" style={{ color: card.color }}>
                    {card.stat}
                  </span>
                  <span className="text-lg text-[#9CA3AF] ml-2">{card.unit}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9CA3AF] mb-4">{card.description}</p>

                {/* Visual */}
                {card.visual === 'progress' && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-[#9CA3AF] mb-1">
                      <span>Threatened</span>
                      <span>{animatedStats[card.id]?.toFixed(1) || 0}% of 8M species</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${animatedStats[card.id] || 0}%`,
                          background: `linear-gradient(90deg, ${card.color}, ${card.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {card.visual === 'trend' && (
                  <div className="mt-4 h-12 flex items-end gap-1">
                    {[100, 85, 70, 55, 45, 35, 27].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(180deg, ${card.color}, ${card.color}40)`,
                          opacity: 0.3 + (i * 0.1),
                        }}
                      />
                    ))}
                  </div>
                )}

                {card.visual === 'drivers' && (
                  <div className="mt-4 space-y-2">
                    {extinctionDrivers.slice(0, 4).map((driver, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${driver.percentage * 2}%`,
                            background: driver.color,
                          }}
                        />
                        <span className="text-xs text-[#9CA3AF]">{driver.percentage}%</span>
                      </div>
                    ))}
                  </div>
                )}

                {card.visual === 'comparison' && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#9CA3AF] w-20">Livestock</span>
                      <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: '14.5%',
                            background: `linear-gradient(90deg, ${card.color}, ${card.color}80)`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-[#F9FAFB]">14.5%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#9CA3AF] w-20">Transport</span>
                      <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: '16%',
                            background: '#3B82F6',
                          }}
                        />
                      </div>
                      <span className="text-xs text-[#F9FAFB]">~16%</span>
                    </div>
                  </div>
                )}

                {card.visual === 'growth' && (
                  <div className="mt-4 flex items-center justify-center">
                    <svg viewBox="0 0 100 40" className="w-full h-10">
                      <path
                        d="M0,35 Q20,30 30,25 T50,20 T70,15 T100,5"
                        fill="none"
                        stroke={card.color}
                        strokeWidth="2"
                      />
                      <circle cx="100" cy="5" r="3" fill={card.color} />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Full Drivers Chart */}
        <div
          className={`mt-12 card-dark p-6 lg:p-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-bold text-[#F9FAFB] mb-6">
            Global Drivers of Biodiversity Loss
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {extinctionDrivers.map((driver, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm text-[#9CA3AF] w-32">{driver.name}</span>
                  <div className="flex-1 h-4 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: isVisible ? `${driver.percentage * 2}%` : '0%',
                        background: driver.color,
                        transitionDelay: `${600 + i * 100}ms`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-[#F9FAFB] w-12 text-right">{driver.percentage}%</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg">
                <p className="text-sm text-[#F9FAFB]">
                  <span className="font-bold">Key Insight:</span> Land-use change—primarily agriculture expansion—is the single largest driver of biodiversity loss, with animal agriculture being a major contributor through grazing and feed crop production.
                </p>
              </div>
              <p className="mt-4 text-xs text-[#9CA3AF]">
                Source: IPBES Global Assessment Report on Biodiversity and Ecosystem Services, 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
