import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [selectedService, setSelectedService] = useState<string>('Full-Cycle Web Apps & APIs');

  // Handle both pathname (/portfolio, /projects, /privacy, /terms) and hash (#portfolio, #projects)
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const target = hash || path;

      if (target === 'privacy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'terms') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
        if (target === 'projects' || target === 'portfolio') {
          setTimeout(() => {
            const el = document.getElementById('projects') || document.getElementById('portfolio');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        } else if (target) {
          setTimeout(() => {
            const el = document.getElementById(target);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const openPrivacy = () => {
    window.location.hash = 'privacy';
    setCurrentView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTerms = () => {
    window.location.hash = 'terms';
    setCurrentView('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      window.location.hash = '';
    }
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentView('home');
    window.location.hash = sectionId;
    setTimeout(() => {
      const el =
        document.getElementById(sectionId) ||
        (sectionId === 'portfolio' ? document.getElementById('projects') : null) ||
        (sectionId === 'projects' ? document.getElementById('portfolio') : null);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-[#4F80FF] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenPrivacy={openPrivacy}
        onOpenTerms={openTerms}
        onNavigateHome={navigateHome}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={navigateHome} />
        )}

        {currentView === 'terms' && (
          <TermsOfService onBack={navigateHome} />
        )}

        {currentView === 'home' && (
          <>
            <Hero
              onExploreServices={() => handleNavigateSection('projects')}
              onRequestSOW={() => handleNavigateSection('contact')}
            />
            <Services onSelectService={handleSelectService} />
            <WhyUs />
            <Portfolio />
            <Process onBookConsultation={() => handleNavigateSection('contact')} />
            <TechStack />
            <ContactSection preselectedService={selectedService} />
          </>
        )}
      </main>

      {/* Agency Footer */}
      <Footer
        onOpenPrivacy={openPrivacy}
        onOpenTerms={openTerms}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
