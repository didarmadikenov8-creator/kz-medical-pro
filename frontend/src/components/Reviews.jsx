import { Info, Star } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { REVIEWS, REVIEWS_NOTE } from '@/data/content';

export const Reviews = () => (
  <section id="reviews" className="scroll-mt-20 bg-white py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHead
        num="08" eyebrow="Пациенты"
        title="Отзывы пациентов"
        text="Мнения пациентов помогают нам становиться лучше — мы благодарны за каждый отзыв."
      />
      <Reveal delay={0.1}>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky p-4 text-sm text-slate-600" data-testid="reviews-note">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
          <p>{REVIEWS_NOTE}</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 0.08}>
            <figure
              data-testid={`review-card-${i}`}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-sky/60 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={`Оценка ${r.rating} из 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${s < r.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
                    />
                  ))}
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-500">{r.service}</span>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">«{r.text}»</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-xs text-white">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{r.name}</span>
                  <span className="text-xs text-slate-400">Демо-отзыв</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
