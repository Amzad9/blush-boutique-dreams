
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

// Mock wishlist data
const wishlistItems = [
  {
    id: "1",
    name: "Floral Maxi Dress",
    price: 2499,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "2",
    name: "Linen Blend Shirt",
    price: 1499,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "4",
    name: "Embroidered Kurta",
    price: 2899,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const Wishlist = () => {
  const removeFromWishlist = (id: string) => {
    // In a real app, this would remove the item from the wishlist
    console.log(`Remove item ${id} from wishlist`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-medium mb-8 text-center">Your Wishlist</h1>
          
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="product-card">
                  {/* Remove Button */}
                  <button 
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-sm hover:bg-primary transition-colors"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>
                  
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="block relative overflow-hidden pt-[125%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <Link to={`/product/${item.id}`} className="block">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <div className="mt-1">
                        <span className="font-medium">₹{item.price}</span>
                      </div>
                    </Link>
                    
                    {/* Action Button */}
                    <div className="mt-4">
                      <Button className="w-full bg-fashion-pink hover:bg-primary-foreground text-primary-foreground hover:text-white">
                        <ShoppingBag size={16} className="mr-2" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">Save your favorite items to your wishlist.</p>
              <Link to="/">
                <Button>
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
