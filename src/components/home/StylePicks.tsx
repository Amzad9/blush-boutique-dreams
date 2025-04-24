
import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const styleCategories = [
  {
    id: "shirts",
    title: "Shirts",
    description: "Versatile tops for any occasion",
    image: "https://images.pexels.com/photos/18255682/pexels-photo-18255682.jpeg",
    background: "bg-fashion-mint",
    link: "/category/shirts",
  },
  {
    id: "coord-sets",
    title: "Co-ord Sets",
    description: "Matching sets for effortless style",
    image: "https://images.pexels.com/photos/9558760/pexels-photo-9558760.jpeg",
    background: "bg-fashion-pink",
    link: "/category/coord-sets",
  },
  {
    id: "travel-sets",
    title: "Travel Sets",
    description: "Comfort meets style for your journeys",
    image: "https://images.pexels.com/photos/17456897/pexels-photo-17456897.jpeg",
    background: "bg-fashion-blue",
    link: "/category/travel-sets",
  },
  {
    id: "dresses",
    title: "Dresses",
    description: "From casual to formal occasions",
    image: "https://images.pexels.com/photos/17215851/pexels-photo-17215851.jpeg",
    background: "bg-fashion-lavender",
    link: "/category/dresses",
  },
];

const StylePicks = () => {
  return (
    <section className="py-16 bg-fashion-gray/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Style Picks Just for You"
          subtitle="Handpicked selections to match your personal style"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styleCategories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="block group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${category.background} bg-opacity-20 p-6 h-full flex flex-col`}>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="mt-auto flex items-center text-primary-foreground font-medium text-sm">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylePicks;
