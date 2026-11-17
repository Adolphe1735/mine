import { useEffect } from 'react';
import { CheckCircle2, ExternalLink, FolderGit2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PROFILE, type ProjectItem } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

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
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.26, ease: EASE_OUT_EXPO }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#101820] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-[#101820]/95 px-6 py-4 backdrop-blur-md">
              <div className="min-w-0">
                <p className="text-xs font-mono text-[#00C853]">{project.category}</p>
                <h3
                  id="project-modal-title"
                  className="truncate font-display text-xl font-bold text-white"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14] text-slate-300 transition-colors hover:border-[#00C853]/50 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* High-Resolution Preview Image */}
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-[#0B0F14]">
              <ImageWithFallback
                src={project.image}
                alt={project.imageAlt}
                fallbackTitle={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <p className="text-base leading-relaxed text-slate-200">{project.fullDescription}</p>

              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Implemented Features
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#00C853]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies Used
                </h4>
                <p className="mt-2 font-mono text-sm text-[#00C853]">
                  {project.technologies.join(' · ')}
                </p>
              </div>

              {/* External Links */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#00C853] px-5 py-2.5 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-[#00E676] whitespace-nowrap shrink-0"
                  >
                    <span>Open Live Website</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                <a
                  href={project.githubUrl ?? PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0B0F14] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] whitespace-nowrap shrink-0"
                >
                  <FolderGit2 className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                  <span>
                    {project.githubUrl ? 'View GitHub Repository' : 'Visit GitHub Profile'}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
