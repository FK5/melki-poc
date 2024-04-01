import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return { width, height };
}
