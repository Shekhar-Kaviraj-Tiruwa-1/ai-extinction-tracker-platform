import { ActionFramework } from '../sections/ActionFramework';
import { Leaf, ShoppingBag, Heart, Droplets, Megaphone, TrendingUp } from 'lucide-react';

const dietSteps = [
  { action: 'Start with Meatless Mondays', impact: 'Saves ~1,100 litres of water per week' },
  { action: 'Replace beef with legumes or lentils', impact: 'Reduces land use by ~50x per kg of protein' },
  { action: 'Switch to plant-based milk (oat, soy, almond)', impact: '3× less carbon than dairy' },
  { action: 'Adopt a fully plant-based diet', impact: '50–73% reduction in food-related carbon footprint' },
];

const consumptionSteps = [
  { product: 'Palm oil', action: 'Choose RSPO-certified sustainable palm oil products' },
  { product: 'Soy', action: 'Support companies with deforestation-free supply chain commitments' },
  { product: 'Paper & wood', action: 'Look for FSC (Forest Stewardship Council) certification' },
  { product: 'Beef', action: 'Choose local, grass-fed options — or eliminate entirely' },
];

const conservationOrgs = [
  { name: 'IUCN Red List', role: 'Funds species assessments and global conservation planning', url: 'https://www.iucnredlist.org' },
  { name: 'WWF', role: 'Protects critical habitats and endangered species worldwide', url: 'https://www.worldwildlife.org' },
  { name: 'BirdLife International', role: 'Species conservation with local community partners', url: 'https://www.birdlife.org' },
  { name: 'Rainforest Trust', role: 'Direct land purchase to protect tropical forests', url: 'https://www.rainforesttrust.org' },
  { name: 'Wild Animal Suffering', role: 'Research and advocacy on reducing suffering of wild animals — an often-overlooked dimension of biodiversity ethics', url: 'https://wildanimalsuffering.org' },
];

const recoveries = [
  { species: 'Iberian Lynx', fact: 'Recovered from 62 individuals (2001) to 648 (2022) — upgraded from Endangered to Vulnerable', color: '#10B981' },
  { species: 'Black Rhino', fact: 'Population increased from 2,300 (1990s) to 6,788 (2024) through anti-poaching and habitat protection', color: '#10B981' },
  { species: 'Kākāpō', fact: 'From 51 individuals to ~247 through intensive management and predator-free sanctuaries', color: '#10B981' },
  { species: 'Tigers', fact: '40% global population increase since 2015 — first increase in over a century', color: '#10B981' },
  { species: 'Tuna', fact: '4 of 7 major commercial tuna species now recovering under sustainable fishing quotas', color: '#10B981' },
];

export function ActionPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 rounded-full mb-4">
          What You Can Do
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Take Action
        </h1>
        <p className="text-lg text-[#9CA3AF] max-w-2xl">
          The extinction crisis is real and urgent. It is also not inevitable. Conservation
          works when we act — at the policy level, in markets, and in our own daily choices.
        </p>
      </div>

      {/* Policy & AI Governance pillars (existing section) */}
      <ActionFramework />

      {/* Individual Actions */}
      <section className="section-padding max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#F9FAFB] mb-2">Individual Actions</h2>
        <p className="text-[#9CA3AF] mb-10">
          Systemic change starts with individual behaviour. Here are the highest-impact things
          a person can do — ordered by ecological impact.
        </p>

        {/* 1. Diet */}
        <div className="card-dark p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-[#10B981]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F9FAFB]">1. Dietary Transition</h3>
              <p className="text-sm text-[#9CA3AF]">Highest single-action impact on land use, water, and emissions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              {dietSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm text-[#F9FAFB] font-medium">{step.action}</p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">{step.impact}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-dark p-5 bg-[#10B981]/5">
              <h4 className="text-sm font-bold text-[#F9FAFB] mb-4">If 1 billion people reduced meat by 50%:</h4>
              <div className="space-y-3">
                {[
                  { label: 'Water saved', value: '3.8 trillion litres/year' },
                  { label: 'Land freed', value: '150 million hectares' },
                  { label: 'CO₂ avoided', value: '2.8 billion tonnes/year' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-[#9CA3AF]">{item.label}</span>
                    <span className="text-[#10B981] font-mono font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#9CA3AF]/60 font-mono mt-4">Source: FAO; IPBES, 2019</p>
            </div>
          </div>
        </div>

        {/* 2. Conscious Consumption */}
        <div className="card-dark p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#F9FAFB]">2. Conscious Consumption</h3>
          </div>
          <p className="text-sm text-[#9CA3AF] mb-5">
            Beef production drives <span className="text-[#F9FAFB] font-semibold">41% of global deforestation</span>.
            Every purchase is a signal to supply chains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {consumptionSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                <span className="text-xs font-mono text-[#3B82F6] font-bold w-16 flex-shrink-0">{step.product}</span>
                <p className="text-sm text-[#9CA3AF]">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Support Conservation */}
        <div className="card-dark p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-bold text-[#F9FAFB]">3. Support Conservation Organisations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conservationOrgs.map((org, i) => (
              <a
                key={i}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div>
                  <p className="text-sm font-bold text-[#F9FAFB] group-hover:text-[#8B5CF6] transition-colors">{org.name}</p>
                  <p className="text-xs text-[#9CA3AF] mt-1">{org.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 4. Water */}
        <div className="card-dark p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/20 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-[#06B6D4]" />
            </div>
            <h3 className="text-xl font-bold text-[#F9FAFB]">4. Reduce Resource Consumption</h3>
          </div>
          <div className="p-4 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg">
            <p className="text-sm text-[#9CA3AF]">
              <span className="text-[#F9FAFB] font-medium">Key insight: </span>
              Reducing beef consumption by just 1 kg saves more water (~15,000 litres) than
              all typical household water conservation measures combined for an entire month.
              The biggest water reduction you can make is dietary, not domestic.
            </p>
          </div>
        </div>

        {/* 5. Advocacy */}
        <div className="card-dark p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="text-xl font-bold text-[#F9FAFB]">5. Advocacy & Education</h3>
          </div>
          <ul className="space-y-2">
            {[
              'Vote for candidates with strong environmental protection platforms',
              'Contact your elected representatives about conservation legislation',
              'Educate others — share the connection between food systems and biodiversity',
              'Support deforestation-free supply chain regulations and carbon pricing',
              'Advocate for wildlife trafficking enforcement and habitat protection',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#F59E0B]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conservation Successes */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#10B981]" />
          </div>
          <h2 className="text-2xl font-bold text-[#F9FAFB]">Conservation Works</h2>
        </div>
        <p className="text-[#9CA3AF] mb-6">
          The extinction crisis is dire. It is also not irreversible. These are documented recoveries — proof
          that when we act with sufficient commitment, species come back.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recoveries.map((r, i) => (
            <div key={i} className="card-dark p-5">
              <div className="text-sm font-bold text-[#10B981] mb-2">{r.species}</div>
              <p className="text-sm text-[#9CA3AF]">{r.fact}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#9CA3AF]/60 font-mono mt-4">
          Sources: IUCN Red List 2024; WWF; NZ Department of Conservation
        </p>
      </section>
    </div>
  );
}
