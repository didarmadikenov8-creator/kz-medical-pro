import { CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { SmartImg } from './SmartImg';

const FEATURES = [
  'Квалифицированные врачи разных специальностей',
  'Диагностика и лабораторные исследования',
  'Процедурный кабинет и дневной стационар',
  'Согласованный маршрут обследования и лечения',
];

export const About = () => (
  <section id="about" className="scroll-mt-20 bg-white py-20 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="relative">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <SmartImg
              src="/images/about-consult.jpg"
              alt="Приём врача в НПМЦ"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="absolute -bottom-10 right-4 hidden w-1/2 overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:block">
            <SmartImg
              src="/images/about-interior.jpg"
              alt="Интерьер медицинского центра"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="absolute -top-6 left-4 rounded-2xl bg-teal px-6 py-4 text-white shadow-xl sm:-left-6" data-testid="about-badge">
            <span className="block font-display text-2xl font-semibold">15 направлений</span>
            <span className="text-xs text-white/80">в одном медицинском центре</span>
          </div>
        </Reveal>
      </div>

      <div>
        <SectionHead
          num="06" eyebrow="О центре"
          title="О Научно-практическом медицинском центре"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            НПМЦ — многопрофильный медицинский центр в Карасайском районе
            Алматинской области. Мы объединили врачей разных специальностей,
            диагностику и лабораторию, чтобы пациент получал помощь рядом с домом
            — без переезда из кабинета в кабинет по всему городу.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            В центре работают консультации специалистов, кабинет УЗИ,
            лабораторная диагностика, процедурный кабинет и дневной стационар.
            Такой комплексный подход позволяет вовремя поставить диагноз,
            наблюдать лечение в динамике и не откладывать заботу о здоровье.
          </p>
        </Reveal>
        <div className="mt-8 space-y-3.5">
          {FEATURES.map((f, i) => (
            <Reveal key={f} delay={0.2 + i * 0.07}>
              <div className="flex items-center gap-3 text-sm font-medium text-navy sm:text-base" data-testid="about-feature">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                {f}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#appointment"
              data-testid="about-cta-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition hover:bg-deep"
            >
              <CalendarCheck className="h-4 w-4 text-teal-bright" /> Записаться на приём
            </a>
            <a
              href="#contacts"
              data-testid="about-cta-contacts"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-4 text-sm font-semibold text-navy transition hover:border-teal hover:text-teal"
            >
              Как нас найти <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
