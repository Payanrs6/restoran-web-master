
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Bella Vista",
      cuisine: "Italian",
      rating: 4.8,
      reviews: 324,
      deliveryTime: "25-35 min",
      location: "Downtown",
      image: "🍝",
      featured: true
    },
    {
      id: 2,
      name: "Dragon Palace",
      cuisine: "Chinese",
      rating: 4.7,
      reviews: 198,
      deliveryTime: "30-40 min",
      location: "Chinatown",
      image: "🥟",
      featured: false
    },
    {
      id: 3,
      name: "Sakura Sushi",
      cuisine: "Japanese",
      rating: 4.9,
      reviews: 456,
      deliveryTime: "20-30 min",
      location: "Midtown",
      image: "🍣",
      featured: true
    },
    {
      id: 4,
      name: "Spice Garden",
      cuisine: "Indian",
      rating: 4.6,
      reviews: 287,
      deliveryTime: "35-45 min",
      location: "Little India",
      image: "🍛",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-restaurant-dark mb-4">
            Featured Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked restaurants that deliver exceptional dining experiences right to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-restaurant-accent to-restaurant-warm rounded-t-lg flex items-center justify-center">
                    <span className="text-6xl">{restaurant.image}</span>
                  </div>
                  {restaurant.featured && (
                    <div className="absolute top-4 left-4 bg-restaurant-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-restaurant-dark mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{restaurant.cuisine} Cuisine</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{restaurant.rating}</span>
                      <span className="text-gray-500 text-sm">({restaurant.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.location}</span>
                  </div>
                  
                  <Button className="w-full bg-restaurant-primary hover:bg-restaurant-secondary group-hover:bg-restaurant-secondary transition-colors">
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
