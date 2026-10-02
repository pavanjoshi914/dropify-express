import React from 'react';
import {
  Code,
  ShoppingCart,
  Smartphone,
  Box,
  Users2,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'mvp',
      icon: Zap,
      badge: 'Rapid Launch',
      title: 'STARTUP & MVP DEVELOPMENT',
      description:
        'Quickly validate your concept with a market-ready MVP that captures your core product value with clean, scalable code built to handle immediate customer growth.',
      points: [
        'Interactive wireframes and rapid clickable prototypes',
        'Production-ready MVP architecture shipped in 2 - 4 weeks',
        'Scalable authentication, databases & billing integrations',
        'Analytics, onboarding funnels & feedback telemetry',
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'full-cycle',
      icon: Code,
      badge: 'Core Competency',
      title: 'FULL-CYCLE CODING & WEB APPS',
      description:
        'End-to-end web engineering: high-throughput REST and GraphQL APIs, reactive frontends in Next.js and React, robust PostgreSQL databases, and modern cloud microservices.',
      points: [
        'React 19, Next.js 15, TypeScript & Node.js services',
        'Python / FastAPI backend and data pipeline architectures',
        'PostgreSQL, Redis caching & event-driven queues',
        'AWS, Google Cloud, Docker & automated CI/CD pipelines',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'ecom',
      icon: ShoppingCart,
      badge: 'High Conversion',
      title: 'HIGH-PERFORMANCE E-COMMERCE',
      description:
        'Custom e-commerce platforms engineered for maximum conversion. High-volume Shopify Plus customization, headless Hydrogen storefronts, and bespoke checkout funnels.',
      points: [
        'Shopify Plus custom themes, apps & Storefront API builds',
        'Stripe, PayPal, Apple Pay & international checkout integrations',
        'ERP, 3PL inventory synchronization & automated order workflows',
        'Multi-currency, localization, tax compliance & cart recovery',
      ],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'apps',
      icon: Smartphone,
      badge: 'iOS & Android',
      title: 'CROSS-PLATFORM MOBILE APPS',
      description:
        'Native-feel mobile apps built with React Native and Flutter. Beautiful responsive interfaces, 60fps performance, and complete App Store & Play Store deployment.',
      points: [
        'React Native & Flutter unified mobile architecture',
        'Biometric authentication, offline sync & push notifications',
        'In-app purchases, subscription paywalls & payment tokenization',
        'Full App Store & Google Play Store submission & updates',
      ],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: '3d-web',
      icon: Box,
      badge: 'Interactive WebGL',
      title: '3D WEB & INTERACTIVE EXPERIENCES',
      description:
        'Immersive Three.js, WebGL, and custom shader interfaces that captivate users, boost engagement, and showcase products in photorealistic 3D.',
      points: [
        'Interactive 3D product visualizers and configurators',
        'Three.js, WebGL, GLSL custom shader development',
        'High-performance asset compression & smooth 60fps rendering',
        'Spatial interactive graphics & storytelling interfaces',
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'retainer',
      icon: Users2,
      badge: 'Staff Augmentation',
      title: 'DEDICATED ENGINEERING PODS',
      description:
        'Scale your development velocity with senior full-stack, mobile, and e-commerce developers under flexible monthly retainers or sprint-based agreements.',
      points: [
        'Dedicated senior engineers embedded in your team',
        'Direct Slack/Discord communication and agile 2-week sprints',
        'Transparent daily standups, Linear/Jira tracking & GitHub PRs',
        'Flexible milestone billing with clear Statement of Work (SOW)',
      ],
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-[#07090e] px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[900] uppercase text-white font-phudu">
            SERVICES WE PROVIDE
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            We build robust software, apps, and e-commerce through collaborative engineering that turns your vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between group hover:border-[#4F80FF]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon size={24} className="stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-[900] uppercase tracking-wide text-white group-hover:text-[#4F80FF] transition-colors font-phudu">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Points list */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/60">
                    {service.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#4F80FF] shrink-0 mt-0.5"
                        />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-800/40">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4F80FF] hover:text-blue-400 transition-colors py-1 cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
