import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingUp, Shield, Calendar } from 'lucide-react';

const scenarios = {
  uncapped: {
    name: 'Uncapped Efficiency',
    description: 'AI efficiency without governance constraints',
    color: '#EF4444',
    milestones: [
      { year: 2025, label: 'Current Trajectory', value: 47, detail: '47,000+ threatened species' },
      { year: 2050, label: '40-74% Decline', value: 74, detail: 'Biodiversity decline reduction' },
      { year: 2075, label: '1 in 4 at Risk', value: 25, detail: '25% of species facing extinction' },
    ],
  },
  capped: {
    name: 'Capped Expansion',
    description: 'Efficiency gains used to reduce footprint',
    color: '#10B981',
    milestones: [
      { year: 2025, label: 'Governance Implementation', value: 47, detail: 'Policy levers activated' },
      { year: 2050, label: 'Stabilization', value: 50, detail: 'Efficiency used to reduce impact' },
      { year: 2075, label: 'Recovery Path', value: 30, detail: 'Stabilized extinction rates' },
    ],
  },
};

const timelineEvents = [
  { year: '2025', event: 'Current baseline', risk: 'high' },
  { year: '2030', event: 'AI adoption accelerates', risk: 'high' },
  { year: '2035', event: 'First wave of extinctions', risk: 'critical' },
  { year: '2040', event: 'Ecosystem tipping points', risk: 'critical' },
  { year: '2045', event: 'Cascading failures begin', risk: 'critical' },
  { year: '2050', event: 'Critical threshold', risk: 'extreme' },
  { year: '2060', event: 'Irreversible changes', risk: 'extreme' },
  { year: '2075', event: 'New ecological state', risk: 'extreme' },
];

export function ExtinctionRisk() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeScenario, setActiveScenario] = useState<'uncapped' | 'capped'>('uncapped');
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

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

  const currentScenario = scenarios[activeScenario];

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#0A0F1A] section-padding"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/extinction_visual.jpg"
          alt="Extinction visualization"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#0A0F1A]/80 to-[#0A0F1A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            What This Means for Extinction Risk
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            AI acts as a catalyst on known extinction drivers. Without governance, efficiency gains translate to expanded production and accelerated habitat loss.
          </p>
        </div>

        {/* Scenario Toggle */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex p-1 bg-white/5 rounded-lg">
            <button
              onClick={() => setActiveScenario('uncapped')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeScenario === 'uncapped'
                  ? 'bg-[#EF4444] text-white'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Uncapped Efficiency
              </div>
            </button>
            <button
              onClick={() => setActiveScenario('capped')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeScenario === 'capped'
                  ? 'bg-[#10B981] text-white'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Capped Expansion
              </div>
            </button>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div
          className={`card-dark p-8 mb-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold" style={{ color: currentScenario.color }}>
                {currentScenario.name}
              </h3>
              <p className="text-sm text-[#9CA3AF]">{currentScenario.description}</p>
            </div>
            <Calendar className="w-6 h-6 text-[#9CA3AF]" />
          </div>

          {/* Timeline Bar */}
          <div className="relative">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full" />
            
            {/* Progress Line */}
            <div
              className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full transition-all duration-1000"
              style={{
                width: '100%',
                background: `linear-gradient(90deg, ${currentScenario.color}40, ${currentScenario.color})`,
              }}
            />

            {/* Milestones */}
            <div className="relative flex justify-between">
              {currentScenario.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredYear(index)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* Node */}
                  <div
                    className="w-6 h-6 rounded-full border-4 transition-all duration-300"
                    style={{
                      borderColor: currentScenario.color,
                      background: hoveredYear === index ? currentScenario.color : '#0A0F1A',
                      boxShadow: hoveredYear === index ? `0 0 20px ${currentScenario.color}60` : 'none',
                    }}
                  />
                  
                  {/* Year Label */}
                  <span className="mt-3 text-lg font-bold text-[#F9FAFB]">{milestone.year}</span>
                  
                  {/* Detail Card */}
                  <div
                    className={`absolute top-12 w-48 p-3 card-dark transition-all duration-300 ${
                      hoveredYear === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <span className="text-xs font-mono" style={{ color: currentScenario.color }}>
                      {milestone.label}
                    </span>
                    <p className="text-xs text-[#9CA3AF] mt-1">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-4">
            {currentScenario.milestones.map((milestone) => (
              <div key={milestone.year} className="text-center">
                <div
                  className="text-3xl font-bold font-mono"
                  style={{ color: currentScenario.color }}
                >
                  {milestone.label.split(' ')[0]}
                </div>
                <div className="text-xs text-[#9CA3AF] mt-1">{milestone.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Timeline */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Event Timeline */}
          <div className="card-dark p-6">
            <h3 className="text-lg font-bold text-[#F9FAFB] mb-4">Projected Timeline (2025-2075)</h3>
            <div className="space-y-3">
              {timelineEvents.map((event) => (
                <div key={event.year} className="flex items-center gap-4">
                  <span className="text-sm font-mono text-[#9CA3AF] w-12">{event.year}</span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        event.risk === 'high'
                          ? '#F59E0B'
                          : event.risk === 'critical'
                          ? '#EF4444'
                          : '#7F1D1D',
                    }}
                  />
                  <span className="text-sm text-[#F9FAFB]">{event.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Explanation */}
          <div className="card-dark p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#EF4444] flex-shrink-0" />
              <h3 className="text-lg font-bold text-[#F9FAFB]">AI as Catalyst, Not Root Cause</h3>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-4">
              You won't find a single authoritative model saying "AI causes X more extinctions by 2075." What the evidence shows is:
            </p>
            <ol className="space-y-2 text-sm text-[#9CA3AF]">
              <li className="flex items-start gap-2">
                <span className="text-[#EF4444] font-bold">1.</span>
                <span>Established drivers (habitat loss, climate change, pollution) are well-documented</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF4444] font-bold">2.</span>
                <span>AI increases the intensity of those drivers (more land conversion, faster extraction, higher throughput)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF4444] font-bold">3.</span>
                <span>AI adoption acts as a multiplier on pressure, shifting "within decades" risk into earlier decades if governance doesn't constrain total expansion</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
