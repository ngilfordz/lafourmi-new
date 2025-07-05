import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HyperText } from '@/components/ui/hyper-text';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      location: "Beirut, Lebanon",
      rating: 5,
      text: "Elie has created something truly special with La Fourmi. The quality of products and the authentic Lebanese experience is unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c1?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ahmad Khalil",
      location: "Dubai, UAE",
      rating: 5,
      text: "As someone who moved away from Lebanon, La Fourmi brings the taste of home right to my doorstep. Premium quality every time!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Lara Boutros",
      location: "Montreal, Canada",
      rating: 5,
      text: "The attention to detail is incredible. Every product tells a story, and you can feel the passion Elie puts into curating this collection.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Khalil Nasrallah",
      location: "Paris, France",
      rating: 5,
      text: "Finally, a place that understands what real Lebanese quality means. It's a perfect combination for authentic products.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Nour Sabbagh",
      location: "London, UK",
      rating: 5,
      text: "La Fourmi isn't just a grocery store, it's a cultural bridge. Premium quality in every product they offer.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Michel Hayek",
      location: "Sydney, Australia",
      rating: 5,
      text: "From traditional arak to premium Lebanese olive oil, every product exceeds expectations. My connection to home.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rania Kassem",
      location: "New York, USA",
      rating: 5,
      text: "The quality and care that goes into each product selection is extraordinary. A premium experience that honors Lebanese heritage.",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Omar Tabbara",
      location: "São Paulo, Brazil",
      rating: 5,
      text: "La Fourmi delivers authentic Lebanese products with modern convenience. Exactly what the Lebanese diaspora needed.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 font-mono">
            <HyperText 
              text="What Our" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono mr-2 sm:mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient animate-glow block sm:inline">
              <HyperText 
                text="Community Says" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-gradient animate-glow"
                animateOnLoad={false}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
            Hear from customers around the world who have experienced Elie's vision for premium Lebanese products
          </p>
        </motion.div>

        <div 
          className="relative max-w-6xl mx-auto px-4 sm:px-12 md:px-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="lg"
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-50 rounded-full w-10 h-10 sm:w-14 sm:h-14 hover:scale-110 transition-all duration-300 bg-background border-grocery-yellow/30 hover:border-grocery-yellow glow-border"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="lg"
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-50 rounded-full w-10 h-10 sm:w-14 sm:h-14 hover:scale-110 transition-all duration-300 bg-background border-grocery-yellow/30 hover:border-grocery-yellow glow-border"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>

          {/* Testimonial Cards Container */}
          <div className="relative h-auto sm:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full max-w-3xl"
              >
                <Card className="border-grocery-yellow/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-grocery-yellow/5 via-transparent to-grocery-yellow/5 pointer-events-none" />
                  <CardContent className="p-12 text-center space-y-6 relative">
                    <Quote className="h-16 w-16 text-grocery-yellow/30 mx-auto" />
                    
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-2xl italic text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
                        "{testimonials[activeTestimonial].text}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-grocery-yellow/30 shadow-lg"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-muted-foreground">{testimonials[activeTestimonial].location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Side Cards Preview */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <div className="w-1/3 opacity-30 scale-90 -translate-x-12">
                <Card className="border-grocery-yellow/10">
                  <CardContent className="p-8 blur-[1px]">
                    <Quote className="h-12 w-12 text-grocery-yellow/20 mx-auto mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
                      <div className="h-4 bg-muted rounded w-full mx-auto" />
                      <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-1/3 opacity-30 scale-90 translate-x-12">
                <Card className="border-grocery-yellow/10">
                  <CardContent className="p-8 blur-[1px]">
                    <Quote className="h-12 w-12 text-grocery-yellow/20 mx-auto mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
                      <div className="h-4 bg-muted rounded w-full mx-auto" />
                      <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center items-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'w-12 h-3 bg-grocery-yellow shadow-lg rounded-full' 
                    : 'w-3 h-3 bg-muted hover:bg-muted-foreground/50 rounded-full'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
