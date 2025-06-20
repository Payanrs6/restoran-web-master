
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-restaurant-accent via-orange-50 to-restaurant-accent min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-restaurant-primary/10 to-restaurant-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9 (2,500+ reviews)</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-restaurant-dark leading-tight">
              Exceptional
              <span className="block text-restaurant-primary">Dining</span>
              Experience
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the finest restaurants and culinary experiences in your city. From local favorites to international cuisine, RestOran brings you the best dining options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-restaurant-primary hover:bg-restaurant-secondary text-white px-8 py-6 text-lg">
                Explore Restaurants
              </Button>
              <Button size="lg" variant="outline" className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white px-8 py-6 text-lg">
                View Menu
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-restaurant-primary" />
                <span>30 min delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5 text-restaurant-primary" />
                <span>500+ locations</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-restaurant-warm to-restaurant-primary rounded-3xl h-96 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🍽️</span>
                </div>
                <h3 className="text-2xl font-bold">Premium Dining</h3>
                <p className="text-orange-100 mt-2">Experience awaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
