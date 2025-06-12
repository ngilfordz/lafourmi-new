
import React, { useState } from 'react';
import { ShoppingCart, User, Home, Package, Info, MapPin, Search, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-in-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`glass-morphism rounded-full px-6 py-4 shadow-2xl border transition-all duration-1000 ease-in-out glow-effect ${
        isExpanded ? 'px-12' : 'px-6'
      }`}>
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png" 
              alt="Lafourmi Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className={`glow-effect rounded-full transition-all duration-700 hover:scale-110 hover:bg-primary/20 transform ${
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
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/30">
            <Button
              variant="ghost"
              size="sm"
              className="glow-effect rounded-full transition-all duration-700 hover:scale-110 hover:bg-primary/20"
            >
              <Search className="h-5 w-5" />
              <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Search
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="glow-effect rounded-full transition-all duration-700 hover:scale-110 hover:bg-primary/20 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-7 w-7 flex items-center justify-center font-bold shadow-lg animate-pulse min-w-[1.75rem]">
                  {cartItems}
                </span>
              )}
              <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Cart
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="glow-effect rounded-full transition-all duration-700 hover:scale-110 hover:bg-primary/20"
            >
              <User className="h-5 w-5" />
              <span className={`ml-2 transition-all duration-700 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-24 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Login
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glow-effect rounded-full transition-all duration-700 hover:scale-110 hover:bg-primary/20"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;
