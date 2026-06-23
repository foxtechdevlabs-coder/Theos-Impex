'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, TrendingUp, Users } from 'lucide-react';

const headline = ['Connecting', 'Quality', 'Products', 'to', 'Global', 'Markets'];

const trustItems = [
  { icon: Star, label: 'Quality Certified', sub: 'Export-grade products' },
  { icon: TrendingUp, label: 'Growing Exports', sub: 'India to global markets' },
  { icon: Users, label: 'Client-First', sub: 'Long-term partnerships' },
];

function WordReveal() {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {headline.map((word, i) => (
        <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none ${
              word === 'Global' || word === 'Markets' ? 'gradient-text' : 'text-white'
            }`}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Hero background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <Image
          src="/products/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(2,8,23,0.82) 0%, rgba(6,17,31,0.72) 50%, rgba(2,8,23,0.85) 100%)' }}
        />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        {/* Gold orb — top right */}
        <div
          className="orb animate-float"
          style={{
            width: 700,
            height: 700,
            top: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle at 40% 40%, rgba(212,168,83,0.18) 0%, rgba(184,137,58,0.08) 50%, transparent 70%)',
          }}
        />
        {/* Teal orb — bottom left */}
        <div
          className="orb animate-float-delayed"
          style={{
            width: 600,
            height: 600,
            bottom: '-10%',
            left: '-8%',
            background: 'radial-gradient(circle at 60% 60%, rgba(34,211,238,0.14) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)',
          }}
        />
        {/* Subtle purple — center */}
        <div
          className="orb animate-float-slow"
          style={{
            width: 400,
            height: 400,
            top: '30%',
            left: '40%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(2,8,23,0.7) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
            Trusted Global Trade Partner · On Kanyakumari, India
          </span>
        </motion.div>

        {/* Headline */}
        <WordReveal />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light"
        >
          We bridge India's finest products with international markets — from fresh
          produce and spices to metal scrap and recyclables — through reliable
          sourcing and seamless logistics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary glow-gold text-base"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-base"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full max-w-2xl"
        >
          <div className="glass-card rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/20 transition-colors">
                  <item.icon className="w-4 h-4 text-gold-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-slate-400">{item.sub}</p>
                </div>
                {i < trustItems.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-white/8 ml-4" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-gold-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
      </motion.button>
    </section>
  );
}
