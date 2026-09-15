import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { ADDRESS, HOURS, PHONE_DISPLAY, PHONE_TEL, waLink } from '@/data/content';

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  'Суюнбая 2/10, Райымбек, Карасайский район, Алматинская область'
)}&z=13&output=embed`;

export const Contacts = () => (
  <section id="contacts" className="scroll-mt-20 bg-sky py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHead
        num="10" eyebrow="Контакты" title="Контакты"
        text="Позвоните или напишите — администратор ответит на вопросы и поможет выбрать удобное время приёма."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          {[
            { icon: MapPin, label: 'Адрес', testid: 'contact-address',
              body: <p className="text-sm leading-relaxed text-slate-700">{ADDRESS}</p> },
            { icon: Phone, label: 'Телефон', testid: 'contact-phone',
              body: (
                <a href={PHONE_TEL} data-testid="contact-phone-link" className="font-display text-lg font-semibold text-navy transition hover:text-teal">
                  {PHONE_DISPLAY}
                </a>
              ) },
            { icon: MessageCircle, label: 'WhatsApp', testid: 'contact-whatsapp',
              body: (
                <a href={waLink('Здравствуйте! У меня вопрос о приёме в НПМЦ')} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-link"
                  className="inline-flex items-center gap-2 font-display text-lg font-semibold text-[#128C4B] transition hover:opacity-75">
                  <MessageCircle className="h-5 w-5" /> Написать в WhatsApp
                </a>
              ) },
            { icon: Clock, label: 'Режим работы', testid: 'contact-hours',
              body: <p className="text-sm leading-relaxed text-slate-700">{HOURS}</p> },
          ].map((c) => (
            <Reveal key={c.label}>
              <div data-testid={c.testid} className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aqua text-teal">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{c.label}</h3>
                  <div className="mt-1.5">{c.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="h-full overflow-hidden rounded-[2rem] shadow-xl" data-testid="contacts-map">
            <iframe
              title="Карта — НПМЦ, Карасайский район"
              src={MAP_SRC}
              className="h-[420px] w-full border-0 lg:h-full lg:min-h-[480px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
