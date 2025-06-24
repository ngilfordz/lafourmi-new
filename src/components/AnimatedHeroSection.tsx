
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { StarBorder } from '@/components/ui/star-border';
import { Scene } from '@/components/ui/rubik-s-cube';
import { ShoppingBag, Star } from 'lucide-react';

const AnimatedHeroSection = () => {
  const phrases = [
    'Welcome to Premium Lebanese Excellence',
    'Welcome to Affordable Luxury',
    'Welcome to Trust & Quality',
    'Welcome to La Fourmi Market'
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-8 relative bg-background">
      {/* Rubik's Cube Background */}
      <Scene />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - Hero text */}
        <div className="space-y-12 animate-fade-in-up">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight font-mono">
              <span className="block text-foreground mb-4">
                {phrases[currentPhrase].split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-gradient animate-glow text-5xl lg:text-7xl">
                {phrases[currentPhrase].split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up max-w-2xl font-light" style={{ animationDelay: '0.3s' }}>
              La Fourmi is a boutique experience, curating the finest premium and affordable goods—both local treasures and international staples—delivered right to your doorstep with care and consistency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <StarBorder>
              <Button 
                size="lg" 
                className="rounded-full px-12 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 bg-grocery-yellow text-black hover:bg-grocery-yellow-light"
              >
                <ShoppingBag className="mr-3 h-6 w-6" />
                Start Shopping
              </Button>
            </StarBorder>
            
            <StarBorder>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-12 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 border-grocery-yellow text-grocery-yellow hover:bg-grocery-yellow hover:text-black"
              >
                <Star className="mr-3 h-6 w-6" />
                Explore Categories
              </Button>
            </StarBorder>
          </div>

          <div className="flex items-center space-x-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-grocery-yellow font-mono">500+</div>
              <div className="text-sm text-muted-foreground font-light">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grocery-yellow font-mono">24/7</div>
              <div className="text-sm text-muted-foreground font-light">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grocery-yellow font-mono">100%</div>
              <div className="text-sm text-muted-foreground font-light">Fresh</div>
            </div>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div className="relative animate-float">
          <div className="relative">
            <img 
              src="/lovable-uploads/fda3ef9c-8f24-4f15-8091-84e6f12d64ce.png"
              alt="La Fourmi Market"
              className="w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-2xl glow-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-grocery-yellow text-black px-8 py-4 rounded-full font-bold shadow-2xl animate-bounce">
            🔥 Now Open!
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card border border-grocery-yellow px-8 py-4 rounded-xl shadow-2xl backdrop-blur-sm glow-effect">
            <div className="flex items-center space-x-3">
              <Star className="h-6 w-6 text-grocery-yellow fill-current" />
              <span className="font-bold text-lg">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
