import { Layers, Database, Globe, Server, Smartphone, Lock, Terminal } from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackCategories = [
    {
      category: 'Frontend & 3D Web',
      icon: Globe,
      technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Three.js / WebGL', 'Tailwind CSS', 'Vite', 'Vue.js'],
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      technologies: ['Node.js', 'Python / FastAPI', 'Go / Golang', 'GraphQL', 'RESTful Services', 'NestJS', 'Express'],
    },
    {
      category: 'E-Commerce Infrastructure',
      icon: Layers,
      technologies: ['Shopify Plus', 'Shopify Storefront API', 'Medusa.js', 'Stripe Connect', 'Hydrogen', 'BigCommerce', 'Headless Checkout'],
    },
    {
      category: 'Mobile Applications',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'Expo', 'Push Notifications', 'Offline Sync'],
    },
    {
      category: 'Databases & Storage',
      icon: Database,
      technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Amazon RDS', 'DynamoDB', 'Elasticsearch'],
    },
    {
      category: 'Cloud DevOps & Security',
      icon: Lock,
      technologies: ['Amazon Web Services (AWS)', 'Google Cloud (GCP)', 'Docker / Kubernetes', 'Vercel / Cloudflare', 'CI/CD GitHub Actions', 'TLS 1.3 / OWASP'],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Terminal size={13} />
            <span>MODERN PRODUCTION ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built on Enterprise-Tested Technologies
          </h2>
          <p className="text-slate-400 text-sm">
            We avoid brittle legacy systems and engineer with modern, high-concurrency languages, frameworks, and cloud primitives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white text-base">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
