import { Link } from 'react-router-dom';
import { Activity, Github, Twitter, Mail } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative w-full bg-[#0A0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#EF4444]/60 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#EF4444]" />
              </div>
              <span className="font-bold text-[#F9FAFB]">Extinction Clock</span>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Tracking the connection between AI, industrial agriculture, and biodiversity loss.
              Data sourced from IPBES, IUCN, WWF, and FAO.
            </p>
            <p className="text-xs text-[#9CA3AF]/60">
              This site traces a plausible causal chain — not a direct causal proof.{' '}
              <Link to="/methodology" className="text-[#3B82F6] hover:underline">
                Read the methodology.
              </Link>
            </p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2 text-sm text-[#9CA3AF]">
            {[
              { path: '/', label: 'Home' },
              { path: '/evidence', label: 'Evidence' },
              { path: '/ai-impact', label: 'AI Impact' },
              { path: '/species', label: 'Species' },
              { path: '/risk', label: 'Risk & Scenarios' },
              { path: '/action', label: 'Take Action' },
              { path: '/methodology', label: 'Methodology' },
              { path: '/connect', label: 'Connect' },
              { path: '/suggest', label: 'Suggest' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[#F9FAFB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Follow</p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@extinctionClock.org"
                className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[#9CA3AF]">
            © 2026 Extinction Clock. Data sourced from IPBES, IUCN, WWF, FAO, and peer-reviewed research.
          </p>
        </div>
      </div>
    </footer>
  );
}
