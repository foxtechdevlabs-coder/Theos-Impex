'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const regions = [
  {
    name: 'Asia',
    description: 'Southeast Asia, South Asia, East Asia — our primary growth corridor.',
    dot: { top: '42%', left: '72%' },
    delay: 0,
  },
  {
    name: 'Middle East',
    description: 'Gulf countries and MENA region with strong demand for quality commodities.',
    dot: { top: '38%', left: '57%' },
    delay: 0.08,
  },
  {
    name: 'Europe',
    description: 'Established markets with high standards for agricultural and industrial goods.',
    dot: { top: '25%', left: '48%' },
    delay: 0.16,
  },
  {
    name: 'Africa',
    description: 'Fast-growing continent with expanding import needs across industries.',
    dot: { top: '52%', left: '49%' },
    delay: 0.24,
  },
  {
    name: 'Other Markets',
    description: 'We serve buyers across all international markets — wherever quality matters.',
    dot: { top: '58%', left: '28%' },
    delay: 0.32,
  },
];

/* Simplified SVG world map as continuous landmass shapes */
const WorldMapSVG = () => (
  <svg
    viewBox="0 0 900 500"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ocean base */}
    <rect width="900" height="500" fill="transparent" />

    {/* India highlighted */}
    <ellipse cx="650" cy="220" rx="18" ry="22" fill="rgba(212,168,83,0.35)" />
    <ellipse cx="650" cy="220" rx="12" ry="16" fill="rgba(212,168,83,0.6)" />

    {/* Rough continent outlines — purely decorative */}
    {/* North America */}
    <path
      d="M120,80 C140,60 190,55 230,70 C260,82 280,100 270,130 C255,165 240,190 220,210 C200,228 180,240 160,230 C130,215 110,190 105,160 C98,130 100,100 120,80Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* South America */}
    <path
      d="M200,260 C220,245 250,250 265,270 C280,295 278,330 268,360 C255,390 235,410 215,405 C192,398 175,375 170,345 C163,310 175,278 200,260Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Europe */}
    <path
      d="M400,80 C420,68 460,65 490,75 C515,83 530,100 525,120 C518,142 500,155 475,158 C450,160 425,148 410,130 C394,110 385,93 400,80Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Africa */}
    <path
      d="M420,175 C445,162 475,160 498,172 C522,185 535,210 530,245 C524,280 505,320 482,345 C458,370 430,375 410,360 C385,342 372,310 374,275 C376,238 394,190 420,175Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Middle East */}
    <path
      d="M510,155 C530,145 560,148 578,163 C595,177 598,200 585,215 C570,230 545,232 522,222 C498,210 490,188 510,155Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Russia / Central Asia */}
    <path
      d="M490,60 C540,45 640,40 720,55 C770,65 800,80 795,100 C788,122 750,130 700,128 C640,125 560,120 510,108 C475,98 460,78 490,60Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* India */}
    <path
      d="M620,165 C640,158 665,160 678,175 C692,190 693,215 682,238 C668,262 645,272 625,262 C602,250 593,225 598,200 C603,178 605,170 620,165Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Southeast Asia */}
    <path
      d="M720,170 C745,160 775,162 790,178 C805,194 802,218 785,230 C765,243 738,240 720,225 C700,208 695,185 720,170Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    {/* Australia */}
    <path
      d="M730,320 C760,305 800,308 820,328 C840,348 837,380 815,395 C790,412 758,408 738,390 C715,370 705,338 730,320Z"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* India origin pulse */}
    <circle cx="650" cy="220" r="30" fill="rgba(212,168,83,0.06)">
      <animate attributeName="r" values="20;42;20" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Connection lines from India to regions */}
    {/* India → Middle East */}
    <line x1="650" y1="220" x2="515" y2="195" stroke="rgba(212,168,83,0.25)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite" />
    </line>
    {/* India → Europe */}
    <line x1="650" y1="220" x2="455" y2="120" stroke="rgba(212,168,83,0.2)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.8s" repeatCount="indefinite" />
    </line>
    {/* India → Africa */}
    <line x1="650" y1="220" x2="456" y2="270" stroke="rgba(212,168,83,0.2)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="2.1s" repeatCount="indefinite" />
    </line>
    {/* India → Southeast Asia */}
    <line x1="650" y1="220" x2="752" y2="198" stroke="rgba(212,168,83,0.25)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.6s" repeatCount="indefinite" />
    </line>
    {/* India → Americas */}
    <line x1="650" y1="220" x2="200" y2="280" stroke="rgba(212,168,83,0.12)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" />
    </line>

    {/* Destination dots */}
    {[
      { cx: 515, cy: 195 }, // Middle East
      { cx: 455, cy: 120 }, // Europe
      { cx: 456, cy: 270 }, // Africa
      { cx: 752, cy: 198 }, // SE Asia
      { cx: 200, cy: 280 }, // Americas
    ].map((dot, i) => (
      <g key={i}>
        <circle cx={dot.cx} cy={dot.cy} r="4" fill="rgba(34,211,238,0.7)" />
        <circle cx={dot.cx} cy={dot.cy} r="8" fill="rgba(34,211,238,0.15)">
          <animate attributeName="r" values="4;12;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      </g>
    ))}
  </svg>
);

export default function GlobalMarkets() {
  return (
    <section id="markets" className="relative py-28 lg:py-36 bg-navy-800 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

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
            <span className="section-tag-teal">Global Markets</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5"
          >
            Connecting India to the{' '}
            <span className="gradient-text-teal">World</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg"
          >
            <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span> builds strong partnerships across continents, bringing
            India's finest products to markets that value quality and reliability.
          </motion.p>
        </div>

        {/* Map + regions */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative"
          >
            <div className="glass-card rounded-3xl overflow-hidden relative">
              <div className="w-full h-[340px] sm:h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.263348973036!2d77.24422077501129!3d8.375736191661776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjInMzIuNyJOIDc3wrAxNCc0OC41IkU!5e0!3m2!1sen!2sin!4v1782209740653!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="THEOS IMPEX Office Location"
                />
              </div>
              {/* India label */}
              <div className="absolute bottom-4 right-4 glass-card-gold rounded-xl px-3 py-2 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-xs font-bold text-gold-400 font-cinzel">THEOS IMPEX</span><span className="text-xs font-bold text-gold-400"> Origin · India</span>
              </div>
            </div>
          </motion.div>

          {/* Region cards */}
          <div className="lg:col-span-2 space-y-3">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: region.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card rounded-xl px-5 py-4 flex items-start gap-3 group card-tilt"
              >
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <div>
                  <p className="font-bold text-white text-sm mb-1 group-hover:text-teal-300 transition-colors">
                    {region.name}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">{region.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
