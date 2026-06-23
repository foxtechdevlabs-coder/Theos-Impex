'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Markets', href: '#markets' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'nav-light py-3'
            : 'py-5 bg-white border-b border-gray-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/products/logo.png"
              alt="THEOS IMPEX emblem"
              width={48}
              height={48}
              className="h-12 w-12 object-contain flex-shrink-0 transition-opacity duration-200 group-hover:opacity-85"
              priority
            />
            <Image
              src="/products/logoletter.png"
              alt="THEOS IMPEX"
              width={120}
              height={44}
              className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-gold-500'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gold-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden sm:flex btn-dark text-sm py-2.5 px-5"
            >
              Get in Touch
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-navy-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[68px] left-4 right-4 z-40 light-card rounded-2xl p-4 shadow-xl shadow-black/10"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gold-500 hover:bg-gray-50 rounded-xl transition-all duration-150"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-1">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full btn-dark justify-center text-sm"
                >
                  Get in Touch
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
