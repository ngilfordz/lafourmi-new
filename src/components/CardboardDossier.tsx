import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HyperText } from '@/components/ui/hyper-text';
import { ContainerScroll, CardSticky } from '@/components/blocks/cards-stack';
import { WavyBackground } from '@/components/ui/wavy-background';

const CardboardDossier = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cards = [
    {
      id: 1,
      text: "La Fourmi is a boutique experience, curating the finest premium and affordable goods—both local treasures and international staples—delivered right to your doorstep with care and consistency.",
      gradient: "from-[hsl(var(--grocery-yellow)/0.15)] via-[hsl(var(--grocery-yellow)/0.05)] to-transparent"
    },
    {
      id: 2,
      text: "La Fourmi isn't just a minimarket—it's a celebration of homegrown Lebanese hospitality. Every shelf reflects thousands of handpicked products chosen to bring warmth, flavor, and familiarity to your daily life.",
      gradient: "from-[hsl(var(--grocery-yellow)/0.15)] via-transparent to-[hsl(var(--grocery-yellow)/0.1)]"
    },
    {
      id: 3,
      text: "La Fourmi is your ultimate neighborhood lifeline. From pantry to cleaning cabinet, it's stocked with everything your home could ever need—expertly managed by Elie the wizard, your local retail sorcerer.",
      gradient: "from-transparent via-[hsl(var(--grocery-yellow)/0.15)] to-[hsl(var(--grocery-yellow)/0.2)]"
    },
    {
      id: 4,
      text: "La Fourmi isn't just a store—it's a lifestyle. Rooted in trust, fueled by service, and built to keep your household running smooth, stocked, and smiling—day in, day out.",
      gradient: "from-[hsl(var(--grocery-yellow)/0.15)] via-[hsl(var(--grocery-yellow)/0.08)] to-transparent"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
  };

  return (
    <section id="about" className="sticky top-0 h-screen bg-background overflow-hidden">
      <WavyBackground 
        containerClassName="h-full"
        className="w-full h-full flex items-center justify-center"
        colors={[
          "hsl(var(--grocery-yellow))",
          "hsl(var(--grocery-yellow) / 0.8)",
          "hsl(var(--grocery-yellow) / 0.6)",
          "hsl(var(--grocery-yellow-light))",
          "hsl(var(--grocery-yellow) / 0.4)"
        ]}
        waveWidth={50}
        backgroundFill="hsl(var(--background))"
        blur={3}
        speed="slow"
        waveOpacity={0.2}
      >
        <div className="container mx-auto max-w-4xl px-8">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h2 className="heading font-bold mb-8 font-mono mx-auto text-center px-4 sm:px-0">
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
            </h2>
          </div>

          {/* Cards Stack Container */}
          <ContainerScroll className="relative h-96">
            {cards.map((card, index) => (
              <CardSticky
                key={card.id}
                index={index}
                incrementY={15}
                incrementZ={10}
                className="absolute inset-0"
              >
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseMove={handleMouseMove}
                  style={{
                    '--mx': '50%',
                    '--my': '50%',
                  } as React.CSSProperties}
                >
                  {/* Card with gradient background and hover effect */}
                  <div 
                    className={`relative h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-12 flex items-center justify-center border border-[hsl(var(--grocery-yellow)/0.2)] shadow-2xl backdrop-blur-sm overflow-hidden group`}
                    style={{
                      background: `
                        radial-gradient(circle at var(--mx) var(--my), hsla(var(--grocery-yellow) / .45), transparent 60%),
                        linear-gradient(to bottom right, ${card.gradient.includes('from-[') ? card.gradient : 'hsl(var(--grocery-yellow)/0.15)'}, transparent)
                      `,
                      transition: 'background .15s',
                    }}
                  >
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-[hsl(var(--grocery-yellow)/0.5)] via-[hsl(var(--grocery-yellow)/0.3)] to-[hsl(var(--grocery-yellow)/0.5)] blur-sm" />
                    </div>
                    
                    <p className="text-2xl leading-relaxed text-center font-light text-foreground relative z-10">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              </CardSticky>
            ))}
          </ContainerScroll>

          {/* Progress indicator */}
          <div className="flex justify-center mt-16 space-x-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-[hsl(var(--grocery-yellow)/0.3)] rounded-full transition-all duration-300 hover:bg-[hsl(var(--grocery-yellow)/0.6)] hover:scale-125"
              />
            ))}
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default CardboardDossier;
