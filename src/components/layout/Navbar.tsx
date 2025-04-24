
import React, { useState } from "react";
import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Sale", path: "/sale" },
  { name: "New Arrivals", path: "/new-arrivals" },
  { name: "Best Sellers", path: "/best-sellers" },
  { name: "Travel Sets", path: "/travel-sets" },
  { name: "Dresses", path: "/dresses" },
  { name: "Co-ord Sets", path: "/coord-sets" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold">
            Blush<span className="text-primary-foreground">Boutique</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium hover:text-primary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-primary-foreground transition-colors"
            >
              <Search size={20} />
            </button>
            <Link to="/account" className="hover:text-primary-foreground transition-colors">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="hover:text-primary-foreground transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="hover:text-primary-foreground transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-foreground text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Conditionally rendered */}
        {searchOpen && (
          <div className="pt-4 pb-2 border-t mt-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        )}

        {/* Mobile Navigation - Conditionally rendered */}
        {isMenuOpen && (
          <div className="md:hidden border-t mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium hover:text-primary-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
