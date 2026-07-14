'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollRestorer = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash scroll after navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollRestorer;
