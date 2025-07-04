import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LoadingSpiral from '@/components/LoadingSpiral';
import LimelightNavigation from '@/components/LimelightNavigation';
import AnimatedHeroSection from '@/components/AnimatedHeroSection';
import EnhancedProductCategories from '@/components/EnhancedProductCategories';
import AboutGallery from '@/components/AboutGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import DeliveryTracker from '@/components/DeliveryTracker';
import ContactSection from '@/components/ContactSection';
import AnimatedFooter from '@/components/AnimatedFooter';
import { BackgroundPaths } from '@/components/ui/background-paths';
import PremiumSpotifyPlayer from '@/components/PremiumSpotifyPlayer';
import CartSidebar from '@/components/CartSidebar';
import LoginModal from '@/components/LoginModal';
import ScrollingProductCards from '@/components/ScrollingProductCards';
import { useCart } from '@/App';

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
  const [loading, setLoading] = useState(true);
  const { setTheme } = useTheme();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const { cartItems, updateCartQuantity, getTotalItems } = useCart();

  useEffect(() => {
    setTheme('dark');
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setTheme]);

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
      // Clear cart by setting all items to 0 quantity
      cartItems.forEach(item => updateCartQuantity(item.id, 0));
      setIsCartOpen(false);
    } else {
      setIsCartOpen(false);
      setIsLoginOpen(true);
    }
  };

  if (loading) {
    return <LoadingSpiral isLoading={loading} />;
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Paths - Always visible across entire site */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <LimelightNavigation 
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
      
      {/* Hero Section with Lamp Background */}
      <AnimatedHeroSection />
      
      {/* Scrolling Cards Section - About La Fourmi */}
      <ScrollingProductCards />
      
      {/* Main Content - transparent sections to allow background paths visibility */}
      <EnhancedProductCategories />
      <AboutGallery />
      <TestimonialsSection />
      <DeliveryTracker />
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
};

export default Index;
