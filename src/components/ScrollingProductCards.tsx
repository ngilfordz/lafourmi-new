import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HyperText } from '@/components/ui/hyper-text';

const ScrollingProductCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const cards = [
    {
      id: 1,
      text: "La Fourmi is a boutique experience, curating the finest premium and affordable goods—both local treasures and international staples—delivered right to your doorstep with care and consistency.",
      gradient: "from-grocery-yellow/20 via-background to-grocery-yellow/10"
    },
    {
      id: 2,
      text: "La Fourmi isn't just a minimarket—it's a celebration of homegrown Lebanese hospitality. Every shelf reflects thousands of handpicked products chosen to bring warmth, flavor, and familiarity to your daily life.",
      gradient: "from-grocery-yellow/30 via-grocery-yellow/10 to-background"
    },
    {
      id: 3,
      text: "La Fourmi is your ultimate neighborhood lifeline. From pantry to cleaning cabinet, it's stocked with everything your home could ever need—expertly managed by Elie the wizard, your local retail sorcerer.",
      gradient: "from-background via-grocery-yellow/20 to-grocery-yellow/30"
    },
    {
      id: 4,
      text: "La Fourmi isn't just a store—it's a lifestyle. Rooted in trust, fueled by service, and built to keep your household running smooth, stocked, and smiling—day in, day out.",
      gradient: "from-grocery-yellow/25 via-background to-grocery-yellow/15"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (rect.top <= 0 && rect.bottom > viewportHeight) {
        setIsSticky(true);
        
        // Calculate which card should be active based on scroll position
        const scrolledAmount = Math.abs(rect.top);
        const scrollPerCard = viewportHeight * 0.5; // Half page scroll per card
        const newActiveCard = Math.min(
          Math.floor(scrolledAmount / scrollPerCard),
          cards.length - 1
        );
        setActiveCard(newActiveCard);
      } else if (rect.top > 0) {
        setIsSticky(false);
        setActiveCard(0);
      } else if (rect.bottom <= viewportHeight) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${100 + (cards.length - 1) * 50}vh` }} // Dynamic height based on number of cards
    >
      <div className={`${isSticky ? 'fixed top-0 left-0 right-0' : 'relative'} h-screen flex items-center justify-center transition-all duration-300`}>
        <div className="container mx-auto max-w-4xl px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8 font-mono">
              <HyperText 
                text="Why Choose" 
                className="text-6xl font-bold font-mono mr-4"
                animateOnLoad={false}
              />
              <span className="text-gradient animate-glow">
                <HyperText 
                  text="La Fourmi" 
                  className="text-6xl font-bold font-mono text-gradient animate-glow"
                  animateOnLoad={false}
                />
              </span>
            </h2>
          </div>

          <div className="relative h-96 flex items-center justify-center perspective-1000">
            {cards.map((card, index) => {
              const isActive = index === activeCard;
              const isPrevious = index < activeCard;
              const isFuture = index > activeCard;
              
              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden ${
                    isActive ? 'z-30' : isPrevious ? 'z-10' : 'z-20'
                  }`}
                  initial={{ 
                    rotateX: 0,
                    opacity: 0,
                    scale: 0.8,
                    y: 100
                  }}
                  animate={{ 
                    rotateX: isActive ? 0 : isPrevious ? -90 : isFuture ? 90 : 0,
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? 0 : isPrevious ? -50 : 50,
                    filter: isActive ? 'blur(0px)' : 'blur(2px)'
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-grocery-yellow via-grocery-yellow-light to-grocery-yellow opacity-75 animate-spin-slow" 
                       style={{ padding: '2px' }}>
                    <div className={`h-full bg-gradient-to-br ${card.gradient} rounded-2xl`} />
                  </div>
                  
                  <div className={`relative h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-12 flex items-center justify-center border-2 border-transparent`}>
                    <p className="text-2xl leading-relaxed text-center font-light text-foreground">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mt-16 space-x-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 cursor-pointer ${
                  index === activeCard 
                    ? 'w-12 h-3 bg-grocery-yellow shadow-lg rounded-full' 
                    : index < activeCard
                    ? 'w-3 h-3 bg-grocery-yellow/50 rounded-full'
                    : 'w-3 h-3 bg-muted rounded-full'
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>

          {/* Scroll hint */}
          {isSticky && activeCard < cards.length - 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <p className="text-sm text-muted-foreground">Scroll to continue</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollingProductCards;
