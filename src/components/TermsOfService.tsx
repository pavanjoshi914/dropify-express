import { Scale, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            <Scale size={16} />
            <span>COMMERCIAL ENGAGEMENT CONTRACT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
            <span>Contracting Entity: <strong>Dropify Express LLC</strong></span>
            <span>•</span>
            <span>Trade Name: <strong>iFalcon Technologies</strong></span>
            <span>•</span>
            <span>Last Updated: <strong>October 1, 2026</strong></span>
          </div>
        </div>

        {/* Content Body */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">1.</span>
              Scope &amp; Acceptance of Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding contract entered into by and between <strong>Dropify Express LLC</strong>, a United States Limited Liability Company doing business under the trade name <strong>iFalcon Technologies</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), and the individual or business entity (&quot;Client&quot;, &quot;you&quot;) engaging our software development, e-commerce engineering, and mobile app design services.
            </p>
            <p>
              By executing a Statement of Work (SOW), submitting an invoice payment, or engaging our engineering team, you acknowledge and agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">2.</span>
              Statements of Work (SOW) &amp; Engineering Deliverables
            </h2>
            <p>
              All software coding, mobile application, and e-commerce engineering projects are governed by individual Statements of Work (SOW) or written service proposals executed between the parties. Each SOW outlines:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
              <li>Detailed functional and non-functional technical specifications;</li>
              <li>Milestone schedules, deliverable criteria, and project phases;</li>
              <li>Estimated budget, invoicing milestones, and payment schedule;</li>
              <li>Client feedback review periods (standard 7 business days per milestone).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">3.</span>
              Intellectual Property Assignment (100% Client Ownership)
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <CheckCircle2 size={16} />
                <span>Full Work-for-Hire Assignment Clause</span>
              </div>
              <p className="text-slate-300">
                Upon full settlement of all milestone fees stipulated in the applicable SOW, <strong>Dropify Express LLC</strong> irrevocably assigns, transfers, and conveys to Client all right, title, and interest in and to custom source code, documentation, UI/UX designs, and bespoke software created specifically for Client.
              </p>
              <p className="text-xs text-slate-400">
                General pre-existing developer utilities, open-source libraries (e.g., React, Three.js, Flutter), or third-party packages remain licensed under their respective MIT/Apache licenses.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">4.</span>
              Invoicing, Banking &amp; Commercial Payment Terms
            </h2>
            <p>
              Dropify Express LLC operates through verified US corporate commercial banking channels:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
              <li>
                <strong>Accepted Settlement Methods:</strong> Domestic US Wire Transfers (Fedwire), Automated Clearing House (ACH) direct debits, International SWIFT Wire Transfers, and major corporate credit cards processed via secure PCI-compliant gateways.
              </li>
              <li>
                <strong>Payment Schedule:</strong> Project engagements are billed according to SOW milestones (typically initial deposit upon contract signing, followed by functional milestone deliverables, and final release payment upon deployment).
              </li>
              <li>
                <strong>Invoicing Entity:</strong> Invoices are officially issued by <strong>Dropify Express LLC</strong> (operating as iFalcon Technologies). Payments must be remitted strictly to corporate bank accounts held in the legal name of Dropify Express LLC at authorized US banking partners (including Mercury Bank).
              </li>
              <li>
                <strong>Currency:</strong> Unless expressly specified in the SOW, all contracts and financial transactions are executed in United States Dollars (USD).
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">5.</span>
              Post-Delivery Quality Warranty (30-Day Bug Fix Period)
            </h2>
            <p>
              We provide a <strong>30-day complimentary post-launch warranty</strong> for all custom coded software delivered by iFalcon Technologies. During this 30-day window following final production deployment, Company will remediate any reproducible bugs or functional defects that diverge from the approved SOW specifications at no additional charge to Client.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">6.</span>
              Confidentiality &amp; Non-Disclosure
            </h2>
            <p>
              Both parties agree to hold all confidential information, business data, technical secrets, source code, and commercial agreements in strict confidence. Confidential information shall not be disclosed to any third party without prior written authorization, except as required by law or judicial subpoena.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">7.</span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, revenue, or business interruption) arising out of or related to this Agreement. The total aggregate liability of Dropify Express LLC arising under any SOW shall not exceed the total fees paid by Client to Company under that specific SOW in the six (6) months preceding the claim.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">8.</span>
              Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              This Agreement shall be governed by, construed, and enforced in accordance with the substantive laws of the <strong>State of Delaware</strong> and the federal laws of the <strong>United States of America</strong>, without regard to conflict of law principles.
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to this contract shall first be subject to good-faith executive mediation. In the event mediation fails, disputes shall be submitted to binding commercial arbitration under the American Arbitration Association (AAA) commercial rules.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">9.</span>
              Corporate Inquiries &amp; Legal Notices
            </h2>
            <p>
              Official legal notices to Dropify Express LLC shall be transmitted via tracked courier or confirmed electronic mail to:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <div className="text-white font-bold">Dropify Express LLC</div>
              <div>Attn: Legal &amp; Compliance Department</div>
              <div>Trade Division: iFalcon Technologies</div>
              <div>United States of America</div>
              <div>
                Corporate Email:{' '}
                <a href="mailto:contact@dropifyexpress.com" className="text-cyan-400 hover:underline">
                  contact@dropifyexpress.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
