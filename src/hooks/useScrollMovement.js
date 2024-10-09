import { useEffect } from 'react';
import { useScrollElement } from '../context/ScrollElementContext';

export function useScrollMovement(ref, handler) {
  const { scrollableRefs } = useScrollElement();

  useEffect(
    function () {
      const scrollElements = scrollableRefs.current;

      function callback() {
        if (!ref.current) return;
        handler();

        // console.log('scroll');
      }

      window.addEventListener('scroll', callback);
      scrollElements.forEach(element => {
        element.addEventListener('scroll', callback);
      });

      return () => {
        window.removeEventListener('scroll', callback);
        scrollElements.forEach(element => {
          element.removeEventListener('scroll', callback);
        });
      };
    },
    [handler, ref, scrollableRefs]
  );
}
