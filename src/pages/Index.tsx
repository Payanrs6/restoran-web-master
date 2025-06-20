
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedRestaurants from '@/components/FeaturedRestaurants';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRestaurants />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
