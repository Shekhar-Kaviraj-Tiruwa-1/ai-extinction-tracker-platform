import { BookOpen, AlertTriangle, Calculator, Database } from 'lucide-react';

const fullBibliography = [
  { ref: 'IPBES 2019', full: 'IPBES (2019). Global Assessment Report on Biodiversity and Ecosystem Services. Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services, Bonn, Germany.', url: 'https://ipbes.net/global-assessment' },
  { ref: 'IUCN 2024', full: 'IUCN (2024). The IUCN Red List of Threatened Species. Version 2024-1. International Union for Conservation of Nature.', url: 'https://www.iucnredlist.org' },
  { ref: 'WWF 2024', full: 'WWF (2024). Living Planet Report 2024. World Wide Fund for Nature, Gland, Switzerland.', url: 'https://livingplanet.panda.org' },
  { ref: 'FAO 2013', full: 'Gerber, P.J. et al. (2013). Tackling climate change through livestock – A global assessment of emissions and mitigation opportunities. Food and Agriculture Organization of the United Nations (FAO), Rome.', url: 'https://www.fao.org/3/i3437e/i3437e.pdf' },
  { ref: 'Science 2024', full: 'Leclère, D. et al. (2024). Global trends and scenarios for terrestrial biodiversity and ecosystem services from 2020 to 2050. Science Journal.', url: 'https://www.science.org' },
  { ref: 'EU Parliament 2025', full: 'European Parliament (2025). Artificial Intelligence in Agriculture: Precision Livestock Farming — Policy Brief. Directorate-General for Internal Policies.', url: 'https://www.europarl.europa.eu' },
  { ref: 'ACM 2025', full: 'Reitano, T. et al. (2025). Computers and the Environment: AI, rebound effects, and the governance of agricultural technology. ACM Computing Surveys.', url: 'https://dl.acm.org' },
  { ref: 'IFAW 2024', full: 'IFAW (2024). Wildlife in Crisis: Species at Risk. International Fund for Animal Welfare.', url: 'https://www.ifaw.org' },
  { ref: 'WFN', full: 'Mekonnen, M.M. & Hoekstra, A.Y. (2012). A global assessment of the water footprint of farm animal products. Ecosystems 15(3): 401–415. Water Footprint Network.', url: 'https://waterfootprint.org' },
  { ref: 'Royal Society 2025', full: 'Maxwell, S. et al. (2025). Unpacking the extinction crisis: synergistic threats and the path to recovery. Proceedings of the Royal Society B.', url: 'https://royalsocietypublishing.org/journal/rspb' },
  { ref: 'Wild Animal Suffering', full: 'Wild Animal Suffering Research. A research and advocacy organisation dedicated to understanding and reducing the suffering of wild animals. Covers ecology, ethology, population biology, and policy.', url: 'https://wildanimalsuffering.org' },
];

