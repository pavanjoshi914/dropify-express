import React from 'react';
import { CheckCircle2, Code2, ShieldCheck, Zap } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const stats = [
    {
      label: 'Projects & Products Completed',
      value: '50+',
      icon: CheckCircle2,
      color: 'text-[#4F80FF]',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      label: 'Open Source Lines Contributed',
      value: '40K+',
      icon: Code2,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      label: 'System Reliability & Uptime',
      value: '99.98%',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      label: 'Years Engineering Experience',
      value: '6+',
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="why-us" className="w-full py-24 bg-[#0b0f19] px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[900] uppercase text-white font-phudu">
            WHY US
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Passionate software engineers and product architects dedicated to empowering businesses with innovative technology.
          </p>
        </div>

        {/* 2x2 Split Metric Cards Grid (FlutterYourWay style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 flex overflow-hidden group hover:border-slate-700 transition-colors"
              >
                {/* Left side: Icon & Label */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.bg} border flex items-center justify-center ${stat.color} mb-6`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-slate-300 font-semibold text-base sm:text-lg leading-tight">
                    {stat.label}
                  </span>
                </div>

                {/* Right side: Giant Stat Number with pattern */}
                <div className="w-[45%] relative flex items-center justify-center bg-slate-900/60 border-l border-slate-800/80 p-4">
                  <div
                    className="absolute inset-0 z-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <span
                    className={`relative z-10 text-4xl sm:text-5xl font-[900] ${stat.color} font-phudu tracking-tight`}
                  >
                    {stat.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

