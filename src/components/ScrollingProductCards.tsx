
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingProductCards = () => {
  const { scrollYProgress } = useScroll();
  const [activeCard, setActiveCard] = useState(0);

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
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // More sensitive scroll detection for proper card transitions
      const progress = latest * 12; // Increased multiplier for better control
      const newActiveCard = Math.min(Math.floor(progress), cards.length - 1);
      setActiveCard(Math.max(0, newActiveCard));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="py-32 px-8 bg-background min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            Why Choose{' '}
            <span className="text-gradient animate-glow">La Fourmi</span>
          </h2>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          {cards.map((card, index) => {
            const isActive = index === activeCard;
            const isPrevious = index < activeCard;
            
            return (
              <motion.div
                key={card.id}
                className={`absolute inset-0 rounded-2xl border border-grocery-yellow/30 shadow-2xl backdrop-blur-sm ${
                  isActive ? 'z-30' : isPrevious ? 'z-10' : 'z-20'
                }`}
                initial={{ 
                  rotateX: 90, 
                  opacity: 0,
                  scale: 0.8,
                  y: 100
                }}
                animate={{ 
                  rotateX: isActive ? 0 : isPrevious ? -90 : 90,
                  opacity: isActive ? 1 : isPrevious ? 0 : 0.3,
                  scale: isActive ? 1 : isPrevious ? 0.9 : 0.8,
                  y: isActive ? 0 : isPrevious ? -100 : 100
                }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className={`h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-8 flex items-center justify-center`}>
                  <p className="text-xl leading-relaxed text-center font-light text-foreground">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === activeCard 
                  ? 'bg-grocery-yellow shadow-lg scale-125' 
                  : index < activeCard
                  ? 'bg-grocery-yellow/50'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingProductCards;
