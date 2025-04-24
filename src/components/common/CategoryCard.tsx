
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <Link to={link} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white font-serif text-xl font-medium">
            {title}
          </h3>
          <div className="flex items-center text-white mt-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm mr-2">Shop Now</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
