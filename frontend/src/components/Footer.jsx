import { Cross, Instagram, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ADDRESS, HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SERVICES, waLink } from '@/data/content';

export const Footer = () => (
  <footer className="bg-footer pb-8 pt-16 text-slate-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Cross className="h-5 w-5 text-teal-bright" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">НПМЦ</span>
              <span className="block max-w-[220px] text-[10px] uppercase tracking-wide text-slate-400">
                Научно-практический медицинский центр
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Многопрофильный медицинский центр: консультации врачей, диагностика,
            лаборатория, процедурный кабинет и дневной стационар.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/', testid: 'footer-social-instagram', label: 'Instagram' },
              { icon: Send, href: 'https://t.me/', testid: 'footer-social-telegram', label: 'Telegram' },
              { icon: MessageCircle, href: waLink('Здравствуйте!'), testid: 'footer-social-whatsapp', label: 'WhatsApp' },
            ].map((s) => (
              <a
                key={s.testid} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} data-testid={s.testid}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-teal-bright hover:text-teal-bright"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-white">Навигация</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-testid={`footer-nav-link-${l.href.slice(1)}`} className="text-sm text-slate-400 transition hover:text-teal-bright">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-white">Услуги</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.id}>
                <a href="#services" data-testid={`footer-service-link-${s.id}`} className="text-sm text-slate-400 transition hover:text-teal-bright">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-white">Контакты</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
              <span className="text-slate-400">{ADDRESS}</span>
            </li>
            <li>
              <a href={PHONE_TEL} data-testid="footer-phone-link" className="flex items-center gap-3 text-slate-300 transition hover:text-teal-bright">
                <Phone className="h-4 w-4 shrink-0 text-teal-bright" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={waLink('Здравствуйте! Хочу записаться на приём в НПМЦ')} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="flex items-center gap-3 text-slate-300 transition hover:text-teal-bright">
                <MessageCircle className="h-4 w-4 shrink-0 text-teal-bright" /> WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Cross className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
              <span className="text-slate-400">{HOURS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} НПМЦ — Научно-практический медицинский центр</p>
        <p>Информация на сайте не является медицинской консультацией</p>
      </div>
    </div>
  </footer>
);
