
import React, { useState } from 'react';
import { ShoppingCart, User, Home, Package, Info, MapPin, Search, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarBorder } from '@/components/ui/star-border';
import { useTheme } from 'next-themes';

interface ModernNavigationProps {
  cartItems: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}

const ModernNavigation = ({ cartItems, onCartClick, onLoginClick }: ModernNavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Package, label: 'Products', href: '#products' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: MapPin, label: 'Delivery', href: '#delivery' }
  ];

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-in-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`glass-morphism rounded-full px-8 py-5 shadow-2xl border-grocery-yellow/20 transition-all duration-1000 ease-in-out glow-effect ${
        isExpanded ? 'px-16' : 'px-8'
      }`}>
        <div className="flex items-center space-x-4">
          {/* Logo - using new La Fourmi logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fda3ef9c-8f24-4f15-8091-84e6f12d64ce.png" 
              alt="La Fourmi Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <StarBorder key={item.label}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-full transition-all duration-700 hover:scale-110 hover:bg-grocery-yellow/20 transform ${
                    isExpanded ? 'px-4' : 'px-3'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                    isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
                  }`}>
                    {item.label}
                  </span>
                </Button>
              </StarBorder>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-grocery-yellow/30">
            <StarBorder>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full transition-all duration-700 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                <Search className="h-5 w-5" />
                <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                  isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  Search
                </span>
              </Button>
            </StarBorder>
            
            <StarBorder>
              <Button
                variant="ghost"
                size="sm"
                onClick={onCartClick}
                className="rounded-full transition-all duration-700 hover:scale-110 hover:bg-grocery-yellow/20 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-grocery-yellow text-black text-xs rounded-full h-7 w-7 flex items-center justify-center font-bold shadow-lg animate-pulse min-w-[1.75rem]">
                    {cartItems}
                  </span>
                )}
                <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                  isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  Cart
                </span>
              </Button>
            </StarBorder>

            <StarBorder>
              <Button
                variant="ghost"
                size="sm"
                onClick={onLoginClick}
                className="rounded-full transition-all duration-700 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                <User className="h-5 w-5" />
                <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                  isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  Login
                </span>
              </Button>
            </StarBorder>

            <StarBorder>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full transition-all duration-700 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </StarBorder>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;
