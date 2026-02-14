import { useState, useEffect } from 'react';
import { Menu, X, Activity, Database, Cpu, TrendingDown, AlertTriangle, Gauge, Shield } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'hero', label: 'Pathway', icon: Activity },
  { id: 'evidence', label: 'Evidence', icon: Database },
  { id: 'mechanisms', label: 'AI Impact', icon: Cpu },
  { id: 'risk', label: 'Risk', icon: TrendingDown },
  { id: 'impact', label: 'Impact', icon: AlertTriangle },
  { id: 'dial', label: 'Dial', icon: Gauge },
  { id: 'action', label: 'Action', icon: Shield },
];

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0F1A]/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#EF4444]/60 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
                <Activity className="w-4 h-4 text-[#EF4444]" />
              </div>
              <span className="font-bold text-lg tracking-tight text-[#F9FAFB] hidden sm:block">
                AI Extinction Accelerator
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-[#EF4444]'
                        : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F9FAFB] hover:text-[#EF4444] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0A0F1A]/98 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 p-6 transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-[#EF4444]/20 text-[#EF4444]'
                      : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-[#F9FAFB]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
