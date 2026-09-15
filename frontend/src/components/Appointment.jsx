import { useState } from 'react';
import { CalendarCheck, Clock, Send, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal, SectionHead } from './Reveal';
import { DOCTORS, SERVICES, waLink } from '@/data/content';
import { useAppointment } from '@/context/AppointmentContext';

export const Appointment = () => {
  const { selection, setSelection } = useAppointment();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setError('Пожалуйста, укажите имя'); return; }
    if (!/^[+0-9][0-9\s()-]{8,17}$/.test(phone.trim())) {
      setError('Пожалуйста, укажите корректный номер телефона');
      return;
    }
    setError('');
    const message = [
      'Здравствуйте! Хочу записаться на приём в НПМЦ.',
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      selection ? `Специалист/услуга: ${selection}` : 'Специалист/услуга: подскажите, пожалуйста',
    ].join('\n');
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    toast.success('Заявка готова! Отправьте сообщение в WhatsApp, чтобы завершить запись.');
  };

  const inputCls = 'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-teal focus:bg-white focus:ring-4 focus:ring-teal/10';

  return (
    <section id="appointment" className="relative scroll-mt-20 overflow-hidden bg-deep py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal/20 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky/10 blur-[110px]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHead
            num="09" eyebrow="Запись" dark
            title="Запишитесь на консультацию"
            text="Оставьте заявку — администратор центра свяжется с вами, подтвердит запись и подскажет удобное время приёма."
          />
          <div className="mt-10 space-y-5">
            {[
              { icon: Clock, text: 'Администратор подтверждает запись по телефону или в WhatsApp' },
              { icon: ShieldCheck, text: 'Заявка открывается в WhatsApp клиники — данные никуда не передаются' },
              { icon: CalendarCheck, text: 'Можно выбрать врача или услугу заранее — это ускорит запись' },
            ].map((b) => (
              <Reveal key={b.text}>
                <div className="flex items-start gap-3.5 text-sm text-white/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="pt-2">{b.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            data-testid="appointment-form"
            className="rounded-[2rem] bg-white p-7 text-navy shadow-2xl sm:p-9"
          >
            <h3 className="font-display text-xl">Форма записи</h3>
            <p className="mt-2 text-sm text-slate-500">Поля со звёздочкой обязательны</p>
            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="appt-name" className="mb-2 block text-sm font-semibold text-slate-700">Имя *</label>
                <input
                  id="appt-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя" data-testid="appointment-name-input" className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="appt-phone" className="mb-2 block text-sm font-semibold text-slate-700">Телефон *</label>
                <input
                  id="appt-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__" data-testid="appointment-phone-input" className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="appt-specialist" className="mb-2 block text-sm font-semibold text-slate-700">
                  Выберите специалиста или услугу
                </label>
                <select
                  id="appt-specialist" value={selection} onChange={(e) => setSelection(e.target.value)}
                  data-testid="appointment-specialist-select" className={`${inputCls} appearance-none`}
                >
                  <option value="">Выбрать…</option>
                  <optgroup label="Врачи">
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={`Врач — ${d.specialty}`}>Врач — {d.specialty}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Услуги">
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" data-testid="appointment-error">{error}</p>
              )}
              <button
                type="submit"
                data-testid="appointment-submit-button"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-mid py-4 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition hover:bg-teal-bright"
              >
                <Send className="h-4 w-4" /> Записаться
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-400">
                Нажимая «Записаться», вы соглашаетесь на обработку указанных данных для записи на приём.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
