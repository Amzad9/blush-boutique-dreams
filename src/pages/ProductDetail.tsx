
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Share2, Minus, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SectionTitle from "@/components/common/SectionTitle";

// Mock product data - in a real app, you would fetch this
const product = {
  id: "1",
  name: "Floral Maxi Dress",
  price: 2499,
  description: "A beautiful floral maxi dress perfect for summer occasions. Made from breathable cotton fabric with a flowy silhouette.",
  details: "- 100% cotton\n- Button closure\n- Machine wash cold\n- Imported\n- Model is 5'9\" and wearing size S",
  care: "Machine wash cold with like colors. Gentle cycle. Only non-chlorine bleach when needed. Tumble dry low. Cool iron if needed.",
  images: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["#FFDEE2", "#E5DEFF", "#F2FCE2"],
  colorNames: ["Pink", "Lavender", "Mint"]
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Product Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-primary transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-md overflow-hidden border-2 ${
                        selectedImage === index ? "border-primary-foreground" : "border-transparent"
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`} 
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <h1 className="font-serif text-3xl font-medium mb-2">{product.name}</h1>
                <p className="text-2xl font-medium mb-4">₹{product.price}</p>
                <div className="border-t border-b py-6 my-6">
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  {/* Color Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Color: <span className="text-gray-600">{product.colorNames[selectedColor]}</span>
                    </label>
                    <div className="flex space-x-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(index)}
                          className={`w-8 h-8 rounded-full ${
                            selectedColor === index ? "ring-2 ring-primary-foreground ring-offset-2" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select ${product.colorNames[index]}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Size Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Size: <span className="text-gray-600">{selectedSize}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                            selectedSize === size 
                              ? "border-primary-foreground bg-primary text-primary-foreground" 
                              : "border-gray-300 hover:border-primary-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quantity */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center border rounded-md w-32">
                      <button 
                        className="px-3 py-2" 
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="flex-1 text-center">{quantity}</span>
                      <button 
                        className="px-3 py-2" 
                        onClick={() => handleQuantityChange(1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-primary-foreground text-white hover:bg-primary-foreground/90"
                  >
                    <ShoppingBag size={18} className="mr-2" /> Add to Cart
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white"
                  >
                    Buy Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 size={18} />
                  </Button>
                </div>
                
                {/* Product Tabs */}
                <div className="mt-10">
                  <Tabs defaultValue="details">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="care">Care</TabsTrigger>
                      <TabsTrigger value="shipping">Shipping</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="mt-4">
                      <p className="whitespace-pre-line text-gray-700">{product.details}</p>
                    </TabsContent>
                    <TabsContent value="care" className="mt-4">
                      <p className="text-gray-700">{product.care}</p>
                    </TabsContent>
                    <TabsContent value="shipping" className="mt-4">
                      <p className="text-gray-700">Free shipping on all domestic orders over ₹999. International shipping available.</p>
                      <p className="text-gray-700 mt-2">Orders typically ship within 1-2 business days.</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* You May Also Like Section */}
        <section className="py-16 bg-fashion-gray/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="You May Also Like" />
            <FeaturedProducts />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
