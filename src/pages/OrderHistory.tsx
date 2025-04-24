
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Package } from "lucide-react";

// Mock orders data
const orders = [
  {
    id: "BL123456",
    date: "April 18, 2025",
    status: "Delivered",
    total: 3998,
    items: [
      { name: "Floral Maxi Dress", quantity: 1 },
      { name: "Linen Blend Shirt", quantity: 1 },
    ],
  },
  {
    id: "BL123455",
    date: "March 24, 2025",
    status: "Processing",
    total: 2499,
    items: [
      { name: "Cotton Palazzo Set", quantity: 1 },
    ],
  },
  {
    id: "BL123454",
    date: "February 10, 2025",
    status: "Delivered",
    total: 4298,
    items: [
      { name: "Embroidered Kurta", quantity: 1 },
      { name: "Pleated Skirt", quantity: 1 },
    ],
  },
];

const OrderHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl font-medium mb-8 text-center">Order History</h1>
          
          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="bg-fashion-gray/30 p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Order placed</p>
                      <p>{order.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Order number</p>
                      <p>{order.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total</p>
                      <p>₹{order.total}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Status</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Order Content */}
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <Package size={20} className="text-primary-foreground mr-2" />
                      <span className="font-medium">Package {order.status === "Delivered" ? "delivered" : "on its way"}</span>
                    </div>
                    
                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-fashion-gray/30 rounded-md mr-3 flex items-center justify-center text-sm">
                              {item.quantity}
                            </div>
                            <span>{item.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Order Actions */}
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        <Eye size={16} className="mr-2" /> View Details
                      </Button>
                      <Button size="sm">Buy Again</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">No orders yet</h2>
              <p className="text-gray-600 mb-8">Once you place an order, it will appear here</p>
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

export default OrderHistory;
