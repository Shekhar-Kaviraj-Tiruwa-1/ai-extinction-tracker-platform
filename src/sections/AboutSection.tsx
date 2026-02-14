import { useEffect, useRef, useState } from 'react';
import { Users, Eye, Heart, Shield } from 'lucide-react';

const principles = [
  { label: 'Precaution', icon: Shield },
  { label: 'Transparency', icon: Eye },
  { label: 'Welfare', icon: Heart },
  { label: 'Accountability', icon: Users },
];

const audiences = [
  'Policymakers',
  'AI teams',
  'Advocates',
  'Researchers',
];

export function AboutSection() {
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
          src="/observer.jpg"
          alt="Wildlife observer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/95 via-[#0B0F17]/80 to-[#0B0F17]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl">
          {/* Left: Main Content */}
          <div className="lg:w-2/3">
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-[#F2F5FA] mb-8 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              WHY ANIMALS BELONG IN AI GOVERNANCE
            </h2>

            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-[#A7B1C8] text-base lg:text-lg leading-relaxed">
                AI systems increasingly decide what happens to animals—yet most frameworks ignore them. 
                From farm automation to wildlife monitoring, these technologies can amplify harms like 
                exploitation, intensified farming, and invasive surveillance.
              </p>

              <p className="text-[#A7B1C8] text-base lg:text-lg leading-relaxed">
                This project maps risk, surfaces case studies, and gives practitioners tools to act early. 
                By identifying intervention points before harms become irreversible, we can build AI systems 
                that respect the interests and wellbeing of all sentient beings.
              </p>
            </div>

            <div
              className={`mt-12 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="font-mono text-xs tracking-wider text-[#A7B1C8]">
                Built for interdisciplinary impact.
              </span>
            </div>
          </div>

          {/* Right: Info Card */}
          <div
            className={`lg:w-1/3 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="card-sharp p-6 lg:p-8 space-y-8">
              {/* Audience */}
              <div>
                <h3 className="font-display font-bold text-lg text-[#F2F5FA] mb-4">
                  Audience
                </h3>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((audience) => (
                    <span
                      key={audience}
                      className="px-3 py-1.5 bg-white/5 text-[#A7B1C8] text-sm"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Principles */}
              <div>
                <h3 className="font-display font-bold text-lg text-[#F2F5FA] mb-4">
                  Principles
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {principles.map((principle) => {
                    const Icon = principle.icon;
                    return (
                      <div
                        key={principle.label}
                        className="flex items-center gap-2 text-[#A7B1C8]"
                      >
                        <Icon className="w-4 h-4 text-[#FF6A3D]" />
                        <span className="text-sm">{principle.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Mission Statement */}
              <div>
                <p className="text-sm text-[#A7B1C8] italic">
                  "The question is not whether AI will affect animals, but whether we will 
                  choose to govern it before the harms become locked in."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
