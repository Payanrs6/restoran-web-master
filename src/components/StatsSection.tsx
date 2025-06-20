
import React from 'react';
import { Users, Utensils, Star, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Happy Customers",
      description: "Satisfied diners"
    },
    {
      icon: Utensils,
      number: "200+",
      label: "Restaurant Partners",
      description: "Quality establishments"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Customer satisfaction"
    },
    {
      icon: Clock,
      number: "30 min",
      label: "Avg Delivery Time",
      description: "Quick service"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-restaurant-primary to-restaurant-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-orange-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
