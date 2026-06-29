'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import {
  Leaf,
  Cherry,
  Wheat,
  Fish,
  Cog,
  Factory,
  Recycle,
  FileText,
  RefreshCw,
  Settings2,
  ArrowRight,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────── */
type Category = 'All' | 'Agriculture' | 'Marine' | 'Industrial' | 'Recyclable' | 'Service';
type Size = 'normal' | 'wide' | 'full';

const CATEGORIES: Category[] = ['All', 'Agriculture', 'Marine', 'Industrial', 'Recyclable', 'Service'];
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Data ──────────────────────────────────────── */
const products: {
  icon: React.ElementType;
  name: string;
  tag: Category;
  number: string;
  description: string;
  color: string;
  size: Size;
  image: string;
}[] = [
  {
    icon: Leaf,
    name: 'Fresh Vegetables',
    tag: 'Agriculture',
    number: '01',
    description: 'Export-quality vegetables sourced from trusted suppliers, carefully selected to meet international standards.',
    color: 'emerald',
    size: 'wide',
    image: '/products/vegetable.jpg',
  },
  {
    icon: Cherry,
    name: 'Fresh Fruits',
    tag: 'Agriculture',
    number: '02',
    description: 'Fresh and carefully selected fruits suitable for international markets with consistent quality.',
    color: 'rose',
    size: 'normal',
    image: '/products/fruits.jpg',
  },
  {
    icon: Wheat,
    name: 'Spices & Agricultural',
    tag: 'Agriculture',
    number: '03',
    description: 'Premium Indian spices and agricultural commodities — the finest from the subcontinent.',
    color: 'amber',
    size: 'normal',
    image: '/products/spicevegetables.jpg',
  },
  {
    icon: Fish,
    name: 'Seafood & Marine',
    tag: 'Marine',
    number: '04',
    description: 'Quality seafood products processed according to export standards from coastal suppliers.',
    color: 'cyan',
    size: 'normal',
    image: '/products/seafood.jpg',
  },
  {
    icon: Cog,
    name: 'Metal Scrap',
    tag: 'Industrial',
    number: '05',
    description: 'Ferrous and non-ferrous metal scrap sourced from reliable suppliers per customer specifications.',
    color: 'slate',
    size: 'wide',
    image: '/products/metal.jpg',
  },
  {
    icon: Factory,
    name: 'Industrial Metal',
    tag: 'Industrial',
    number: '06',
    description: 'Various metal products for industrial and commercial applications, subject to customer requirements.',
    color: 'blue',
    size: 'normal',
    image: '/products/industry.jpeg',
  },
  {
    icon: Recycle,
    name: 'Plastic Scrap',
    tag: 'Recyclable',
    number: '07',
    description: 'Selected recyclable plastic scrap materials suitable for industrial recycling purposes.',
    color: 'violet',
    size: 'normal',
    image: '/products/plastic.jpg',
  },
  {
    icon: FileText,
    name: 'Paper Scrap',
    tag: 'Recyclable',
    number: '08',
    description: 'Recovered paper products for recycling and manufacturing industries.',
    color: 'orange',
    size: 'normal',
    image: '/products/paper.jpg',
  },
  {
    icon: RefreshCw,
    name: 'Recyclable Materials',
    tag: 'Recyclable',
    number: '09',
    description: 'Various recyclable materials supplied in compliance with regulations and international requirements.',
    color: 'teal',
    size: 'normal',
    image: '/products/recycle.jpg',
  },
];

/* ─── Color Map ─────────────────────────────────── */
type ColorTokens = {
  bg: string;
  border: string;
  hex: string;
  tagBg: string;
  glow: string;
  num: string;
};

