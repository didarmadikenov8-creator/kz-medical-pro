import { MessageCircle, Phone } from 'lucide-react';
import { waLink } from '@/data/content';

export const FloatingButtons = () => (
  <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3" data-testid="floating-buttons">
    <a
      href={waLink('Здравствуйте! Хочу записаться на приём в НПМЦ')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      data-testid="floating-whatsapp"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-navy px-3 py-2 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
        Написать в WhatsApp
      </span>
    </a>
    <a
      href="tel:+77077000608"
      aria-label="Позвонить"
      data-testid="floating-call"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-teal-mid text-white shadow-xl shadow-black/20 transition hover:scale-110"
    >
      <Phone className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-navy px-3 py-2 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
        Позвонить
      </span>
    </a>
  </div>
);
