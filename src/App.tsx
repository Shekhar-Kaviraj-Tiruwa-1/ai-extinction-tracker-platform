import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { EvidenceLibrary } from './sections/EvidenceLibrary';
import { AIMechanisms } from './sections/AIMechanisms';
import { ExtinctionRisk } from './sections/ExtinctionRisk';
import { EcologicalImpact } from './sections/EcologicalImpact';
import { PressureDial } from './sections/PressureDial';
import { ActionFramework } from './sections/ActionFramework';
import { FooterSection } from './sections/FooterSection';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'evidence', 'mechanisms', 'risk', 'impact', 'dial', 'action', 'footer'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1A]">
      {/* Navigation */}
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />
      
      {/* Main Content */}
      <main className="relative">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="evidence">
          <EvidenceLibrary />
        </section>
        
        <section id="mechanisms">
          <AIMechanisms />
        </section>
        
        <section id="risk">
          <ExtinctionRisk />
        </section>
        
        <section id="impact">
          <EcologicalImpact />
        </section>
        
        <section id="dial">
          <PressureDial />
        </section>
        
        <section id="action">
          <ActionFramework />
        </section>
        
        <section id="footer">
          <FooterSection />
        </section>
      </main>
    </div>
  );
}

export default App;
