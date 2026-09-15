import { Plus } from 'lucide-react';
import { SERVICES } from '@/data/content';

export const Marquee = () => {
  const items = SERVICES.map((s) => s.title);
  return (
    <div className="group relative overflow-hidden bg-teal py-5" data-testid="services-marquee">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((title, i) => (
          <span key={`${title}-${i}`} aria-hidden={i >= items.length} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.2em] text-white/95">
              {title}
            </span>
            <Plus className="h-4 w-4 shrink-0 text-white/50" />
          </span>
        ))}
      </div>
    </div>
  );
};
