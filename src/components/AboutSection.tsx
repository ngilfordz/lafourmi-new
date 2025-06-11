
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Shield, Truck } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Always here when you need us, day or night'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium products with guaranteed freshness'
    },
    {
      icon: MapPin,
      title: 'Local Community',
      description: 'Proudly serving our neighborhood with care'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-grocery-warm to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold">
              About{' '}
              <span className="text-gradient">Lá Fourmi Market</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're revolutionizing the neighborhood grocery experience. Lá Fourmi Market 
              isn't just another store - we're your local premium destination that combines 
              traditional warmth with modern convenience.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our carefully curated selection of products ensures you get only the best, 
              from everyday essentials to specialty items. We believe grocery shopping 
              should be convenient, enjoyable, and personal.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card 
                    key={feature.title} 
                    className="glow-effect hover:scale-105 transition-all duration-300 animate-fade-in-up border-0 bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-4 text-center">
                      <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-float">
            <img 
              src="/lovable-uploads/10e20110-a90c-4967-bdcd-dea32dc9f049.png"
              alt="Inside Lá Fourmi Market"
              className="w-full h-auto rounded-2xl shadow-2xl glow-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
