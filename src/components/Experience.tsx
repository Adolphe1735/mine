import { useState } from 'react';
import { ArrowDownRight, CheckCircle2, Code2, Database, GitBranch, Server } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { EXPERIENCE_TRACKS } from '../data/portfolioData';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';
import GitHubHeatmap from './GitHubHeatmap';
import TechLogo from './TechLogo';

const TRACK_ICONS = [Code2, Server, Database, GitBranch];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const current = EXPERIENCE_TRACKS[activeIndex];

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="section-divider relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[-6rem] h-72 w-72 rounded-full bg-[#00C853]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
            Practical Engineering Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hands-on project &amp; development experience.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Practical technical experience gained through building real-world software projects
            and completing Level 5 Software Development (L5 SOD) training at EAV Kivumu TSS.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Interactive Experience Track Selector */}
          <div
            role="tablist"
            aria-label="Practical engineering experience tracks"
            className="flex flex-col gap-3 lg:col-span-5"
          >
            {EXPERIENCE_TRACKS.map((track, idx) => {
              const Icon = TRACK_ICONS[idx % TRACK_ICONS.length];
              const isSelected = activeIndex === idx;

              return (
                <button
                  key={track.index}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`glass-surface group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] ${
                    isSelected
                      ? 'border-[#00C853]/60 shadow-[0_12px_32px_-16px_rgba(0,200,83,0.35)]'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isSelected
                        ? 'border-[#00C853]/50 bg-[#00C853]/15 text-[#00E676]'
                        : 'border-white/10 bg-[#0B0F14] text-[#00C853]'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#00C853] tabular-nums">
                        {track.index}
                      </span>
                      <span className="truncate text-xs text-slate-400">{track.context}</span>
                    </div>
                    <h3 className="mt-1 font-display text-base font-semibold text-white">
                      {track.role}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Experience Detail Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="glass-surface relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.1] p-6 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-8 h-px w-28 bg-gradient-to-r from-transparent via-[#00C853]/75 to-transparent"
                />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#00C853]">
                      {current.index} · {current.context}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {current.role}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {current.summary}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      What I Build &amp; Apply
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {current.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-200"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#00C853]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-end">
                  <div className="space-y-2">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        Applied In Projects
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-200">
                        {current.appliedProjects.join(' · ')}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1">
                      {current.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300"
                        >
                          <TechLogo name={tech} className="h-3.5 w-3.5 shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToProjects}
                    className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-xl border border-white/15 bg-[#0B0F14] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#00C853]/55 hover:text-[#00E676] whitespace-nowrap cursor-pointer"
                  >
                    <span>See Related Projects</span>
                    <ArrowDownRight className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Live GitHub Contribution Heatmap */}
        <SectionReveal delay={0.1}>
          <GitHubHeatmap />
        </SectionReveal>
      </div>
    </section>
  );
}
