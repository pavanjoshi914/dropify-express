import React, { useState } from 'react';
import { ExternalLink, Check, Star, X, Layers, Code2, ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  tag: string;
  category: 'ecom' | 'apps' | 'coding';
  desc: string;
  long: string;
  shots: string[];
  stack: string[];
  url: string;
  metrics: string[];
  badge: string;
  links?: { label: string; url: string }[];
}

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ecom' | 'apps' | 'coding'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'lbe',
      name: 'Lightning Browser Extension',
      tag: 'Alby • Core Maintainer',
      category: 'coding',
      badge: 'Fintech & Web3 Infrastructure',
      desc: "The premier browser wallet for Bitcoin & Lightning — MetaMask for the Lightning Network. Deep Lightning and Nostr integration for the web with over 40,000 lines of code contributed.",
      long: "Alby's browser wallet connects modern web applications to Lightning nodes, providing a seamless key signer for Nostr, Liquid, and on-chain operations. As a core maintainer with over 40,000 lines contributed, we engineered the provider APIs and WebLN plumbing that allows any e-commerce store or web app to execute instant microtransactions with sub-second finality.",
      shots: ['/shots/lbe.png'],
      stack: ['React', 'Extension API', 'WebLN', 'LNURL', 'Dexie', 'TypeScript'],
      url: 'https://github.com/getAlby/lightning-browser-extension',
      metrics: ['40K+ Lines Contributed', '50K+ Active Installs', 'Sub-second Settlements'],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/getAlby/lightning-browser-extension' },
        { label: 'Chrome Web Store', url: 'https://chromewebstore.google.com/detail/alby-bitcoin-wallet-for-l/iokeahhekogjkaapaakclbajflpmkbah' },
      ],
    },
    {
      id: 'lagnayog',
      name: 'Lagnayog Matrimony & E-Commerce',
      tag: 'Client Deliverable • Production Scale',
      category: 'ecom',
      badge: 'Cross-Platform App & E-Com',
      desc: 'A complete commercial platform shipping to iOS, Android, and Web from a single unified codebase with real-time Socket.io chat, custom matchmaking algorithms, and Razorpay payment gateway.',
      long: 'A full-stack commercial platform delivered for an enterprise client: a single React Native and Expo architecture deploying seamlessly across iOS, Android, and web. Features automated payment gateways with tier-based subscription billing, real-time Socket.io messaging synchronized across devices, advanced geocoded matching algorithms, and AWS S3 media pipelines.',
      shots: [
        '/shots/lagnayog-web.png',
        '/shots/lagnayog-dashboard.png',
        '/shots/lagnayog-filters.png',
        '/shots/lagnayog-chat.png',
        '/shots/lagnayog-mobile.png',
      ],
      stack: ['React Native', 'Expo', 'expo-router', 'NativeWind', 'Express', 'Prisma', 'Socket.io', 'Razorpay'],
      url: 'https://lagnayog.com',
      metrics: ['iOS + Android + Web', 'Real-Time WebSockets', 'Automated Recurring Billing'],
      links: [{ label: 'Live Client Platform', url: 'https://lagnayog.com' }],
    },
    {
      id: 'reframe',
      name: 'Reframe Screen Studio',
      tag: 'Desktop Engineering',
      category: 'apps',
      badge: 'Cross-Platform Desktop App',
      desc: 'A high-performance screen recording and demo video engine for macOS, Linux, and Windows featuring cursor-following auto-zoom, webcam bubble composition, and video rendering.',
      long: 'A commercial-grade desktop product built for creators and engineers to showcase software. Features native screen capture with automated cursor tracking, dynamic pan & zoom, webcam compositing, background customization, and multi-format video encoding (MP4, WebM, GIF) with zero watermark generation.',
      shots: ['/shots/reframe.png'],
      stack: ['Electron', 'Desktop', 'macOS', 'Windows', 'Linux', 'React', 'Video Rendering'],
      url: 'https://getreframe.vercel.app',
      metrics: ['macOS, Windows & Linux', '60fps Canvas Composition', 'Zero Watermark'],
      links: [{ label: 'Download Desktop App', url: 'https://getreframe.vercel.app' }],
    },
    {
      id: 'getclaw',
      name: 'getclaw.us AI Deployment Cloud',
      tag: 'AI Infrastructure & SaaS',
      category: 'coding',
      badge: 'AI Cloud Platform',
      desc: 'An automated cloud platform that provisions personal AI assistants in under 60 seconds across WhatsApp, Telegram, Discord, Slack, Signal, and iMessage with Stripe billing.',
      long: 'A hosted AI service orchestrating isolated containerized instances. Clients select their preferred foundational models (via OpenRouter), and the platform automates real-time bidirectional messaging webhooks across messaging protocols, stateful vector memories, and automated Stripe billing subscriptions.',
      shots: ['/shots/getclaw.png'],
      stack: ['Next.js', 'Turso', 'Stripe', 'Hetzner', 'OpenRouter', 'WebSockets'],
      url: 'https://getclaw.us',
      metrics: ['< 60s Deployment Time', '6 Messaging Integrations', 'Stripe Automated Billing'],
      links: [{ label: 'Live SaaS Product', url: 'https://getclaw.us' }],
    },
    {
      id: 'getalby',
      name: 'getalby.com Platform Infrastructure',
      tag: 'High-Scale Web Architecture',
      category: 'coding',
      badge: 'Core Infrastructure',
      desc: "The core production web platform hosting Alby's global Bitcoin and Lightning infrastructure, handling millions of monthly requests with high reliability.",
      long: "The production web application powering Alby's global developer community and infrastructure. Built on Ruby on Rails, Stimulus, and PostgreSQL, hosting routing node telemetry, account authentication, and high-volume merchant transaction routing.",
      shots: ['/shots/getalby.png'],
      stack: ['Rails', 'Stimulus', 'PostgreSQL', 'Lightning Nodes', 'Docker'],
      url: 'https://getalby.com/',
      metrics: ['Millions of API Calls/Mo', '99.98% High Availability', 'Enterprise Ledger Sync'],
      links: [{ label: 'Visit getalby.com', url: 'https://getalby.com/' }],
    },
    {
      id: 'specs',
      name: 'Smart Payment Transactions Protocol',
      tag: 'Protocol & Specification',
      category: 'coding',
      badge: 'Fintech Specification',
      desc: 'Architected content metadata specifications for the Lightning Network, enabling richer structured transactional data to travel with payments on the web.',
      long: 'Standard payments only convey static timestamps and addresses. This research and specification engineered protocol-level structured metadata, enabling interactive, programmable payment flows on the web. Completed across Summer of Bitcoin with full architectural specifications, testnets, and working prototypes.',
      shots: ['/shots/specs.png'],
      stack: ['Protocol Spec', 'Lightning', 'Web Payments', 'Research', 'Cryptographic Signatures'],
      url: 'https://pavan-joshi.gitbook.io/making-payment-transactions-smart/',
      metrics: ['Published Specification', '2 Working Prototypes', 'Production WebLN Integration'],
      links: [
        { label: 'Official Documentation', url: 'https://pavan-joshi.gitbook.io/making-payment-transactions-smart/' },
        { label: 'Final Research Paper', url: 'https://drive.google.com/file/d/1gM_V4UY8JMRfaotEobutqOppZEPGqVkg/view' },
      ],
    },
    {
      id: 'i18n',
      name: 'CircuitVerse Global Infrastructure',
      tag: 'Google Summer of Code',
      category: 'apps',
      badge: 'Enterprise Localization Architecture',
      desc: 'Architected and implemented global internationalization across five disparate technologies: Rails, JavaScript circuit simulator, Jekyll, Flutter mobile app, and Docsify.',
      long: 'During Google Summer of Code, architected the multi-platform internationalization engine for CircuitVerse. Designed a unified localization schema that synced translations across five distinct codebases, enabling hundreds of thousands of engineering students worldwide to access the digital circuit simulator in their native languages.',
      shots: ['/shots/i18n.png'],
      stack: ['Ruby on Rails', 'JavaScript', 'Jekyll', 'Flutter', 'DocsifyJs'],
      url: 'https://blog.circuitverse.org/posts/2021/i18n-final-report/',
      metrics: ['5 Integrated Codebases', 'Global Multi-Language Support', 'Google Summer of Code'],
      links: [
        { label: 'GSoC Final Report', url: 'https://blog.circuitverse.org/posts/2021/i18n-final-report/' },
        { label: 'Main Platform Pull Request', url: 'https://github.com/CircuitVerse/CircuitVerse/pull/2397' },
      ],
    },
    {
      id: 'chess',
      name: 'Chess BattleGround 3D Simulation',
      tag: 'Interactive 3D & Graphics',
      category: 'apps',
      badge: '3D Simulation & Modeling',
      desc: 'A complete 3D game engineered with Unity and C#, with custom 3D models hand-crafted in Blender, Universal Render Pipelines (URP), physics simulation, and real-time rendering.',
      long: 'Engineered an interactive 3D chess environment with custom 3D asset geometry, realistic lighting, and smooth animation kinematics. Built using Unity, C#, Blender 3D modeling, and custom shaders.',
      shots: ['/shots/chess.png'],
      stack: ['Unity 3D', 'C#', 'Blender', 'URP', 'Physics Engine'],
      url: 'https://github.com/pavanjoshi914/Chess-BattleGround',
      metrics: ['Custom 3D Models', 'Universal Render Pipeline', '60fps Graphics Simulation'],
      links: [{ label: 'GitHub Repository', url: 'https://github.com/pavanjoshi914/Chess-BattleGround' }],
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] scroll-mt-20">
      {/* Anchor for portfolio alias */}
      <div id="portfolio" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <Star size={13} />
              <span>PROVEN PRODUCTION DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] uppercase tracking-tight text-white font-phudu">
              FEATURED PROJECTS
            </h2>
            <p className="text-slate-300 text-base max-w-xl font-light">
              High-concurrency fintech wallets, client e-commerce platforms, cross-platform apps, and desktop tools engineered by <strong>iFalcon Technologies</strong>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#4F80FF] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('ecom')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === 'ecom'
                  ? 'bg-[#4F80FF] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce &amp; Client Work
            </button>
            <button
              type="button"
              onClick={() => setFilter('apps')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === 'apps'
                  ? 'bg-[#4F80FF] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile &amp; Desktop Apps
            </button>
            <button
              type="button"
              onClick={() => setFilter('coding')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filter === 'coding'
                  ? 'bg-[#4F80FF] text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Custom Coding &amp; Protocols
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel rounded-3xl border border-slate-800 overflow-hidden group hover:border-[#4F80FF]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Visual Screenshot Container */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.shots[0]}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-950/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4F80FF] transition-colors flex items-center justify-between font-phudu">
                    <span>{project.name}</span>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#4F80FF] transition-colors" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed font-light">
                    {project.desc}
                  </p>

                  {/* Metric Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-md"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Stack Tags */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                {project.stack.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-[10px] font-mono text-slate-500">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] glass-panel-glow bg-slate-950 rounded-3xl border border-[#4F80FF]/30 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/90 sticky top-0 z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedProject.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-[900] uppercase text-white font-phudu">
                  {selectedProject.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#4F80FF] text-white hover:bg-blue-600 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              {/* Primary Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl max-h-96 flex items-center justify-center">
                <img
                  src={selectedProject.shots[0]}
                  alt={selectedProject.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Additional Screenshots Carousel if available */}
              {selectedProject.shots.length > 1 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Platform Screens ({selectedProject.shots.length})
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedProject.shots.map((shot, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 h-20"
                      >
                        <img
                          src={shot}
                          alt={`${selectedProject.name} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#4F80FF] uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 size={14} />
                  <span>Engineering Architecture &amp; Delivery</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProject.long}
                </p>
              </div>

              {/* Key Deliverable Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {selectedProject.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono space-y-1"
                  >
                    <div className="text-slate-500 text-[10px] uppercase">Metric Verified</div>
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <Check size={13} />
                      <span>{m}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Stack Grid */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <Layers size={13} />
                  <span>Integrated Technologies &amp; Libraries</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Verified Project Resources
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold glass-panel text-cyan-300 hover:text-white hover:border-[#4F80FF]/50 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>iFalcon Technologies • Verified Client Delivery</span>
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden text-[#4F80FF] flex items-center gap-1 font-semibold"
                >
                  <span>Open Live</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
