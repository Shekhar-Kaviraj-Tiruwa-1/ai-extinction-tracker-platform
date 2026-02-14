import { useEffect, useRef } from 'react';

interface RiskClockProps {
  size?: number;
  showNumbers?: boolean;
  showTicks?: boolean;
  showCenterLabel?: boolean;
  rotation?: number;
  className?: string;
  animated?: boolean;
}

export function RiskClock({
  size = 400,
  showNumbers = true,
  showTicks = true,
  showCenterLabel = true,
  rotation = 0,
  className = '',
  animated = true,
}: RiskClockProps) {
  const ringRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !ringRef.current) return;

    // Subtle rotation animation
    let animationId: number;
    let currentRotation = rotation;
    
    const animate = () => {
      currentRotation += 0.02;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${currentRotation}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [animated, rotation]);

  const center = size / 2;
  const radius = (size - 40) / 2;
  const tickLength = 12;
  const tickCount = 60;

  // Generate ticks
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i * 360) / tickCount - 90;
    const isCritical = i === 0; // 12 o'clock position
    const isMajor = i % 5 === 0;
    const rad = (angle * Math.PI) / 180;
    const x1 = center + (radius - tickLength) * Math.cos(rad);
    const y1 = center + (radius - tickLength) * Math.sin(rad);
    const x2 = center + (radius - (isMajor ? 4 : 0)) * Math.cos(rad);
    const y2 = center + (radius - (isMajor ? 4 : 0)) * Math.sin(rad);
    
    return { x1, y1, x2, y2, isCritical, isMajor };
  });

  // Number positions
  const numbers = [
    { num: '12', x: center, y: center - radius + 50 },
    { num: '3', x: center + radius - 50, y: center + 8 },
    { num: '6', x: center, y: center + radius - 35 },
    { num: '9', x: center - radius + 50, y: center + 8 },
  ];

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* SVG Ring */}
      <svg
        ref={ringRef}
        width={size}
        height={size}
        className="absolute inset-0 will-change-transform"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Main ring circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className="clock-ring"
        />
        
        {/* Ticks */}
        {showTicks && ticks.map((tick, i) => (
          <line
            key={i}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            className={tick.isCritical ? 'clock-tick-critical' : 'clock-tick'}
            style={{
              strokeWidth: tick.isMajor ? 2 : 1,
              opacity: tick.isCritical ? 1 : tick.isMajor ? 0.5 : 0.25,
            }}
          />
        ))}
      </svg>

      {/* Numbers (outside SVG to stay upright) */}
      {showNumbers && (
        <>
          {numbers.map((n) => (
            <span
              key={n.num}
              className="absolute font-display font-bold text-[#F2F5FA]/40 select-none"
              style={{
                left: n.x,
                top: n.y,
                transform: 'translate(-50%, -50%)',
                fontSize: size * 0.15,
                lineHeight: 1,
              }}
            >
              {n.num}
            </span>
          ))}
        </>
      )}

      {/* Center Label */}
      {showCenterLabel && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ transform: 'translateY(-5%)' }}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#A7B1C8] mb-2">
            RISK ESCALATION
          </span>
          <span
            className="font-display font-bold text-[#F2F5FA] leading-none"
            style={{ fontSize: size * 0.12 }}
          >
            AI & ANIMALS
          </span>
          <span className="font-mono text-xs tracking-[0.15em] text-[#FF6A3D] mt-2">
            2026–2035
          </span>
        </div>
      )}

      {/* Stage indicators around the ring */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Low risk indicator */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[rgba(255,106,61,0.35)] glow-accent"
          style={{
            left: '50%',
            top: '15%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Moderate risk indicator */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[rgba(255,106,61,0.6)] glow-accent"
          style={{
            left: '85%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* High risk indicator */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[rgba(255,106,61,0.85)] glow-accent"
          style={{
            left: '50%',
            top: '85%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Critical risk indicator */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[#FF6A3D] glow-accent"
          style={{
            left: '15%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
