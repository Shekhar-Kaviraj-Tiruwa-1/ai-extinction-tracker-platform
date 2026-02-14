import { useEffect, useRef, useState } from 'react';
import { Download, MapPin, FileText, Shield, AlertTriangle, Ban, RotateCcw, Users, Eye, Gavel } from 'lucide-react';

const stageCards = [
  {
    number: '01',
    name: 'LOW',
    description: 'Early monitoring, transparency registers, stakeholder mapping.',
    tags: [
      { label: 'Map uses', icon: MapPin },
      { label: 'Publish metrics', icon: FileText },
      { label: 'Engage advocates', icon: Users },
    ],
    color: 'stage-low',
    bgColor: 'bg-stage-low',
    borderColor: 'border-stage-low',
  },
  {
    number: '02',
    name: 'MODERATE',
    description: 'Introduce welfare-aligned procurement and audit rules.',
    tags: [
      { label: 'Procurement rules', icon: Gavel },
      { label: 'Welfare audits', icon: Eye },
      { label: 'Red lines', icon: Shield },
    ],
    color: 'stage-moderate',
    bgColor: 'bg-stage-moderate',
    borderColor: 'border-stage-moderate',
  },
  {
    number: '03',
    name: 'HIGH',
    description: 'Enforce limits before scale locks in; enable whistleblowing.',
    tags: [
      { label: 'Hard limits', icon: Gavel },
      { label: 'Whistleblowing', icon: AlertTriangle },
      { label: 'Moratoriums', icon: Ban },
    ],
    color: 'stage-high',
    bgColor: 'bg-stage-high',
    borderColor: 'border-stage-high',
  },
  {
    number: '04',
    name: 'CRITICAL',
    description: 'Emergency review, suspension, and restorative measures.',
    tags: [
      { label: 'Suspend', icon: Ban },
      { label: 'Restoration', icon: RotateCcw },
      { label: 'Remedy', icon: Shield },
    ],
    color: 'stage-critical',
    bgColor: 'bg-stage-critical',
    borderColor: 'border-stage-critical',
  },
];

export function ToolkitSection() {
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
      className="relative w-full min-h-screen bg-[#0B0F17] py-20 lg:py-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141B2A]/50 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Left: Title & Intro */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[#F2F5FA] mb-6">
              INTERVENTION TOOLKIT
            </h2>
            <p className="text-[#A7B1C8] text-base leading-relaxed">
              Governance is most effective when it matches the risk stage. 
              Here are early signals and actions for each phase of the clock.
            </p>
          </div>

          {/* Right: Download Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="card-sharp p-6 lg:p-8 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <Download className="w-5 h-5 text-[#FF6A3D]" />
                <h3 className="font-display font-bold text-lg text-[#F2F5FA]">
                  Download the framework
                </h3>
              </div>
              <p className="text-[#A7B1C8] text-sm mb-6">
                PDF + JSON (risk indicators, case references, policy levers).
              </p>
              <button className="w-full py-3 bg-[#FF6A3D] text-white font-medium hover:bg-[#FF6A3D]/90 transition-colors">
                Get the toolkit
              </button>
            </div>
          </div>
        </div>

        {/* Stage Cards */}
        <div className="space-y-6">
          {stageCards.map((stage, index) => (
            <div
              key={stage.number}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`card-sharp p-6 lg:p-8 border-l-4 ${stage.borderColor}`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Stage Number & Name */}
                  <div className="flex items-center gap-4 lg:w-48 flex-shrink-0">
                    <span className={`font-mono text-2xl font-bold ${stage.color}`}>
                      {stage.number}
                    </span>
                    <span className="font-display font-bold text-xl text-[#F2F5FA]">
                      {stage.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-[#A7B1C8] text-sm lg:text-base">
                    {stage.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:w-auto">
                    {stage.tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <span
                          key={tag.label}
                          className={`inline-flex items-center gap-2 px-3 py-2 ${stage.bgColor} text-[#F2F5FA] text-xs font-mono tracking-wide`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>{tag.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-xs font-mono tracking-wider text-[#A7B1C8]">
            Each intervention is designed to be implemented before the next risk stage escalates.
          </p>
        </div>
      </div>
    </div>
  );
}
