
import React, { useState } from 'react';
import { ShoppingCart, User, Home, Package, Info, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Package, label: 'Products', href: '#products' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: MapPin, label: 'Delivery', href: '#delivery' }
  ];

  return (
    <nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`glass-morphism rounded-full px-4 py-3 shadow-lg border transition-all duration-500 ease-in-out ${
        isExpanded ? 'px-8' : 'px-4'
      }`}>
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ad3f62ab-0abf-456d-9489-4234b905219a.png" 
              alt="Lá Fourmi Market" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className={`glow-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 ${
                  isExpanded ? 'px-4' : 'px-2'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className={`ml-2 transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  {item.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-1 ml-2 pl-2 border-l border-white/20">
            <Button
              variant="ghost"
              size="sm"
              className="glow-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10"
            >
              <Search className="h-4 w-4" />
              <span className={`ml-2 transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Search
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="glow-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10 relative"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className={`ml-2 transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Cart
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="glow-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10"
            >
              <User className="h-4 w-4" />
              <span className={`ml-2 transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Login
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
