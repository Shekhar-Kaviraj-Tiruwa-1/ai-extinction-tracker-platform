import { useEffect, useRef, useState } from 'react';
import { Cpu, Factory, Beef, TreeDeciduous, Home, Skull, AlertTriangle, ChevronDown } from 'lucide-react';

const pathwayNodes = [
  {
    id: 1,
    title: 'AI Automation',
    icon: Cpu,
    description: 'Machine learning, sensors, and predictive analytics optimize every step',
    color: '#EF4444',
  },
  {
    id: 2,
    title: 'Industrial Efficiency',
    icon: Factory,
    description: 'Lower costs, higher throughput, reduced friction',
    color: '#F59E0B',
  },
  {
    id: 3,
    title: 'Agriculture Scale',
    icon: Beef,
    description: '70+ billion animals slaughtered annually',
    color: '#F59E0B',
  },
  {
    id: 4,
    title: 'Land Conversion',
    icon: TreeDeciduous,
    description: '41% of deforestation driven by beef production',
    color: '#EF4444',
  },
  {
    id: 5,
    title: 'Habitat Loss',
    icon: Home,
    description: '37% of ice-free land used for livestock',
    color: '#EF4444',
  },
  {
    id: 6,
    title: 'Accelerated Extinction',
    icon: Skull,
    description: '1,000-10,000x normal extinction rate',
    color: '#DC2626',
  },
  {
    id: 7,
    title: 'Ecological Collapse',
    icon: AlertTriangle,
    description: 'Cascading failures across interconnected systems',
    color: '#7F1D1D',
  },
];

export function HeroSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_bg.jpg"
          alt="Network visualization"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/80 via-[#0A0F1A]/60 to-[#0A0F1A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-20">
        {/* Title */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#F9FAFB] mb-4">
            When Efficiency Becomes{' '}
            <span className="text-[#EF4444]">Extinction</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            How AI automation accelerates biodiversity loss through industrial animal agriculture
          </p>
        </div>

        {/* Pathway Diagram */}
        <div
          className={`w-full max-w-6xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative">
            {/* Desktop: Horizontal Layout */}
            <div className="hidden lg:flex items-center justify-between gap-2">
              {pathwayNodes.map((node, index) => {
                const Icon = node.icon;
                const isActive = activeNode === node.id;
                const isPast = activeNode !== null && node.id < activeNode;
                
                return (
                  <div key={node.id} className="flex items-center">
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      {/* Node */}
                      <div
                        className={`w-16 h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'scale-110' : ''
                        } ${isPast ? 'opacity-100' : 'opacity-80'}`}
                        style={{
                          background: `radial-gradient(circle, ${node.color}40 0%, ${node.color}20 50%, transparent 70%)`,
                          boxShadow: isActive ? `0 0 30px ${node.color}60` : 'none',
                        }}
                      >
                        <div
                          className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                          style={{
                            borderColor: node.color,
                            background: isActive ? `${node.color}30` : 'rgba(0,0,0,0.5)',
                          }}
                        >
                          <Icon className="w-6 h-6 xl:w-7 xl:h-7" style={{ color: node.color }} />
                        </div>
                      </div>
                      
                      {/* Label */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-medium text-[#9CA3AF]">{node.title}</span>
                      </div>
                      
                      {/* Tooltip */}
                      {isActive && (
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 p-3 card-dark z-20">
                          <p className="text-xs text-[#F9FAFB] text-center">{node.description}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Connector Line */}
                    {index < pathwayNodes.length - 1 && (
                      <div className="w-8 xl:w-12 h-px mx-1 relative overflow-hidden">
                        <div
                          className="absolute inset-0 pathway-line"
                          style={{
                            background: `linear-gradient(90deg, ${node.color}, ${pathwayNodes[index + 1].color})`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile: Vertical Layout */}
            <div className="lg:hidden flex flex-col items-center gap-4">
              {pathwayNodes.map((node, index) => {
                const Icon = node.icon;
                const isActive = activeNode === node.id;
                
                return (
                  <div key={node.id} className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() => setActiveNode(isActive ? null : node.id)}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{
                          background: `radial-gradient(circle, ${node.color}40 0%, ${node.color}20 50%, transparent 70%)`,
                          boxShadow: isActive ? `0 0 20px ${node.color}60` : 'none',
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                          style={{
                            borderColor: node.color,
                            background: isActive ? `${node.color}30` : 'rgba(0,0,0,0.5)',
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: node.color }} />
                        </div>
                      </div>
                      
                      <div className="mt-2 text-center">
                        <span className="text-sm font-medium text-[#F9FAFB]">{node.title}</span>
                      </div>
                      
                      {isActive && (
                        <div className="mt-2 p-3 card-dark">
                          <p className="text-xs text-[#9CA3AF] text-center">{node.description}</p>
                        </div>
                      )}
                    </div>
                    
                    {index < pathwayNodes.length - 1 && (
                      <div className="w-px h-6 my-2" style={{ background: `linear-gradient(180deg, ${node.color}, ${pathwayNodes[index + 1].color})` }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Statistic */}
        <div
          className={`mt-20 lg:mt-24 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 card-dark">
            <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
            <span className="text-[#9CA3AF]">
              <span className="text-[#F9FAFB] font-bold">~1 million species</span> threatened with extinction
            </span>
          </div>
          <p className="mt-2 text-xs text-[#9CA3AF]">IPBES Global Assessment, 2019</p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown className="w-6 h-6 text-[#9CA3AF] animate-bounce" />
        </div>
      </div>
    </div>
  );
}
