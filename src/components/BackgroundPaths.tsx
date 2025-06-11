
import React, { useEffect, useState } from 'react';

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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--grocery-yellow))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--grocery-yellow-light))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--grocery-yellow))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <path
          d="M-100,200 Q300,100 600,200 T1300,150"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        
        <path
          d="M-50,400 Q400,300 800,400 T1350,350"
          stroke="url(#pathGradient)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        
        <path
          d="M-200,600 Q200,500 500,600 T1200,550"
          stroke="url(#pathGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

export default BackgroundPaths;
