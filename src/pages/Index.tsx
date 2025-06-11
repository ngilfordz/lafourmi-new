
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import AboutSection from '@/components/AboutSection';
import DeliveryTracker from '@/components/DeliveryTracker';
import Footer from '@/components/Footer';
import BackgroundPaths from '@/components/BackgroundPaths';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background animation */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <DeliveryTracker />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
