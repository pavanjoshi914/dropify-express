import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigateSection,
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4F80FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Code2 size={22} className="stroke-[2.5]" />
              </div>
              <span className="text-2xl font-[900] tracking-tight text-white font-phudu">
                iFALCON TECHNOLOGIES
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light">
              Engineering high-performance software, custom e-commerce engines, and cross-platform mobile apps for fast-moving startups and global brands.
            </p>
          </div>

          {/* Quick Links: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('why-us')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('projects')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Legal &amp; Inquiries
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight size={12} className="text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Terms of Service</span>
                  <ArrowUpRight size={12} className="text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 font-mono normal-case">
                Contact:
                <a
                  href="mailto:contact@dropifyexpress.com"
                  className="block text-[#4F80FF] hover:underline"
                >
                  contact@dropifyexpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Underwriting attribution */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 <strong>iFalcon Technologies</strong>. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-400 font-mono">
            iFalcon Technologies is operated by Dropify Express LLC, registered in the United States.
          </p>
        </div>
      </div>
    </footer>
  );
};
