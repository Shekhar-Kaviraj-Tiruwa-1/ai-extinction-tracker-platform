import { useState } from 'react';
import { AlertTriangle, MapPin, Users, Skull, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

type StatusType = 'Extinct' | 'Functionally Extinct' | 'Extinct in Wild' | 'Critically Endangered';

interface Species {
  id: number;
  name: string;
  latin: string;
  status: StatusType;
  statusYear: string;
  location: string;
  population: string;
  image?: string;
  primaryThreats: string[];
  ecosystemRole: string;
  cascadeEffects: string[];
  conservationNote?: string;
  source: string;
  learnMoreUrl: string;
}

const statusConfig: Record<StatusType, { color: string; bg: string; label: string }> = {
  'Extinct': { color: '#7F1D1D', bg: '#7F1D1D20', label: 'Extinct' },
  'Functionally Extinct': { color: '#EF4444', bg: '#EF444420', label: 'Functionally Extinct' },
  'Extinct in Wild': { color: '#DC2626', bg: '#DC262620', label: 'Extinct in Wild' },
  'Critically Endangered': { color: '#F59E0B', bg: '#F59E0B20', label: 'Critically Endangered' },
};

const species: Species[] = [
  {
    id: 1,
    name: 'Baiji River Dolphin',
    latin: 'Lipotes vexillifer',
    status: 'Functionally Extinct',
    statusYear: '2006',
    location: 'Yangtze River, China',
    population: '0 confirmed since 2002',
    primaryThreats: ['Bycatch in fishing gear (gillnets, electro-fishing)', 'Dam construction (Three Gorges Dam, 1994)', 'Shipping traffic and noise pollution', 'Industrial pollution'],
    ecosystemRole: 'Apex predator regulating fish populations in the Yangtze. Its disappearance signals broader ecosystem collapse.',
    cascadeEffects: ['Fish population imbalances without predation control', 'Nutrient cycling disruption in river', 'Yangtze finless porpoise now faces identical threats', 'River ecosystem no longer supports apex predators'],
    source: 'IUCN Red List; Turvey et al., 2007',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Baiji',
  },
  {
    id: 2,
    name: 'Western Black Rhino',
    latin: 'Diceros bicornis longipes',
    status: 'Extinct',
    statusYear: '2011',
    location: 'West Africa (last seen Cameroon, 2006)',
    population: '0 — declared extinct 2011',
    primaryThreats: ['Systematic poaching for horn (traditional medicine trade)', 'Inadequate anti-poaching enforcement', 'Political instability in range states', 'Habitat fragmentation'],
    ecosystemRole: '"Ecosystem engineers" — their browsing shapes savanna vegetation, creating grazing opportunities for other herbivores and maintaining biodiversity.',
    cascadeEffects: ['Savanna vegetation structure altered — bush encroachment where rhinos no longer browse', 'Loss of dung-based nutrient cycling and seed dispersal', 'Other herbivore species lose habitat benefits from rhino activity'],
    conservationNote: 'Total black rhino population (all subspecies) increased from 2,300 in the 1990s to 6,788 by 2024 through intensive conservation.',
    source: 'IUCN Red List, 2011; WWF',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Western_black_rhinoceros',
  },
  {
    id: 3,
    name: "Spix's Macaw",
    latin: 'Cyanopsitta spixii',
    status: 'Extinct in Wild',
    statusYear: '2000',
    location: 'Caatinga, Brazil',
    population: '~200 in captivity; small reintroduced group',
    primaryThreats: ['Illegal pet trade (intensified 1960s–1980s)', 'Habitat loss from agriculture and livestock expansion', 'Invasive African bees competing for nest cavities', 'Small population vulnerability'],
    ecosystemRole: 'Seed disperser for native trees, particularly the Caribbean trumpet tree — maintaining riparian gallery forests in the semiarid Caatinga.',
    cascadeEffects: ['Reduced seed dispersal of specific Caatinga tree species', 'Gallery forest regeneration disrupted', 'Reintroduction programme underway since 2022 but threatened by circovirus outbreak (2025)'],
    conservationNote: 'Made famous by the animated film "Rio". A reintroduction project began in 2020, with first releases in 2022.',
    source: 'BirdLife International; IUCN Red List',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Spix%27s_macaw',
  },
  {
    id: 4,
    name: 'Passenger Pigeon',
    latin: 'Ectopistes migratorius',
    status: 'Extinct',
    statusYear: '1914',
    location: 'Eastern North America',
    population: '0 — last individual "Martha" died 1 September 1914',
    primaryThreats: ['Commercial hunting on industrial scale', 'Deforestation eliminating nesting habitat', 'Communal breeding made populations vulnerable to hunting', 'Population fell below viable threshold'],
    ecosystemRole: 'Mega-seed disperser and forest engineer — billions of birds transported acorns and beechnuts across entire regions, modified canopy structure, and fertilized forests.',
    cascadeEffects: ['Forest composition shifted from white oak to red oak dominance (still ongoing)', 'Lyme disease incidence increased — pigeons controlled acorn crops, limiting white-footed mice that carry Lyme bacteria', 'Oak forest regeneration suppressed', 'Canebrake ecosystems largely disappeared in southeastern US'],
    conservationNote: 'Extinction catalysed modern conservation law: Lacey Act (1900), Migratory Bird Treaty Act (1918), Endangered Species Act (1973).',
    source: 'Ellsworth & McComb, 2003; Blockstein, 1998',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Passenger_pigeon',
  },
  {
    id: 5,
    name: 'Amur Leopard',
    latin: 'Panthera pardus orientalis',
    status: 'Critically Endangered',
    statusYear: 'Since 1996',
    location: 'Russian Far East, Northeast China',
    population: '~130 individuals (2024)',
    primaryThreats: ['Habitat loss from fires and development', 'Prey scarcity (deer, wild boar populations declining)', 'Road infrastructure fragmenting range', 'Inbreeding from small isolated population'],
    ecosystemRole: 'Apex predator regulating populations of roe deer, sika deer, and wild boar — preventing overgrazing and maintaining forest ecosystem balance.',
    cascadeEffects: ['Without predation, prey species overgraze forest understory', 'Reduced forest regeneration from deer browse pressure', 'Cascading effects on smaller predators and scavengers'],
    conservationNote: 'Protected areas now cover 90% of current range. Population slowly increasing from a low of ~30 individuals in the 1990s.',
    source: 'WWF; IUCN Red List',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Amur_leopard',
  },
  {
    id: 6,
    name: 'Vaquita',
    latin: 'Phocoena sinus',
    status: 'Critically Endangered',
    statusYear: 'Since 1996',
    location: 'Gulf of California, Mexico',
    population: 'Fewer than 20 individuals (2024)',
    primaryThreats: ['Bycatch in illegal gillnets (fishing for totoaba fish)', 'Organised crime involvement in totoaba bladder trade', 'Inadequate enforcement of fishing bans despite government efforts'],
    ecosystemRole: 'Indicator species for Gulf of California ecosystem health. Its loss signals collapse of a unique marine environment that supports hundreds of species.',
    cascadeEffects: ['Loss signals broader ecosystem stress in the Upper Gulf', 'Totoaba fishery collapse likely regardless of vaquita', 'Loss of charismatic indicator removes conservation attention from broader ecosystem'],
    source: 'IUCN Red List; Jaramillo-Legorreta et al., 2019',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Vaquita',
  },
  {
    id: 7,
    name: 'Javan Rhino',
    latin: 'Rhinoceros sondaicus',
    status: 'Critically Endangered',
    statusYear: 'Since 1996',
    location: 'Ujung Kulon National Park, Indonesia',
    population: '~18 individuals — all in one location',
    primaryThreats: ['Historical poaching for horn', 'All individuals in single location (catastrophic risk)', 'Habitat quality decline from invasive Arenga palm', 'Vietnamese subspecies declared extinct 2011'],
    ecosystemRole: '"Gardeners" of forest habitat — their browsing creates clearings and dung disperses seeds across the landscape.',
    cascadeEffects: ['Ujung Kulon forest composition changing as rhino browsing declines', 'Arenga palm invading cleared areas without rhino activity', 'Single population means one disease outbreak or natural disaster could cause extinction'],
    source: 'IUCN Red List; IFAW, 2024',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Javan_rhinoceros',
  },
  {
    id: 8,
    name: 'North Atlantic Right Whale',
    latin: 'Eubalaena glacialis',
    status: 'Critically Endangered',
    statusYear: 'Since 2020 uplisting',
    location: 'Atlantic Coast of North America',
    population: '~400 individuals (2024)',
    primaryThreats: ['Ship strikes — vessels cannot slow down quickly enough', 'Entanglement in fishing gear (lobster, crab lines)', 'Climate change shifting prey (copepods) northward', 'Low reproductive rate — females calve every 3–5 years'],
    ecosystemRole: 'Transport nutrients across ocean layers through vertical movement and waste production — supporting plankton productivity and marine food webs.',
    cascadeEffects: ['Reduced nutrient cycling in North Atlantic feeding grounds', 'Loss of "whale pump" effect decreasing phytoplankton productivity', 'Cascading effects on fish populations dependent on plankton base'],
    conservationNote: 'Mirrors the Baiji situation in the 1980s. Despite legal protections since 1935, population has not recovered.',
    source: 'NOAA Fisheries; IUCN Red List',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/North_Atlantic_right_whale',
  },
  {
    id: 9,
    name: 'Sumatran Orangutan',
    latin: 'Pongo abelii',
    status: 'Critically Endangered',
    statusYear: 'Since 2000',
    location: 'Sumatra, Indonesia',
    population: 'Fewer than 14,000 individuals',
    primaryThreats: ['Deforestation for palm oil plantations', 'Illegal hunting and capture', 'Forest fires (often deliberate land clearing)', 'Habitat fragmentation isolating populations'],
    ecosystemRole: '"Gardeners of the forest" — disperse seeds of hundreds of tree species across vast areas, maintaining diversity and health of tropical rainforests.',
    cascadeEffects: ['Reduced seed dispersal leads to less diverse forest regeneration', 'Forests become dominated by fewer species over time', 'Loss of large-bodied seed dispersers affects trees that co-evolved with orangutans'],
    conservationNote: 'All three orangutan species (Sumatran, Bornean, Tapanuli) are critically endangered. The Tapanuli orangutan, discovered in 2017, has only ~800 individuals.',
    source: 'IUCN Red List; Wich et al., 2016',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/Sumatran_orangutan',
  },
  {
    id: 10,
    name: 'Kākāpō',
    latin: 'Strigops habroptilus',
    status: 'Critically Endangered',
    statusYear: 'Since 2000',
    location: 'Offshore islands, New Zealand',
    population: '~247 individuals (2024 — increasing)',
    primaryThreats: ['Predation by introduced cats and rats on mainland', 'Disease vulnerability (aspergillosis, circovirus)', 'Low reproductive rate — breed only in mast years', 'Genetic bottleneck from near-extinction'],
    ecosystemRole: 'Once important seed dispersers and browsers in New Zealand forests. Their flightlessness evolved in the absence of mammalian predators.',
    cascadeEffects: ['Loss of large-bodied ground-dwelling browsers would alter forest floor vegetation', 'Their recovery demonstrates that intensive intervention can genuinely pull species back'],
    conservationNote: 'One of conservation\'s great success stories. Rescued from 51 individuals in the 1990s through intensive management including individual health monitoring, supplemental feeding, and predator-free island sanctuaries.',
    source: 'NZ Department of Conservation; IUCN Red List',
    learnMoreUrl: 'https://en.wikipedia.org/wiki/K%C4%81k%C4%81p%C5%8D',
  },
];

function SpeciesCard({ s }: { s: Species }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = statusConfig[s.status];

  return (
    <div className="card-dark overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <a
              href={s.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-xl font-bold text-[#F9FAFB] group-hover:underline">{s.name}</h3>
              <ExternalLink className="w-4 h-4 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm italic text-[#9CA3AF]">{s.latin}</p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: cfg.bg, color: cfg.color }}
            >
              {cfg.label}
            </span>
            <span className="text-xs text-[#9CA3AF] font-mono">{s.statusYear}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-[#9CA3AF] mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" style={{ color: cfg.color }} />
            {s.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" style={{ color: cfg.color }} />
            {s.population}
          </span>
        </div>

        <p className="text-sm text-[#9CA3AF]">
          <span className="text-[#F9FAFB] font-medium">Ecosystem role: </span>
          {s.ecosystemRole}
        </p>

        {s.conservationNote && (
          <div className="mt-4 p-3 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
            <p className="text-xs text-[#9CA3AF]">
              <span className="text-[#10B981] font-medium">Note: </span>
              {s.conservationNote}
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mt-4 text-sm transition-colors"
          style={{ color: cfg.color }}
        >
          {expanded ? (
            <><ChevronUp className="w-4 h-4" /> Show less</>
          ) : (
            <><ChevronDown className="w-4 h-4" /> Threats & cascade effects</>
          )}
        </button>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="border-t border-white/10 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-bold text-[#F9FAFB] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
              Primary Threats
            </h4>
            <ul className="space-y-2">
              {s.primaryThreats.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cfg.color }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F9FAFB] mb-3 flex items-center gap-2">
              <Skull className="w-4 h-4 text-[#F59E0B]" />
              Cascade Effects
            </h4>
            <ul className="space-y-2">
              {s.cascadeEffects.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#F59E0B]" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-[#9CA3AF]/60 font-mono">Source: {s.source}</p>
            <a
              href={s.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
              style={{ background: `${cfg.color}20`, color: cfg.color, border: `1px solid ${cfg.color}40` }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Learn more →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function SpeciesPage() {
  const [filter, setFilter] = useState<'all' | StatusType>('all');

  const filtered = filter === 'all' ? species : species.filter((s) => s.status === filter);

  return (
    <div className="min-h-screen bg-[#0A0F1A]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 rounded-full mb-4">
          Case Studies
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Species
        </h1>
        <p className="text-lg text-[#9CA3AF] max-w-2xl mb-8">
          Ten case studies showing what extinction actually means — from the animal that disappears
          to the ecosystem functions that collapse in its absence.
        </p>

        {/* Status legend + filter */}
        <div className="flex flex-wrap gap-2 mb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === 'all' ? 'bg-white/15 text-[#F9FAFB]' : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
            }`}
          >
            All ({species.length})
          </button>
          {(Object.keys(statusConfig) as StatusType[]).map((s) => {
            const count = species.filter((sp) => sp.status === s).length;
            if (count === 0) return null;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === s ? 'text-white' : 'text-[#9CA3AF] hover:bg-white/10'
                }`}
                style={
                  filter === s
                    ? { background: statusConfig[s].color }
                    : { background: 'rgba(255,255,255,0.05)' }
                }
              >
                {s} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Species Cards */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="space-y-4">
          {filtered.map((s) => (
            <SpeciesCard key={s.id} s={s} />
          ))}
        </div>
      </section>

      {/* Bottom note */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <div className="card-dark p-6 text-center">
          <p className="text-sm text-[#9CA3AF]">
            These 10 species represent different taxonomic groups, extinction stages, and geographic regions.
            The pattern across all of them is consistent: <span className="text-[#F9FAFB] font-medium">habitat loss and overexploitation driven by human activity</span>,
            with no meaningful role for the species' own failure to adapt.
          </p>
        </div>
      </section>
    </div>
  );
}
