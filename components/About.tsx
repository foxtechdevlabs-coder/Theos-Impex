'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Target, Award } from 'lucide-react';

const stats = [
  { value: 10, suffix: '+', label: 'Product Categories', description: 'Diverse portfolio' },
  { value: 5, suffix: '+', label: 'Global Markets', description: 'International reach' },
  { value: 100, suffix: '%', label: 'Quality Focus', description: 'Every shipment' },
  { value: 6, suffix: ' days', label: 'Work Week', description: 'Mon – Sat service' },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(value * eased));
      if (frame >= total) clearInterval(timer);
    }, 1500 / total);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {displayed}
      {suffix}
    </span>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(212,168,83,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 dot-pattern-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <FadeUp delay={0}>
              <span className="section-tag mb-5 inline-flex">About Us</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight mb-6">
                Welcome to{' '}
                <span className="gradient-text font-cinzel">THEOS IMPEX</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span> is a dynamic import and export company dedicated to
                facilitating international trade with professionalism and excellence.
                We specialize in sourcing and supplying quality products that meet
                global standards while building long-term relationships with customers
                worldwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-gray-500 leading-relaxed mb-10">
                Our commitment to quality, transparency, and timely delivery enables
                us to serve clients across diverse international markets with
                confidence and reliability.
              </p>
            </FadeUp>

            <div className="space-y-4">
              <FadeUp delay={0.4}>
                <div className="light-card rounded-2xl p-5 flex gap-4 card-tilt">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gold-400/10 border border-gold-400/25">
                    <Eye className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1 text-gold-500">Our Vision</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To become a globally recognized trading company known for quality,
                      trust, and sustainable business practices.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="light-card rounded-2xl p-5 flex gap-4 card-tilt">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-teal-400/10 border border-teal-400/25">
                    <Target className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1 text-teal-600">Our Mission</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To connect international markets with premium products through
                      reliable sourcing, efficient logistics, and exceptional customer service.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right column — stats */}
          <div ref={statsRef} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="light-card-gold rounded-3xl p-8 mb-4 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 80% 20%, rgba(212,168,83,0.1) 0%, transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-5 h-5 text-gold-500" />
                    <span className="text-gold-500 text-sm font-bold tracking-wider uppercase">
                      By the Numbers
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-4xl sm:text-5xl font-black gradient-text mb-1">
                          <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix}
                            active={statsInView}
                          />
                        </div>
                        <p className="text-navy-900 font-semibold text-sm">{stat.label}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="light-card rounded-3xl p-7 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 20% 80%, rgba(34,211,238,0.05) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <div className="text-2xl font-black text-navy-900 mb-2 leading-tight">
                  &ldquo;Delivering Quality.
                  <br />
                  <span className="gradient-text">Building Trust.</span>
                  <br />
                  Connecting Markets.&rdquo;
                </div>
                <p className="text-gray-400 text-sm mt-4">— <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span></p>
              </div>
            </motion.div>

            
          </div>
        </div>

        {/* Proprietor Bio */}
        <div className="mt-16">
          <FadeUp delay={0.1}>
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f2548 0%, #1b3d70 60%, #0f2548 100%)' }}
            >
              {/* Gold top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: 'linear-gradient(90deg, #b8893a 0%, #f5c842 50%, #b8893a 100%)' }}
              />

              {/* Decorative glows */}
              <div
                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 80% 20%, rgba(212,168,83,0.14) 0%, transparent 65%)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 80%, rgba(34,211,238,0.07) 0%, transparent 60%)' }}
              />

              <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 flex-shrink-0" style={{ background: 'rgba(212,168,83,0.5)' }} />
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase flex-shrink-0"
                    style={{ color: '#d4a853' }}
                  >
                    About the Proprietor
                  </span>
                  <div className="h-px flex-1" style={{ background: 'rgba(212,168,83,0.15)' }} />
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-geist-sans), Georgia, serif', letterSpacing: '-0.01em' }}>
                      Ajin Kumar Anitha
                    </h3>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase self-start sm:self-center"
                      style={{
                        background: 'rgba(212,168,83,0.12)',
                        border: '1px solid rgba(212,168,83,0.3)',
                        color: '#d4a853',
                      }}
                    >
                      Founder &amp; Proprietor
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium mb-6 tracking-widest uppercase"
                    style={{ color: '#d4a853', opacity: 0.7 }}
                  >
                    B.Tech Graduate &nbsp;·&nbsp; Est. 2026
                  </p>
                  <p className="text-slate-300 leading-[1.85] max-w-3xl text-base" style={{ fontFamily: 'var(--font-geist-sans), Georgia, serif' }}>
                    Ajin Kumar Anitha is the Founder and Proprietor of <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span>, established
                    in 2026. A Bachelor of Technology (B.Tech) graduate, he combines technical
                    knowledge with an entrepreneurial vision to build a company focused on
                    excellence in international trade.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
