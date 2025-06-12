
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    'Soft Drinks',
    'Premium Tobacco',
    'Lebanese Alcohol',
    'Authentic Snacks',
    'Cleaning Supplies',
    'Premium Toiletries'
  ];

  return (
    <footer className="bg-gradient-to-br from-grocery-dark via-foreground to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo and description */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png" 
                  alt="Lafourmi Logo" 
                  className="h-12 w-12 object-contain filter brightness-0 invert"
                />
                <h3 className="text-2xl font-bold text-gradient">
                  Lafourmi
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your neighborhood's premium Lebanese grocery destination. 
                Quality products, exceptional service, modern convenience - 
                all curated by Elie's vision for Grocery 2.0.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className={`glow-effect rounded-full p-3 hover:bg-white/10 hover:scale-125 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="h-6 w-6 group-hover:animate-bounce" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4 text-gradient">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block hover:underline decoration-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-gradient">Our Products</h3>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category}>
                    <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4 text-gradient">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-primary group-hover:animate-pulse" />
                  <span className="text-gray-300">
                    Beirut, Lebanon
                  </span>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-primary group-hover:animate-pulse" />
                  <span className="text-gray-300">+961 81 692 437</span>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-primary group-hover:animate-pulse" />
                  <span className="text-gray-300">hello@lafourmi.market</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Operating Hours</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-primary font-semibold text-sm animate-pulse">
                    🚚 24/7 Delivery Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                © 2024 Lafourmi Market. Made with 
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
                in Lebanon
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 hover:underline">
                  Delivery Policy
                </a>
              </div>
            </div>
            
            {/* Special message */}
            <div className="text-center mt-8 p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg">
              <p className="text-primary font-medium italic">
                "From Elie's vision to your table - Experience Lebanese excellence with every purchase"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
