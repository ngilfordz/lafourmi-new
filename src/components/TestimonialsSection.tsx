
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      location: "Beirut, Lebanon",
      rating: 5,
      text: "Elie has created something truly special with La Fourmi. The quality of products and the authentic Lebanese experience is unmatched. Every purchase feels like a journey back home.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c1?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ahmad Khalil",
      location: "Dubai, UAE",
      rating: 5,
      text: "As someone who moved away from Lebanon, La Fourmi brings the taste of home right to my doorstep. Elie's vision for premium Lebanese products is exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Lara Boutros",
      location: "Montreal, Canada",
      rating: 5,
      text: "The attention to detail and authenticity is incredible. Every product tells a story, and you can feel the passion Elie puts into curating this collection. Grocery 2.0 indeed!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Khalil Nasrallah",
      location: "Paris, France",
      rating: 5,
      text: "Finally, a place that understands what real Lebanese quality means. Elie's hippie soul meets business excellence - it's a perfect combination for authentic products.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Nour Sabbagh",
      location: "London, UK",
      rating: 5,
      text: "La Fourmi isn't just a grocery store, it's a cultural bridge. Elie has managed to capture the essence of Lebanese hospitality and premium quality in every product.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Michel Hayek",
      location: "Sydney, Australia",
      rating: 5,
      text: "From traditional arak to premium Lebanese olive oil, every product exceeds expectations. La Fourmi has become my connection to Lebanese authenticity.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rania Kassem",
      location: "New York, USA",
      rating: 5,
      text: "The quality and care that goes into each product selection is extraordinary. Elie has created a premium experience that honors Lebanese heritage.",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Omar Tabbara",
      location: "São Paulo, Brazil",
      rating: 5,
      text: "La Fourmi delivers authentic Lebanese products with the convenience of modern e-commerce. It's exactly what the Lebanese diaspora needed.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-8 bg-background relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            What Our{' '}
            <span className="text-gradient animate-glow">Community Says</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Hear from customers around the world who have experienced Elie's vision for premium Lebanese products
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows - Always Visible */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="lg"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-14 h-14 glow-effect hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="lg"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-14 h-14 glow-effect hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Main testimonial card */}
          <div className="relative h-96 flex items-center justify-center px-20">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeTestimonial;
              const offset = index - activeTestimonial;
              
              return (
                <Card
                  key={testimonial.id}
                  className={`absolute w-full max-w-2xl transition-all duration-700 ease-in-out glow-effect ${
                    isActive 
                      ? 'z-30 scale-100 opacity-100 rotate-0' 
                      : Math.abs(offset) === 1 
                      ? 'z-20 scale-95 opacity-40 rotate-1' 
                      : 'z-10 scale-90 opacity-20 rotate-2'
                  }`}
                  style={{
                    transform: `translateX(${offset * 20}px) translateY(${Math.abs(offset) * 10}px) rotate(${offset * 1}deg) scale(${isActive ? 1 : 0.95 - Math.abs(offset) * 0.05})`
                  }}
                >
                  <CardContent className="p-8 text-center space-y-6 bg-gradient-to-br from-background to-grocery-yellow/5">
                    <Quote className="h-12 w-12 text-grocery-yellow mx-auto opacity-70" />
                    
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-grocery-yellow/30"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center items-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-grocery-yellow shadow-lg scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
