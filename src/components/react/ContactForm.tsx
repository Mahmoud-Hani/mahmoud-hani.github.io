import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');

    // Generate mailto fallback
    const mailtoUrl = `mailto:${portfolioData.identity.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 600);
  };

  return (
    <div className="rounded-2xl bg-card border border-border-subtle p-6 sm:p-8 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
          <Mail className="w-5 h-5 text-accent-blue" aria-hidden="true" />
          <span>Send Direct Message</span>
        </h3>
        <p className="text-text-muted text-xs mt-1">
          Reach out directly regarding security roles, internships, or technical collaborations.
        </p>
      </div>

      {status === 'success' ? (
        <div
          role="status"
          aria-live="polite"
          className="p-6 rounded-xl bg-secondary/80 border border-accent-teal/40 text-center space-y-3"
        >
          <CheckCircle2 className="w-10 h-10 text-accent-teal mx-auto" aria-hidden="true" />
          <h4 className="text-base font-bold text-text-primary">Transmission Prepared</h4>
          <p className="text-xs text-text-secondary max-w-sm mx-auto">
            Your message has been formatted. If your email client did not automatically open, you can send directly to:
          </p>
          <a
            href={`mailto:${portfolioData.identity.email}`}
            className="inline-block font-mono text-xs text-accent-blue hover:underline focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
          >
            {portfolioData.identity.email}
          </a>
          <div>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="mt-3 px-4 py-1.5 text-xs font-mono text-text-muted hover:text-text-primary border border-border-subtle rounded-md focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5"
              >
                Your Name <span className="text-accent-blue" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Vance"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-name' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-secondary border text-sm text-text-primary placeholder:text-text-dark focus-visible:ring-2 focus-visible:ring-accent-blue focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500/70' : 'border-border-subtle'
                }`}
              />
              {errors.name && (
                <p id="error-name" role="alert" className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" aria-hidden="true" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5"
              >
                Your Email <span className="text-accent-blue" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'error-email' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-secondary border text-sm text-text-primary placeholder:text-text-dark focus-visible:ring-2 focus-visible:ring-accent-blue focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500/70' : 'border-border-subtle'
                }`}
              />
              {errors.email && (
                <p id="error-email" role="alert" className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5"
            >
              Subject <span className="text-accent-blue" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Security Analyst Role / Project Inquiry"
              aria-required="true"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'error-subject' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-secondary border text-sm text-text-primary placeholder:text-text-dark focus-visible:ring-2 focus-visible:ring-accent-blue focus:outline-none transition-colors ${
                errors.subject ? 'border-red-500/70' : 'border-border-subtle'
              }`}
            />
            {errors.subject && (
              <p id="error-subject" role="alert" className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5"
            >
              Message <span className="text-accent-blue" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hello Mahmoud, I'd like to discuss an opportunity..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'error-message' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-secondary border text-sm text-text-primary placeholder:text-text-dark focus-visible:ring-2 focus-visible:ring-accent-blue focus:outline-none transition-colors resize-none ${
                errors.message ? 'border-red-500/70' : 'border-border-subtle'
              }`}
            />
            {errors.message && (
              <p id="error-message" role="alert" className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 px-6 rounded-lg text-sm font-semibold text-primary bg-accent-blue hover:bg-accent-blue-dark active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/10 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-accent-blue"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>{status === 'sending' ? 'Transmitting...' : 'Dispatch Message'}</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
