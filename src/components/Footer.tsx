import { ArrowUp, FolderGit2, Mail } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0B0F14] py-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/35 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="font-display text-base font-bold text-white">{PROFILE.fullName}</p>
          <p className="mt-1 text-xs text-slate-400">
            © {currentYear} {PROFILE.fullName}. {PROFILE.educationLevel} · {PROFILE.institution},{' '}
            {PROFILE.country}.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-[#00C853]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label={`Email ${PROFILE.fullName}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#101820] text-slate-300 transition-colors hover:border-[#00C853]/50 hover:text-[#00C853]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#101820] text-slate-300 transition-colors hover:border-[#00C853]/50 hover:text-[#00C853]"
          >
            <FolderGit2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#101820] text-slate-300 transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
