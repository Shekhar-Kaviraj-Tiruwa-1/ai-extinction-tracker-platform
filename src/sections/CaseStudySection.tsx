import { useEffect, useRef, useState } from 'react';
import { RiskClock } from '../components/RiskClock';
import { ArrowRight } from 'lucide-react';

interface CaseStudySectionProps {
  caseNumber: string;
  stage: string;
  stageName: string;
  domain: string;
  title: string;
  description: string;
  image: string;
  stageColor: string;
  bgStageColor: string;
}

export function CaseStudySection({
  caseNumber,
  stage,
  stageName,
  domain,
  title,
  description,
  image,
  stageColor,
  bgStageColor,
}: CaseStudySectionProps) {
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
          src={image}
          alt={domain}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-[#0B0F17]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col px-6 lg:px-12 py-20">
        {/* Top Labels */}
        <div className="flex items-center justify-between mb-auto pt-16">
          {/* Case Number */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
            <span className="font-mono text-xs tracking-wider text-[#A7B1C8]">
              CASE STUDY {caseNumber}
            </span>
          </div>

          {/* Stage Badge */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${bgStageColor} border border-${stageColor.replace('stage-', 'stage-')}`}>
              <span className="font-mono text-xs tracking-wider text-[#F2F5FA]">
                STAGE {stage}
              </span>
              <span className={`font-display font-bold text-sm ${stageColor}`}>
                {stageName}
              </span>
            </div>
          </div>

          {/* Domain */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
            <span className="font-mono text-xs tracking-wider text-[#A7B1C8]">
              {domain}
            </span>
          </div>
        </div>

        {/* Center: Clock */}
        <div
          className={`flex justify-center my-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <RiskClock
            size={Math.min(window.innerWidth * 0.5, 320)}
            showNumbers={true}
            showTicks={true}
            showCenterLabel={false}
            rotation={parseInt(stage) * 45}
            animated={true}
          />
        </div>

        {/* Bottom: Story Card */}
        <div className="mt-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Story Card */}
            <div
              className={`max-w-lg transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="card-sharp p-6 lg:p-8">
                <h3 className="font-display font-bold text-xl lg:text-2xl text-[#F2F5FA] mb-4">
                  {title}
                </h3>
                <p className="text-[#A7B1C8] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <button className="group flex items-center gap-3 px-6 py-3 border border-[#FF6A3D]/50 text-[#FF6A3D] font-medium hover:bg-[#FF6A3D] hover:text-white transition-all duration-300">
                <span>Read the full brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
