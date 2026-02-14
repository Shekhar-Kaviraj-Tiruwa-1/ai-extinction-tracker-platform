import { useEffect, useRef, useState } from 'react';
import { Bird, Network, ShieldAlert, Cloud, Bug, ArrowDown } from 'lucide-react';

const cascadeLevels = [
  {
    id: 1,
    icon: Bird,
    title: 'Species Loss',
    description: 'Pollinators, seed dispersers, predators, and ecosystem engineers disappear',
    examples: ['Bees & butterflies', 'Large herbivores', 'Apex predators', 'Keystone species'],
    color: '#F59E0B',
  },
  {
    id: 2,
    icon: Network,
    title: 'Food-Web Destabilization',
    description: 'Predator/prey imbalances cascade through interconnected species',
    examples: ['Trophic cascades', 'Invasive species expansion', 'Population explosions', 'Competitive exclusion'],
    color: '#EF4444',
  },
  {
    id: 3,
    icon: ShieldAlert,
    title: 'Reduced Resilience',
    description: 'Simplified ecosystems cannot withstand climate extremes',
    examples: ['Heat vulnerability', 'Drought sensitivity', 'Fire susceptibility', 'Flood damage'],
    color: '#EF4444',
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Lower Carbon Storage',
    description: 'Habitat loss reduces sequestration capacity, amplifying warming',
    examples: ['Deforestation', 'Wetland drainage', 'Soil degradation', 'Permafrost thaw'],
    color: '#DC2626',
  },
  {
    id: 5,
    icon: Bug,
    title: 'Disease Risk Pathways',
    description: 'Stressed ecosystems shift host dynamics and spillover risk',
    examples: ['Zoonotic spillover', 'Vector expansion', 'Immunocompromised populations', 'Novel pathogen emergence'],
    color: '#7F1D1D',
  },
];

const quantifiedImpacts = [
  {
    metric: '75%',
    label: 'of flowering plants',
    description: 'depend on animal pollination',
    source: 'IPBES, 2019',
  },
  {
    metric: '1 in 3',
    label: 'bites of food',
    description: 'depends on pollinators',
    source: 'FAO',
  },
  {
    metric: '$235-577B',
    label: 'annual crop production',
    description: 'depends on pollinators',
    source: 'IPBES, 2019',
  },
  {
    metric: '30%',
    label: 'of global carbon',
    description: 'stored in forests at risk',
    source: 'IPCC',
  },
];

export function EcologicalImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

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
          src="/deforestation.jpg"
          alt="Deforestation"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#0A0F1A]/85 to-[#0A0F1A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            Ecological Imbalance
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Accelerated species loss isn't just sad—it's structural. Ecosystems can cross thresholds and reorganize into less diverse, less stable states.
          </p>
        </div>

        {/* Cascading Effects Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cascade Flow */}
          <div
            className={`card-dark p-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-lg font-bold text-[#F9FAFB] mb-6">Cascading Effects</h3>
            
            <div className="space-y-4">
              {cascadeLevels.map((level, index) => {
                const Icon = level.icon;
                const isActive = activeLevel === level.id;
                
                return (
                  <div key={level.id}>
                    <div
                      className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        isActive ? 'bg-white/5' : 'hover:bg-white/5'
                      }`}
                      onMouseEnter={() => setActiveLevel(level.id)}
                      onMouseLeave={() => setActiveLevel(null)}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${level.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: level.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#F9FAFB]">{level.title}</h4>
                        <p className="text-sm text-[#9CA3AF]">{level.description}</p>
                        
                        {isActive && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {level.examples.map((example, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs rounded"
                                style={{ background: `${level.color}20`, color: level.color }}
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {index < cascadeLevels.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-[#9CA3AF] animate-bounce" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantified Impacts */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="card-dark p-6">
              <h3 className="text-lg font-bold text-[#F9FAFB] mb-6">Quantified Impacts</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {quantifiedImpacts.map((impact, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg"
                  >
                    <div className="text-2xl font-bold font-mono text-[#EF4444]">
                      {impact.metric}
                    </div>
                    <div className="text-sm text-[#F9FAFB] mt-1">{impact.label}</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">{impact.description}</div>
                    <div className="text-xs text-[#9CA3AF] mt-2 font-mono">{impact.source}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insight */}
            <div className="card-dark p-6">
              <h3 className="text-lg font-bold text-[#F9FAFB] mb-4">Why Species Loss Matters</h3>
              <p className="text-sm text-[#9CA3AF] mb-4">
                Species play critical roles in ecosystem function:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Pollination</span> — essential for plant reproduction and food security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Seed dispersal</span> — maintains forest diversity and regeneration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Pest control</span> — natural regulation of insect populations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Nutrient cycling</span> — soil formation and fertility maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Water purification</span> — wetland and watershed ecosystem services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  <span className="text-[#9CA3AF]"><span className="text-[#F9FAFB] font-medium">Food-web stability</span> — resilience to disturbances and shocks</span>
                </li>
              </ul>
            </div>

            {/* Current Indicators */}
            <div className="p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EF4444]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#EF4444] font-bold text-sm">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#F9FAFB] mb-1">Current Indicators</h4>
                  <p className="text-sm text-[#9CA3AF]">
                    A 73% average decline in monitored wildlife populations since 1970 signals widespread ecological stress and loss of abundance—often a precursor to local extinctions and reduced ecosystem function.
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-2 font-mono">WWF Living Planet Report, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
