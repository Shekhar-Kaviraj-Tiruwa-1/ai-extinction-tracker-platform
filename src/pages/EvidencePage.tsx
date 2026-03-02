import { EvidenceLibrary } from '../sections/EvidenceLibrary';

const allSources = [
  {
    id: 1,
    title: 'IPBES Global Assessment Report on Biodiversity and Ecosystem Services (2019)',
    url: 'https://ipbes.net/global-assessment',
    used: '~1 million species threatened; land-use change as primary driver; extinction rate 1,000–10,000× natural',
  },
  {
    id: 2,
    title: 'IUCN Red List of Threatened Species (2024)',
    url: 'https://www.iucnredlist.org',
    used: '~166,000 species assessed; 47,000+ threatened; 44% reef corals threatened; 24% freshwater species threatened',
  },
  {
    id: 3,
    title: 'WWF Living Planet Report (2024)',
    url: 'https://www.worldwildlife.org/pages/living-planet-report-2024',
    used: '73% average decline in monitored wildlife populations since 1970',
  },
  {
    id: 4,
    title: 'FAO — Livestock\'s Long Shadow (updated estimates)',
    url: 'https://www.fao.org/3/a0701e/a0701e00.htm',
    used: '14.5% of global GHG emissions from livestock supply chains; 77% of agricultural land used for livestock',
  },
  {
    id: 5,
    title: 'Science Journal — Global trends and scenarios for terrestrial biodiversity (2024)',
    url: 'https://www.science.org',
    used: 'Biodiversity decline scenarios 2050; 0.92–5.1% per decade under fossil-fuelled development',
  },
  {
    id: 6,
    title: 'European Parliament — AI in Agriculture report (2025)',
    url: 'https://www.europarl.europa.eu',
    used: 'Precision livestock farming (PLF) capabilities and scale; AI adoption rates in animal agriculture',
  },
  {
    id: 7,
    title: 'IFAW — Species at Risk Report (2024)',
    url: 'https://www.ifaw.org',
    used: '~4,000 critically endangered species; Javan Rhino ~18 individuals; Kākāpō ~116 individuals',
  },
  {
    id: 8,
    title: 'ACM — Computers and the Environment (2025)',
    url: 'https://dl.acm.org',
    used: 'Rebound effect / Jevons Paradox in AI-driven agriculture; governance conditions for efficiency technologies',
  },
  {
    id: 9,
    title: 'Water Footprint Network — Animal Product Water Footprints',
    url: 'https://waterfootprint.org',
    used: 'Beef: 15,415 L/kg; Pork: 6,000 L/kg; Chicken: 4,300 L/kg; Eggs: 3,300 L/kg',
  },
  {
    id: 10,
    title: 'Royal Society Proceedings B — Unpacking the extinction crisis (2025)',
    url: 'https://royalsocietypublishing.org/journal/rspb',
    used: 'Current extinction rate analysis; species vulnerability breakdown',
  },
];

export function EvidencePage() {
  return (
    <div className="min-h-screen bg-[#0D1B0F]">
      {/* Page Header */}
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 rounded-full mb-4">
          Data & Research
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Evidence Library
        </h1>
        <p className="text-lg text-[#9CA3AF] max-w-2xl mb-2">
          Every statistic on this page is drawn from peer-reviewed research or authoritative conservation assessments.
          Sources are listed at the bottom of this page.
        </p>
        <p className="text-sm text-[#9CA3AF]/60 font-mono">
          Data current as of early 2025. IUCN figures updated continuously.
        </p>
      </div>

      {/* Reuse existing EvidenceLibrary section */}
      <EvidenceLibrary />

      {/* Additional Data: Species Counts */}
      <section className="section-padding max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">IUCN Red List: Full Picture (2024)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Species assessed', value: '~166,000', color: '#3B82F6' },
            { label: 'Threatened with extinction', value: '47,000+', color: '#EF4444' },
            { label: 'Critically endangered', value: '~4,000', color: '#DC2626' },
            { label: 'Reef corals threatened', value: '44%', color: '#F59E0B' },
          ].map((item, i) => (
            <div key={i} className="card-dark p-5 text-center">
              <div className="text-2xl lg:text-3xl font-bold font-mono mb-1" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-xs text-[#9CA3AF]">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#9CA3AF]/60 font-mono">Source: IUCN Red List, 2024</p>
      </section>

      {/* Water Footprint Table */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">Water Cost of Animal Products</h2>
        <div className="card-dark overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-[#9CA3AF] font-medium">Product</th>
                <th className="text-right p-4 text-[#9CA3AF] font-medium">Water footprint (litres per kg)</th>
                <th className="text-left p-4 text-[#9CA3AF] font-medium hidden md:table-cell">Visual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { product: 'Beef', liters: 15415, max: 15415 },
                { product: 'Sheep / Goat meat', liters: 9000, max: 15415 },
                { product: 'Pork', liters: 6000, max: 15415 },
                { product: 'Chicken', liters: 4300, max: 15415 },
                { product: 'Eggs', liters: 3300, max: 15415 },
                { product: 'Lentils (for comparison)', liters: 900, max: 15415 },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="p-4 text-[#F9FAFB] font-medium">{row.product}</td>
                  <td className="p-4 text-right font-mono" style={{ color: row.liters > 5000 ? '#EF4444' : row.liters > 2000 ? '#F59E0B' : '#10B981' }}>
                    {row.liters.toLocaleString()}
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden w-48">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(row.liters / row.max) * 100}%`,
                          background: row.liters > 5000 ? '#EF4444' : row.liters > 2000 ? '#F59E0B' : '#10B981',
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#9CA3AF]/60 font-mono mt-3">Source: Water Footprint Network</p>
      </section>

      {/* Full Bibliography */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">Full Source List</h2>
        <p className="text-sm text-[#9CA3AF] mb-6">
          All data on this site is drawn from the sources below. Click to access each original report.
        </p>
        <div className="space-y-3">
          {allSources.map((source) => (
            <div key={source.id} className="card-dark p-5">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded flex-shrink-0">
                  [{source.id}]
                </span>
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#F9FAFB] hover:text-[#3B82F6] transition-colors"
                  >
                    {source.title}
                  </a>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    <span className="text-[#9CA3AF]/60">Used for:</span> {source.used}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
