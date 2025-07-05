import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HyperText } from '@/components/ui/hyper-text';
import { ContainerScroll, CardSticky } from '@/components/blocks/cards-stack';

const WhyChooseLaFourmi = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cards = [
    {
      id: 1,
      title: "Boutique Experience",
      text: "La Fourmi is a boutique experience, curating the finest premium and affordable goods—both local treasures and international staples—delivered right to your doorstep with care and consistency.",
      gradient: "from-grocery-yellow/20 via-background to-grocery-yellow/10",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Lebanese Hospitality",
      text: "La Fourmi isn't just a minimarket—it's a celebration of homegrown Lebanese hospitality. Every shelf reflects thousands of handpicked products chosen to bring warmth, flavor, and familiarity to your daily life.",
      gradient: "from-grocery-yellow/30 via-grocery-yellow/10 to-background",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Neighborhood Lifeline",
      text: "La Fourmi is your ultimate neighborhood lifeline. From pantry to cleaning cabinet, it's stocked with everything your home could ever need—expertly managed by Elie the wizard, your local retail sorcerer.",
      gradient: "from-background via-grocery-yellow/20 to-grocery-yellow/30",
      icon: "✨"
    },
    {
      id: 4,
      title: "A Lifestyle",
      text: "La Fourmi isn't just a store—it's a lifestyle. Rooted in trust, fueled by service, and built to keep your household running smooth, stocked, and smiling—day in, day out.",
      gradient: "from-grocery-yellow/25 via-background to-grocery-yellow/15",
      icon: "🌟"
    }
  ];

  // Progress transform for visual feedback
  const progress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section ref={containerRef} className="relative bg-background py-20">
      <div className="container mx-auto max-w-6xl px-8">
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading font-bold mb-8 font-mono mx-auto text-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HyperText 
              text="Why Choose" 
              className="heading font-bold font-mono mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient animate-glow">
              <HyperText 
                text="La Fourmi" 
                className="heading font-bold font-mono text-gradient animate-glow"
                animateOnLoad={false}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover what makes us your neighborhood's favorite destination
          </motion.p>
        </div>

        {/* Cards Stack Container */}
        <ContainerScroll className="max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <CardSticky
              key={card.id}
              index={index}
              incrementY={120}
              incrementZ={-10}
              className="w-full"
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Background with Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-grocery-yellow via-grocery-yellow-light to-grocery-yellow opacity-0 group-hover:opacity-75 transition-opacity duration-500 blur-xl" />
                
                {/* Card Content */}
                <div className={`relative bg-gradient-to-br ${card.gradient} rounded-3xl border border-grocery-yellow/20 backdrop-blur-sm overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-grocery-yellow/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-grocery-yellow/5 rounded-full blur-2xl transform -translate-x-24 translate-y-24" />
                  
                  <div className="relative p-12 z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="heading animate-float observe-brightness">{card.icon}</div>
                      <h3 className="text-3xl font-bold font-mono text-grocery-yellow">
                        {card.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xl leading-relaxed text-foreground/90 font-light">
                      {card.text}
                    </p>
                    
                    {/* Card Number */}
                    <div className="absolute top-8 right-8 text-8xl font-mono text-grocery-yellow/10 font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </motion.div>
            </CardSticky>
          ))}
        </ContainerScroll>

        {/* Progress Indicator */}
        <motion.div 
          className="flex justify-center mt-20 space-x-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-2 h-2 bg-muted rounded-full transition-all duration-300" />
              <motion.div
                className="absolute inset-0 w-2 h-2 bg-grocery-yellow rounded-full"
                style={{
                  opacity: useTransform(
                    progress,
                    [index / cards.length, (index + 1) / cards.length],
                    [0, 1]
                  )
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Background Paths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="url(#yellowGradient)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFC107" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFC107" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLaFourmi;
