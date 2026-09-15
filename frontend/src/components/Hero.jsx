import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CalendarCheck, ArrowDown, BadgeCheck, ScanLine, HeartHandshake, Phone } from 'lucide-react';
import { SmartImg } from './SmartImg';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/content';

const lineAnim = (i) => ({
  initial: { y: '112%' },
  animate: { y: '0%' },
  transition: { duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] },
});

const TRUST = [
  { icon: BadgeCheck, label: 'Квалифицированные врачи' },
  { icon: ScanLine, label: 'Современная диагностика' },
  { icon: HeartHandshake, label: 'Комплексный подход' },
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-navy pt-24 text-white sm:pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div style={{ y: glowY }} className="absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-teal/25 blur-[140px]" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-deep/60 blur-[120px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-teal-bright backdrop-blur"
            data-testid="hero-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-bright" />
            Многопрофильный медицинский центр · Алматы и Алматинская область
          </motion.div>

          <h1 className="mt-7 font-display font-semibold leading-[1.06]" style={{ fontSize: 'clamp(2rem, 5.2vw, 3.9rem)' }}>
            {['Забота о здоровье', 'на современном', 'уровне'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span className="block" {...lineAnim(i)}>
                  {i === 2 ? <span className="text-teal-bright">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            НПМЦ — многопрофильный медицинский центр. Консультации врачей разных
            специальностей, современная диагностика, лечение и лабораторные
            исследования — всё в одном месте.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#appointment"
              data-testid="hero-cta-appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-teal-mid px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition hover:bg-teal-bright"
            >
              <CalendarCheck className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Записаться на приём
            </a>
            <a
              href="#doctors"
              data-testid="hero-cta-doctors"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Выбрать врача <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3" data-testid="trust-item">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-white/85">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <motion.div style={{ y: imgY }}>
                <SmartImg
                  src="/images/hero.jpg"
                  alt="Врачи НПМЦ — многопрофильный медицинский центр"
                  className="h-[420px] w-full scale-110 object-cover sm:h-[520px]"
                />
              </motion.div>
            </div>
            <a
              href={PHONE_TEL}
              data-testid="hero-phone-card"
              className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-3xl bg-white p-4 pr-6 text-navy shadow-2xl transition hover:-translate-y-1 sm:left-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-teal">
                <Phone className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-slate-500">Запись по телефону</span>
                <span className="block font-display text-base font-semibold">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
