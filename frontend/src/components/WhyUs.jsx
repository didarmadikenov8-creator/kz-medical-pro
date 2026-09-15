import { Reveal, SectionHead } from './Reveal';
import { WHY_US } from '@/data/content';

export const WhyUs = () => (
  <section id="why-us" className="bg-sky py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHead
        num="07" eyebrow="Преимущества"
        title="Почему выбирают НПМЦ"
        text="Мы построили центр так, чтобы забота о здоровье была внимательной, точной и удобной."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.08}>
            <div
              data-testid={`why-card-${i}`}
              className="group h-full rounded-3xl border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-teal transition group-hover:bg-teal group-hover:text-white">
                <w.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
