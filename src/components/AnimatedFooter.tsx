
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedFooter = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/lafourmi_market/', 
      label: 'Instagram', 
      color: 'hover:text-pink-500' 
    },
    { 
      icon: Facebook, 
      href: '#', 
      label: 'Facebook', 
      color: 'hover:text-blue-500' 
    },
    { 
      icon: Twitter, 
      href: 'https://www.threads.com/@lafourmi_market', 
      label: 'Threads', 
      color: 'hover:text-sky-500' 
    }
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

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-grocery-dark via-foreground to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-grocery-yellow rounded-full animate-pulse"
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
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png" 
                alt="La Fourmi Logo" 
                className="h-16 w-16 object-contain animate-glow"
              />
              <h3 className="text-4xl font-bold text-gradient font-mono">
                La Fourmi
              </h3>
            </div>
            <p className="text-grocery-yellow italic font-light">
              "From Elie's vision to your table - Experience Lebanese excellence with every purchase"
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6 animate-fade-in-up">
              <h4 className="text-xl font-bold text-gradient">About La Fourmi</h4>
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
                    onClick={() => window.open(social.href, '_blank')}
                    className={`glow-effect rounded-full p-3 hover:bg-white/10 hover:scale-125 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="h-6 w-6 group-hover:animate-bounce" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-xl font-bold text-gradient">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => smoothScrollTo(link.href)}
                      className="text-gray-300 hover:text-grocery-yellow transition-all duration-300 hover:translate-x-2 inline-block hover:underline decoration-grocery-yellow"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-bold text-gradient">Our Products</h4>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category}>
                    <span className="text-gray-300 hover:text-grocery-yellow transition-colors duration-300 cursor-pointer">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-xl font-bold text-gradient">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-grocery-yellow group-hover:animate-pulse" />
                  <span className="text-gray-300">Beirut, Lebanon</span>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-grocery-yellow group-hover:animate-pulse" />
                  <a href="tel:+96181692437" className="text-gray-300 hover:text-grocery-yellow">
                    +961 81 692 437
                  </a>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-grocery-yellow group-hover:animate-pulse" />
                  <a href="mailto:lafourmimarket@gmail.com" className="text-gray-300 hover:text-grocery-yellow">
                    lafourmimarket@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <ExternalLink className="h-5 w-5 text-grocery-yellow group-hover:animate-pulse" />
                  <a 
                    href="https://nextar.shop/Lafourmi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-grocery-yellow"
                  >
                    Product Catalog
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-6 p-4 bg-grocery-yellow/10 rounded-lg border border-grocery-yellow/20">
                <h5 className="font-semibold text-grocery-yellow mb-2">Operating Hours</h5>
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
                  <span className="text-grocery-yellow font-semibold text-sm animate-pulse">
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
                © 2024 La Fourmi Market. Made with 
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
                in Lebanon
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-grocery-yellow text-sm transition-colors duration-300 hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-grocery-yellow text-sm transition-colors duration-300 hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-grocery-yellow text-sm transition-colors duration-300 hover:underline">
                  Delivery Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
