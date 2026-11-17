import { BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';

export default function Education() {
  return (
    <section id="education" className="section-divider bg-dot-matrix relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
            04. Education
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic foundation in software development.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Structured technical training focused on full-stack web engineering, relational
            databases, algorithms, and collaborative software practices.
          </p>
        </SectionReveal>

        {/* Timeline Wrapper */}
        <SectionReveal
          delay={0.08}
          className="glass-surface relative mt-10 rounded-2xl border border-white/[0.09] p-6 sm:p-8"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-8 h-px w-32 bg-gradient-to-r from-transparent via-[#00C853]/70 to-transparent"
          />

          {/* Institution Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00C853]/35 bg-[#00C853]/12 text-[#00C853] shadow-inner">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {EDUCATION_DATA.program}{' '}
                  <span aria-hidden="true" className="text-[#00C853]">
                    ·
                  </span>{' '}
                  {EDUCATION_DATA.level}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#0B0F14]/80 px-3.5 py-2 text-sm font-medium text-slate-200">
              <MapPin className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
              <span>{EDUCATION_DATA.country}</span>
            </div>
          </div>

          {/* Connected Visual Curriculum Timeline */}
          <div className="relative mt-8 pl-6 sm:pl-8">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-2 w-px bg-gradient-to-b from-[#00C853]/70 via-white/15 to-transparent sm:left-3"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {EDUCATION_DATA.highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                  className="glow-card-hover group relative flex flex-col rounded-xl border border-white/[0.08] bg-[#0B0F14]/85 p-5"
                >
                  {/* Timeline Node Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute top-6 -left-[22px] h-2.5 w-2.5 rounded-full border-2 border-[#00C853] bg-[#0B0F14] transition-transform duration-200 group-hover:scale-125 group-hover:bg-[#00C853] sm:-left-[26px]"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold text-[#00C853] tabular-nums">
                      Module 0{idx + 1}
                    </span>
                    <BookOpen
                      className="h-4 w-4 text-slate-500 transition-colors duration-200 group-hover:text-[#00C853]"
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="mt-3 font-display text-base font-semibold text-white transition-colors duration-200 group-hover:text-[#00E676]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
