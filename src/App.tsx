import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTools from './components/FeaturedTools';
import TutorialSection from './components/TutorialSection';
import ComparisonSection from './components/ComparisonSection';
import SecuritySection from './components/SecuritySection';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';
import OnlineToolsPage from './components/OnlineToolsPage';
import PremiumToolsPage from './components/PremiumToolsPage';
import TutorialsPage from './components/TutorialsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <FeaturedTools />
      <TutorialSection />
      <ComparisonSection />
      <SecuritySection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/online-tools" element={<OnlineToolsPage />} />
            <Route path="/premium-tools" element={<PremiumToolsPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;