export function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 rounded-full mb-4">
          Transparency
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Methodology
        </h1>
        <p className="text-lg text-[#9CA3AF]">
          This page explains what we are claiming, what we are not, how we calculated things,
          and where the data comes from. If you find an error, please use the Suggest tab.
        </p>
      </div>

      {/* What we claim */}
      <section className="section-padding max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#EF4444]/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
          </div>
          <h2 className="text-2xl font-bold text-[#F9FAFB]">What This Site Claims — and Does Not Claim</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-dark p-6 border-[#10B981]/30">
            <h3 className="text-base font-bold text-[#10B981] mb-4">We claim:</h3>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              {[
                'AI adoption in animal agriculture increases the scale and efficiency of operations',
                'Larger-scale operations require more land, water, and resources',
                'Habitat loss and overexploitation are the primary drivers of current extinctions',
                'There is a plausible causal chain from AI efficiency gains to accelerated habitat loss',
                'Governance interventions can redirect efficiency gains toward reduced footprint',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#10B981]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-dark p-6 border-[#EF4444]/20">
            <h3 className="text-base font-bold text-[#EF4444] mb-4">We do not claim:</h3>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              {[
                'AI is the primary or sole driver of biodiversity loss',
                'Specific species will go extinct by specific dates due to AI',
                'A precise number of additional extinctions attributable to AI technology',
                'The causal chain operates identically across all geographies and production systems',
                'Individual dietary change alone is sufficient to reverse the extinction crisis',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#EF4444]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pressure Dial Calculation */}
      <section className="section-padding pt-0 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <h2 className="text-2xl font-bold text-[#F9FAFB]">Pressure Dial: How It Works</h2>
        </div>

        <div className="card-dark p-6 mb-6">
          <h3 className="text-base font-bold text-[#F9FAFB] mb-3">Baseline: 85%</h3>
          <p className="text-sm text-[#9CA3AF] mb-4">
            The starting "extinction pressure" of 85% is an index representing the current state
            of cumulative anthropogenic pressure on biodiversity — derived from the IPBES assessment
            that established we are in the sixth mass extinction with extinction rates 1,000–10,000×
            above background. It is not a literal percentage of species at risk.
          </p>
          <p className="text-sm text-[#9CA3AF]">
            The floor (20%) represents the residual pressure that exists even under ideal governance —
            because some historical habitat loss is irreversible and climate change is already locked in
            to some degree.
          </p>
        </div>

        <div className="card-dark p-6 mb-6">
          <h3 className="text-base font-bold text-[#F9FAFB] mb-4">Governance Lever Percentages</h3>
          <p className="text-sm text-[#9CA3AF] mb-4">
            The impact percentages for each governance lever are indicative estimates based on the
            literature, not precise calculations. They are designed to illustrate the relative
            importance of each intervention:
          </p>
          <div className="space-y-3">
            {[
              { lever: 'Land Protections (−15%)', basis: 'Protected areas covering 30% of land could reduce extinction rates by 15–30% per IPBES scenarios. Midpoint estimate used.' },
              { lever: 'Deforestation-Free Supply Chains (−20%)', basis: 'IPBES identifies land-use change as the single largest driver (30%). Mandatory supply chain certification for major commodities could address roughly two-thirds of this driver.' },
              { lever: 'Carbon & Biodiversity Accounting (−10%)', basis: 'Systemic effect of making environmental costs visible in corporate decision-making — estimated at 10% based on corporate sustainability literature.' },
              { lever: 'Subsidy Reform (−15%)', basis: 'FAO estimates $540B/year in agricultural subsidies globally, much supporting intensification. Redirecting even half toward sustainable practices could significantly reduce pressure.' },
              { lever: 'AI Governance Conditions (−20%)', basis: 'If AI efficiency gains were redirected from volume expansion to footprint reduction, the rebound effect is neutralised. IPBES scenario modelling suggests this is comparable in impact to supply chain reform.' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm font-bold text-[#F59E0B] mb-1">{item.lever}</p>
                <p className="text-sm text-[#9CA3AF]">{item.basis}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-dark p-6">
          <h3 className="text-base font-bold text-[#F9FAFB] mb-3">Extinction Risk Scenarios</h3>
          <p className="text-sm text-[#9CA3AF] mb-3">
            The "Uncapped Efficiency" and "Capped Expansion" scenarios are adapted from the IPBES
            regional rivalry and global sustainability scenarios respectively (Science Journal, 2024).
          </p>
          <p className="text-sm text-[#9CA3AF]">
            The 2025–2075 projected timeline uses IPBES language ("within decades", "1 in 4 species
            by 2075 without intervention") and represents the scientific consensus range, not a precise
            forecast. Timeline events like "AI adoption accelerates" are editorial judgements about
            likely near-term developments, not predictions from a specific model.
          </p>
        </div>
      </section>

      {/* Data Sources */}
      <section className="section-padding pt-0 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
            <Database className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h2 className="text-2xl font-bold text-[#F9FAFB]">Data Sources: What We Used and Why</h2>
        </div>

        <div className="card-dark p-6 mb-6">
          <h3 className="text-base font-bold text-[#F9FAFB] mb-3">Primary Sources</h3>
          <p className="text-sm text-[#9CA3AF]">
            All statistics on this site are drawn from peer-reviewed publications or authoritative
            conservation organisations (IPBES, IUCN, WWF, FAO). We do not use secondary press
            sources for core statistics. Where a statistic appears in a secondary source, we trace
            it back to the original study before using it.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#F9FAFB]">Full Bibliography</h3>
          {fullBibliography.map((ref, i) => (
            <div key={i} className="card-dark p-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-1 rounded flex-shrink-0">
                  {ref.ref}
                </span>
                <div>
                  <p className="text-sm text-[#9CA3AF]">{ref.full}</p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#3B82F6] hover:underline mt-1 inline-block"
                  >
                    {ref.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#9CA3AF]">
              <span className="text-[#F9FAFB] font-medium">Corrections welcome. </span>
              If you find a statistic we have attributed incorrectly, a source that has been updated,
              or a calculation error, please use the{' '}
              <a href="/suggest" className="text-[#3B82F6] hover:underline">Suggest tab</a> to flag it.
              We update data as new IUCN assessments and living planet reports are published.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
