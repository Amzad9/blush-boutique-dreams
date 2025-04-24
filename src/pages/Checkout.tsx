
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Mock cart data
const cartItems = [
  {
    id: "1",
    name: "Floral Maxi Dress",
    price: 2499,
    quantity: 1,
  },
  {
    id: "2",
    name: "Linen Blend Shirt",
    price: 1499,
    quantity: 2,
  },
];

const Checkout = () => {
  const [step, setStep] = useState<"information" | "shipping" | "payment">("information");
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "information") {
      setStep("shipping");
    } else if (step === "shipping") {
      setStep("payment");
    } else {
      // Complete order
      setOrderNumber(`BL${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderComplete(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="font-serif text-3xl font-medium mb-8 text-center">Checkout</h1>
          
          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step === "information" || step === "shipping" || step === "payment" 
                    ? "bg-primary-foreground text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {step === "information" ? 1 : <Check size={16} />}
                </div>
                <div className="mx-2 w-16 h-1 bg-gray-200">
                  <div className={`h-full ${
                    step === "shipping" || step === "payment" ? "bg-primary-foreground" : "bg-gray-200"
                  }`}></div>
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step === "shipping" || step === "payment" 
                    ? "bg-primary-foreground text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {step === "shipping" ? 2 : step === "payment" ? <Check size={16} /> : 2}
                </div>
                <div className="mx-2 w-16 h-1 bg-gray-200">
                  <div className={`h-full ${
                    step === "payment" ? "bg-primary-foreground" : "bg-gray-200"
                  }`}></div>
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step === "payment" 
                    ? "bg-primary-foreground text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  3
                </div>
              </div>
            </div>
            <div className="flex justify-center text-sm">
              <span className={`px-4 ${step === "information" ? "text-primary-foreground font-medium" : ""}`}>Information</span>
              <span className={`px-4 ${step === "shipping" ? "text-primary-foreground font-medium" : ""}`}>Shipping</span>
              <span className={`px-4 ${step === "payment" ? "text-primary-foreground font-medium" : ""}`}>Payment</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <form onSubmit={handleSubmit}>
                  {step === "information" && (
                    <div className="space-y-6">
                      <h2 className="font-serif text-xl font-medium">Contact Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <input 
                            type="email" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Phone
                          </label>
                          <input 
                            type="tel" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                            placeholder="10-digit phone number"
                          />
                        </div>
                      </div>
                      
                      <h2 className="font-serif text-xl font-medium pt-4">Shipping Address</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Address
                        </label>
                        <input 
                          type="text" 
                          required 
                          className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary mb-2" 
                          placeholder="Street address"
                        />
                        <input 
                          type="text" 
                          className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                          placeholder="Apartment, suite, etc. (optional)"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            City
                          </label>
                          <input 
                            type="text" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            State
                          </label>
                          <select 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select a state</option>
                            <option value="AN">Andaman and Nicobar Islands</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="AR">Arunachal Pradesh</option>
                            <option value="AS">Assam</option>
                            <option value="BR">Bihar</option>
                            <option value="CH">Chandigarh</option>
                            <option value="CT">Chhattisgarh</option>
                            <option value="DN">Dadra and Nagar Haveli</option>
                            <option value="DD">Daman and Diu</option>
                            <option value="DL">Delhi</option>
                            <option value="GA">Goa</option>
                            <option value="GJ">Gujarat</option>
                            <option value="HR">Haryana</option>
                            <option value="HP">Himachal Pradesh</option>
                            <option value="JK">Jammu and Kashmir</option>
                            <option value="JH">Jharkhand</option>
                            <option value="KA">Karnataka</option>
                            <option value="KL">Kerala</option>
                            <option value="LD">Lakshadweep</option>
                            <option value="MP">Madhya Pradesh</option>
                            <option value="MH">Maharashtra</option>
                            <option value="MN">Manipur</option>
                            <option value="ML">Meghalaya</option>
                            <option value="MZ">Mizoram</option>
                            <option value="NL">Nagaland</option>
                            <option value="OR">Odisha</option>
                            <option value="PY">Puducherry</option>
                            <option value="PB">Punjab</option>
                            <option value="RJ">Rajasthan</option>
                            <option value="SK">Sikkim</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TG">Telangana</option>
                            <option value="TR">Tripura</option>
                            <option value="UP">Uttar Pradesh</option>
                            <option value="UT">Uttarakhand</option>
                            <option value="WB">West Bengal</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            PIN Code
                          </label>
                          <input 
                            type="text" 
                            required 
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                            placeholder="6-digit PIN code"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step === "shipping" && (
                    <div className="space-y-6">
                      <h2 className="font-serif text-xl font-medium">Shipping Method</h2>
                      
                      <div className="space-y-3">
                        <label className="flex p-4 border rounded-md cursor-pointer">
                          <input type="radio" name="shipping" value="standard" className="mr-3" defaultChecked />
                          <div>
                            <div className="font-medium">Standard Shipping</div>
                            <div className="text-sm text-gray-500">3-5 business days</div>
                          </div>
                          <div className="ml-auto font-medium">
                            {shipping === 0 ? "Free" : `₹${shipping}`}
                          </div>
                        </label>
                        
                        <label className="flex p-4 border rounded-md cursor-pointer">
                          <input type="radio" name="shipping" value="express" className="mr-3" />
                          <div>
                            <div className="font-medium">Express Shipping</div>
                            <div className="text-sm text-gray-500">1-2 business days</div>
                          </div>
                          <div className="ml-auto font-medium">
                            ₹199
                          </div>
                        </label>
                      </div>
                      
                      <div className="border-t pt-6 mt-6">
                        <h3 className="font-medium mb-2">Shipping Address</h3>
                        <div className="text-sm">
                          <p>John Doe</p>
                          <p>123 Main Street, Apartment 4B</p>
                          <p>Mumbai, Maharashtra 400001</p>
                          <p>India</p>
                        </div>
                        <button type="button" className="text-sm text-primary-foreground hover:underline mt-2">
                          Change
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {step === "payment" && (
                    <div className="space-y-6">
                      <h2 className="font-serif text-xl font-medium">Payment Method</h2>
                      
                      <div className="space-y-3">
                        <label className="flex p-4 border rounded-md cursor-pointer">
                          <input type="radio" name="payment" value="card" className="mr-3" defaultChecked />
                          <div className="flex items-center">
                            <CreditCard size={20} className="mr-2" />
                            <span>Credit / Debit Card</span>
                          </div>
                        </label>
                        
                        <label className="flex p-4 border rounded-md cursor-pointer">
                          <input type="radio" name="payment" value="upi" className="mr-3" />
                          <div>UPI Payment</div>
                        </label>
                        
                        <label className="flex p-4 border rounded-md cursor-pointer">
                          <input type="radio" name="payment" value="cod" className="mr-3" />
                          <div>Cash on Delivery</div>
                        </label>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="font-medium mb-4">Card Details</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Card Number
                            </label>
                            <input 
                              type="text" 
                              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Expiry Date
                              </label>
                              <input 
                                type="text" 
                                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                CVV
                              </label>
                              <input 
                                type="text" 
                                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                                placeholder="123"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Name on Card
                            </label>
                            <input 
                              type="text" 
                              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        if (step === "shipping") setStep("information");
                        if (step === "payment") setStep("shipping");
                      }}
                      disabled={step === "information"}
                    >
                      <ArrowLeft size={16} className="mr-2" /> Back
                    </Button>
                    
                    <Button type="submit">
                      {step === "payment" ? (
                        <>Place Order</>
                      ) : (
                        <>Continue <ArrowRight size={16} className="ml-2" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="font-serif text-xl font-medium mb-4">Order Summary</h2>
                
                {/* Item List */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-center">
                        <span className="bg-fashion-gray w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                          {item.quantity}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                {/* Totals */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Order Confirmation Dialog */}
      <Dialog open={orderComplete} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Order Confirmed!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Thank you for your order!</h3>
            <p className="text-gray-600 mb-4">Your order #{orderNumber} has been confirmed.</p>
            <p className="text-sm text-gray-500 mb-6">
              We've sent a confirmation email to your inbox with all the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/orders">
                  View Order
                </Link>
              </Button>
              <Button asChild>
                <Link to="/">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Checkout;
