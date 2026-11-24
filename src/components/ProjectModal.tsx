import { useEffect, useState } from 'react';
import { CheckCircle2, ExternalLink, FolderGit2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PROFILE, type ProjectItem } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';
import { EASE_OUT_EXPO } from './MotionPrimitives';
import TechLogo from './TechLogo';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'stack'>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

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

            {/* Interactive Tab Switcher */}
            <div className="border-b border-white/[0.08] bg-[#0B0F14]/50 px-6 py-3 sm:px-8">
              <div
                role="tablist"
                aria-label="Project details view"
                className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-[#101820] p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'overview'}
                  onClick={() => setActiveTab('overview')}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-[#00C853] text-[#0B0F14]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Overview &amp; Features
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'stack'}
                  onClick={() => setActiveTab('stack')}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'stack'
                      ? 'bg-[#00C853] text-[#0B0F14]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Technical Stack
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {activeTab === 'overview' ? (
                <div>
                  <p className="text-base leading-relaxed text-slate-200">
                    {project.fullDescription}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Implemented Features
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-200"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#00C853]"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Technology Stack
                    </h4>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0B0F14]/85 px-4 py-3"
                        >
                          <TechLogo name={tech} className="h-5 w-5 shrink-0" />
                          <span className="font-mono text-sm font-medium text-white">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#0B0F14]/65 p-4">
                    <p className="text-xs font-mono text-[#00C853]">Category</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {project.category} · Designed and built by {PROFILE.fullName}
                    </p>
                  </div>
                </div>
              )}

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
