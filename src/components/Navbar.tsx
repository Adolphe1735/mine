import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/[0.08] bg-[#0B0F14]/90 shadow-lg shadow-black/25 backdrop-blur-md'
          : 'border-b border-transparent bg-[#0B0F14]/55 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#00C853] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] rounded-md px-1"
        >
          {PROFILE.fullName}
        </a>

        {/* Zone 2: Single-line navigation links with gliding layoutId underline */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] rounded px-1 ${
                  isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    aria-hidden="true"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[#00C853]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#00C853] px-4 py-2 text-xs font-semibold text-[#0B0F14] transition-colors duration-150 hover:bg-[#00E676] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            Get in Touch
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#101820] text-white transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="border-t border-white/[0.08] bg-[#101820]/98 backdrop-blur-md lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#00C853]/12 text-[#00C853]'
                        : 'text-slate-200 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-xs font-mono text-[#00C853]">Active</span>}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
