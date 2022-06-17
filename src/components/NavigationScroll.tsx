import React from 'react';
import { useLocation } from 'react-router-dom';

function NavigationScroll({ children }: { children: React.ReactElement | null }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return children || null;
}

export default NavigationScroll;
