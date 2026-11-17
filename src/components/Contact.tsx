import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Copy,
  FolderGit2,
  Mail,
  Send,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PROFILE } from '../data/portfolioData';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedSubject = form.subject.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setStatus('error');
      setFeedback('Please complete all fields before sending your message.');
      return;
    }

    if (contactEndpoint) {
      setStatus('submitting');
      setFeedback('');
      try {
        const res = await fetch(contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage,
          }),
        });

        if (!res.ok) {
          throw new Error('Request failed');
        }

        setStatus('sent');
        setFeedback('Thank you! Your message has been sent successfully.');
        setForm(INITIAL_FORM);
      } catch {
        setStatus('error');
        setFeedback(
          'Unable to reach the configured form endpoint. You can send your message directly via email.'
        );
      }
      return;
    }

    const mailtoSubject = encodeURIComponent(trimmedSubject);
    const mailtoBody = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus('sent');
    setFeedback(
      `Your email draft to ${PROFILE.email} has been prepared in your mail client.`
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#00C853]/12 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details */}
          <SectionReveal className="lg:col-span-5">
            <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
              06. Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s connect &amp; build together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Open to software development internships, collaborative student projects, and web
              application opportunities. Reach out directly by email, GitHub, or the message
              form.
            </p>

            {/* Verified Direct Channels */}
            <div className="mt-8 space-y-4">
              <div className="glass-surface glow-card-hover flex items-center justify-between gap-3 rounded-2xl border border-white/[0.09] p-4">
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0B0F14] text-[#00C853]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="block truncate text-sm font-semibold text-white transition-colors hover:text-[#00C853]"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-[#0B0F14] px-3 text-xs font-medium text-slate-300 transition-colors hover:border-[#00C853]/50 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-surface glow-card-hover group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.09] p-4"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0B0F14] text-[#00C853]">
                    <FolderGit2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">GitHub</p>
                    <p className="truncate text-sm font-semibold text-white">
                      github.com/{PROFILE.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[#00C853] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </SectionReveal>

          {/* Right Column: Contact Form */}
          <SectionReveal delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-surface relative rounded-2xl border border-white/[0.09] p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-8 h-px w-28 bg-gradient-to-r from-transparent via-[#00C853]/70 to-transparent"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-white/12 bg-[#0B0F14]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner transition-all focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/12 bg-[#0B0F14]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner transition-all focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/20 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                  placeholder="Internship inquiry, project collaboration, or question"
                  className="mt-2 w-full rounded-xl border border-white/12 bg-[#0B0F14]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner transition-all focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/20 focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Write your message here..."
                  className="mt-2 w-full resize-y rounded-xl border border-white/12 bg-[#0B0F14]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner transition-all focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/20 focus:outline-none"
                />
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                    role="status"
                    className={`mt-5 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
                      status === 'error'
                        ? 'border-red-500/30 bg-red-500/10 text-red-200'
                        : 'border-[#00C853]/30 bg-[#00C853]/10 text-emerald-100'
                    }`}
                  >
                    {status === 'error' ? (
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#00C853]"
                        aria-hidden="true"
                      />
                    )}
                    <span>{feedback}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  {contactEndpoint
                    ? 'Connected to configured form endpoint.'
                    : 'Opens your default email client addressed to iragenaadolphe@gmail.com.'}
                </p>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="glow-accent inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-all hover:brightness-105 disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101820]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
