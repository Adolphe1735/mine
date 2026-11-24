import { useState, type ReactNode } from 'react';
import { Code, Cpu, Database, Layers, Server, Wrench } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';
import TechLogo from './TechLogo';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  frontend: <Code className="h-5 w-5 text-[#00C853]" aria-hidden="true" />,
  backend: <Server className="h-5 w-5 text-[#00C853]" aria-hidden="true" />,
  database: <Database className="h-5 w-5 text-[#00C853]" aria-hidden="true" />,
  tools: <Wrench className="h-5 w-5 text-[#00C853]" aria-hidden="true" />,
  concepts: <Cpu className="h-5 w-5 text-[#00C853]" aria-hidden="true" />,
};

const TAB_ITEMS = [
  { id: 'all', label: 'All Areas' },
  ...SKILL_CATEGORIES.map((c) => ({
    id: c.id,
    label: c.title.replace(' Development', '').replace(' Management', ''),
  })),
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="section-divider bg-dot-matrix relative overflow-hidden py-20 sm:py-24"
    >
      {/* Subtle Ambient Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-[#00C853]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
              02. Technical Skills
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies &amp; engineering toolkit.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Core languages, frameworks, database engines, and foundational software engineering
              principles used across my projects.
            </p>
          </div>

          {/* Interactive Category Filter Bar with Gliding Indicator */}
          <div
            role="tablist"
            aria-label="Filter technical skills by category"
            className="glass-surface flex flex-wrap items-center gap-1 rounded-xl border border-white/[0.08] p-1"
          >
            {TAB_ITEMS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected ? 'text-[#0B0F14] font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="skills-filter-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00C853] to-[#00E676]"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Smooth Keyed Grid Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleCategories.map((category, idx) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: idx * 0.04, ease: EASE_OUT_EXPO }}
                className="glass-surface glow-card-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] p-6"
              >
                {/* Top Accent Line Reveal on Hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C853]/0 to-transparent transition-all duration-300 group-hover:via-[#00C853]/80"
                />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0B0F14]/90 shadow-inner transition-colors duration-200 group-hover:border-[#00C853]/45 group-hover:bg-[#00C853]/10">
                      {CATEGORY_ICONS[category.id] ?? (
                        <Layers className="h-5 w-5 text-[#00C853]" aria-hidden="true" />
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      0{idx + 1} · {category.items.length} items
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#00E676]">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {category.summary}
                  </p>
                </div>

                <ul className="mt-6 divide-y divide-white/[0.06] border-t border-white/[0.07]">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="group/item flex items-center justify-between py-2.5 text-sm font-medium text-slate-200 transition-colors duration-150 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[#0B0F14]/85 transition-colors duration-150 group-hover/item:border-[#00C853]/40">
                          <TechLogo
                            name={skill}
                            className="h-4 w-4 transition-transform duration-150 group-hover/item:scale-110"
                          />
                        </span>
                        <span>{skill}</span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-sm bg-[#00C853]/70 transition-all duration-200 group-hover/item:scale-125 group-hover/item:bg-[#00E676]"
                      />
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
