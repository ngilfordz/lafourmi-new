
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LoadingSpiral from '@/components/LoadingSpiral';
import ModernNavigation from '@/components/ModernNavigation';
import AnimatedHeroSection from '@/components/AnimatedHeroSection';
import FlippingCards from '@/components/FlippingCards';
import PremiumProductGrid from '@/components/PremiumProductGrid';
import AboutGallery from '@/components/AboutGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import DeliveryTracker from '@/components/DeliveryTracker';
import ContactSection from '@/components/ContactSection';
import AnimatedFooter from '@/components/AnimatedFooter';
import BackgroundPaths from '@/components/BackgroundPaths';
import PremiumSpotifyPlayer from '@/components/PremiumSpotifyPlayer';
import CartSidebar from '@/components/CartSidebar';
import LoginModal from '@/components/LoginModal';

interface CartItem {
  id: string;
  name: string;
  price: number;
  priceLBP: number;
  quantity: number;
  image: string;
  description: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product: any, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogin = (username: string, password: string) => {
    if (username === 'Elie' && password === 'lafourmi') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleCheckout = () => {
    if (isLoggedIn) {
      alert('Thank you for your purchase! Your order has been confirmed.');
      setCartItems([]);
      setIsCartOpen(false);
    } else {
      setIsCartOpen(false);
      setIsLoginOpen(true);
    }
  };

  if (isLoading) {
    return <LoadingSpiral isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background animation - always visible */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <BackgroundPaths />
      </div>
      
      {/* Navigation */}
      <ModernNavigation 
        cartItems={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      {/* Floating Spotify Player */}
      <PremiumSpotifyPlayer />
      
      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onCheckout={handleCheckout}
      />
      
      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
      
      {/* Main content */}
      <main className="relative z-10">
        <AnimatedHeroSection />
        <FlippingCards />
        <PremiumProductGrid 
          onAddToCart={addToCart}
          cart={cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})}
        />
        <AboutGallery />
        <TestimonialsSection />
        <DeliveryTracker />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Index;
