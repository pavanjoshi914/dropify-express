import React, { useState } from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onRequestSOW: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onRequestSOW }) => {
  const [activeTheme, setActiveTheme] = useState<'cyan' | 'purple' | 'emerald' | 'amber'>('cyan');

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#0b0f19]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4F80FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-mono text-cyan-400 mb-8 shadow-inner">
          <Terminal size={14} className="text-[#4F80FF]" />
          <span className="tracking-widest uppercase font-semibold">
            ENGINEERING • APPS • E-COMMERCE • 3D WEB
          </span>
        </div>

        {/* FlutterYourWay-Inspired Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-[900] uppercase tracking-tight text-white leading-[1.08] font-phudu max-w-5xl mx-auto">
          <span className="text-slate-500">STOP PLANNING.</span> START LAUNCHING.<br />
          WE BUILD APPS THAT GO LIVE FAST.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed">
          We craft enterprise software, custom e-commerce engines, and high-performance cross-platform apps that help startups and scaling brands move faster and grow smarter.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={onExploreServices}
            className="px-5 py-3.5 sm:px-8 sm:py-4 bg-slate-900/90 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap cursor-pointer shadow-lg"
          >
            VIEW PORTFOLIO
          </button>

          <button
            type="button"
            onClick={onRequestSOW}
            className="px-5 py-3.5 sm:px-8 sm:py-4 bg-[#4F80FF] hover:bg-[#3b6fe6] text-white font-bold rounded-xl transition-all text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap cursor-pointer shadow-xl shadow-blue-500/25 flex items-center gap-2"
          >
            <span>BOOK FREE CONSULTATION</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3D WebGL Canvas Interactive Showcase */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl glass-panel-glow p-2 overflow-hidden border border-[#4F80FF]/30 shadow-2xl">
            {/* Header bar */}
            <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono bg-slate-950/80 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300 font-bold">iFalcon 3D Interactive WebGL Engine</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles size={13} />
                <span>Drag to Rotate Polyhedron</span>
              </div>
            </div>

            {/* 3D Scene Viewport */}
            <div className="relative h-[420px] sm:h-[480px] w-full bg-gradient-to-b from-slate-950 to-[#07090e] rounded-b-2xl overflow-hidden">
              <ThreeCanvas
                activeTheme={activeTheme}
                onThemeChange={setActiveTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
