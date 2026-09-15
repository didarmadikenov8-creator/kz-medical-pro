import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Phone, X } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal, SectionHead } from './Reveal';
import { SERVICES, PHONE_TEL } from '@/data/content';
import { useAppointment } from '@/context/AppointmentContext';

const ServiceModal = ({ service, onClose }) => {
  const { choose } = useAppointment();
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      data-testid="service-modal"
    >
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} data-testid="service-modal-backdrop" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          data-testid="service-modal-close"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>
        {service && (
          <>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua text-teal">
              <service.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl text-navy">{service.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-600">{service.full}</p>
            <p className="mt-4 rounded-2xl bg-sky p-4 text-sm text-slate-500">
              Стоимость и детали записи уточняйте у администратора по телефону или в WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => { onClose(); toast.info('Направление выбрано — заполните форму записи'); choose(service.title); }}
                data-testid="service-modal-cta"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-deep"
              >
                <CalendarCheck className="h-4 w-4 text-teal-bright" /> Записаться
              </button>
              <a
                href={PHONE_TEL}
                data-testid="service-modal-call"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
              >
                <Phone className="h-4 w-4" /> Позвонить
              </a>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="scroll-mt-20 bg-sky py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="01" eyebrow="Услуги" title="Наши услуги"
          text="15 медицинских направлений для взрослых и детей — от терапии до дневного стационара. Нажмите «Подробнее», чтобы узнать о направлении."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 5) * 0.06}>
              <div
                data-testid={`service-card-${s.id}`}
                className="group flex h-full flex-col rounded-3xl border border-white bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-teal transition group-hover:bg-teal group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                <button
                  onClick={() => setActive(s)}
                  data-testid={`service-details-button-${s.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-teal transition hover:gap-2.5"
                >
                  Подробнее <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
