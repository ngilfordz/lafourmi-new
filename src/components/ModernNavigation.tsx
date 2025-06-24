
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
    'Sprite 330ml', 'Coca-Cola 330ml', 'Marlboro Red', 'Lebanese Wine', 'Arak Kefraya'
  ];

  const filteredProducts = mockProducts.filter(product =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="glass-morphism rounded-full px-6 py-3 shadow-2xl border-grocery-yellow/20 backdrop-blur-xl bg-background/80">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fda3ef9c-8f24-4f15-8091-84e6f12d64ce.png" 
              alt="La Fourmi Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={() => smoothScrollTo(item.href)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                <item.icon className="h-4 w-4" />
                {isExpanded && (
                  <span className="ml-2 transition-all duration-300">
                    {item.label}
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-grocery-yellow/30">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
              >
                <Search className="h-4 w-4" />
                {isExpanded && <span className="ml-2">Search</span>}
              </Button>
              
              {showSearch && (
                <div className="absolute top-12 right-0 w-80 bg-background/95 backdrop-blur-xl border border-grocery-yellow/30 rounded-xl p-4 shadow-2xl">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow"
                  />
                  {searchQuery && (
                    <div className="mt-2 space-y-1">
                      {filteredProducts.map((product, index) => (
                        <div key={index} className="p-2 hover:bg-grocery-yellow/20 rounded cursor-pointer text-sm">
                          {product}
                        </div>
                      ))}
                      {filteredProducts.length === 0 && (
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
              {isExpanded && <span className="ml-2">Cart</span>}
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20"
            >
              <User className="h-4 w-4" />
              {isExpanded && <span className="ml-2">Login</span>}
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
