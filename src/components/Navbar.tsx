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
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/[0.1] bg-[#0B0F14]/92 shadow-[0_12px_36px_-18px_rgba(0,0,0,0.85)] backdrop-blur-md'
          : 'border-b border-white/[0.04] bg-[#0B0F14]/60 backdrop-blur-sm'
      }`}
    >
      {/* Subtle animated emerald top-edge gradient line when scrolled */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0.25, opacity: isScrolled ? 0.9 : 0.35 }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-[#00C853]/65 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Animated Brand Wordmark */}
        <motion.a
          href="#home"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="group relative inline-flex items-center font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#00E676] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] rounded-md px-1"
        >
          <span>{PROFILE.fullName}</span>
          <span
            aria-hidden="true"
            className="absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-[#00C853] transition-transform duration-200 group-hover:scale-x-100"
          />
        </motion.a>

        {/* Zone 2: Staggered single-line navigation links with gliding layoutId underline */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300"
        >
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.06 + idx * 0.035, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -1 }}
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
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E676] shadow-[0_0_10px_rgba(0,200,83,0.65)]"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.a
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.25, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -1.5, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="glow-accent hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00C853] to-[#00E676] px-4 py-2 text-xs font-semibold text-[#0B0F14] transition-all duration-150 hover:brightness-105 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            Get in Touch
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.94 }}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#101820] text-white transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="border-t border-white/[0.08] bg-[#101820]/98 backdrop-blur-md lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6"
            >
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: idx * 0.03 }}
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
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
