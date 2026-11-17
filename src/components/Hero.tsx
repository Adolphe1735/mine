import { ArrowDownRight, Download, FolderGit2, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';
import { EASE_OUT_EXPO } from './MotionPrimitives';
import TechMarquee from './TechMarquee';

interface HeroProps {
  onOpenCv: () => void;
}

export default function Hero({ onOpenCv }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="bg-architectural-grid relative overflow-hidden pt-28 sm:pt-36"
    >
      {/* Layered Ambient Green Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-1/4 h-[460px] w-[460px] rounded-full bg-[#00C853]/14 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-[-8rem] h-80 w-80 rounded-full bg-[#00C853]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F14]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Staggered Editorial Hierarchy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="mb-4 flex items-center gap-2 text-sm font-medium tracking-wide"
            >
              <span className="h-px w-6 bg-[#00C853]" aria-hidden="true" />
              <span className="text-[#00C853]">{PROFILE.educationLevel}</span>
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
              <span className="text-slate-300">
                {PROFILE.institution}, {PROFILE.country}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.06, ease: EASE_OUT_EXPO }}
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            >
              HELLO, I&apos;M{' '}
              <span className="bg-gradient-to-r from-[#00E676] via-[#00C853] to-emerald-300 bg-clip-text text-transparent">
                IRAGENA ADOLPHE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.12, ease: EASE_OUT_EXPO }}
              className="mt-4 text-base font-medium text-slate-200 sm:text-lg"
            >
              {PROFILE.heroSubtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-400"
            >
              {PROFILE.heroDescription}
            </motion.p>

            {/* Interactive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollToSection('projects')}
                className="glow-accent group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-all duration-150 hover:brightness-105 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
              >
                <span>View My Projects</span>
                <ArrowDownRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollToSection('contact')}
                className="glass-surface inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#00C853]/55 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
              >
                <Mail className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                <span>Contact Me</span>
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenCv}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#101820]/55 px-5 py-3 text-sm font-medium text-slate-300 transition-colors duration-150 hover:border-[#00C853]/45 hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
              >
                <Download className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Framed Developer Visual with Layered Glow & Corner Brackets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="relative lg:col-span-5"
          >
            {/* Ambient Emerald Halo Behind Frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00C853]/15 via-transparent to-[#00E676]/10 blur-xl"
            />

            {/* Architectural Corner Brackets */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-2.5 -left-2.5 z-10 h-6 w-6 rounded-tl-lg border-t-2 border-l-2 border-[#00C853]/70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2.5 -bottom-2.5 z-10 h-6 w-6 rounded-br-lg border-r-2 border-b-2 border-[#00C853]/70"
            />

            <div className="glass-surface group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 shadow-2xl transition-colors duration-300 hover:border-[#00C853]/45">
              <div className="relative aspect-square w-full flex-1 overflow-hidden lg:aspect-[4/4] lg:min-h-[360px]">
                <ImageWithFallback
                  src={PROFILE.heroImage}
                  alt={PROFILE.heroImageAlt}
                  fallbackTitle={PROFILE.fullName}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 via-transparent to-transparent"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] bg-[#101820]/95 px-5 py-3.5 backdrop-blur-md">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-white">
                    {PROFILE.fullName}
                  </p>
                  <p className="truncate text-xs text-slate-400">
                    {PROFILE.profession} · {PROFILE.country}
                  </p>
                </div>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/12 bg-[#0B0F14] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-[#00C853]/60 hover:text-[#00E676] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                >
                  <FolderGit2 className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                  <span>@{PROFILE.githubHandle}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Factual Overview Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-4"
        >
          <div className="transition-transform duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-medium text-slate-400">Academic Track</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">L5 SOD Student</p>
          </div>
          <div className="transition-transform duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-medium text-slate-400">Institution</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">
              {PROFILE.institution}
            </p>
          </div>
          <div className="transition-transform duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-medium text-slate-400">Portfolio Works</p>
            <p className="mt-1 font-display text-lg font-semibold text-white tabular-nums">
              6 Featured Projects
            </p>
          </div>
          <div className="transition-transform duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-medium text-slate-400">Location</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">{PROFILE.country}</p>
          </div>
        </motion.div>
      </div>

      {/* Smooth Animated Technology Stack Ribbon */}
      <TechMarquee />
    </section>
  );
}
