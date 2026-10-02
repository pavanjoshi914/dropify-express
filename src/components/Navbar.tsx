import React, { useState } from 'react';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    onNavigateHome();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="glass-panel border-b border-slate-800/80 px-6 sm:px-10 py-3.5 flex items-center justify-between">
        {/* Brand Logo: Clean iFalcon Technologies */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#4F80FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Code2 size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-[900] tracking-tight text-white group-hover:text-[#4F80FF] transition-colors font-phudu">
              iFALCON
            </span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              TECHNOLOGIES
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-xs tracking-wider uppercase text-slate-300">
          <button
            type="button"
            onClick={() => scrollTo('home')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            HOME
          </button>
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            SERVICES
          </button>
          <button
            type="button"
            onClick={() => scrollTo('why-us')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            WHY US
          </button>
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            PROJECTS
          </button>
          <button
            type="button"
            onClick={() => scrollTo('process')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            PROCESS
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="hover:text-[#4F80FF] transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#4F80FF] hover:bg-[#3b6fe6] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            <span>BOOK FREE CONSULTATION</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-sm font-semibold tracking-wider uppercase text-slate-300">
            <button
              type="button"
              onClick={() => scrollTo('home')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              HOME
            </button>
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              SERVICES
            </button>
            <button
              type="button"
              onClick={() => scrollTo('why-us')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              WHY US
            </button>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              PROJECTS
            </button>
            <button
              type="button"
              onClick={() => scrollTo('process')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              PROCESS
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-[#4F80FF] border-b border-slate-800/60"
            >
              CONTACT
            </button>
            <div className="flex items-center justify-between pt-2 text-xs text-slate-400 font-mono">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrivacy();
                }}
                className="hover:text-white"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerms();
                }}
                className="hover:text-white"
              >
                Terms of Service
              </button>
            </div>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="w-full text-center py-3 rounded-xl bg-[#4F80FF] text-white font-bold text-xs tracking-wider uppercase mt-2"
            >
              BOOK FREE CONSULTATION
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
