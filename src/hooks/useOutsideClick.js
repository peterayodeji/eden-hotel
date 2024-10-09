import { useEffect } from 'react';

// # THE MODAL
export function useOutsideClick(ref, handler, listenCapturing = true) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log('Click outside');
          handler();
        }
      }

      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing, ref]
  );
}
