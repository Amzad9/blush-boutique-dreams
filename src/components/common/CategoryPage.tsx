
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ArrowDownUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

// Mock products data
const allProducts = [
  {
    id: "1",
    name: "Floral Maxi Dress",
    price: 2499,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isNew: true,
  },
  {
    id: "2",
    name: "Linen Blend Shirt",
    price: 1899,
    salePrice: 1499,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Cotton Palazzo Pants",
    price: 1699,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "4",
    name: "Embroidered Kurta",
    price: 2899,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true,
  },
  {
    id: "5",
    name: "Wrap Style Top",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isNew: true,
  },
  {
    id: "6",
    name: "Summer Midi Dress",
    price: 2199,
    salePrice: 1899,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "7",
    name: "Pleated Skirt",
    price: 1799,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "8",
    name: "Tie-Dye Co-ord Set",
    price: 2999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isNew: true,
  },
  {
    id: "9",
    name: "Classic White Shirt",
    price: 1799,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "10",
    name: "Flowy Summer Dress",
    price: 2599,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true,
  },
  {
    id: "11",
    name: "Printed Palazzo Set",
    price: 3299,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "12",
    name: "Cotton Kurta",
    price: 1999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

interface CategoryPageProps {
  title: string;
  description?: string;
  products?: Array<any>; // Use actual product type in a real app
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  title,
  description,
  products = allProducts, // Default to all products if none provided
}) => {
  const [sortOrder, setSortOrder] = React.useState("featured");
  const [priceRange, setPriceRange] = React.useState("all");

  // Filter function
  const filterProducts = () => {
    let filtered = [...products];

    // Sort products
    if (sortOrder === "price-low-high") {
      filtered.sort((a, b) => {
        const priceA = a.salePrice || a.price;
        const priceB = b.salePrice || b.price;
        return priceA - priceB;
      });
    } else if (sortOrder === "price-high-low") {
      filtered.sort((a, b) => {
        const priceA = a.salePrice || a.price;
        const priceB = b.salePrice || b.price;
        return priceB - priceA;
      });
    }

    // Filter by price range
    if (priceRange === "under-1000") {
      filtered = filtered.filter((product) => {
        const price = product.salePrice || product.price;
        return price < 1000;
      });
    } else if (priceRange === "1000-2000") {
      filtered = filtered.filter((product) => {
        const price = product.salePrice || product.price;
        return price >= 1000 && price <= 2000;
      });
    } else if (priceRange === "2000-3000") {
      filtered = filtered.filter((product) => {
        const price = product.salePrice || product.price;
        return price >= 2000 && price <= 3000;
      });
    } else if (priceRange === "over-3000") {
      filtered = filtered.filter((product) => {
        const price = product.salePrice || product.price;
        return price > 3000;
      });
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Category Header */}
        <div className="bg-fashion-gray/30 py-12">
          <div className="container mx-auto px-4">
            <SectionTitle title={title} centered={false}>
              {description && <p className="text-gray-600 mt-2">{description}</p>}
            </SectionTitle>
          </div>
        </div>

        {/* Filters and Products */}
        <div className="container mx-auto px-4 py-12">
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              Showing {filteredProducts.length} products
            </p>
            
            <div className="flex flex-wrap gap-2">
              {/* Mobile Filter Drawer */}
              <div className="md:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="mr-2">
                      <Filter size={16} className="mr-2" /> Filters
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-4">Filter Products</h3>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Price Range</h4>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="mobile-price" 
                              value="all" 
                              checked={priceRange === "all"} 
                              onChange={() => setPriceRange("all")}
                              className="mr-2" 
                            />
                            All Prices
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="mobile-price" 
                              value="under-1000" 
                              checked={priceRange === "under-1000"} 
                              onChange={() => setPriceRange("under-1000")}
                              className="mr-2" 
                            />
                            Under ₹1,000
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="mobile-price" 
                              value="1000-2000" 
                              checked={priceRange === "1000-2000"} 
                              onChange={() => setPriceRange("1000-2000")}
                              className="mr-2" 
                            />
                            ₹1,000 - ₹2,000
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="mobile-price" 
                              value="2000-3000" 
                              checked={priceRange === "2000-3000"} 
                              onChange={() => setPriceRange("2000-3000")}
                              className="mr-2" 
                            />
                            ₹2,000 - ₹3,000
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="mobile-price" 
                              value="over-3000" 
                              checked={priceRange === "over-3000"} 
                              onChange={() => setPriceRange("over-3000")}
                              className="mr-2" 
                            />
                            Over ₹3,000
                          </label>
                        </div>
                      </div>
                      
                      <DrawerClose asChild>
                        <Button className="w-full">Apply Filters</Button>
                      </DrawerClose>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
              
              {/* Sort Dropdown */}
              <Select 
                value={sortOrder} 
                onValueChange={setSortOrder}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue>
                    <div className="flex items-center">
                      <ArrowDownUp size={16} className="mr-2" />
                      <span>Sort</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-4">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="all" 
                        checked={priceRange === "all"} 
                        onChange={() => setPriceRange("all")}
                        className="mr-2" 
                      />
                      All Prices
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="under-1000" 
                        checked={priceRange === "under-1000"} 
                        onChange={() => setPriceRange("under-1000")}
                        className="mr-2" 
                      />
                      Under ₹1,000
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="1000-2000" 
                        checked={priceRange === "1000-2000"} 
                        onChange={() => setPriceRange("1000-2000")}
                        className="mr-2" 
                      />
                      ₹1,000 - ₹2,000
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="2000-3000" 
                        checked={priceRange === "2000-3000"} 
                        onChange={() => setPriceRange("2000-3000")}
                        className="mr-2" 
                      />
                      ₹2,000 - ₹3,000
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="over-3000" 
                        checked={priceRange === "over-3000"} 
                        onChange={() => setPriceRange("over-3000")}
                        className="mr-2" 
                      />
                      Over ₹3,000
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                    image={product.image}
                    isBestseller={product.isBestseller}
                    isNew={product.isNew}
                  />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No matching products found</h3>
                  <p className="text-gray-600">Try changing your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
