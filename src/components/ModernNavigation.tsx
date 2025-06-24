
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
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme();

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Package, label: 'Products', href: '#products' },
    { icon: Info, label: 'About', href: '#about' },
    { icon: MapPin, label: 'Delivery', href: '#delivery' }
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

  const mockProducts = [
    'Coca-Cola 330ml', 'Sprite 330ml', 'Marlboro Red', 'Lebanese Wine', 'Arak Kefraya',
    'Almaza Beer', 'Za\'atar Mix', 'Lebanese Olive Oil', 'Tide Detergent', 'Head & Shoulders'
  ];

  const filteredProducts = mockProducts.filter(product =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setShowSearch(false);
      }}
    >
      <div className={`glass-morphism rounded-full shadow-2xl border-grocery-yellow/20 backdrop-blur-xl bg-background/90 transition-all duration-500 ease-out ${
        isExpanded ? 'px-8 py-4' : 'px-4 py-3'
      }`}>
        <div className="flex items-center space-x-3">
          {/* Logo - Always visible */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/eb0a41e8-ad30-4380-86a3-6f415394328a.png" 
              alt="La Fourmi Logo" 
              className="h-6 w-6 object-contain"
            />
          </div>

          {/* Navigation Items - Smooth expand/collapse */}
          <div className={`flex items-center space-x-2 transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-100 max-w-none' : 'opacity-0 max-w-0 overflow-hidden'
          }`}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={() => smoothScrollTo(item.href)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 text-sm"
              >
                <item.icon className="h-4 w-4" />
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Right side actions - Smooth expand/collapse */}
          <div className={`flex items-center space-x-2 ml-4 pl-4 border-l border-grocery-yellow/30 transition-all duration-500 ease-out ${
            isExpanded ? 'opacity-100 max-w-none' : 'opacity-0 max-w-0 overflow-hidden'
          }`}>
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                <Search className="h-4 w-4" />
              </Button>
              
              {showSearch && (
                <div className="absolute top-12 right-0 w-80 bg-background/95 backdrop-blur-xl border border-grocery-yellow/30 rounded-xl p-4 shadow-2xl animate-fade-in-up">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow"
                    autoFocus
                  />
                  {searchQuery && (
                    <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                          <div 
                            key={index} 
                            className="p-2 hover:bg-grocery-yellow/20 rounded cursor-pointer text-sm transition-colors duration-200"
                          >
                            {product}
                          </div>
                        ))
                      ) : (
                        <div className="p-2 text-sm text-muted-foreground">No products found</div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-grocery-yellow text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;
