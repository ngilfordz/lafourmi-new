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
          {/* Logo - Always visible with correct La Fourmi logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lafourmi-logo.png" 
              alt="La Fourmi Logo" 
              className={`object-contain transition-all duration-500 ${
                isExpanded ? 'h-8 w-8' : 'h-6 w-6'
              }`}
            />
            {/* Logo text that appears on expansion */}
            <span className={`ml-2 font-bold text-grocery-yellow transition-all duration-500 overflow-hidden whitespace-nowrap ${
              isExpanded ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'
            }`}>
              La Fourmi
            </span>
          </div>

          {/* Navigation Items - Icons always visible, labels on hover */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={() => smoothScrollTo(item.href)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative group"
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className={`ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${
                  isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  {item.label}
                </span>
                
                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </Button>
            ))}
          </div>

          {/* Right side actions - Icons always visible, labels on hover */}
          <div className="flex items-center space-x-1 ml-4 pl-4 border-l border-grocery-yellow/30">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative group"
              >
                <Search className="h-4 w-4 flex-shrink-0" />
                <span className={`ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${
                  isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
                }`}>
                  Search
                </span>
                
                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    Search
                  </div>
                )}
              </Button>
              
              {showSearch && isExpanded && (
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
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative group"
            >
              <ShoppingCart className="h-4 w-4 flex-shrink-0" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-grocery-yellow text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
              <span className={`ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Cart
              </span>
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Cart
                </div>
              )}
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLoginClick}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative group"
            >
              <User className="h-4 w-4 flex-shrink-0" />
              <span className={`ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Login
              </span>
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Login
                </div>
              )}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-grocery-yellow/20 relative group"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 flex-shrink-0" /> : <Moon className="h-4 w-4 flex-shrink-0" />}
              <span className={`ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
              }`}>
                Theme
              </span>
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;