const C: Record<string, ColorTokens> = {
  emerald: { bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.22)',  hex: '#10b981', tagBg: 'rgba(16,185,129,0.12)', glow: 'rgba(16,185,129,0.3)', num: 'rgba(16,185,129,0.12)'  },
  rose:    { bg: 'rgba(244,63,94,0.07)',   border: 'rgba(244,63,94,0.22)',   hex: '#f43f5e', tagBg: 'rgba(244,63,94,0.12)',  glow: 'rgba(244,63,94,0.3)',  num: 'rgba(244,63,94,0.12)'   },
  amber:   { bg: 'rgba(245,158,11,0.07)',  border: 'rgba(245,158,11,0.22)',  hex: '#f59e0b', tagBg: 'rgba(245,158,11,0.12)', glow: 'rgba(245,158,11,0.3)', num: 'rgba(245,158,11,0.12)'  },
  cyan:    { bg: 'rgba(34,211,238,0.07)',  border: 'rgba(34,211,238,0.22)',  hex: '#22d3ee', tagBg: 'rgba(34,211,238,0.12)', glow: 'rgba(34,211,238,0.3)', num: 'rgba(34,211,238,0.12)'  },
  slate:   { bg: 'rgba(100,116,139,0.07)', border: 'rgba(100,116,139,0.22)', hex: '#64748b', tagBg: 'rgba(100,116,139,0.12)',glow: 'rgba(100,116,139,0.25)', num: 'rgba(100,116,139,0.12)' },
  blue:    { bg: 'rgba(59,130,246,0.07)',  border: 'rgba(59,130,246,0.22)',  hex: '#3b82f6', tagBg: 'rgba(59,130,246,0.12)', glow: 'rgba(59,130,246,0.3)', num: 'rgba(59,130,246,0.12)'  },
  violet:  { bg: 'rgba(139,92,246,0.07)',  border: 'rgba(139,92,246,0.22)',  hex: '#8b5cf6', tagBg: 'rgba(139,92,246,0.12)', glow: 'rgba(139,92,246,0.3)', num: 'rgba(139,92,246,0.12)'  },
  orange:  { bg: 'rgba(249,115,22,0.07)',  border: 'rgba(249,115,22,0.22)',  hex: '#f97316', tagBg: 'rgba(249,115,22,0.12)', glow: 'rgba(249,115,22,0.3)', num: 'rgba(249,115,22,0.12)'  },
  teal:    { bg: 'rgba(20,184,166,0.07)',  border: 'rgba(20,184,166,0.22)',  hex: '#14b8a6', tagBg: 'rgba(20,184,166,0.12)', glow: 'rgba(20,184,166,0.3)', num: 'rgba(20,184,166,0.12)'  },
  gold:    { bg: 'rgba(212,168,83,0.08)',  border: 'rgba(212,168,83,0.3)',   hex: '#d4a853', tagBg: 'rgba(212,168,83,0.12)', glow: 'rgba(212,168,83,0.35)',  num: 'rgba(212,168,83,0.14)' },
};

