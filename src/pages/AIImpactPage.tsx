import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AIMechanisms } from '../sections/AIMechanisms';
import { Dna } from 'lucide-react';

// Data points: AI adoption in ag vs. wildlife population index (100 = 1970 baseline)
// Sources: WWF Living Planet Report 2024, FAO, OECD Agriculture reports
const correlationData = [
  { year: '2000', wildlifeIndex: 55, aiAdoption: 5, meatProduction: 230 },
  { year: '2003', wildlifeIndex: 52, aiAdoption: 8, meatProduction: 245 },
  { year: '2006', wildlifeIndex: 49, aiAdoption: 12, meatProduction: 258 },
  { year: '2009', wildlifeIndex: 46, aiAdoption: 18, meatProduction: 275 },
  { year: '2012', wildlifeIndex: 43, aiAdoption: 28, meatProduction: 295 },
  { year: '2015', wildlifeIndex: 39, aiAdoption: 42, meatProduction: 310 },
  { year: '2018', wildlifeIndex: 35, aiAdoption: 62, meatProduction: 325 },
  { year: '2021', wildlifeIndex: 31, aiAdoption: 78, meatProduction: 335 },
  { year: '2024', wildlifeIndex: 27, aiAdoption: 91, meatProduction: 340 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="card-dark p-3 text-xs">
        <p className="font-bold text-[#111827] mb-2">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name === 'Wildlife Index' ? ' (1970=100)' : entry.name === 'AI Adoption' ? '%' : 'M tonnes'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AIImpactPage() {
  return (
    <div className="min-h-screen bg-[#F7FFF7]">
      {/* Page Header */}
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 rounded-full mb-4">
          Technology & Ecology
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
          How AI Changes Animal Agriculture
        </h1>
        <p className="text-lg text-[#6B7280] max-w-2xl">
          AI does not cause extinctions directly. It removes the friction that used to limit how big
          industrial farming could get — making existing drivers of extinction faster and harder to stop.
        </p>
      </div>

      {/* Interactive Chart */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="card-dark p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#111827] mb-2">
              The Inverse Relationship: AI Growth vs. Wildlife Decline (2000–2024)
            </h2>
            <p className="text-sm text-[#6B7280]">
              As AI adoption in agriculture rises, monitored wildlife populations continue to fall.
              This chart shows the correlation — not direct causation — but the timing aligns with
              the expansion of precision livestock farming.
            </p>
          </div>

          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={correlationData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="year"
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#6B7280', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ color: '#6B7280', fontSize: '12px', paddingTop: '16px' }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="wildlifeIndex"
                name="Wildlife Index"
                stroke="#10B981"
                strokeWidth={2.5}
                dot={{ fill: '#10B981', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="aiAdoption"
                name="AI Adoption"
                stroke="#EF4444"
                strokeWidth={2.5}
                dot={{ fill: '#EF4444', r: 4 }}
                activeDot={{ r: 6 }}
                strokeDasharray="5 3"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="meatProduction"
                name="Meat Production (M t)"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
                opacity={0.6}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#6B7280]/70 font-mono">
            <p><span className="text-[#10B981]">Wildlife Index</span> — WWF Living Planet Index, normalized to 1970=100. 2024 value ~27 implies 73% decline.</p>
            <p><span className="text-[#EF4444]">AI Adoption</span> — Estimated % of large-scale livestock operations using AI/sensor-based monitoring. Sources: FAO, European Parliament 2025.</p>
            <p><span className="text-[#F59E0B]">Meat Production</span> — Global meat production in million tonnes. Source: FAO.</p>
          </div>
        </div>
      </section>

      {/* 3 Mechanism Cards (existing section) */}
      <AIMechanisms />

      {/* 4th Mechanism: Genetic Selection */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <div className="card-dark p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#8B5CF6]/20 flex-shrink-0">
              <Dna className="w-7 h-7 text-[#8B5CF6]" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6]">
                Genetic Optimization
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-1 mb-2">
                Genetic Selection & Breeding
              </h3>
              <p className="text-sm text-[#6B7280]">
                AI algorithms analyze genomic datasets to identify and select for traits that maximize output —
                faster growth, higher yield, better feed conversion. Animals are increasingly optimized
                as biological production machines.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-[#111827] mb-3">How it works</h4>
              <ul className="space-y-2">
                {[
                  'Beef cattle: selection for growth rate, meat quality, feed efficiency',
                  'Dairy cows: selection for milk yield, butterfat content, protein levels',
                  'Poultry: selection for rapid breast meat growth (broilers reach slaughter weight in 6 weeks)',
                  'Genomic data from millions of animals fed into predictive breeding models',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#8B5CF6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
              <h4 className="text-sm font-bold text-[#111827] mb-2">Extinction Linkage</h4>
              <p className="text-sm text-[#6B7280]">
                Breeding for output over genetic diversity narrows the gene pool of domestic species while
                simultaneously enabling larger and more intensive operations — requiring more feed crops
                (driving deforestation) and more water. The efficiency gains are captured as increased
                total throughput, not reduced environmental footprint.
              </p>
              <p className="text-xs text-[#6B7280]/60 font-mono mt-3">
                Source: FAO; European Parliament AI in Agriculture, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary table */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#111827] mb-4">AI Application vs. Environmental Consequence</h2>
        <div className="card-dark overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-[#6B7280] font-medium">AI Application</th>
                <th className="text-left p-4 text-[#6B7280] font-medium hidden md:table-cell">Intended Benefit</th>
                <th className="text-left p-4 text-[#6B7280] font-medium">Unintended Consequence</th>
              </tr>
            </thead>
            <tbody>
              {[
                { app: 'Automated milking', benefit: 'Labour reduction, hygiene', consequence: 'Enables larger dairy herds — more methane, more manure runoff' },
                { app: 'Precision feeding algorithms', benefit: 'Reduced feed waste', consequence: 'Optimises growth rates, increasing total throughput' },
                { app: 'Genetic selection for feed efficiency', benefit: 'Lower per-animal resource use', consequence: 'Creates faster-growing animals — more intensive production cycles' },
                { app: 'Drone pasture monitoring', benefit: 'Better grazing management', consequence: 'Enables larger herds on marginal land — accelerates land degradation' },
                { app: 'Predictive health monitoring', benefit: 'Reduced antibiotic use', consequence: 'Keeps more animals alive in stressful conditions — extends resource consumption' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0">
                  <td className="p-4 text-[#111827] font-medium">{row.app}</td>
                  <td className="p-4 text-[#6B7280] hidden md:table-cell">{row.benefit}</td>
                  <td className="p-4 text-[#EF4444]/80">{row.consequence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#6B7280]/60 font-mono mt-3">
          Sources: FAO; European Parliament, 2025; Reitano et al., 2025; ACM, 2025
        </p>
      </section>
    </div>
  );
}
