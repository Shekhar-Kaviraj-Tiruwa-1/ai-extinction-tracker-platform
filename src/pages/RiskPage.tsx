import { ExtinctionRisk } from '../sections/ExtinctionRisk';
import { PressureDial } from '../sections/PressureDial';

export function RiskPage() {
  return (
    <div className="min-h-screen bg-[#0D1B0F]">
      {/* Page Header */}
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 rounded-full mb-4">
          Scenarios & Governance
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Risk & Scenarios
        </h1>
        <p className="text-lg text-[#9CA3AF] max-w-2xl">
          Two futures are possible. One where AI-driven efficiency continues to expand agricultural
          production without constraint. One where governance redirects those gains toward a smaller
          ecological footprint. The difference is policy, not technology.
        </p>
        <div className="mt-6 p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg max-w-2xl">
          <p className="text-sm text-[#9CA3AF]">
            <span className="text-[#F59E0B] font-medium">Important: </span>
            The timelines below represent a plausible risk trajectory based on current trends — not
            precise predictions. No model can say exactly when specific extinctions will occur.
            The purpose is to illustrate the difference between constrained and unconstrained pathways.
          </p>
        </div>
      </div>

      {/* Extinction Risk section (timeline + scenario toggle) */}
      <ExtinctionRisk />

      {/* Pressure Dial section */}
      <PressureDial />
    </div>
  );
}
