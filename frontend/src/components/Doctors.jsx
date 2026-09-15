import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheck, Info, Phone, X } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal, SectionHead } from './Reveal';
import { SmartImg } from './SmartImg';
import { DOCTORS, DOCTORS_PLACEHOLDER_NOTE, PHONE_TEL } from '@/data/content';
import { useAppointment } from '@/context/AppointmentContext';

const DoctorModal = ({ doctor, onClose }) => {
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
      data-testid="doctor-modal"
    >
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} data-testid="doctor-modal-backdrop" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-2"
      >
        <button
          onClick={onClose} aria-label="Закрыть" data-testid="doctor-modal-close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>
        <SmartImg src={doctor.photo} alt={`Врач НПМЦ — ${doctor.specialty}`} className="h-64 w-full object-cover md:h-full" />
        <div className="p-8">
          <span className="inline-block rounded-full bg-aqua px-3.5 py-1.5 text-xs font-semibold text-teal">
            {doctor.specialty}
          </span>
          <h3 className="mt-4 font-display text-2xl text-navy">{doctor.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{doctor.exp}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{doctor.desc}</p>
          <div className="mt-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Образование</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{doctor.education}</p>
          </div>
          <div className="mt-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Направления приёма</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {doctor.expertise.map((e) => (
                <span key={e} className="rounded-full bg-sky px-3 py-1.5 text-xs font-medium text-slate-600">{e}</span>
              ))}
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => { onClose(); toast.info('Врач выбран — заполните форму записи'); choose(`Врач — ${doctor.specialty}`); }}
              data-testid="doctor-modal-cta"
              className="inline-flex items-center gap-2 rounded-full bg-teal-mid px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-bright"
            >
              <CalendarCheck className="h-4 w-4" /> Записаться на приём
            </button>
            <a
              href={PHONE_TEL} data-testid="doctor-modal-call"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
            >
              <Phone className="h-4 w-4" /> Позвонить
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Doctors = () => {
  const [active, setActive] = useState(null);
  const { choose } = useAppointment();

  return (
    <section id="doctors" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="02" eyebrow="Врачи" title="Наши врачи"
          text="Опытные специалисты по основным медицинским направлениям. Нажмите на карточку, чтобы посмотреть профиль врача."
        />
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800" data-testid="doctors-placeholder-note">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{DOCTORS_PLACEHOLDER_NOTE}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 0.08}>
              <article
                data-testid={`doctor-card-${d.id}`}
                onClick={() => setActive(d)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10"
              >
                <div className="relative overflow-hidden">
                  <SmartImg
                    src={d.photo}
                    alt={`Врач НПМЦ — ${d.specialty}`}
                    className={`aspect-[4/5] w-full object-cover ${d.pos} transition duration-700 group-hover:scale-105`}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-teal shadow-sm">
                    {d.specialty}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-navy">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{d.exp}</p>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{d.desc}</p>
                  <div className="mt-5 flex gap-2.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setActive(d)}
                      data-testid={`doctor-details-button-${d.id}`}
                      className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
                    >
                      Подробнее
                    </button>
                    <button
                      onClick={() => { toast.info('Врач выбран — заполните форму записи'); choose(`Врач — ${d.specialty}`); }}
                      data-testid={`doctor-appointment-button-${d.id}`}
                      className="flex-1 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-deep"
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && <DoctorModal doctor={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
