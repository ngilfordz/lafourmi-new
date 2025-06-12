
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const AboutGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mock gallery images (1.png to 7.png)
  const galleryImages = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1721322800607 + i}?w=800&h=600&fit=crop`,
    alt: `Gallery Image ${i + 1}`,
    title: `Lafourmi Moment ${i + 1}`
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-grocery-warm to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About Elie */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-5xl font-bold">
              Meet{' '}
              <span className="text-gradient animate-glow">Elie</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Welcome to the vision of Elie, a long-haired rasta hipster with an 
                uncompromising passion for premium Lebanese goods. His journey began 
                with a simple belief: every neighborhood deserves access to authentic, 
                high-quality products that tell a story.
              </p>
              
              <p className="text-muted-foreground">
                From the bustling markets of Beirut to the cozy corners of your local 
                neighborhood, Elie curated Lafourmi to bridge cultures and deliver 
                excellence. This isn't just a grocery store - it's a movement toward 
                conscious consumption and community connection.
              </p>
              
              <p className="text-muted-foreground">
                Every product in our collection is handpicked with love, ensuring 
                that when you choose Lafourmi, you're not just shopping - you're 
                supporting a vision of premium, authentic Lebanese heritage.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Our Philosophy</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Authenticity', desc: 'Real Lebanese products, real stories' },
                  { title: 'Quality', desc: 'Premium standards, always' },
                  { title: 'Community', desc: 'Connecting cultures through food' },
                  { title: 'Sustainability', desc: 'Conscious choices for our future' }
                ].map((item, index) => (
                  <Card 
                    key={item.title} 
                    className="glow-effect hover:scale-105 transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Interactive Gallery */}
          <div className="relative animate-fade-in-up group" style={{ animationDelay: '0.3s' }}>
            <Card className="overflow-hidden glow-effect">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={galleryImages[currentImage].src}
                  alt={galleryImages[currentImage].alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm cursor-pointer"
                  onClick={() => setIsZoomed(true)}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ZoomIn className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{galleryImages[currentImage].title}</h3>
                    <p className="text-sm">Click to zoom</p>
                  </div>
                </div>
                
                {/* Navigation arrows */}
                <Button
                  onClick={prevImage}
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  onClick={nextImage}
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? 'bg-primary shadow-lg scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <Button
              onClick={() => setIsZoomed(false)}
              variant="ghost"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutGallery;