/* ─── Category Filter ───────────────────────────── */
function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: Category;
  onSelect: (c: Category) => void;
}) {
  const counts: Record<Category, number> = {
    All: products.length + 1,
    Agriculture: products.filter((p) => p.tag === 'Agriculture').length,
    Marine:      products.filter((p) => p.tag === 'Marine').length,
    Industrial:  products.filter((p) => p.tag === 'Industrial').length,
    Recyclable:  products.filter((p) => p.tag === 'Recyclable').length,
    Service:     1,
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`relative flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${
            selected === cat
              ? 'text-navy-950'
              : 'text-gray-500 hover:text-navy-900'
          }`}
        >
          {selected === cat && (
            <motion.span
              layoutId="cat-pill"
              className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(135deg, #d4a853, #b8893a)' }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
          <span
            className={`relative z-10 text-xs font-bold tabular-nums px-1.5 py-0.5 rounded-full ${
              selected === cat
                ? 'bg-black/20 text-navy-950'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {counts[cat]}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─── 3D Tilt Card ───────────────────────────────── */
function ProductCard({
  product,
  index,
  isDimmed,
  onHoverChange,
}: {
  product: (typeof products)[0];
  index: number;
  isDimmed: boolean;
  onHoverChange: (v: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [6, -6]), {
    stiffness: 380,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), {
    stiffness: 380,
    damping: 28,
  });

  const c = C[product.color];

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      mouseX.set((relX - 0.5) * 2);
      mouseY.set((relY - 0.5) * 2);
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(280px circle at ${relX * 100}% ${relY * 100}%, ${c.glow}, transparent 70%)`;
        glowRef.current.style.opacity = '1';
      }
    },
    [mouseX, mouseY, c.glow]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    if (glowRef.current) glowRef.current.style.opacity = '0';
    onHoverChange(false);
  }, [mouseX, mouseY, onHoverChange]);

  const isWide = product.size === 'wide';

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.75, delay: index * 0.065, ease }}
      className={isWide ? 'col-span-1 md:col-span-2' : ''}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          opacity: isDimmed ? 0.4 : 1,
          scale: isDimmed ? 0.965 : 1,
          filter: isDimmed ? 'brightness(0.85)' : 'brightness(1)',
        }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 900,
          border: `1px solid ${c.border}`,
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        }}
        transition={{ duration: 0.22 }}
        className="group relative rounded-[18px] overflow-hidden h-full cursor-default bg-white"
      >
        {/* Inner mouse-tracking glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none z-10 rounded-[18px] transition-opacity duration-200"
          style={{ opacity: 0 }}
        />

        {/* Hover border glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[18px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            boxShadow: `inset 0 0 0 1.5px ${c.border.replace('0.22', '0.55')}, 0 16px 40px rgba(0,0,0,0.1)`,
          }}
        />

        {/* Product image */}
        <div className="relative w-full overflow-hidden" style={{ height: isWide ? '200px' : '180px' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isWide
              ? '(max-width: 768px) 100vw, 66vw'
              : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            }
          />
          {/* Gradient overlay at bottom of image */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.15) 100%)`,
            }}
          />
          {/* Tag overlaid on image */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-[10px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full backdrop-blur-sm"
              style={{ background: c.tagBg, color: c.hex, border: `1px solid ${c.border}` }}
            >
              {product.tag}
            </span>
          </div>
          {/* Number overlaid top-right */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-2xl font-black tabular-nums select-none leading-none"
              style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
            >
              {product.number}
            </span>
          </div>
        </div>

        {/* Card content below image */}
        <div className="relative z-10 p-5 flex flex-col">
          {/* Icon + Name row */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <product.icon className="w-4.5 h-4.5" style={{ color: c.hex }} strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-bold text-navy-900 leading-snug">
              {product.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {product.description}
          </p>

          {/* Bottom bar */}
          <div className="mt-4 flex items-center justify-between">
            <div
              className="h-px flex-1 transition-all duration-500 group-hover:opacity-100 opacity-0"
              style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }}
            />
            <div
              className="ml-3 flex items-center gap-1 text-xs font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              style={{ color: c.hex }}
            >
              Enquire <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Customized Sourcing Feature Card ─────────────── */
function FeatureCard({ isDimmed, onHoverChange }: { isDimmed: boolean; onHoverChange: (v: boolean) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), { stiffness: 300, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), { stiffness: 300, damping: 28 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    mouseX.set((relX - 0.5) * 2);
    mouseY.set((relY - 0.5) * 2);
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(350px circle at ${relX * 100}% ${relY * 100}%, rgba(212,168,83,0.12), transparent 70%)`;
      glowRef.current.style.opacity = '1';
    }
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    if (glowRef.current) glowRef.current.style.opacity = '0';
    onHoverChange(false);
  }, [mouseX, mouseY, onHoverChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, delay: 0.55, ease }}
      className="col-span-1 md:col-span-2 lg:col-span-3"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          opacity: isDimmed ? 0.4 : 1,
          scale: isDimmed ? 0.98 : 1,
          filter: isDimmed ? 'brightness(0.85)' : 'brightness(1)',
        }}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        transition={{ duration: 0.22 }}
        className="group relative rounded-[18px] overflow-hidden cursor-default"
        role="article"
      >
        {/* Gold gradient border effect */}
        <div
          className="absolute inset-0 rounded-[18px]"
          style={{
            background: 'linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(255,255,255,0.95) 100%)',
            border: '1px solid rgba(212,168,83,0.3)',
          }}
        />

        {/* Inner glow tracker */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none rounded-[18px]"
          style={{ opacity: 0, transition: 'opacity 0.2s' }}
        />

        {/* Ambient gold glow */}
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(212,168,83,0.1) 0%, transparent 60%)',
          }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 grid-pattern-light opacity-60 pointer-events-none rounded-[18px]" />

        {/* Hover border */}
        <div
          className="absolute inset-0 rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            boxShadow: 'inset 0 0 0 1.5px rgba(212,168,83,0.5), 0 20px 48px rgba(0,0,0,0.08)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-stretch">
          {/* Image */}
          <div className="relative md:w-72 lg:w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: '220px' }}>
            <Image
              src="/products/custome.png"
              alt="Customized Sourcing"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 70%, rgba(255,255,255,0.6) 100%)' }}
            />
          </div>

          {/* Text content */}
          <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-gold-400/12 text-gold-500 border border-gold-400/25">
                Service
              </span>
              <span className="text-5xl font-black text-gold-400/15 select-none">10</span>
            </div>

            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/8 border border-gold-400/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-gold-400/15 transition-all duration-400">
                <Settings2 className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy-900 mb-2">
                  Customized Sourcing
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-lg group-hover:text-gray-700 transition-colors">
                  We assist buyers in sourcing products according to their specific market needs
                  and quality standards. Tell us what you need — we&apos;ll find it.
                </p>
              </div>
            </div>

            {/* Tags + CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {['Any Product', 'Any Quantity', 'Any Market', 'Custom Specs'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200 group-hover:border-gold-400/25 group-hover:text-gray-700 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary glow-gold text-sm group/btn ml-auto flex-shrink-0"
              >
                Discuss Your Needs
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────── */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleSectionMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !spotlightRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(212,168,83,0.04) 0%, transparent 70%)`;
  }, []);

  const handleSectionMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.background = 'none';
  }, []);

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.tag === activeCategory);

  const showFeature = activeCategory === 'All' || activeCategory === 'Service';

  return (
    <section
      id="products"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="relative py-28 lg:py-36 bg-gray-50 overflow-hidden"
    >
      {/* Fixed backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,83,0.04) 0%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern-light opacity-70 pointer-events-none" />

      {/* Section-level spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4"
          >
            <span className="section-tag">Our Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight mb-5"
          >
            Quality Products for{' '}
            <span className="gradient-text">Global Markets</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="max-w-2xl mx-auto text-gray-500 text-lg"
          >
            From farm-fresh produce to industrial recyclables — hover each card to explore,
            filter by category to discover what we can supply for your market.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="flex justify-center mb-10 w-full"
        >
          <div className="light-card rounded-2xl px-3 py-2 max-w-full overflow-hidden">
            <CategoryFilter selected={activeCategory} onSelect={setActiveCategory} />
          </div>
        </motion.div>

        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                index={i}
                isDimmed={hoveredId !== null && hoveredId !== product.name}
                onHoverChange={(v) => setHoveredId(v ? product.name : null)}
              />
            ))}

            {showFeature && (
              <FeatureCard
                key="custom-sourcing"
                isDimmed={hoveredId !== null && hoveredId !== 'custom-sourcing'}
                onHoverChange={(v) => setHoveredId(v ? 'custom-sourcing' : null)}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Don&apos;t see what you need?{' '}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
          >
            Contact us for custom sourcing
          </button>
        </motion.p>
      </div>
    </section>
  );
}
