
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock cart data
const cartItems = [
  {
    id: "1",
    name: "Floral Maxi Dress",
    price: 2499,
    quantity: 1,
    size: "M",
    color: "Pink",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "2",
    name: "Linen Blend Shirt",
    price: 1499,
    quantity: 2,
    size: "S",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
];

const Cart = () => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleQuantityChange = (id: string, change: number) => {
    // In a real app, this would update the cart state
    console.log(`Change quantity of item ${id} by ${change}`);
  };

  const handleRemoveItem = (id: string) => {
    // In a real app, this would remove the item from the cart
    console.log(`Remove item ${id} from cart`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-medium mb-8 text-center">Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden sm:grid sm:grid-cols-12 p-4 bg-fashion-gray/30 text-sm font-medium">
                    <div className="sm:col-span-6">Product</div>
                    <div className="sm:col-span-2 text-center">Price</div>
                    <div className="sm:col-span-2 text-center">Quantity</div>
                    <div className="sm:col-span-2 text-right">Total</div>
                  </div>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid sm:grid-cols-12 gap-4 p-4 border-b items-center">
                      {/* Product */}
                      <div className="sm:col-span-6 flex items-center">
                        <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                          <p className="text-sm text-gray-500">Color: {item.color}</p>
                          <button 
                            className="text-sm text-red-500 flex items-center mt-2 sm:hidden"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 size={14} className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="sm:col-span-2 text-center">
                        <span className="sm:hidden font-medium">Price: </span>
                        ₹{item.price}
                      </div>
                      
                      {/* Quantity */}
                      <div className="sm:col-span-2 flex justify-center">
                        <div className="flex items-center border rounded-md">
                          <button 
                            className="px-2 py-1" 
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button 
                            className="px-2 py-1" 
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="sm:col-span-2 text-right">
                        <span className="sm:hidden font-medium">Total: </span>
                        ₹{item.price * item.quantity}
                        <button 
                          className="hidden sm:inline-flex items-center ml-4 text-gray-400 hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="font-serif text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>
                    <div className="border-t pt-3 font-medium flex justify-between">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <input 
                        type="text" 
                        className="flex-1 rounded-l-md border border-r-0 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                        placeholder="Enter code"
                      />
                      <Button className="rounded-l-none">
                        Apply
                      </Button>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Link to="/checkout">
                    <Button className="w-full bg-primary-foreground text-white hover:bg-primary-foreground/90">
                      Checkout <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  
                  {/* Continue Shopping */}
                  <div className="mt-4 text-center">
                    <Link to="/" className="text-sm text-primary-foreground hover:underline">
                      Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Browse our collections and discover our best deals!</p>
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

export default Cart;
