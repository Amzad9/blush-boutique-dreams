
import React from "react";
import SectionTitle from "../common/SectionTitle";
import CategoryCard from "../common/CategoryCard";

const categories = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "/new-arrivals",
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/best-sellers",
  },
  {
    id: "dresses",
    title: "Dresses",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "/dresses",
  },
  {
    id: "travel-sets",
    title: "Travel Sets",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    link: "/travel-sets",
  },
  {
    id: "coord-sets",
    title: "Co-ord Sets",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "/coord-sets",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-fashion-gray/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Shop by Category"
          subtitle="Discover our curated collections designed for every occasion"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
