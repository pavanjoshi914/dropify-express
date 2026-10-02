import React from 'react';
import { PhoneCall, Palette, Code2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onBookConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onBookConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'DISCOVERY CALL',
      icon: PhoneCall,
      desc: 'First, we learn your vision, goals, and technical requirements to define a high-velocity project roadmap.',
    },
    {
      step: '02',
      title: 'SYSTEM & UI/UX DESIGN',
      icon: Palette,
      desc: 'We map out user flows, database schemas, and intuitive UI designs to establish a bulletproof foundation.',
    },
    {
      step: '03',
      title: 'AGILE DEVELOPMENT',
      icon: Code2,
      desc: 'Our senior engineers turn architectures into clean, tested, and scalable code in two-week agile sprint cycles.',
    },
    {
      step: '04',
      title: 'TESTING & QA',
      icon: CheckCircle2,
      desc: 'Rigorous automated and manual testing ensures your application is fast, secure, and bug-free across all devices.',
    },
    {
      step: '05',
      title: 'DEPLOYMENT & LAUNCH',
      icon: Rocket,
      desc: 'We manage full store submission (iOS/Android) or production cloud rollouts (AWS/Vercel) with 24/7 monitoring.',
    },
  ];

  return (
    <section id="process" className="w-full py-24 bg-[#07090e] px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[900] uppercase text-white font-phudu">
            HOW IT WORKS
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Our streamlined engineering process for building and launching high-quality digital products fast.
          </p>
        </div>

        {/* 6 Grid items: 5 steps + 1 CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 p-8 flex flex-col justify-between relative group hover:border-[#4F80FF]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#4F80FF] tracking-wider uppercase">
                      • Step - {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-[#4F80FF] group-hover:border-[#4F80FF]/40 transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-[900] uppercase tracking-wide text-white mb-3 font-phudu">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTA Box */}
          <div className="rounded-2xl p-8 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-br from-[#4F80FF] to-blue-700 shadow-xl shadow-blue-500/20 min-h-[260px]">
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-100 font-bold">
                READY TO START?
              </span>
              <h3 className="text-2xl sm:text-3xl font-[900] uppercase text-white font-phudu leading-tight">
                LET&apos;S TRANSFORM YOUR IDEA INTO REALITY
              </h3>
            </div>

            <div className="pt-6 relative z-10">
              <button
                type="button"
                onClick={onBookConsultation}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0B0F19] text-white font-bold text-xs tracking-widest uppercase hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>BOOK A FREE CONSULTATION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
