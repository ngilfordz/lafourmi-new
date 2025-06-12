
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EnhancedProductCategories from '@/components/EnhancedProductCategories';
import AboutSection from '@/components/AboutSection';
import DeliveryTracker from '@/components/DeliveryTracker';
import Footer from '@/components/Footer';
import BackgroundPaths from '@/components/BackgroundPaths';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background animation */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Floating Spotify Player */}
      <SpotifyPlayer />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <EnhancedProductCategories />
        <AboutSection />
        <DeliveryTracker />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
