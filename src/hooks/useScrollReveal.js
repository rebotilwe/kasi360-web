// useScrollReveal.js - WITH DEFAULT EXPORT
import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll(
        '.reveal-from-left, .reveal-from-right, .reveal-from-bottom, .reveal-from-top, .reveal-fade-in, .reveal-scale, .stagger-children, .kasi-reveal, .scroll-reveal'
      );

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Run on initial load
    handleScrollReveal();

    // Run on scroll
    window.addEventListener('scroll', handleScrollReveal);

    // Run on resize
    window.addEventListener('resize', handleScrollReveal);

    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
      window.removeEventListener('resize', handleScrollReveal);
    };
  }, []);
};

// Make sure this line exists - this is the default export
export default useScrollReveal;