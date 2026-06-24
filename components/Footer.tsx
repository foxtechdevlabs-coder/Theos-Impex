'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Global Markets', href: '#markets' },
  { label: 'Contact', href: '#contact' },
];

const productLinks = [
  'Fresh Vegetables',
  'Fresh Fruits',
  'Spices & Agricultural',
  'Seafood & Marine',
  'Metal Scrap',
  'Industrial Metal',
  'Recyclable Materials',
  'Customized Sourcing',
];

const contactLinks = [
  { icon: Mail, label: 'info@theosimpex.com', href: 'mailto:info@theosimpex.com' },
  { icon: Phone, label: '04651-253325', href: 'tel:04651253325' },
  { icon: MessageSquare, label: '+91 93611 23843', href: 'https://wa.me/919361123843' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 border-t border-white/6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,168,83,0.05) 0%, transparent 100%)',
        }}
      />

      {/* CTA Banner */}
      <div className="relative z-10 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-gold rounded-3xl px-8 py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div
              className="absolute right-0 top-0 w-64 h-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 80% 50%, rgba(212,168,83,0.12) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
                Ready to expand your trade?
              </h3>
              <p className="text-slate-400">
                Partner with <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span> for reliable sourcing and global market access.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 flex-shrink-0">
              <a
                href="mailto:info@theosimpex.com"
                className="btn-primary text-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 mb-5 group"
            >
              <Image
                src="/products/logo.png"
                alt="THEOS IMPEX emblem"
                width={44}
                height={44}
                className="h-11 w-11 object-contain flex-shrink-0 transition-opacity duration-200 group-hover:opacity-80"
              />
              <div className="bg-white rounded-lg px-2 py-1 inline-flex items-center">
                <Image
                  src="/products/logoletter.png"
                  alt="THEOS IMPEX"
                  width={110}
                  height={40}
                  className="h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                />
              </div>
            </button>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Connecting quality products from India to international markets
              with integrity and reliability.
            </p>

            <div className="space-y-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  <link.icon className="w-3.5 h-3.5 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide uppercase">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo('#products')}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors text-left"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide uppercase">
              Office
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  6/161/6, ST-2,<br />
                  Kunchaluvilai, Arumanai (P.O),<br />
                  Pin-629151,<br />
                  Kanyakumari District,<br />
                  Tamil Nadu, India
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span>. All rights reserved.
          </p>
          <p className="text-slate-700 text-sm text-center sm:text-right italic">
            "Delivering Quality. Building Trust. Connecting Markets."
          </p>
        </div>
      </div>
    </footer>
  );
}
