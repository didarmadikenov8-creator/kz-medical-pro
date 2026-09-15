import { Reveal, SectionHead } from './Reveal';
import { SmartImg } from './SmartImg';
import { DIAGNOSTICS } from '@/data/content';

export const Diagnostics = () => (
  <section id="diagnostics" className="scroll-mt-20 bg-navy py-20 text-white lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHead
        num="03" eyebrow="Диагностика" dark
        title="Современная диагностика и оборудование"
        text="Точный диагноз начинается с точных исследований: ультразвуковая диагностика, лаборатория, процедурный кабинет и современное оборудование — в одном центре."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {DIAGNOSTICS.map((d, i) => (
          <Reveal key={d.id} delay={(i % 3) * 0.08} className={d.wide ? 'lg:col-span-2' : ''}>
            <article
              data-testid={`diagnostics-card-${d.id}`}
              className="group relative h-80 overflow-hidden rounded-[2rem] border border-white/10 shadow-xl lg:h-[360px]"
            >
              <SmartImg
                src={d.img}
                alt={d.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl">{d.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.points.map((p) => (
                    <span key={p} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
