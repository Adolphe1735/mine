import type { ReactNode } from 'react';
import {
  Briefcase,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Layout,
  ServerCog,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { EASE_OUT_EXPO, SectionReveal } from './MotionPrimitives';

const SERVICE_ICONS: Record<string, ReactNode> = {
  '01': <Globe className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '02': <Layout className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '03': <Code2 className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '04': <Database className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '05': <ServerCog className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '06': <GraduationCap className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
  '07': <Briefcase className="h-4 w-4 text-[#00C853]" aria-hidden="true" />,
};

export default function Services() {
  return (
    <section id="services" className="section-divider relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
            05. Services &amp; Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Areas where I build &amp; contribute.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Development services and technical capabilities I am actively exploring and building
            for internships, collaborative projects, and web solutions.
          </p>
        </SectionReveal>

        {/* Clean Editorial Capability Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.42, delay: idx * 0.04, ease: EASE_OUT_EXPO }}
              className="glass-surface glow-card-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] p-6"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C853]/0 to-transparent transition-all duration-300 group-hover:via-[#00C853]/75"
              />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14]/90 transition-colors duration-200 group-hover:border-[#00C853]/45">
                      {SERVICE_ICONS[service.index]}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#00C853] tabular-nums">
                      {service.index}.
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-[#00C853]/65"
                  />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white transition-colors duration-200 group-hover:text-[#00E676]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>

              <p className="mt-5 border-t border-white/[0.06] pt-4 font-mono text-xs text-slate-400">
                {service.focus}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
