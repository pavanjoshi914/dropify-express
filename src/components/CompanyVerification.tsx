import React from 'react';
import {
  ShieldCheck,
  Building,
  FileText,
  CheckCircle2,
  Lock,
  Landmark,
  Scale,
} from 'lucide-react';

interface CompanyVerificationProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const CompanyVerification: React.FC<CompanyVerificationProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <section id="verification" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
            <ShieldCheck size={14} />
            <span>CORPORATE VERIFICATION &amp; BANKING DISCLOSURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Official US Entity &amp; Commercial Compliance
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            This disclosure provides transparent corporate registration, legal entity structure, and banking verification details for financial partners, compliance auditors, and prospective enterprise clients.
          </p>
        </div>

        {/* 2-Column Entity Card + Compliance Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Entity Registry Box */}
          <div className="lg:col-span-6 glass-panel-glow p-8 rounded-3xl border border-cyan-500/30 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                  <Building size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Corporate Identity</h3>
                  <p className="text-xs text-slate-400 font-mono">United States Registered LLC</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 text-xs font-mono font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active &amp; Good Standing
              </span>
            </div>

            {/* Official Details Table */}
            <div className="space-y-3.5 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Legal Entity Name</span>
                <span className="text-white font-semibold font-mono text-sm">Dropify Express LLC</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Trade Name / Brand</span>
                <span className="text-cyan-400 font-semibold font-mono text-sm">iFalcon Technologies</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Company Structure</span>
                <span className="text-white font-mono">Limited Liability Company (LLC)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Primary Jurisdiction</span>
                <span className="text-white font-mono">United States of America</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">NAICS Business Activity</span>
                <span className="text-slate-200 font-mono text-right">
                  541511 (Custom Computer Programming) &amp; E-Commerce
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Commercial Services</span>
                <span className="text-slate-200 font-mono text-right">
                  Software Engineering, Mobile Apps, E-Com Architecture
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-800/60 gap-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Corporate Inquiries</span>
                <span className="text-cyan-300 font-mono">contact@dropifyexpress.com</span>
              </div>
            </div>

            {/* Direct Links to Full Legal Documents */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white hover:border-cyan-500/50 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText size={14} className="text-cyan-400" />
                <span>Read Full Privacy Policy</span>
              </button>
              <button
                type="button"
                onClick={onOpenTerms}
                className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white hover:border-cyan-500/50 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Scale size={14} className="text-cyan-400" />
                <span>Read Terms of Service</span>
              </button>
            </div>
          </div>

          {/* Right Column: Banking, Invoicing & AML Compliance */}
          <div className="lg:col-span-6 space-y-6">
            {/* Banking & Settlement Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                  <Landmark size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    US Banking &amp; Merchant Settlement Channels
                  </h4>
                  <p className="text-xs text-slate-400">
                    Mercury Bank, US Domestic Wire &amp; Automated Clearing House (ACH)
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Dropify Express LLC</strong> maintains dedicated corporate depository and treasury accounts with leading US financial institutions, including <strong>Mercury Bank</strong>. All software engineering contracts, milestone deliverables, and retainer invoices are settled through legitimate commercial banking channels:
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>US Domestic Wire Transfers (Fedwire / RTP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Direct ACH Inbound &amp; Outbound Business Clearing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>International SWIFT Wire (EUR, GBP, CAD, USD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Stripe Verified Corporate Invoicing</span>
                </li>
              </ul>
            </div>

            {/* Contractual & IP Assignment Guarantees */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Client Intellectual Property &amp; NDA Protection
                  </h4>
                  <p className="text-xs text-slate-400">
                    100% Work-For-Hire Code Assignment
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All client source code, design assets, and proprietary algorithms developed by <strong>iFalcon Technologies</strong> under <strong>Dropify Express LLC</strong> are executed under strict mutual Non-Disclosure Agreements (NDAs). Upon milestone payment completion, 100% of copyrights and intellectual property are irrevocably assigned to the client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
