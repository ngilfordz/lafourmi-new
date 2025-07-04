import React, { useState, useEffect } from 'react';
import { LimelightNav } from '@/components/ui/limelight-nav';
import { ShoppingCart, User, Home, Search, Package, Info, Phone, Truck, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCart } from '@/App';

interface LimelightNavigationProps {
  onCartClick: () => void;
  onLoginClick: () => void;
}

const LimelightNavigation = ({ onCartClick, onLoginClick }: LimelightNavigationProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const { theme, setTheme } = useTheme();
  const { getTotalItems } = useCart();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { 
      id: 'home', 
      icon: <Home className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Home',
      onClick: () => {
        const element = document.getElementById('home');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'products', 
      icon: <Package className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Products',
      onClick: () => {
        const element = document.getElementById('products');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'search', 
      icon: <Search className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Search',
      onClick: () => {
        const searchSection = document.querySelector('.search-section');
        searchSection?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'about', 
      icon: <Info className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'About',
      onClick: () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'delivery', 
      icon: <Truck className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Delivery',
      onClick: () => {
        const element = document.getElementById('delivery');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'contact', 
      icon: <Phone className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Contact',
      onClick: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      id: 'theme', 
      icon: theme === 'dark' ? 
        <Moon className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" /> : 
        <Sun className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: theme === 'dark' ? 'Dark' : 'Light',
      onClick: toggleTheme
    },
    { 
      id: 'cart', 
      icon: (
        <div className="relative transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1">
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-grocery-yellow text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </div>
      ), 
      label: 'Cart',
      onClick: onCartClick
    },
    { 
      id: 'login', 
      icon: <User className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:translate-y-1" />, 
      label: 'Login',
      onClick: onLoginClick
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <LimelightNav 
        items={navItems}
        defaultActiveIndex={0}
        onTabChange={setActiveSection}
        className="bg-black/90 backdrop-blur-md border-grocery-yellow/20"
        limelightClassName="bg-grocery-yellow shadow-[0_50px_25px_#F3E4A1] blur-sm opacity-30"
        iconClassName="hover:text-grocery-yellow transition-colors group"
      />
    </nav>
  );
};

export default LimelightNavigation; 