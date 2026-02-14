import { useEffect, useRef, useState } from 'react';
import { Landmark, Cpu, Users, ArrowRight, FileText, ExternalLink } from 'lucide-react';

const actionPillars = [
  {
    id: 'policy',
    icon: Landmark,
    title: 'Policy Levers',
    color: '#3B82F6',
    actions: [
      {
        title: 'Land Protections',
        description: 'Establish and expand protected areas, wildlife corridors, and conservation easements',
      },
      {
        title: 'Deforestation-Free Supply Chains',
        description: 'Mandate traceability and certification for soy, palm oil, beef, and timber',
      },
      {
        title: 'Subsidy Reform',
        description: 'Redirect agricultural subsidies from intensive production to sustainable practices',
      },
      {
        title: 'Carbon & Biodiversity Accounting',
        description: 'Require companies to measure, report, and reduce environmental impacts',
      },
    ],
    sources: ['UNEP, 2023'],
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI Governance',
    color: '#EF4444',
    actions: [
      {
        title: '"No-Expansion" Conditions',
        description: 'Require efficiency gains to reduce footprint, not increase production volume',
      },
      {
        title: 'Supply-Chain Impact Audits',
        description: 'Mandate transparency and assessment of AI-driven agricultural systems',
      },
      {
        title: 'Large Buyer Transparency',
        description: 'Require disclosure of environmental impacts from procurement decisions',
      },
      {
        title: 'Efficiency Standards',
        description: 'Set binding targets for absolute (not just per-unit) emission reductions',
      },
    ],
    sources: ['ACM, 2025'],
  },
  {
    id: 'market',
    icon: Users,
    title: 'Market & Community',
    color: '#10B981',
    actions: [
      {
        title: 'Procurement Standards',
        description: 'Adopt sustainable sourcing policies for institutions and corporations',
      },
      {
        title: 'Measurement & Disclosure',
        description: 'Support platforms that track and report supply chain impacts',
      },
      {
        title: 'Conservation Investment',
        description: 'Direct funding to biodiversity hotspots and threatened species recovery',
      },
      {
        title: 'Consumer Awareness',
        description: 'Educate on the connection between food choices and extinction risk',
      },
    ],
    sources: [],
  },
];

const resources = [
  {
    title: 'IPBES Global Assessment',
    description: 'Comprehensive scientific assessment of biodiversity and ecosystem services',
    link: 'https://ipbes.net/global-assessment',
  },
  {
    title: 'IUCN Red List',
    description: 'The world\'s most comprehensive information source on species extinction risk',
    link: 'https://www.iucnredlist.org',
  },
  {
    title: 'WWF Living Planet Report',
    description: 'Annual assessment of global biodiversity trends',
    link: 'https://livingplanet.panda.org',
  },
];

export function ActionFramework() {
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
      className="relative w-full bg-[#0A0F1A] section-padding"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            What Can Be Done
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Practical, non-apocalyptic pathways for intervention across policy, technology governance, and market action.
          </p>
        </div>

        {/* Action Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {actionPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <div
                key={pillar.id}
                className="card-dark p-6 transition-all duration-700 hover:border-white/20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${pillar.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F9FAFB]">{pillar.title}</h3>
                    {pillar.sources.length > 0 && (
                      <span className="text-xs text-[#9CA3AF] font-mono">
                        {pillar.sources.join('; ')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  {pillar.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: pillar.color }} />
                      <div>
                        <h4 className="text-sm font-medium text-[#F9FAFB]">{action.title}</h4>
                        <p className="text-xs text-[#9CA3AF]">{action.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Insight */}
        <div
          className={`card-dark p-8 mb-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                The Core Principle: Efficiency Without Governance Is Not Enough
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                AI and automation can be powerful tools for reducing environmental impact—but only if we explicitly design them to do so. Without governance constraints, efficiency gains will be captured as increased production volume, not reduced footprint.
              </p>
              <p className="text-[#9CA3AF]">
                The choice is not between technology and nature. The choice is between <span className="text-[#EF4444] font-medium">uncapped efficiency</span> (which accelerates extinction) and <span className="text-[#10B981] font-medium">governed efficiency</span> (which can genuinely reduce pressure on ecosystems).
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer circle - uncapped */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    opacity="0.3"
                  />
                  {/* Inner circle - governed */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeDasharray="220"
                    strokeDashoffset="110"
                  />
                  {/* Center text */}
                  <text x="50" y="48" textAnchor="middle" fill="#F9FAFB" fontSize="8" fontWeight="bold">
                    CHOICE
                  </text>
                  <text x="50" y="58" textAnchor="middle" fill="#9CA3AF" fontSize="5">
                    matters
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-lg font-bold text-[#F9FAFB] mb-4">Key Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <FileText className="w-5 h-5 text-[#9CA3AF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#F9FAFB] group-hover:text-[#3B82F6] transition-colors">
                      {resource.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-[#9CA3AF]">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
