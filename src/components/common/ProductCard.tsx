
import React from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  salePrice,
  image,
  isBestseller,
  isNew,
}) => {
  return (
    <div className="product-card">
      {/* Tags */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isBestseller && (
          <span className="bg-fashion-coral text-white text-xs py-1 px-2 rounded-sm">
            Bestseller
          </span>
        )}
        {isNew && (
          <span className="bg-fashion-mint text-primary-foreground text-xs py-1 px-2 rounded-sm">
            New
          </span>
        )}
        {salePrice && (
          <span className="bg-fashion-pink text-primary-foreground text-xs py-1 px-2 rounded-sm">
            Sale
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-sm hover:bg-primary transition-colors">
        <Heart size={16} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden pt-[125%]">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-sm">{name}</h3>
          <div className="flex items-center mt-1">
            {salePrice ? (
              <>
                <span className="text-primary-foreground font-medium">₹{salePrice}</span>
                <span className="ml-2 text-gray-400 line-through text-sm">₹{price}</span>
              </>
            ) : (
              <span className="font-medium">₹{price}</span>
            )}
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-md border-fashion-pink hover:bg-fashion-pink hover:text-primary-foreground"
          >
            <Eye size={16} className="mr-1" /> Quick View
          </Button>
          <Button 
            size="sm" 
            className="rounded-md bg-fashion-pink hover:bg-primary-foreground text-primary-foreground hover:text-white"
          >
            <ShoppingBag size={16} className="mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
