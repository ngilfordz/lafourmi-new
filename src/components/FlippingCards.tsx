
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FlippingCards = () => {
  const { scrollYProgress } = useScroll();
  const [visibleCards, setVisibleCards] = useState(0);

  const cards = [
    {
      id: 1,
      text: "La Fourmi is a boutique experience, curating the finest premium and affordable goods—both local treasures and international staples—delivered right to your doorstep with care and consistency."
    },
    {
      id: 2,
      text: "La Fourmi isn't just a minimarket—it's a celebration of homegrown Lebanese hospitality. Every shelf reflects thousands of handpicked products chosen to bring warmth, flavor, and familiarity to your daily life."
    },
    {
      id: 3,
      text: "La Fourmi is your ultimate neighborhood lifeline. From pantry to cleaning cabinet, it's stocked with everything your home could ever need—expertly managed by Elie the wizard, your local retail sorcerer."
    },
    {
      id: 4,
      text: "La Fourmi isn't just a store—it's a lifestyle. Rooted in trust, fueled by service, and built to keep your household running smooth, stocked, and smiling—day in, day out."
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const progress = latest * 10; // Amplify scroll effect
      const newVisibleCards = Math.min(Math.floor(progress), cards.length);
      setVisibleCards(newVisibleCards);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="py-32 px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 font-mono">
            Why Choose{' '}
            <span className="text-gradient animate-glow">La Fourmi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-80"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ 
                rotateY: visibleCards > index ? 0 : 180,
                opacity: visibleCards > index ? 1 : 0.3
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-grocery-yellow/20 via-background to-grocery-yellow/10 rounded-2xl border border-grocery-yellow/30 shadow-2xl backdrop-blur-sm">
                <div className="p-8 h-full flex items-center justify-center">
                  <p className="text-lg leading-relaxed text-center font-light">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlippingCards;
