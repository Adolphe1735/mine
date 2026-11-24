import { useState } from 'react';
import { ArrowUpRight, Eye, ExternalLink, FolderGit2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PROFILE, PROJECTS, type ProjectItem } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';
import TechLogo from './TechLogo';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_OPTIONS = ['All', 'React.js', 'Full-Stack & API', 'Web UI'] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-divider relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-[#00C853]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
              03. Selected Projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Practical applications &amp; system builds.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              A collection of frontend interfaces, full-stack REST APIs, and academic web
              platforms built with React.js, Node.js, Express.js, MySQL, and core web standards.
            </p>
          </div>

          {/* Interactive Filter Controls with Gliding Indicator */}
          <div
            role="tablist"
            aria-label="Filter projects by stack"
            className="glass-surface flex flex-wrap items-center gap-1 rounded-xl border border-white/[0.08] p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option)}
                  className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected ? 'text-[#0B0F14] font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="projects-filter-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00C853] to-[#00E676]"
                    />
                  )}
                  <span className="relative z-10">{option}</span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Smooth Keyed Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
            className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, idx) => {
              const hasRepoUrl = Boolean(project.githubUrl);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.34, delay: idx * 0.04, ease: EASE_OUT_EXPO }}
                  className="glass-surface glow-card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.09]"
                >
                  {/* 4:3 Screenshot Container with Hover Preview Affordance */}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`Inspect ${project.title} details`}
                    className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/[0.08] bg-[#0B0F14] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00C853]"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/85 via-[#0B0F14]/15 to-transparent transition-opacity duration-300"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#0B0F14]/85 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100"
                    >
                      <Eye className="h-3 w-3 text-[#00C853]" />
                      <span>Preview</span>
                    </span>
                  </button>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-mono text-[#00C853]">{project.category}</p>
                        <span className="font-mono text-xs text-slate-500 tabular-nums">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="mt-1.5 font-display text-xl font-semibold text-white transition-colors duration-200 group-hover:text-[#00E676]">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {project.shortDescription}
                      </p>

                      {/* Clean Unboxed Technology Stack with Brand Logos */}
                      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-slate-400">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="inline-flex items-center gap-1.5">
                            <TechLogo name={tech} className="h-3.5 w-3.5 shrink-0" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/[0.08] pt-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#00C853] to-[#00E676] px-3.5 py-2 text-xs font-semibold text-[#0B0F14] transition-all hover:brightness-105 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                        >
                          <span>View Project</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#00C853] to-[#00E676] px-3.5 py-2 text-xs font-semibold text-[#0B0F14] transition-all hover:brightness-105 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      )}

                      <a
                        href={project.githubUrl ?? PROFILE.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          hasRepoUrl
                            ? `Open ${project.title} repository on GitHub`
                            : 'View Iragena Adolphe repositories on GitHub'
                        }
                        className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-[#0B0F14]/90 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[#00C853]/55 hover:text-[#00E676] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                      >
                        <FolderGit2 className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                        <span>{hasRepoUrl ? 'GitHub Repository' : 'GitHub Profile'}</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
