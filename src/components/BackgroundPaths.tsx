
import React, { useEffect, useState } from 'react';
import { BackgroundPaths as NewBackgroundPaths } from '@/components/ui/background-paths';

const BackgroundPaths = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  if (!hasScrolled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <NewBackgroundPaths />
    </div>
  );
};

export default BackgroundPaths;
