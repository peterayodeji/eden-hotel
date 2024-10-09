import { createContext, useContext, useState } from 'react';

const MobileNavigationContext = createContext();

function MobileNavigationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openMobileNavigation() {
    setIsOpen(true);
  }

  function closeMobileNavigation() {
    setIsOpen(false);
  }

  return (
    <MobileNavigationContext.Provider
      value={{ isOpen, openMobileNavigation, closeMobileNavigation }}
    >
      {children}
    </MobileNavigationContext.Provider>
  );
}

function useMobileNavigation() {
  const context = useContext(MobileNavigationContext);
  if (context === undefined)
    throw new Error(
      'MobileNavigationContext was used outside of MobileNavigationProvider'
    );

  return context;
}

export { MobileNavigationProvider, useMobileNavigation };
