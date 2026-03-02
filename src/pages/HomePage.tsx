import { Link } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import {
  AlertTriangle,
  TrendingDown,
  Zap,
  Database,
  Cpu,
  Bird,
  BarChart2,
  Flame,
  Lightbulb,
  Users,
  BookOpen,
  MessageSquare,
} from 'lucide-react';

const keyStats = [
  {
    stat: '~1 Million',
    label: 'Species threatened',
    detail: 'Many could be gone within decades if current trends continue.',
    source: 'IPBES Global Assessment, 2019',
    color: '#EF4444',
    icon: AlertTriangle,
  },
  {
    stat: '73%',
    label: 'Wildlife population decline',
    detail: 'Average drop in monitored animal populations since 1970.',
    source: 'WWF Living Planet Report, 2024',
    color: '#F59E0B',
    icon: TrendingDown,
  },
  {
    stat: '1,000–10,000×',
    label: 'Higher than natural extinction rate',
    detail: 'We are losing species far faster than at any point in human history.',
    source: 'IPBES, 2019',
    color: '#EF4444',
    icon: Zap,
  },
];

const tabCards = [
  {
    path: '/evidence',
    icon: Database,
    title: 'Evidence',
    description: 'Explore the full data: IUCN numbers, extinction drivers, and what the science says.',
    color: '#EF4444',
  },
  {
    path: '/ai-impact',
    icon: Cpu,
    title: 'AI Impact',
    description: 'See exactly how AI is making industrial animal agriculture bigger, faster, and more destructive.',
    color: '#F59E0B',
  },
  {
    path: '/species',
    icon: Bird,
    title: 'Species',
    description: '10 case studies — from the Passenger Pigeon to the Vaquita — showing what extinction really means.',
    color: '#EF4444',
  },
  {
    path: '/risk',
    icon: BarChart2,
    title: 'Risk & Scenarios',
    description: 'Two futures: uncapped AI expansion vs. governed efficiency. Toggle the levers and see the difference.',
    color: '#DC2626',
  },
  {
    path: '/action',
    icon: Flame,
    title: 'Take Action',
    description: 'Policy levers, AI governance, and things you can do personally — from diet to advocacy.',
    color: '#10B981',
  },
  {
    path: '/methodology',
    icon: Lightbulb,
    title: 'Methodology',
    description: 'How our calculations work, where the data comes from, and what we are and are not claiming.',
    color: '#3B82F6',
  },
  {
    path: '/connect',
    icon: Users,
    title: 'Connect',
    description: 'Researchers, ecologists, and journalists — get involved or contribute your expertise.',
    color: '#8B5CF6',
  },
  {
    path: '/suggest',
    icon: MessageSquare,
    title: 'Suggest',
    description: 'Found a data error, a missing species, or new research? Tell us.',
    color: '#9CA3AF',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1B0F]">
      {/* Hero / Pathway Diagram */}
      <HeroSection />

      {/* What This Site Is — plain language */}
      <section className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 rounded-full mb-4">
            The Core Idea
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F9FAFB] mb-6">
            What is Extinction Clock?
          </h2>
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-6">
            Right now, about <span className="text-[#F9FAFB] font-semibold">1 million species</span> are at risk of disappearing — many within our lifetime.
            The main driver is not pollution or climate change alone. It is <span className="text-[#F9FAFB] font-semibold">habitat destruction</span>, mostly from farming land cleared to raise animals or grow feed for them.
          </p>
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-6">
            A newer force is making this worse: <span className="text-[#EF4444] font-semibold">artificial intelligence</span>. AI is not causing extinctions directly.
            But it is making industrial animal farming dramatically more efficient — which means bigger operations, more land cleared, more water used, and faster habitat destruction.
          </p>
          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Extinction Clock tracks this connection. We use peer-reviewed data to map the chain from <span className="text-[#F9FAFB]">AI adoption → industrial efficiency → agricultural expansion → habitat loss → species extinction</span>.
            Then we show what governance and individual action can do about it.
          </p>
        </div>

        {/* Causal Chain — visual */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-mono text-center">
          {[
            { label: 'AI Automation', color: '#EF4444' },
            { label: '→', color: '#6B7280' },
            { label: 'Industrial Efficiency', color: '#F59E0B' },
            { label: '→', color: '#6B7280' },
            { label: 'Agriculture Scale', color: '#F59E0B' },
            { label: '→', color: '#6B7280' },
            { label: 'Habitat Loss', color: '#EF4444' },
            { label: '→', color: '#6B7280' },
            { label: 'Extinction', color: '#DC2626' },
          ].map((item, i) => (
            <span
              key={i}
              className={item.label === '→' ? 'text-[#6B7280]' : 'px-3 py-1 rounded-md bg-white/5'}
              style={{ color: item.color }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section-padding bg-[#162617]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F9FAFB] mb-8 text-center">
            The Numbers at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="card-dark p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-mono mb-1" style={{ color: s.color }}>{s.stat}</div>
                  <div className="text-sm font-semibold text-[#F9FAFB] mb-2">{s.label}</div>
                  <p className="text-sm text-[#9CA3AF] mb-3">{s.detail}</p>
                  <p className="text-xs text-[#9CA3AF]/60 font-mono">{s.source}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/evidence"
              className="inline-flex items-center gap-2 text-sm text-[#EF4444] hover:text-[#EF4444]/80 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              See the full evidence base →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore the Site */}
      <section className="section-padding max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">Explore the Site</h2>
        <p className="text-[#9CA3AF] mb-8">Each tab goes deeper into a different part of the story.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tabCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className="card-dark p-5 group hover:border-white/20 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${card.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#F9FAFB] mb-2 group-hover:text-[#EF4444] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#9CA3AF] text-sm">
            All data sourced from{' '}
            <span className="text-[#F9FAFB]">IPBES, IUCN, WWF, FAO</span> and peer-reviewed research.
            This site traces a plausible causal chain — not a direct causal proof.{' '}
            <Link to="/methodology" className="text-[#3B82F6] hover:underline">
              Read the methodology.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
