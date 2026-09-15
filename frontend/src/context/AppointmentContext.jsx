import { createContext, useCallback, useContext, useState } from 'react';

const AppointmentCtx = createContext(null);

export const AppointmentProvider = ({ children }) => {
  const [selection, setSelection] = useState('');

  const choose = useCallback((value) => {
    setSelection(value);
    requestAnimationFrame(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo('#appointment', { offset: -72 });
      } else {
        document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  return (
    <AppointmentCtx.Provider value={{ selection, setSelection, choose }}>
      {children}
    </AppointmentCtx.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentCtx);
