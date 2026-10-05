import { useState, useEffect } from 'react';

/**
 * Custom React hook to observe active page sections based on scroll offset.
 */
export function useActiveSection(sectionIds: string[], offset: number = 140): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export default useActiveSection;
