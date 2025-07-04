import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';
import { LampContainer } from '@/components/ui/lamp';
import { HyperText } from '@/components/ui/hyper-text';
import { motion } from 'framer-motion';

const AnimatedHeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen">
      <LampContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full px-8 -translate-y-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Logo - Increased by 50% */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-6"
            >
              <img
                src="/lovable-uploads/lafourmi-hero.png"
                alt="La Fourmi Market"
                className="h-18 md:h-24 mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Main Heading with HyperText Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <HyperText 
                text="Bringing" 
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mr-4"
                animateOnLoad={false}
              />
              <span className="inline-flex">
                <span className="text-red-600">L</span>
                <span className="text-red-600">e</span>
                <span className="text-white">b</span>
                <span className="text-green-600">a</span>
                <span className="text-green-600">n</span>
                <span className="text-white">o</span>
                <span className="text-red-600">n</span>
                <span className="text-red-600">s</span>
              </span>
              <span className="text-white">'s Finest</span>
              <br />
              <span className="text-yellow-400">
                <HyperText 
                  text="To Your Doorstep" 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400"
                  animateOnLoad={false}
                />
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="space-y-3"
            >
              <p className="text-lg md:text-xl text-gray-300">
                Authentic Lebanese groceries, spices, and delicacies delivered fresh
              </p>
              <p className="text-md text-gray-400">
                Experience the taste of Lebanon from anywhere in the world
              </p>
            </motion.div>

            {/* Buttons with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg relative overflow-hidden border-2 border-yellow-400 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-30"></div>
                <ShoppingBag className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Explore Lebanon</span>
              </Button>
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-30"></div>
                <span className="relative z-10">Start Shopping</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-2xl mr-2">🇱🇧</span>
                <span className="text-yellow-400 font-semibold">Authentic Lebanese</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-white">24/7 Neighborhood Delivery</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <ShoppingBag className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-white">500+ World Products</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                src="/lovable-uploads/hero.png"
                alt="La Fourmi Team"
                className="max-w-full h-auto max-h-[60vh] w-auto rounded-2xl shadow-2xl object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
};

export default AnimatedHeroSection;
