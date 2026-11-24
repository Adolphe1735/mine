import { ArrowDownRight, Download, FolderGit2, GraduationCap, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';
import { EASE_OUT_EXPO } from './MotionPrimitives';
import TechLogo from './TechLogo';
import TechMarquee from './TechMarquee';

interface HeroProps {
  onOpenCv: () => void;
}

const HERO_FEATURED_LANGUAGES = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'PHP',
  'Laravel',
  'Python',
  'MySQL',
  'Dart',
];

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
          {/* Left Column: Elevated Editorial Hero Stage */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="glass-surface relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/[0.1] p-6 sm:p-9 lg:col-span-7"
          >
            {/* Architectural Emerald Top Highlight & Corner Brackets */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/75 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 h-4 w-4 rounded-tl border-t border-l border-[#00C853]/50"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 rounded-br border-r border-b border-[#00C853]/50"
            />

            {/* Academic Track & Institution Header Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04, ease: EASE_OUT_EXPO }}
              className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 border-b border-white/[0.08] pb-4 text-xs font-mono tracking-wide sm:text-sm"
            >
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#00E676]">
                <GraduationCap className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
                <span>{PROFILE.educationLevel}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
                <span>
                  {PROFILE.institution}, {PROFILE.country}
                </span>
              </span>
            </motion.div>

            {/* Primary Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] lg:leading-[1.08]"
            >
              <span className="block text-sm font-mono font-semibold tracking-[0.2em] text-slate-400 sm:text-base">
                HELLO, I&apos;M
              </span>
              <span className="mt-1 inline-block bg-gradient-to-r from-white via-[#00E676] to-[#00C853] bg-clip-text text-transparent">
                IRAGENA ADOLPHE
              </span>
            </motion.h1>

            {/* Animated Emerald Accent Rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.14, ease: EASE_OUT_EXPO }}
              aria-hidden="true"
              className="mt-4 h-[2px] w-28 origin-left rounded-full bg-gradient-to-r from-[#00E676] via-[#00C853] to-transparent"
            />

            {/* Role Subtitle Card Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="mt-5 rounded-xl border border-white/[0.08] bg-[#0B0F14]/70 px-4 py-3"
            >
              <p className="text-sm font-medium leading-relaxed text-slate-200 sm:text-base">
                <span>Software Developer</span>
                <span aria-hidden="true" className="mx-2 text-[#00C853]">
                  |
                </span>
                <span>React.js Developer</span>
                <span aria-hidden="true" className="mx-2 text-[#00C853]">
                  |
                </span>
                <span className="text-[#00E676]">Full-Stack Development Enthusiast</span>
              </p>
            </motion.div>

            {/* Main Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-300"
            >
              {PROFILE.heroDescription}
            </motion.p>

            {/* Interactive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollToSection('projects')}
                className="glow-accent group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-all duration-150 hover:brightness-105 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
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
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0B0F14]/85 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:border-[#00C853]/60 hover:bg-[#15202B] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
              >
                <Mail
                  className="h-4 w-4 text-[#00C853] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>Contact Me</span>
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenCv}
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-150 hover:border-[#00C853]/50 hover:bg-[#00C853]/10 hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
              >
                <Download
                  className="h-4 w-4 text-[#00C853] transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Quick Featured Languages Logo Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-5"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                Core Stack
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {HERO_FEATURED_LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    title={lang}
                    className="group/icon inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 transition-colors hover:text-white"
                  >
                    <TechLogo
                      name={lang}
                      className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover/icon:scale-115"
                    />
                    <span className="hidden sm:inline">{lang}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

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
