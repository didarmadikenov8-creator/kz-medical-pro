import { ArrowRight } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { SYMPTOMS } from '@/data/content';
import { useAppointment } from '@/context/AppointmentContext';

export const Symptoms = () => {
  const { choose } = useAppointment();

  return (
    <section id="symptoms" className="scroll-mt-20 bg-aqua py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          num="04" eyebrow="Навигация" center
          title="Что вас беспокоит?"
          text="Выберите, что вас беспокоит, — мы подскажем, к какому специалисту обратиться, и сразу перейдём к записи."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {SYMPTOMS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <button
                onClick={() => choose(`Врач — ${s.specialist}`)}
                data-testid={`symptom-pill-${i}`}
                className="group flex w-64 items-center gap-4 rounded-3xl border border-transparent bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aqua text-teal transition group-hover:bg-teal group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{s.label}</span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-teal">
                    → Врач — {s.specialist}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
