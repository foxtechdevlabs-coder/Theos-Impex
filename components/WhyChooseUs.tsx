'use client';

import { motion } from 'framer-motion';
import { Shield, Link2, Heart, Globe2 } from 'lucide-react';

const features = [
  {
    number: '01',
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Every product is sourced and supplied with a strong commitment to quality and compliance with international standards.',
    color: 'gold',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Reliable Supply Chain',
    description:
      'Efficient coordination from sourcing to delivery ensures smooth international transactions with minimal friction.',
    color: 'teal',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Customer-Centric',
    description:
      'We prioritize customer satisfaction through transparent communication, personalized service, and long-term relationships.',
    color: 'rose',
  },
  {
    number: '04',
    icon: Globe2,
    title: 'Global Trade Expertise',
    description:
      'Deep understanding of international trade requirements enables us to support clients effectively across different markets.',
    color: 'blue',
  },
];

const colorStyles: Record<string, { icon: string; border: string; bg: string; num: string }> = {
  gold: {
    icon: 'text-gold-500',
    border: 'border-gold-400/25',
    bg: 'bg-gold-400/8',
    num: 'text-gold-400/25',
  },
  teal: {
    icon: 'text-teal-500',
    border: 'border-teal-400/25',
    bg: 'bg-teal-400/8',
    num: 'text-teal-400/25',
  },
  rose: {
    icon: 'text-rose-500',
    border: 'border-rose-400/25',
    bg: 'bg-rose-400/8',
    num: 'text-rose-400/25',
  },
  blue: {
    icon: 'text-blue-500',
    border: 'border-blue-400/25',
    bg: 'bg-blue-400/8',
    num: 'text-blue-400/25',
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-28 lg:py-36 bg-white overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 50%, rgba(34,211,238,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 90% 10%, rgba(212,168,83,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="section-tag">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight mb-5"
          >
            Built on{' '}
            <span className="gradient-text">Trust &amp; Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-500 text-lg"
          >
            Four pillars that define every trade relationship we build.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const styles = colorStyles[feature.color];
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group light-card rounded-2xl p-7 relative overflow-hidden card-tilt"
              >
                {/* Large number watermark */}
                <div
                  className={`absolute top-4 right-5 text-7xl font-black select-none pointer-events-none ${styles.num} transition-all duration-300 group-hover:scale-110`}
                >
                  {feature.number}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      feature.color === 'gold'
                        ? 'radial-gradient(circle at 0% 100%, rgba(212,168,83,0.06) 0%, transparent 60%)'
                        : feature.color === 'teal'
                        ? 'radial-gradient(circle at 0% 100%, rgba(34,211,238,0.06) 0%, transparent 60%)'
                        : feature.color === 'rose'
                        ? 'radial-gradient(circle at 0% 100%, rgba(244,63,94,0.06) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${styles.bg} border ${styles.border} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <feature.icon className={`w-6 h-6 ${styles.icon}`} />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
