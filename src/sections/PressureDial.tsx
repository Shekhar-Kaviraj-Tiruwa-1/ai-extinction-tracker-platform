import { useEffect, useRef, useState } from 'react';
import { Check, TreePine, Link2, Calculator, Coins, Cpu, AlertTriangle } from 'lucide-react';

const governanceOptions = [
  {
    id: 'land',
    icon: TreePine,
    label: 'Land Protections',
    description: 'Establish and enforce protected areas and reserves',
    impact: 15,
  },
  {
    id: 'supply',
    icon: Link2,
    label: 'Deforestation-Free Supply Chains',
    description: 'Mandate traceability and certification for agricultural commodities',
    impact: 20,
  },
  {
    id: 'accounting',
    icon: Calculator,
    label: 'Carbon & Biodiversity Accounting',
    description: 'Require companies to report and reduce environmental impacts',
    impact: 10,
  },
  {
    id: 'subsidies',
    icon: Coins,
    label: 'Subsidy Reform',
    description: 'Redirect agricultural subsidies from intensive to sustainable practices',
    impact: 15,
  },
  {
    id: 'ai',
    icon: Cpu,
    label: 'AI Governance Conditions',
    description: 'Require "no-expansion" conditions for efficiency technologies',
    impact: 20,
  },
];

export function PressureDial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
    );
  };

  const totalReduction = selectedOptions.reduce((sum, id) => {
    const option = governanceOptions.find((o) => o.id === id);
    return sum + (option?.impact || 0);
  }, 0);

  const currentPressure = Math.max(20, 85 - totalReduction);
  const riskLevel =
    currentPressure > 70 ? 'Critical' : currentPressure > 50 ? 'High' : currentPressure > 30 ? 'Moderate' : 'Low';
  const riskColor =
    currentPressure > 70 ? '#EF4444' : currentPressure > 50 ? '#F59E0B' : currentPressure > 30 ? '#3B82F6' : '#10B981';

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#0A0F1A] section-padding"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `conic-gradient(from 0deg at 50% 50%, #EF4444 0deg, transparent 60deg, transparent 300deg, #EF4444 360deg)`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            The Pressure Dial
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Governance interventions can turn down extinction pressure. Toggle the levers below to see how policy changes the trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dial Visualization */}
          <div
            className={`card-dark p-8 flex flex-col items-center justify-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Gauge */}
            <div className="relative w-64 h-64 mb-8">
              {/* Background Arc */}
              <svg viewBox="0 0 200 120" className="w-full h-full">
                {/* Background track */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                
                {/* Colored arc */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#gaugeGradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray="251"
                  strokeDashoffset={251 - (251 * (100 - currentPressure)) / 100}
                  className="transition-all duration-700"
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="33%" stopColor="#3B82F6" />
                    <stop offset="66%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Needle */}
              <div
                className="absolute bottom-4 left-1/2 w-1 h-28 origin-bottom transition-transform duration-700"
                style={{
                  transform: `translateX(-50%) rotate(${-90 + (180 * currentPressure) / 100}deg)`,
                }}
              >
                <div className="w-full h-full bg-[#F9FAFB] rounded-full" />
              </div>
              
              {/* Center pivot */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F9FAFB] rounded-full" />
              
              {/* Value display */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-center">
                <div className="text-4xl font-bold font-mono" style={{ color: riskColor }}>
                  {currentPressure}%
                </div>
                <div className="text-sm text-[#9CA3AF]">Extinction Pressure</div>
              </div>
            </div>

            {/* Risk Level */}
            <div
              className="px-6 py-3 rounded-lg text-center"
              style={{ background: `${riskColor}20`, border: `1px solid ${riskColor}40` }}
            >
              <div className="text-sm text-[#9CA3AF]">Risk Level</div>
              <div className="text-2xl font-bold" style={{ color: riskColor }}>
                {riskLevel}
              </div>
            </div>

            {/* Impact Summary */}
            {selectedOptions.length > 0 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-[#9CA3AF]">
                  Governance interventions have reduced extinction pressure by{' '}
                  <span className="text-[#10B981] font-bold">{totalReduction}%</span>
                </p>
              </div>
            )}
          </div>

          {/* Governance Options */}
          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-lg font-bold text-[#F9FAFB] mb-4">Governance Levers</h3>
            
            {governanceOptions.map((option, index) => {
              const Icon = option.icon;
              const isSelected = selectedOptions.includes(option.id);
              
              return (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#10B981]/10 border border-[#10B981]/40'
                      : 'bg-white/5 border border-transparent hover:bg-white/10'
                  }`}
                  onClick={() => toggleOption(option.id)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${400 + index * 50}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'bg-[#10B981]' : 'bg-white/10'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#9CA3AF]" />
                          <span className="font-medium text-[#F9FAFB]">{option.label}</span>
                        </div>
                        <span className="text-sm font-mono text-[#10B981]">-{option.impact}%</span>
                      </div>
                      <p className="text-sm text-[#9CA3AF] mt-1">{option.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Key Message */}
            <div className="mt-6 p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#F9FAFB]">
                    <span className="font-bold">Governance off = dial turns up.</span> Without intervention, AI efficiency gains translate to expanded production and accelerated habitat loss.
                  </p>
                  <p className="text-sm text-[#9CA3AF] mt-2">
                    <span className="font-bold">Governance on = dial capped.</span> Policy levers can redirect efficiency toward footprint reduction rather than volume expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
