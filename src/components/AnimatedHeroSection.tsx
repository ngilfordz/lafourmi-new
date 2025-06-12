
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';

const AnimatedHeroSection = () => {
  const phrases = [
    'Welcome to Grocery 2.0',
    'Welcome to Affordable Luxury',
    'Welcome to Trust',
    'Welcome to Lebanese Excellence'
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Hero text */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground mb-2">
                {phrases[currentPhrase].split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-gradient animate-glow text-5xl lg:text-6xl">
                {phrases[currentPhrase].split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.3s' }}>
              Experience the future of grocery shopping at Lafourmi Market. 
              We're not just another grocery store - we're your neighborhood's 
              premium destination for quality, convenience, and exceptional Lebanese service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="glow-effect rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag className="mr-2 h-6 w-6" />
              Start Shopping
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glow-effect rounded-full px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Star className="mr-2 h-6 w-6" />
              Explore Categories
            </Button>
          </div>

          <div className="flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Fresh</div>
            </div>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div className="relative animate-float">
          <div className="relative">
            <img 
              src="/lovable-uploads/8a8b9c77-47fc-4d82-8261-b96800efc15a.png"
              alt="Lafourmi Hero"
              className="w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-2xl glow-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-2xl animate-bounce">
            🔥 Now Open!
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card border border-border px-6 py-3 rounded-xl shadow-2xl backdrop-blur-sm glow-effect">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="font-bold text-lg">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
