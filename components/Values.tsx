'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Star,
  Clock,
  Briefcase,
  ThumbsUp,
  Handshake,
} from 'lucide-react';

const values = [
  { icon: ShieldCheck, label: 'Integrity', description: 'Honest dealings in every transaction' },
  { icon: Star, label: 'Quality', description: 'Excellence in every product we supply' },
  { icon: Clock, label: 'Reliability', description: 'Consistent delivery, every time' },
  { icon: Briefcase, label: 'Professionalism', description: 'Expert handling at every step' },
  { icon: ThumbsUp, label: 'Customer Satisfaction', description: 'Your success is our priority' },
  { icon: Handshake, label: 'Long-Term Partnerships', description: 'Building trust that lasts' },
];

export default function Values() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Divider top */}
      <div className="divider-gold mb-0" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,83,0.04) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="section-tag">Our Core Values</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            The Principles We{' '}
            <span className="gradient-text">Live By</span>
          </motion.h2>
        </div>

        {/* Values grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.94 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 card-tilt cursor-default"
            >
              {/* Icon ring */}
              <div className="w-12 h-12 rounded-2xl bg-gold-400/8 border border-gold-400/18 flex items-center justify-center group-hover:bg-gold-400/15 group-hover:border-gold-400/35 transition-all duration-300">
                <value.icon className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div>
                <p className="font-bold text-white text-sm mb-1 group-hover:text-gold-300 transition-colors">
                  {value.label}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex w-max animate-marquee">
            {[...values, ...values, ...values, ...values].map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-6 text-slate-600 text-sm font-semibold whitespace-nowrap"
              >
                <v.icon className="w-3.5 h-3.5 text-gold-500/50" />
                {v.label}
                <span className="text-gold-500/30 ml-4">·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider bottom */}
      <div className="divider-gold mt-0 mt-12" />
    </section>
  );
}
