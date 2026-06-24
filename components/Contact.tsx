'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@theosimpex.com',
    href: 'mailto:info@theosimpex.com',
    color: 'gold',
  },
  {
    icon: Phone,
    label: 'Office Line',
    value: '04651-253325',
    href: 'tel:04651253325',
    color: 'teal',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 93611 23843',
    href: 'https://wa.me/919361123843',
    color: 'emerald',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '6/161/6, ST-2, Kunchaluvilai, Arumanai (P.O), Pin-629151, Kanyakumari District, Tamil Nadu, India',
    href: 'https://maps.google.com/?q=Arumanai+Kanyakumari+Tamil+Nadu',
    color: 'rose',
  },

];

const colorMap: Record<string, string> = {
  gold:    'text-gold-500 bg-gold-400/8 border-gold-400/25',
  teal:    'text-teal-500 bg-teal-400/8 border-teal-400/25',
  emerald: 'text-emerald-500 bg-emerald-400/8 border-emerald-400/25',
  rose:    'text-rose-500 bg-rose-400/8 border-rose-400/25',
  slate:   'text-gray-500 bg-gray-100 border-gray-200',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,83,0.05) 0%, transparent 100%)',
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
            <span className="section-tag">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight mb-5"
          >
            Let's{' '}
            <span className="gradient-text">Start Trading</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-500 text-lg"
          >
            Looking for a reliable import-export partner? Contact <span className="font-cinzel" style={{ color: '#d4a853' }}>THEOS IMPEX</span> today
            to discuss your sourcing and supply requirements.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith('http') ? '_blank' : undefined,
                        rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                      }
                    : {})}
                  className={`light-card rounded-2xl p-5 flex items-start gap-4 group card-tilt ${
                    item.href ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${colorMap[item.color]}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-navy-900 text-sm font-medium leading-relaxed group-hover:text-gold-500 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Quick CTA */}
            <div className="light-card-gold rounded-2xl p-6 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 80% 20%, rgba(212,168,83,0.12) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-navy-900 font-bold text-lg mb-2">
                  Ready to partner with us?
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Reach out via WhatsApp for a quick response on pricing and
                  availability.
                </p>
                <a
                  href="https://wa.me/919361123843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex text-sm py-2.5 px-5"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="light-card rounded-3xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-navy-900 text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                    className="mt-6 btn-outline-light text-sm py-2.5 px-6"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold tracking-wider uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="input-field-light"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold tracking-wider uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="input-field-light"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold tracking-wider uppercase mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="input-field-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your sourcing requirements, the products you're interested in, and target markets..."
                      className="input-field-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center text-base py-3.5"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
