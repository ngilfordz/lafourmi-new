
import React, { useState } from 'react';
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
      text: "Elie has created something truly special with Lafourmi. The quality of products and the authentic Lebanese experience is unmatched. Every purchase feels like a journey back home.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4c1?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ahmad Khalil",
      location: "Dubai, UAE",
      rating: 5,
      text: "As someone who moved away from Lebanon, Lafourmi brings the taste of home right to my doorstep. Elie's vision for premium Lebanese products is exactly what we needed.",
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
      text: "Lafourmi isn't just a grocery store, it's a cultural bridge. Elie has managed to capture the essence of Lebanese hospitality and premium quality in every product.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-grocery-warm">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            What Our{' '}
            <span className="text-gradient animate-glow">
              Community Says
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from customers around the world who have experienced Elie's vision for premium Lebanese products
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card stack */}
          <div className="relative h-96 flex items-center justify-center">
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
                      ? 'z-20 scale-95 opacity-70 rotate-1' 
                      : 'z-10 scale-90 opacity-40 rotate-2'
                  }`}
                  style={{
                    transform: `translateX(${offset * 20}px) translateY(${Math.abs(offset) * 10}px) rotate(${offset * 2}deg) scale(${isActive ? 1 : 0.95 - Math.abs(offset) * 0.05})`
                  }}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <Quote className="h-12 w-12 text-primary mx-auto opacity-50" />
                    
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
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
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

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full glow-effect hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-primary shadow-lg scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full glow-effect hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
