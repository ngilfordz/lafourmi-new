import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { HyperText } from '@/components/ui/hyper-text';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';

const HeroWithLamp = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative">
      <LampContainer className="bg-background">
        <WavyBackground 
          className="absolute inset-0 w-full h-full" 
          containerClassName="relative w-full h-full"
          colors={[
            'hsl(var(--grocery-yellow))',
            'hsl(var(--grocery-yellow-light))',
            'hsl(var(--grocery-warm))',
            'hsl(var(--grocery-yellow))',
            'hsl(var(--grocery-yellow-light))'
          ]}
          waveWidth={50}
          backgroundFill="transparent"
          blur={10}
          speed="slow"
          waveOpacity={0.3}
        >
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full px-4 sm:px-8 md:px-12 lg:px-20 min-h-[80vh] pt-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center lg:text-left space-y-6 md:space-y-8"
            >
              {/* Logo - Increased by 50% */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-4 md:mb-6"
              >
                <img
                  src="/lovable-uploads/lafourmi-hero.png"
                  alt="La Fourmi Market"
                  className="h-16 md:h-24 mx-auto lg:mx-0"
                />
              </motion.div>

              {/* Main Heading with HyperText Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mx-auto lg:mx-0 text-center lg:text-left"
              >
                <HyperText 
                  text="Bringing" 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mr-2 sm:mr-4"
                  animateOnLoad={false}
                />
                <span className="inline-flex">
                  <span className="text-red-600">L</span>
                  <span className="text-red-600">e</span>
                  <span className="text-foreground">b</span>
                  <span className="text-green-600">a</span>
                  <span className="text-green-600">n</span>
                  <span className="text-foreground">o</span>
                  <span className="text-red-600">n</span>
                  <span className="text-red-600">s</span>
                </span>
                <span className="text-foreground">'s Finest</span>
                <br />
                <span className="text-grocery-yellow block">
                  <HyperText 
                    text="To Your Doorstep" 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-grocery-yellow"
                    animateOnLoad={false}
                  />
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="space-y-2 md:space-y-3"
              >
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  Authentic Lebanese groceries, spices, and delicacies delivered fresh
                </p>
                <p className="text-sm sm:text-md text-muted-foreground/80">
                  Experience the taste of Lebanon from anywhere in the world
                </p>
              </motion.div>

              {/* Buttons with Glow Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => scrollToSection('products')}
                  size="lg"
                  className="bg-grocery-yellow hover:bg-grocery-yellow-light text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg relative overflow-hidden border-2 border-grocery-yellow group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow-light to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-30"></div>
                  <ShoppingBag className="mr-2 h-4 sm:h-5 w-4 sm:w-5 relative z-10" />
                  <span className="relative z-10">Explore Lebanon</span>
                </Button>
                <Button
                  onClick={() => scrollToSection('products')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-grocery-yellow text-grocery-yellow hover:bg-grocery-yellow hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow-light to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-30"></div>
                  <span className="relative z-10">Start Shopping</span>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center lg:text-left justify-center lg:justify-start"
              >
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-xl sm:text-2xl mr-2">🇱🇧</span>
                  <span className="text-grocery-yellow font-semibold text-sm sm:text-base">Authentic Lebanese</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 text-grocery-yellow mr-2" />
                  <span className="text-foreground text-sm sm:text-base">24/7 Delivery</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <ShoppingBag className="h-4 sm:h-5 w-4 sm:w-5 text-grocery-yellow mr-2" />
                  <span className="text-foreground text-sm sm:text-base">500+ Products</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex justify-center items-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-lg lg:max-w-2xl">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  src="/lovable-uploads/hero.png"
                  alt="La Fourmi Team"
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] rounded-2xl shadow-2xl object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </WavyBackground>
      </LampContainer>
    </section>
  );
};

export default HeroWithLamp;
