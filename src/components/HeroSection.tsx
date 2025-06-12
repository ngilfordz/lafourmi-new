
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Hero text */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to{' '}
              <span className="text-gradient animate-glow">
                Grocery 2.0
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Experience the future of grocery shopping at Lá Fourmi Market. 
              We're not just another grocery store - we're your neighborhood's 
              premium destination for quality, convenience, and exceptional service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="glow-effect rounded-full px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glow-effect rounded-full px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Star className="mr-2 h-5 w-5" />
              Explore Categories
            </Button>
          </div>

          <div className="flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Fresh</div>
            </div>
          </div>
        </div>

        {/* Right side - Hero image with logo + text */}
        <div className="relative animate-float">
          <div className="relative">
            <img 
              src="/lovable-uploads/8a8b9c77-47fc-4d82-8261-b96800efc15a.png"
              alt="Lá Fourmi Market Hero"
              className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-2xl glow-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-glow">
            🔥 Now Open!
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
