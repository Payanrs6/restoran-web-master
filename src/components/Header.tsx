
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-restaurant-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-restaurant-dark">RestOran</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-restaurant-primary transition-colors">
              Home
            </Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-restaurant-primary transition-colors">
              Restaurants
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-restaurant-primary transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-restaurant-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-restaurant-primary hover:bg-restaurant-secondary">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-restaurant-primary transition-colors px-4">
                Home
              </Link>
              <Link to="/restaurants" className="text-gray-700 hover:text-restaurant-primary transition-colors px-4">
                Restaurants
              </Link>
              <Link to="/menu" className="text-gray-700 hover:text-restaurant-primary transition-colors px-4">
                Menu
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-restaurant-primary transition-colors px-4">
                About
              </Link>
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button className="w-full bg-restaurant-primary hover:bg-restaurant-secondary">
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
