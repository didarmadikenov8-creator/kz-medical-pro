import { Component, useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { AppointmentProvider } from '@/context/AppointmentContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Doctors } from '@/components/Doctors';
import { Diagnostics } from '@/components/Diagnostics';
import { Symptoms } from '@/components/Symptoms';
import { Steps } from '@/components/Steps';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Reviews } from '@/components/Reviews';
import { Appointment } from '@/components/Appointment';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white p-6 text-center">
          <p className="text-slate-600">Произошла ошибка. Обновите страницу.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function NpmcSite() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      const hash = a.getAttribute('href');
      if (hash.length > 1) lenis.scrollTo(hash, { offset: -72 });
    };
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="bg-white font-sans text-slate-600">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Doctors />
        <Diagnostics />
        <Symptoms />
        <Steps />
        <About />
        <WhyUs />
        <Reviews />
        <Appointment />
        <Contacts />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppointmentProvider>
        <NpmcSite />
      </AppointmentProvider>
    </ErrorBoundary>
  );
}
