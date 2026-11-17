import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  EDUCATION_DATA,
  PROFILE,
  PROJECTS,
  SKILL_CATEGORIES,
} from '../data/portfolioData';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownloadTxt = () => {
    const lines = [
      `${PROFILE.fullName.toUpperCase()}`,
      `${PROFILE.profession} | ${PROFILE.educationLevel}`,
      `${PROFILE.institution}, ${PROFILE.country}`,
      `Email: ${PROFILE.email}`,
      `GitHub: ${PROFILE.githubUrl}`,
      '',
      'ABOUT ME',
      '--------',
      PROFILE.aboutParagraph,
      '',
      'EDUCATION',
      '---------',
      `${EDUCATION_DATA.institution} — ${EDUCATION_DATA.program} (${EDUCATION_DATA.level}, ${EDUCATION_DATA.country})`,
      ...EDUCATION_DATA.highlights.map((h) => `- ${h.title}`),
      '',
      'TECHNICAL SKILLS',
      '----------------',
      ...SKILL_CATEGORIES.map((cat) => `${cat.title}: ${cat.items.join(', ')}`),
      '',
      'PROJECTS',
      '--------',
      ...PROJECTS.map(
        (p) =>
          `- ${p.title} (${p.technologies.join(', ')}): ${p.shortDescription}${
            p.liveUrl ? ` | Live: ${p.liveUrl}` : ''
          }${p.githubUrl ? ` | Repo: ${p.githubUrl}` : ''}`
      ),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Iragena-Adolphe-CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cv-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            key="cv-modal-card"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.26, ease: EASE_OUT_EXPO }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#101820] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Controls */}
            <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#101820]/95 px-6 py-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-mono text-[#00C853]">Curriculum Vitae</p>
                <h3 id="cv-modal-title" className="font-display text-lg font-bold text-white">
                  {PROFILE.fullName} — Resume Summary
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#00C853] px-3.5 py-2 text-xs font-semibold text-[#0B0F14] transition-colors hover:bg-[#00E676] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadTxt}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/15 bg-[#0B0F14] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                  <span>Download .txt</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14] text-slate-300 transition-colors hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Printable CV Sheet */}
            <div id="cv-printable-sheet" className="space-y-6 p-6 text-slate-200 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/[0.1] pb-5 sm:flex-row sm:items-center">
                <img
                  src={PROFILE.heroImage}
                  alt={PROFILE.heroImageAlt}
                  className="h-16 w-16 shrink-0 rounded-xl border border-[#00C853]/40 object-cover object-top"
                />
                <div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    {PROFILE.fullName}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[#00C853]">{PROFILE.heroSubtitle}</p>
                  <p className="mt-1.5 text-xs text-slate-400">
                    {PROFILE.institution} · {PROFILE.educationLevel} · {PROFILE.country} ·{' '}
                    {PROFILE.email} · {PROFILE.githubUrl}
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#00C853]">
                  Profile
                </h5>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {PROFILE.aboutParagraph}
                </p>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#00C853]">
                  Education
                </h5>
                <p className="mt-2 text-sm font-semibold text-white">
                  {EDUCATION_DATA.institution} — {EDUCATION_DATA.program} ({EDUCATION_DATA.level},{' '}
                  {EDUCATION_DATA.country})
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 text-xs text-slate-300 sm:grid-cols-2">
                  {EDUCATION_DATA.highlights.map((h) => (
                    <li key={h.title}>• {h.title}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#00C853]">
                  Technical Skills
                </h5>
                <div className="mt-2 space-y-2 text-xs text-slate-300">
                  {SKILL_CATEGORIES.map((cat) => (
                    <p key={cat.id}>
                      <span className="font-semibold text-white">{cat.title}:</span>{' '}
                      {cat.items.join(', ')}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#00C853]">
                  Projects
                </h5>
                <ul className="mt-2 space-y-2 text-xs text-slate-300">
                  {PROJECTS.map((project) => (
                    <li key={project.id}>
                      <span className="font-semibold text-white">{project.title}</span> (
                      {project.technologies.join(', ')}) — {project.shortDescription}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
