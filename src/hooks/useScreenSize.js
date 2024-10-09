import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 475);

  useEffect(function () {
    function handleResize() {
      setIsMobile(window.innerWidth < 475);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
