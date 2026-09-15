import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cross, Menu, X, MessageCircle, CalendarCheck } from 'lucide-react';
import { NAV_LINKS, waLink, PHONE_DISPLAY } from '@/data/content';

const Anchor = ({ href, label, onClick, dark }) => (
  <a
    href={href}
    onClick={onClick}
    data-testid={`header-nav-link-${href.slice(1)}`}
    className={`text-sm font-medium transition-colors ${dark ? 'text-white/85 hover:text-white' : 'text-slate-600 hover:text-teal'}`}
  >
    {label}
  </a>
);

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" data-testid="header-logo">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white shadow-md">
              <Cross className="h-5 w-5 text-teal-bright" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-navy">НПМЦ</span>
              <span className="block max-w-[200px] text-[10px] uppercase tracking-wide text-slate-500">
                Научно-практический медицинский центр
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => <Anchor key={l.href} {...l} />)}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={waLink(`Здравствуйте! Хочу записаться на приём в НПМЦ (${PHONE_DISPLAY})`)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp-button"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-4 py-2.5 text-sm font-semibold text-[#128C4B] transition hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#appointment"
              data-testid="header-cta-button"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-deep hover:shadow-lg"
            >
              <CalendarCheck className="h-4 w-4 text-teal-bright" /> Записаться на приём
            </a>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            data-testid="mobile-menu-button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col bg-navy px-6 pb-8 pt-24 lg:hidden"
            data-testid="mobile-drawer"
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-white"
                  data-testid={`mobile-nav-link-${l.href.slice(1)}`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-mid px-5 py-4 font-semibold text-white"
                data-testid="mobile-cta-appointment"
              >
                <CalendarCheck className="h-5 w-5" /> Записаться на приём
              </a>
              <a
                href={waLink('Здравствуйте! Хочу записаться на приём в НПМЦ')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white"
                data-testid="mobile-cta-whatsapp"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
