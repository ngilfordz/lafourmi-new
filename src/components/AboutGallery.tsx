
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutGallery = () => {
  const images = [
    '/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png',
    '/lovable-uploads/fda3ef9c-8f24-4f15-8091-84e6f12d64ce.png',
    '/lovable-uploads/ad3f62ab-0abf-456d-9489-4234b905219a.png',
    '/lovable-uploads/8a8b9c77-47fc-4d82-8261-b96800efc15a.png',
    '/lovable-uploads/10e20110-a90c-4967-bdcd-dea32dc9f049.png',
    '/lovable-uploads/1b8cb00f-900c-4288-9df1-23aefac9c9ff.png',
    '/lovable-uploads/4e11b3e7-44e1-45c2-8a72-1827bbce2ff8.png',
    '/lovable-uploads/ad3f62ab-0abf-456d-9489-4234b905219a.png'
  ];

  return (
    <section id="about" className="py-32 px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            About{' '}
            <span className="text-gradient animate-glow">La Fourmi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Founded by Elie, La Fourmi represents a new era of neighborhood grocery excellence. 
            We're not just another store - we're curators of quality, champions of convenience, 
            and guardians of genuine Lebanese hospitality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:scale-105 transition-all duration-300 glow-effect border-grocery-yellow/20"
            >
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`La Fourmi Gallery ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-black">🏪</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Premium Selection</h3>
            <p className="text-muted-foreground font-light">
              Every product is handpicked for quality, authenticity, and value. 
              From local Lebanese treasures to international favorites.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-black">🚚</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Lightning Delivery</h3>
            <p className="text-muted-foreground font-light">
              24/7 delivery service ensures your essentials reach you exactly when you need them. 
              Fast, reliable, and always fresh.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-black">❤️</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Personal Touch</h3>
            <p className="text-muted-foreground font-light">
              Elie and the team know their customers personally. Every order is prepared with care, 
              every delivery comes with a smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
