import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Share2, Download, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HyperText } from '@/components/ui/hyper-text';

const AboutGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    { src: '/lovable-uploads/LF1.png', caption: 'La Fourmi Storefront' },
    { src: '/lovable-uploads/LF2.png', caption: 'Premium Products Display' },
    { src: '/lovable-uploads/LF3.png', caption: 'Lebanese Specialties' },
    { src: '/lovable-uploads/LF4.png', caption: 'Fresh Daily Arrivals' },
    { src: '/lovable-uploads/LF5.png', caption: 'Customer Service Excellence' },
    { src: '/lovable-uploads/LF6.png', caption: 'Local Community Hub' },
    { src: '/lovable-uploads/LF7.png', caption: 'Quality Guaranteed' },
    { src: '/lovable-uploads/LF8.png', caption: '24/7 Delivery Service' },
    // Additional images from existing uploads
    { src: '/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png', caption: 'Store Interior' },
    { src: '/lovable-uploads/fda3ef9c-8f24-4f15-8091-84e6f12d64ce.png', caption: 'Product Selection' },
  ];

  const handleShare = async (image: typeof images[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'La Fourmi - ' + image.caption,
          text: 'Check out this photo from La Fourmi Market!',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing');
      }
    }
  };

  const handleDownload = (image: typeof images[0]) => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `lafourmi-${image.caption.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.click();
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="about" className="py-32 px-8 bg-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold mb-8 font-mono">
            <HyperText 
              text="About" 
              className="text-6xl font-bold font-mono mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient animate-glow">
              <HyperText 
                text="La Fourmi" 
                className="text-6xl font-bold font-mono text-gradient animate-glow"
                animateOnLoad={false}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Founded by Elie, La Fourmi represents a new era of neighborhood grocery excellence. 
            We're not just another store - we're curators of quality, champions of convenience, 
            and guardians of genuine Lebanese hospitality.
          </p>
        </motion.div>

        {/* Interactive Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = '/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png';
                      }}
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-white hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(image);
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-white hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(index);
                        }}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute -top-12 right-0 text-white hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].caption}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png';
                  }}
                />

                {/* Caption and actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white text-lg font-medium mb-3">{images[selectedImage].caption}</p>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleShare(images[selectedImage])}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDownload(images[selectedImage])}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-12 text-center mt-20">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-black">🏪</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Premium Selection</h3>
            <p className="text-muted-foreground font-light">
              Every product is handpicked for quality, authenticity, and value. 
              From local Lebanese treasures to international favorites.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-black">🚚</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Lightning Delivery</h3>
            <p className="text-muted-foreground font-light">
              24/7 delivery service ensures your essentials reach you exactly when you need them. 
              Fast, reliable, and always fresh.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-grocery-yellow to-grocery-yellow-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-black">❤️</span>
            </div>
            <h3 className="text-2xl font-bold font-mono">Personal Touch</h3>
            <p className="text-muted-foreground font-light">
              Elie and the team know their customers personally. Every order is prepared with care, 
              every delivery comes with a smile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
