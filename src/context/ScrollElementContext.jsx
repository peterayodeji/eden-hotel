import { createContext, useContext, useRef } from 'react';

const ScrollElementContext = createContext();

function ScrollElementProvider({ children }) {
  const scrollableRefs = useRef([]);

  function addScrollableRef(element) {
    if (element && !scrollableRefs.current.includes(element)) {
      scrollableRefs.current.push(element);
    }
  }

  return (
    <ScrollElementContext.Provider value={{ scrollableRefs, addScrollableRef }}>
      {children}
    </ScrollElementContext.Provider>
  );
}

function useScrollElement() {
  const context = useContext(ScrollElementContext);
  if (context === undefined)
    throw new Error(
      'ScrollElementContext was used outside of ScrollElementProvider'
    );

  return context;
}

export { ScrollElementProvider, useScrollElement };
