import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Full-Cycle Web Apps & APIs',
    budget: '$15,000 - $35,000',
    timeline: '1 - 2 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-[#4F80FF]">
                <Mail size={13} />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-[900] uppercase tracking-tight text-white font-phudu">
                LET&apos;S BUILD SOMETHING GREAT
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                Have a project in mind or need a dedicated engineering team? Connect with our technical leads for a free architecture review and project estimate.
              </p>
            </div>

            {/* Direct Contact Info Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#4F80FF] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">Email Us</div>
                  <a
                    href="mailto:contact@dropifyexpress.com"
                    className="text-[#4F80FF] hover:underline font-mono text-sm block mt-0.5"
                  >
                    contact@dropifyexpress.com
                  </a>
                  <div className="text-slate-400 font-mono text-xs mt-0.5">
                    support@ifalcontechnologies.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">Response SLA</div>
                  <div className="text-slate-300 text-sm mt-0.5">Under 24 hours guaranteed</div>
                  <div className="text-emerald-400 font-mono text-xs">Mon – Fri: 9:00 AM – 6:00 PM EST</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">Confidentiality</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    Mutual standard non-disclosure agreement applied automatically to all project inquiries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-[900] uppercase text-white font-phudu">
                    Message Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>iFalcon Technologies</strong>. Our engineering leads will review your requirements and respond to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-[900] uppercase text-white font-phudu mb-2">
                    Request Project Proposal
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      >
                        <option>Full-Cycle Web Apps &amp; APIs</option>
                        <option>Startup &amp; MVP Development</option>
                        <option>High-Performance E-Commerce</option>
                        <option>Cross-Platform Mobile Apps (iOS/Android)</option>
                        <option>Interactive 3D Web &amp; WebGL</option>
                        <option>Dedicated Engineering Pod / Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      >
                        <option>$5,000 - $15,000 (MVP / Sprint)</option>
                        <option>$15,000 - $35,000 (Full Production)</option>
                        <option>$35,000 - $75,000 (Enterprise Platform)</option>
                        <option>$75,000+ (Custom Architecture / Team)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                      >
                        <option>Immediate (1 - 3 Weeks)</option>
                        <option>1 - 2 Months</option>
                        <option>3 - 6 Months</option>
                        <option>Ongoing Engineering Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Project Overview *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you are building, target platforms, and timeline goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#4F80FF] focus:ring-1 focus:ring-[#4F80FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-xs tracking-wider uppercase bg-[#4F80FF] hover:bg-[#3b6fe6] text-white shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <span>SUBMIT PROJECT INQUIRY</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
