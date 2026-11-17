import { ArrowUpRight, GraduationCap, MapPin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SectionReveal } from './MotionPrimitives';

export default function About() {
  return (
    <section id="about" className="section-divider relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-6rem] h-72 w-72 -translate-y-1/2 rounded-full bg-[#00C853]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Section Heading Column */}
          <SectionReveal className="lg:col-span-4">
            <p className="text-xs font-mono font-medium text-[#00C853] tracking-wider">
              01. About Me
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Passionate about practical software engineering.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Focused on full-stack web architecture, clean database design, networking, and
              continuous learning through hands-on software projects.
            </p>
          </SectionReveal>

          {/* Bio & Factual Profile Card */}
          <SectionReveal delay={0.08} className="lg:col-span-8">
            <div className="glass-surface glow-card-hover relative rounded-2xl border border-white/[0.09] p-6 sm:p-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-8 h-px w-28 bg-gradient-to-r from-transparent via-[#00C853]/70 to-transparent"
              />

              <p className="text-base leading-relaxed text-slate-200 sm:text-[17px]">
                {PROFILE.aboutParagraph}
              </p>

              {/* Main Interests — Clean Unboxed Inline List */}
              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <p className="text-xs font-mono text-slate-400">Core Focus Areas</p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {PROFILE.interests.map((interest, idx) => (
                    <span key={interest}>
                      {interest}
                      {idx < PROFILE.interests.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-[#00C853]">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Direct Verified Details */}
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14]/90">
                    <GraduationCap
                      className="h-4 w-4 text-[#00C853]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Education</p>
                    <p className="text-sm font-semibold text-white">L5 SOD · EAV Kivumu TSS</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14]/90">
                    <MapPin className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Country</p>
                    <p className="text-sm font-semibold text-white">{PROFILE.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14]/90">
                    <Terminal className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">GitHub</p>
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-[#00C853]"
                    >
                      <span>{PROFILE.githubHandle}</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[#00C853] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
