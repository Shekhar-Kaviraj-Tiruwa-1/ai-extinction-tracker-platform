import { useEffect, useRef, useState } from 'react';
import { RiskClock } from '../components/RiskClock';
import { ChevronDown } from 'lucide-react';

const stages = [
  {
    number: '01',
    name: 'LOW',
    description: 'Monitoring, early alerts',
    color: 'stage-low',
    bgColor: 'bg-stage-low',
  },
  {
    number: '02',
    name: 'MODERATE',
    description: 'Automation expands',
    color: 'stage-moderate',
    bgColor: 'bg-stage-moderate',
  },
  {
    number: '03',
    name: 'HIGH',
    description: 'Scale + lock-in',
    color: 'stage-high',
    bgColor: 'bg-stage-high',
  },
  {
    number: '04',
    name: 'CRITICAL',
    description: 'Irreversible harms',
    color: 'stage-critical',
    bgColor: 'bg-stage-critical',
  },
];

export function StagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aerial_farm.jpg"
          alt="Aerial view of farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/90 via-[#0B0F17]/70 to-[#0B0F17]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-20 lg:py-0">
        {/* Left: Stage List */}
        <div className="w-full lg:w-1/3 lg:pr-8 mb-12 lg:mb-0">
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl text-[#F2F5FA] mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            STAGES OF RISK
          </h2>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`group flex items-center gap-4 p-4 border border-white/10 hover:border-[#FF6A3D]/50 transition-all duration-500 cursor-default ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <span className={`font-mono text-sm font-bold ${stage.color}`}>
                  {stage.number}
                </span>
                <div className="flex-1">
                  <span className="font-display font-bold text-[#F2F5FA] group-hover:text-[#FF6A3D] transition-colors">
                    {stage.name}
                  </span>
                  <span className="block text-xs text-[#A7B1C8] mt-1">
                    {stage.description}
                  </span>
                </div>
                <div className={`w-2 h-2 rounded-full ${stage.bgColor.replace('bg-', 'bg-').replace('stage-', 'bg-')}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Center: Clock */}
        <div
          className={`w-full lg:w-1/3 flex justify-center mb-12 lg:mb-0 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <RiskClock
            size={Math.min(window.innerWidth * 0.6, 380)}
            showNumbers={true}
            showTicks={true}
            showCenterLabel={false}
            rotation={-45}
            animated={true}
          />
        </div>

        {/* Right: Description */}
        <div
          className={`w-full lg:w-1/3 lg:pl-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="card-sharp p-6 lg:p-8">
            <h3 className="font-display font-bold text-xl text-[#F2F5FA] mb-4">
              HOW TO READ THE CLOCK
            </h3>
            <p className="text-[#A7B1C8] text-sm leading-relaxed mb-6">
              Each stage marks a shift in scale, reversibility, and harm. 
              Move clockwise: risk escalates as AI systems become harder to stop or undo.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#A7B1C8]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,106,61,0.35)]" />
                <span>Low</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,106,61,0.6)]" />
                <span>Mod</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,106,61,0.85)]" />
                <span>High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-xs font-mono tracking-wider text-[#A7B1C8]">
          <span>SCROLL TO EXPLORE CASE STUDIES</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
