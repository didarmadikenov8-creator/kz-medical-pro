import { Reveal, SectionHead } from './Reveal';
import { STEPS } from '@/data/content';

export const Steps = () => (
  <section id="steps" className="scroll-mt-20 bg-teal py-20 text-white lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHead
        num="05" eyebrow="Запись" dark
        title="Как проходит обращение"
        text="Четыре простых шага — от выбора врача до приёма в центре."
      />
      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/25 lg:block" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div data-testid={`step-${i + 1}`} className="relative">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-teal text-teal-bright shadow-lg">
                  <s.icon className="h-8 w-8" />
                </div>
                <span className="mt-6 block font-display text-5xl font-semibold text-white/25">{s.num}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
