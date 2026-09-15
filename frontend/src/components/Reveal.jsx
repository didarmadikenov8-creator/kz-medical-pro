import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, y = 28, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ num, eyebrow, title, text, dark = false, center = false }) => (
  <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
    <Reveal>
      <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className={`font-display text-xs tracking-[0.3em] ${dark ? 'text-teal-mid' : 'text-teal'}`}>
          {num}
        </span>
        <span className={`h-px w-10 ${dark ? 'bg-white/30' : 'bg-teal/40'}`} />
        <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? 'text-white/70' : 'text-slate-500'}`}>
          {eyebrow}
        </span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className={`mt-4 font-display text-3xl leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
    </Reveal>
    {text && (
      <Reveal delay={0.16}>
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-slate-600'}`}>
          {text}
        </p>
      </Reveal>
    )}
  </div>
);
