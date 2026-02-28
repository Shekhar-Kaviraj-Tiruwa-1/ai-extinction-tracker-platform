import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { FooterSection } from './sections/FooterSection';

import { HomePage } from './pages/HomePage';
import { EvidencePage } from './pages/EvidencePage';
import { AIImpactPage } from './pages/AIImpactPage';
import { SpeciesPage } from './pages/SpeciesPage';
import { RiskPage } from './pages/RiskPage';
import { ActionPage } from './pages/ActionPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ConnectPage } from './pages/ConnectPage';
import { SuggestPage } from './pages/SuggestPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1A]">
      <Navigation />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/ai-impact" element={<AIImpactPage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/risk" element={<RiskPage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/suggest" element={<SuggestPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <FooterSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
