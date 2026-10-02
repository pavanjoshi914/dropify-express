import { Shield, ArrowLeft, Lock } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#07090e] text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Title */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Return to Homepage</span>
        </button>

        {/* Header Banner */}
        <div className="glass-panel-glow p-8 rounded-3xl border border-cyan-500/20 mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Shield size={16} />
            <span>OFFICIAL LEGAL DISCLOSURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
            <span>Operating Entity: <strong>Dropify Express LLC</strong></span>
            <span>•</span>
            <span>Trade Name: <strong>iFalcon Technologies</strong></span>
            <span>•</span>
            <span>Effective Date: <strong>October 1, 2026</strong></span>
          </div>
        </div>

        {/* Content Body */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">1.</span>
              Introduction &amp; Corporate Identity
            </h2>
            <p>
              This Privacy Policy governs the manner in which <strong>Dropify Express LLC</strong>, a United States Limited Liability Company doing business as <strong>iFalcon Technologies</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), collects, uses, maintains, and discloses information gathered from users and corporate clients (&quot;Client&quot;, &quot;you&quot;) of our software engineering, custom coding, e-commerce development, and mobile application services.
            </p>
            <p>
              We are committed to maintaining the highest standards of confidentiality, data integrity, and compliance with applicable data privacy statutes, including the California Consumer Privacy Act (CCPA), the EU General Data Protection Regulation (GDPR), and federal US commercial standards.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">2.</span>
              Information We Collect
            </h2>
            <p>We may collect information in the following categories:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
              <li>
                <strong>Corporate &amp; Contact Identification:</strong> Legal entity name, authorized representative name, business physical address, corporate email address, telephone numbers, and tax identification numbers (EIN / VAT) required for contractual onboarding and banking verification.
              </li>
              <li>
                <strong>Project &amp; Technical Specifications:</strong> Architectural requirements, source code repositories, API credentials, third-party platform tokens, designs, schema models, and Statements of Work (SOW) provided for the execution of our services.
              </li>
              <li>
                <strong>Billing &amp; Payment Data:</strong> Corporate banking details, ACH routing numbers, SWIFT/IBAN data, wire transfer confirmations, or card payment identifiers processed securely via verified financial intermediaries (such as Mercury Bank and Stripe).
              </li>
              <li>
                <strong>Technical Usage &amp; Analytics Data:</strong> IP addresses, browser specifications, operating system details, referring URLs, and interaction timestamps collected automatically when browsing our public web properties.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">3.</span>
              Strict Protection of Client Source Code &amp; Trade Secrets
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Lock size={16} />
                <span>Source Code Isolation Commitment</span>
              </div>
              <p className="text-slate-300">
                All client proprietary software code, trade secrets, database schemas, and intellectual property provided to or developed by <strong>Dropify Express LLC / iFalcon Technologies</strong> are subject to strict non-disclosure obligations. Client code is NEVER utilized for model training, public repositories, or unauthorized third-party sharing.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">4.</span>
              How We Utilize Collected Information
            </h2>
            <p>Dropify Express LLC utilizes collected information exclusively for legitimate commercial purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
              <li>Executing contractually agreed software development, e-commerce, and app engineering services;</li>
              <li>Administering Statements of Work (SOW), milestones, invoicing, and tax accounting;</li>
              <li>Complying with Anti-Money Laundering (AML), Know-Your-Customer (KYC), and commercial banking regulations;</li>
              <li>Delivering critical infrastructure updates, technical support, and security alerts;</li>
              <li>Protecting against fraud, security incidents, and unauthorized platform access.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">5.</span>
              Third-Party Processors &amp; Banking Disclosures
            </h2>
            <p>
              We do not sell, rent, or trade client personal or corporate information. Information is disclosed solely to authorized service providers assisting in corporate operations, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
              <li>
                <strong>Financial &amp; Banking Partners:</strong> Licensed banking entities, specifically <strong>Mercury Bank</strong> (and partner depository banks Choice Financial Group / Evolve Bank &amp; Trust), for escrow management, ACH clearing, and wire settlements.
              </li>
              <li>
                <strong>Payment Gateways:</strong> PCI-DSS Level 1 compliant processors (such as Stripe) for secure card transactions.
              </li>
              <li>
                <strong>Cloud &amp; Code Infrastructure:</strong> SOC-2 compliant hosting providers including Amazon Web Services (AWS), Google Cloud Platform (GCP), GitHub Enterprise, and Vercel.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">6.</span>
              Data Security Standards &amp; Retention
            </h2>
            <p>
              We implement enterprise-grade technical and organizational security controls, including TLS 1.3 encryption in transit, AES-256 encryption at rest, mandatory multi-factor authentication (MFA) across all engineer workstations, and role-based access management.
            </p>
            <p>
              Information is retained only as long as necessary to fulfill contractual deliverables, comply with statutory tax and accounting obligations (typically 7 years for financial records), and resolve commercial disputes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">7.</span>
              Your Legal Rights (CCPA &amp; GDPR)
            </h2>
            <p>
              Depending on your jurisdiction, you retain rights to request access to the personal data we hold, request rectification or erasure of inaccurate records, object to processing, or request data portability. To exercise any statutory privacy rights, contact our compliance team using the information below.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">8.</span>
              Contact Information &amp; Legal Notices
            </h2>
            <p>
              Direct all questions, privacy inquiries, or corporate compliance verifications to:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <div className="text-white font-bold">Dropify Express LLC</div>
              <div>Trading Division: iFalcon Technologies</div>
              <div>United States of America</div>
              <div>
                Privacy &amp; Compliance Email:{' '}
                <a href="mailto:contact@dropifyexpress.com" className="text-cyan-400 hover:underline">
                  contact@dropifyexpress.com
                </a>
              </div>
              <div>Secondary Inquiries: support@ifalcontechnologies.com</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
