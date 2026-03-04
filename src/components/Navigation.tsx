import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/evidence', label: 'Evidence' },
  { path: '/ai-impact', label: 'AI Impact' },
  { path: '/species', label: 'Species' },
  { path: '/risk', label: 'Risk & Scenarios' },
  { path: '/action', label: 'Take Action' },
  { path: '/methodology', label: 'Methodology' },
  { path: '/connect', label: 'Connect' },
  { path: '/suggest', label: 'Suggest' },
];

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-200'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#EF4444]/60 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
                <Activity className="w-4 h-4 text-[#EF4444]" />
              </div>
              <span className="font-bold text-base tracking-tight text-[#111827] hidden sm:block">
                AI Extinction Clock
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-[#EF4444]/15 text-[#EF4444]'
                        : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#111827] hover:text-[#EF4444] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-white/98 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 p-4 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#EF4444]/20 text-[#EF4444]'
                      : 'bg-gray-50 text-[#6B7280] hover:bg-gray-100 hover:text-[#111827]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to push content below fixed nav */}
      <div className="h-16" />
    </>
  );
}
